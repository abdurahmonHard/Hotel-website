import React, { useState } from 'react'
import "./Contact.css"

const ContactFrom = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [company, setCompany] = useState('')
    const [message, setMessage] = useState('')
    



    const [allValue, setAllValue] = useState([])
    const formSubmit = (e)=>{
        e.preventDefault()
        const newValue = {fname, lname, phone, email, subject, company, message}
        setAllValue([...allValue, newValue])
        setFname('')
        setLname('')
        setPhone('')
        setEmail('')
        setSubject('')
        setCompany('')
        setMessage('')
    }
    return (
        <>
            <section className='contact mtop'>
                <div className='container flex'>
                    <div className='main-content'>
                        <h2>Contact From</h2>
                        <p>Fill out the from below , we will get back you soon</p>

                        <form onSubmit={formSubmit}>
                            <div className='grid1'>
                                <div className='input'>
                                    <span>
                                        First Name <label>*</label>
                                    </span>
                                    <input type='text' name="fname" value={fname} onChange={(e)=> setFname(e.target.value)}/>
                                </div>
                                <div className='input'>
                                    <span>
                                        Last Name <label>*</label>
                                    </span>
                                    <input type='text' name="lname" value={lname} onChange={(e)=> setLname(e.target.value)}/>
                                </div>
                                <div className='input'>
                                    <span>
                                        Phone Namber <label>*</label>
                                    </span>
                                    <input type='number' name="phone" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                                </div>
                                <div className='input'>
                                    <span>
                                        Email <label>*</label>
                                    </span>
                                    <input type='email' name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                                </div>
                                <div className='input'>
                                    <span> Subject </span>
                                    <input type='text' name="subject" value={subject} onChange={(e)=> setSubject(e.target.value)}/>
                                </div>
                                <div className='input'>
                                    <span> Your Company </span>
                                    <input type='text' name="company" value={company} onChange={(e)=> setCompany(e.target.value)}/>
                                </div>
                            </div>
                            <div className='input inputlast'>
                                    <span>
                                        Write Your Message <label>*</label>
                                    </span>
                                    <textarea name="message" value={message} cols='30' rows='10' onChange={(e)=> setMessage(e.target.value)}></textarea>
                                </div>
                            <button className='primary-btn'>Submit Now</button>
                        </form>
                    </div>

                    <div className='side-content'>
                        <h3>Visit our location</h3>
                        <p>lorem ipsum dolor solut facere. Rerum illo, dignissimos dicta quia minima animi vero labore? dignissimos dicta quia minima animi vero labore</p>
                        <br />
                        <h3>Message Us</h3>
                        <span>info@example.com</span>
                        <br />
                        <span>+012 456 7898</span>
                        <br />
                        <div className='icon'>
                            <h3>Follow Us</h3>
                            <div className='flex_space'>
                                <ul>
                                    <li><a href='https://www.facebook.com/abduraxmon.usmonov.754?mibextid=ZbWKwL'><i className='fab fa-facebook'></i> </a></li>
                                    <li><a href='#'><i className='fab fa-twitter'></i> </a></li>
                                    <li><a href='#'><i className='fab fa-linkedin'></i> </a></li>
                                    <li><a href='https://www.instagram.com/abduraxmon.usmonov.754/'><i className='fab fa-instagram'></i> </a></li>
                                    <li><a href='#'><i className='fab fa-pinterest'></i> </a></li>
                                    <li><a href='#'><i className='fab fa-youtube'></i> </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactFrom;
















