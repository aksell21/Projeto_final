import { getUserByEmail } from "./data/sessions"


export default async function (req,res){
    if(req.method === "POST" ){
        const {
            email,
            password
        } = req.body
    
        const user = await getUserByEmail(email)
        if (!user) {
            return res
                .status(404)
                .json({
                    "message": "O utilizador não foi encontrado!"
                })
        }
        if (user.password !== password) {
            return res
                .status(401)
                .json({
                    "message": "A password introduzida é inválida!"
                })
    }
}
}