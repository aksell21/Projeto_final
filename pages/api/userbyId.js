import { getSessionByToken } from "./data/session";

export default async function (req,res){
    if(req.method === "GET" ){
        const token = req.header("authorization")
        const id = req.params.id
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
    }
}