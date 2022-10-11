// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import express from "express"
import { ObjectId } from "mongodb"
import { addSession, getSessionByToken } from "./data/sessions"
import { addUser, getUserByEmail, getUserById } from "./data/users"
import { validateFields } from "./services/validations"
const app = express()
const PORT = process.env.PORT ?? 3030

app.use(express.json())

app.post("/signup", async (req, res) => {
    const {
        email,
        password,
        passwordConfirmation,
        acceptsTerms,
        acceptsCommunications
    } = req.body

    const validation = await validateFields(req.body)
    if (validation.success) {
        const id = await addUser({
            email,
            password,
            passwordConfirmation,
            acceptsTerms,
            acceptsCommunications
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
})

app.post("/login", async (req, res) => {
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

    const token = await addSession(user._id)
    res.status(200)
        .json({ token })
})

app.get("/user", async (req, res) => {
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
            email: user.email,
            acceptsTerms: user.acceptsTerms,
            acceptsCommunications: user.acceptsCommunications
        })
})

app.get("/user/:id", async (req, res) => {
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

    // const user = await getUserById(session.userId)
    res.status(200)
        .json({
            sameUser: session.userId.toHexString() == id
        })
})


app.listen(
    PORT,
    () => console.log("À escuta na porta " + PORT)
)