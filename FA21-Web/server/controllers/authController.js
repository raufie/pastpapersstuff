const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../model/User")
//JWT key STRICTLY FOR EXAM purpose. to ease the setting up of auth
const JWTKEY = "12345678"
//

const verifyUser = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token")
        if (!token) {
            res.status(401).json({ message: "no token" })
        } else {
            //verify
            const result = await jwt.verify(token, JWTKEY)
            const dbUser = await User.findOne({ _id: result._id })
            if (dbUser) {
                req.verifiedUser = result
                next()
            } else {
                res.status(401).json({ message: "user not found" })
            }
        }

    } catch (e) {
        res.status(400).json({ message: "invalid token" })

    }
}

const signInUser = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })
        if (!user) {
            res.status(400).json({ message: "user not found" })
        } else {
            const match = User.findOne({ username: username })
            if (!match) {
                res.status(400).json({ message: "invalid password" })
            } else {
                const token = jwt.sign({ _id: user._id }, JWTKEY)
                res.status(200).json({ message: "logged in", token })
            }
        }
    } catch (e) {
        console.log(e)
        res.status(400).json(e)
    }
}
const createUser = async (req, res) => {
    try {
        let { username, password } = req.body
        const user = await User.create({
            username,
            password
        })

        res.status(200).json(user)

    } catch (e) {
        res.status(400).json({ message: "error creating user" })
    }
}
const verifyClient = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token")
        if (!token) {
            res.status(401).json({ message: "no token" })
        } else {
            //verify
            const result = await jwt.verify(token, JWTKEY)
            const dbUser = await User.findOne({ _id: result._id })
            if (dbUser) {
                req.verifiedUser = result
                res.status(200).json(dbUser)
            } else {
                res.status(401).json({ message: "user not found" })
            }
        }

    } catch (e) {
        res.status(400).json({ message: "invalid token" })

    }
}
exports.createUser = createUser
exports.signInUser = signInUser
exports.verifyUser = verifyUser
exports.verifyClient = verifyClient