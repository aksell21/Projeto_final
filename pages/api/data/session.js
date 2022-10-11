import { ObjectId } from "mongodb";
import{ generateToken } from "../services/common"
import { getMongoCollection } from "./db"

const DATABASE = "Project_final"
const SESSION_COLLECTION = 'sessions'

export async function addSession(userId) {
    const collection = await getMongoCollection(DATABASE, SESSION_COLLECTION)
    const result = await collection.insertOne({userId})
    return result.insertedId
}

export async function getSessionByToken(token) {
    const collection = await getMongoCollection(DATABASE, SESSION_COLLECTION)
    const result = await collection.findOne({ _id: new ObjectId(token) })
    return result
}


