import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import {useState,useEffect} from "react";

import Background from "../images/signup_background.jpg";
import {MyContext} from '../context';

var sectionStyle = {
    width: "100%",
    height: "670px",
    backgroundImage: `url(${Background})`
  };



export default class FSignup extends Component{



    static contextType = MyContext;
    state={
        email: "",
        username: "",
        password: "",
        c_password: "",
        country: "",
        v_error: "",
        is_valid: "f"
    }

    servercontact = () => {
        console.log("inside servercontact");

        axios.post('http://localhost:4000/project/Newuser/createNew',
        {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            country: this.state.country
        })
        .then(response=>{
            console.log(response.data);
            if(response.data.status === false)
            {
                var local = response.data.message;
                alert(local);
                this.setState({v_error: local},() => {console.log('new state', this.state.v_error)});
            }
            else
            {
                var a_local = "t";
                this.setState({is_valid: a_local}, () => {console.log('new state', this.state.is_valid)});
            }
        })
        .catch(error=>{
            console.log(error);
        });
    }

    valid = () =>{
        if(this.state.password.length < 8)
        {
            this.setState({v_error: "Password is less than 8 characters"});
        }
        else if(this.state.password !== this.state.c_password)
        {
            this.setState({v_error: "Confirm password is not matching"});
        }
        else if(!this.state.email.includes('@'))
        {
            this.setState({v_error: "email is invalid"});
        }
        else
        {
            this.setState({v_error: ""});
            return true;
        }
    }

    handlechange = (e) =>{
        this.setState({[e.target.name] :e.target.value});
    }
    

    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.valid())
        {
            this.servercontact();
        }
    }

    render()
    {
        if(this.state.is_valid === "t")
        {
            console.log(this.state.v_error);
            console.log(this.state.is_valid);
            this.context.loggedin(this.state.username);
        }

        return(
            <div class="row" style={sectionStyle}>
                <div class="col-lg-12 mt-lg-5">
                    <div class="d-flex justify-content-center h-100 mt-lg-2">
                        <div class="card mt-lg-5" style={{height: "32rem"}}>
                            <div class="card-header">
                            <h5 class="justify-content-center alert alert-primary text-danger">{this.state.v_error}{this.state.is_valid}</h5>
                                <h3 class="text-center">Sign UP</h3>
                                <div class="d-flex justify-content-end">
                                    <span><i class="fab fa-facebook-square fa-2x"></i></span>
                                    <span><i class="fab fa-google-plus-square fa-2x"></i></span>
                                    <span><i class="fab fa-twitter-square fa-2x"></i></span>
                                </div>
                            </div>
                            <div class="card-body">
                                <form onSubmit= {this.handleSubmit}>
                                    <div class="input-group form-group">
                                        <input type="email" class="form-control" name="email" value={this.state.email} onChange={this.handlechange} placeholder="Email Id"/>
                                    </div>
                                    <div class="input-group form-group">
                                        <input type="text" class="form-control" name="username" value={this.state.username} onChange={this.handlechange}  placeholder="Choose User Name:"/>
                                    </div>
                                    <div class="input-group form-group">
                                        <input type="text" class="form-control" name="country" value={this.state.country} onChange={this.handlechange}  placeholder="Country:"/>
                                    </div>
                                    <div class="input-group form-group">
                                        <input type="password" class="form-control" name="password" value={this.state.password} onChange={this.handlechange}  placeholder="Choose password"/>
                                    </div>
                                    <div class="input-group form-group">
                                        <input type="password" class="form-control" name="c_password" value={this.state.c_password} onChange={this.handlechange}  placeholder="Confirm password"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" value="Signup" class="border border-success btn float-right login_btn" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}