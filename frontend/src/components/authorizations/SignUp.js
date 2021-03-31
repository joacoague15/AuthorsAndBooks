import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class SignUp extends Component {

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            username: this.username,
            email: this.email,
            password: this.password
        };

        axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

    render() {
        return(
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign Up</h3>
                    <div className='form-group'>
                        <label>Username</label>
                        <input type='text' className='form-control' onChange={e => this.username = e.target.value} placeholder='Jorge Luis Borges'/>
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='email' className='form-control' onChange={e => this.email = e.target.value} placeholder='jborges@gmail.com'/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' className='form-control' onChange={e => this.password = e.target.value} placeholder='funeselmemorioso'/>
                    </div>
                    <button className='btn btn-primary btn-block mt-3'>Sign Up</button>
                </form>
            </div>
        )
    }
}
