// code by Samuel Lehman

import { hash } from 'bcrypt'

export const saltAndHash = async (password: string) => {
    const hashedPassword = await hash(password, 10).then((hash) => hash)
    return hashedPassword
}