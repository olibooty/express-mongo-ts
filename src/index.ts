import app from './app';
import { MongoConnect } from './lib/database/MongoConnect';

(async (): Promise<void> => {
    const PORT: number = 1234;
    const URI: string = process.env.MONGO_URI || 'mongodb://localhost:27017';

    const mongo: MongoConnect = await new MongoConnect({
        uri: URI,
        databaseName: 'test',
    }).connectToDatabase();

    const application = await app({ database: mongo.db });

    application.listen(
        PORT,
        (): void => console.log(`app listening on ${ PORT }`)
    );
})();
