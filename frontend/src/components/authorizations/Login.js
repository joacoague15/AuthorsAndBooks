import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            username: this.username,
            password: this.password
        }

        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, data).then(
            res => {
                sessionStorage.setItem('token', res.data.token);
            }
        ).catch(err => {
            console.log(err)
        })
    };
    
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <h3>Login</h3>
                    <div className='form-group'>
                        <label>Username</label>
                        <input type='text' className='form-control' onChange={e => this.username = e.target.value} placeholder='Jorge Luis Borges'/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' className='form-control' onChange={e => this.password = e.target.value} placeholder='funeselmemorioso'/>
                    </div>
                    <button className='btn btn-primary btn-block mt-3'>Login</button>
                </form>
            </div>
        )
    }
}
