
import { addUser } from "./data/users"
import { validateFields } from "./services/validations"


export default async function (req,res){
    if(req.method === "POST" ){
        const {
            user,
            email,
            password,
            passwordConfirmation,
            acceptsTerms,
           
        } = req.body
    console.log("Cheguei")
    
        const validation = await validateFields(req.body)
        if (validation.success) {
            const id = await addUser({
                user,
                email,
                password,
                passwordConfirmation,
                acceptsTerms,
            })
            res.status(201)
                .json({
                    "message": "Utilizador Criado com Sucesso!",
                    "_id": id
                })
        } else {
            res.status(400).json({
                "message": "Os dados introduzidos não são válidos.",
                "errors": validation.errors
            })
        }
    }
}