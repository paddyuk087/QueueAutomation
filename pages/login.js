import React, { useState } from 'react'
import Nav from '../components/Nav'

export default function login() {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    return (
        <div>
            <Nav />
            <form className="container text-center border border-light p-5" action="#!">

                <p className="h4 mb-4">Sign in</p>

                <input 
                    type="email" 
                    id="defaultLoginFormEmail" 
                    className="form-control mb-4" 
                    placeholder="E-mail" 
                    onChange={(e)=>{setEmail(e.target.value)}}
                />

                <input 
                    type="password" 
                    id="defaultLoginFormPassword" 
                    className="form-control mb-4" 
                    placeholder="Password" 
                    onChange={(e)=>{setPass(e.target.value)}}
                />

                <div>
                    <button 
                        className="btn btn-info btn-block my-4" 
                        type="submit"
                        onClick={}
                    >
                        Sign in
                    </button>
                </div>
                <p>Not a member?
                    <a href="/signup">Register</a>
                </p>
            </form>
        </div>
    )
}