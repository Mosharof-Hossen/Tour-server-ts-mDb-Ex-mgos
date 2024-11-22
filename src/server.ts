import mongoose from 'mongoose';
import app from './app';
import config from './config/index';

async function server() {
    try {
        await mongoose.connect(config.database_url as string);

        app.listen(config.port, () => {
            console.log(`Server is running on ${config.port}`);
        });
    } catch (err) {
        console.log(err);
    }
}

server();
