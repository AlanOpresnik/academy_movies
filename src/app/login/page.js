'use client'
import React from 'react'
import { signIn, useSession } from 'next-auth/react'

const page = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const session = useSession()
    console.log(session)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await signIn('credentials', {
            email,
            password,
            redirect: false,
        })
        console.log(res)
    }

    return (
        <form className='mt-32' onSubmit={handleSubmit}>
            <input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="contraseña" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Iniciar sesión</button>
        </form>
    )
}

export default page