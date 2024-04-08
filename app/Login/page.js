
'use client'
import React, {useState} from 'react'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import Hdr from '../components/Hdr'
import './page.css'

const LoginPage = () => {

    const router = useRouter()

    const submitHandler = (event) => {
        event.preventDefault()
        router.push('/') //change once we make the 'logged in user screen'
    }

    return (
        <div>
            <Hdr />
            <form onSubmit={submitHandler}>
                <label>Username: </label>
                <input type="text"/>
                <br></br>
                <label>Password: </label>
                <input type="text"/>
                <br></br>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LoginPage