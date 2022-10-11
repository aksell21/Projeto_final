import { getUserByEmail } from "../data/users";

export async function checkIfEmailExists(email) {
    const user = await getUserByEmail(email)
    return user !== null
}

