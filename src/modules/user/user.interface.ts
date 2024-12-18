export type TUser = {
    name: string;
    age: number;
    email: string;
    password: string;
    photo: string;
    role: 'user' | 'admin';
    userStatus: 'active' | 'inactive';
};
