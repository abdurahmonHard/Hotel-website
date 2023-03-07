import React, {useState} from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import './design.css'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    
    const [allValue, setAllValue] = useState([])
    const formSubmit = (e)=>{
        e.preventDefault()
        const newValue = {email, password,}
        setAllValue([...allValue,newValue])
        setEmail('')
        setPassword('')
    }
    
  return (
    <>
        <HeadTitle />
        <section className='forms top'>
            <div className='container'>
                <div className='sign-box'>
                    <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
                    <form onSubmit={formSubmit}>
                        <input type='text' name="email" value={email} placeholder='Email' onChange={(e)=> setEmail(e.target.value)} />
                        <input type='password' name="password" value={password} placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />

                        <div className='flex_space'>
                            <div className='flex'>
                                <input type='checkbox'/>
                                <label>Rember Me</label>
                            </div>
                            <div className='flex'>
                                <span>I forgot my password</span>
                            </div>
                            </div>
                            <button type='submit' className='primary-btn'>
                                Sign In
                            </button>
                            <p>
                                Dont have account? <Link to='/register'>Sign up</Link>
                            </p>
                        
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default Login






















