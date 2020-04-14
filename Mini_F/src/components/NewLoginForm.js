import React, { useState } from 'react'
import * as firebase from 'firebase';
import '../App.css'


const NewLoginForm = (props) => {
    const { setLogin } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignUPFirebase = e => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password).then(data => {
            console.log(data);
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    const Login = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password).then(result => {
            setLogin(true)
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    console.log(email, password);
    const SIGNUP = (
        <div className="btp">
            <form>
                <p>SIGN-UP</p>
                <label>Email : </label>
                <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="field">
                    <label>Password : </label>
                    <input
                        className="input"
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div >
                <div>
                    <button className="btm" onClick={SignUPFirebase}> Sign up </button>
                </div>
            </form>
        </div>
    )
    const LOGIN = (
        <div className="btp">
            <form>
                <p>SIGN-IN</p>
                <label>Email : </label>
                <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="field">
                    <label>Password : </label>
                    <input
                        className="input"
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div >
                {/* {message ? <p className="help is-danger">{message}</p> : null} */}
                <div>
                    <button className="btm" onClick={Login}> Login </button>
                </div>
            </form>
        </div>
    )
    const [Display, setDisplay] = useState(false);
    return (
        <div className ="bg">
            <button className="btn" onClick={() => setDisplay(false)}>SIGN-UP</button>
            <button className="btr" onClick={() => setDisplay(true)}> SIGN-IN</button>
            {Display === false ? SIGNUP : LOGIN}

        </div>
    )
}
export default NewLoginForm;