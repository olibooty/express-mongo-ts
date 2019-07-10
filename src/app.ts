import express from 'express';
import methods from './lib/database/dbMethods';
import routes from './routes';
import TYPES from './types';
import { App } from './types/interface';

export default async ({ database }: App): Promise<express.Application> => {
    const app: express.Application = express();

    app.use(
        routes(
            methods(database.collection(TYPES.collectionName))
        )
    );

    return app;
}
