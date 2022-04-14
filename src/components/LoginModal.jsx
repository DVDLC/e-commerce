import '../styles/loginModal.css'
import userPng from '../assets/user.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserLoginThunk } from '../redux/actions/login.actions'

function LoginModal({ loginBtn, setLoginBtn }){

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const state = useSelector( state => state ),
        dispatch = useDispatch(),
        userData =  JSON.parse( localStorage.getItem('user') ) 

    const login = e => {
        e.preventDefault()
        dispatch( UserLoginThunk( { email, password } ))
    }
     
    const logout = e => {
        e.preventDefault()
    }


    return(

        userData
        ?<div  className= {
            loginBtn
            ? "login-modal minimalist-scroll open "
            : "login-modal minimalist-scroll"
        }>
            <img className='user-avatar' src={ userPng } alt="" />
            <div className='user-info' >
                <b>{ userData.name }</b>
                <button 
                    onClick={ e => logout(e)}
                >Log out</button>
            </div>
        </div>
        
        :<div className={ 
                loginBtn
                ? "login-modal minimalist-scroll open "
                : "login-modal minimalist-scroll"
        }>
            <img className='user-avatar' src={ userPng } alt="" />
            <form className="login">
                <p className="login-message" >
                    You have to login to access to your cart :c
                </p>
                <div className="test-data" >
                    <strong>Test data</strong>
                    <div className="field" >
                        <i className="fa-brands fa-mailchimp"></i>
                        john@gmail.com
                    </div>
                    <div className="field" >
                        <i className="fa-solid fa-key"></i>
                        john1234
                    </div>
                </div>

                <div className='input-container' >
                    <label htmlFor='email'>Email</label>
                    <input 
                        onChange={ e => setEmail( e.target.value )}
                        value={ email }
                        type="email" 
                        id='email' 
                        name='email' 
                    />
                </div>
                <div className='input-container' >
                    <label htmlFor='password'>Password</label>
                    <input 
                        onChange={ e => setPassword( e.target.value ) }
                        value={ password }
                        type="password" 
                        id='password' 
                        name='password' />
                </div>
                <div 
                    style={ {
                        display: 
                        state.loginData.status !== 400 || state.loginData.status !== 404
                        ?'block'
                        :'none'
                    }}
                    className='error-message' >
                    { state.loginData.message}
                </div>
                <button 
                    onClick={ e => login(e) } 
                    className='submit-button' >Login</button>
                <div className='switch-forms' >
                    "Don't have an account?"
                    <button 
                        onClick={() => setLoginBtn( false )}
                        type='button' 
                    > Sign up </button>
                </div>
            </form>
        </div>
    )
}

export default LoginModal