import {MongoClient, ObjectId} from 'mongodb'
const URL = process.env.MONGO_URL ?? 'mongodb://localhost:3030';
let client

const DATABASE = "Project_final"
const USER_COLLECTION = 'users'
const SESSION_COLLECTION = 'sessions'

export async function connectToMongo() {
    try {
        if (!client) {
            client = await MongoClient.connect(URL)
        }
        return client;
    } catch (err) {
        console.log(err)
    }
}

export async function getMongoCollection(dbName, collectionName) {
    const client = await connectToMongo()
    return client.db(dbName).collection(collectionName)
}

export async function dropCollections() {
    const client = await connectToMongo()
    await client.db(DATABASE).collection(USER_COLLECTION).drop()
    await client.db(DATABASE).collection(SESSION_COLLECTION).drop()
    client.close()
}

