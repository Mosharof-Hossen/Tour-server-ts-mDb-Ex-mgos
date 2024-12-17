import { Query } from "mongoose";

class QueryBuilder<T> {
    public modelQuery: Query<T[], T>;
    public query: Record<string, unknown>;

    constructor(
        modelQuery: Query<T[], T>,
        query: Record<string, unknown>
    ) {
        this.modelQuery = modelQuery;
        this.query = query;
    }

    search(searchAbleFields: string[]) {
        const searchTerm = this.query?.searchTerm;
        if (searchTerm) {
            this.modelQuery = this.modelQuery.find({
                $or: searchAbleFields.map((field) => ({
                    [field]: { $regex: searchTerm, $options: 'i' }
                }))
            })
        }
        return this;
    }

    filter() {
        const queryObj = { ...this.query };
        const excludeFields = ['searchTerm', 'limit', 'page', 'sort', 'fields'];
        excludeFields.forEach((el) => delete queryObj[el]);
        this.modelQuery = this.modelQuery.find(queryObj);
        return this;
    }

    pagination() {
        const page = Number(this?.query?.page) || 1;
        const limit = Number(this?.query?.limit) || 10;
        const skip = (page - 1) * limit
        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this;
    }
    sort() {
        const sort = this.query?.sort || "createdAt";
        this.modelQuery = this.modelQuery.sort(sort as string);
        return this;
    }

    fields() {
        const fields = (this.query?.fields as string)?.split(',').join(" ") || "-__v";
        this.modelQuery = this.modelQuery.select(fields);
        return this;
    }




}

export default QueryBuilder;