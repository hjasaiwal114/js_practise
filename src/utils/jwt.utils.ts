import jwt from 'jsonwebtoken'
import config from 'config'

const privateKey = config.get<string>("privateKey")
const publicKey = config.get("publicKey")

export function signJwt((
    object: Object,
    options?: jwt.SignOptions | undefined
) {
    return jwt.sign(object, privateKey, {
        ...options,
    })
}

function verifyJwt(){

}