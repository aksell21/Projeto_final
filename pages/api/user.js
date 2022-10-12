
import { ObjectId } from "mongodb"
import { getUserById } from "./data/users";

export default async function (req,res){
    
   if(req.method === "GET"){
    const token = req.header("authorization")
    if (!token) {
        return res.status(401)
            .json({
                "message": "Não foi enviado o token de autenticação!"
            })
    }
    let session;
    if (ObjectId.isValid(token)) {
        session = await getSessionByToken(token)
    }
    if (!session) {
        return res.status(403)
            .json({
                "message": "Não existe nenhuma sessão com o token indicado!"
            })
    }

    const user = await getUserById(session.userId)
    res.status(200)
        .json({
            _id: user._id,
            user: user.user,
            email: user.email,
            acceptsTerms: user.acceptsTerms,
        })
   }
}