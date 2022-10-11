import   { getMongoCollection } from "./db"

const DATABASE = "Project_final"
const USER_COLLECTION = 'users'

export async function getUserByEmail(email) {
    const collection = await getMongoCollection(DATABASE, USER_COLLECTION)
    const result = await collection.findOne({ email })
    return result
}
export async function getUserById(userId) {
    const collection = await getMongoCollection(DATABASE, USER_COLLECTION)
    const result = await collection.findOne({ _id: userId })
    return result
}

export async function addUser(user) {
    const collection = await getMongoCollection(DATABASE, USER_COLLECTION)
    const result = await collection.insertOne(user)
    return result.insertedId
}



module.exports = {
    getUserByEmail,
    addUser,
    getUserById
}