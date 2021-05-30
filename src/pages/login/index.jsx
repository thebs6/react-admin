import React, { Component } from 'react'
import "./login.less";
import logo from './images/logo.jpg';
export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"></img>
                </header>

                <section className="login-content"></section>
            </div>
        )
    }
}
