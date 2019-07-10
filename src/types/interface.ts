import { MongoConnect } from '../lib/database/MongoConnect';
import { InsertOneWriteOpResult } from 'mongodb';

export interface App {
    database: MongoConnect['db'];
}

export interface Methods {
    createOne: () => Promise<InsertOneWriteOpResult>;
}
