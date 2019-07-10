import { Methods } from "../../types/interface";
import { Collection } from "mongodb";

export default (collection: Collection): Methods => ({
    createOne: async () => {
        console.log(collection)

        return await collection.insertOne({
            name: 'Thaddeus',
            age: 29
        });
    }
})
