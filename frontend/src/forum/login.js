import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from 'axios';

import {MyContext} from '../context';
import Background from "../images/login_background.jpg";

var sectionStyle = {
  width: "100%",
  height: "670px",
  backgroundImage: `url(${Background})`
};


export default class FLogin extends Component{

    static contextType = MyContext;
    state={
        email: "",
        password: "",
        username: "",
        country: "",
        is_valid: "f",
        v_error: ""
    }

    servercontact= () =>{
        console.log("inside servercontact");

        axios.post('http://localhost:4000/project/Newuser/login',
        {
                email: this.state.email,
                password: this.state.password
        })
        .then(response=>{
            if(response.data.status === false)
            {
                var local = response.data.message;
                alert(local);
                this.setState({v_error: local});
            
            }
            else
            {
                this.setState({username: response.data.result.username});
                console.log(this.state.username);
                this.setState({is_valid: "t"});
            }
        })
        .catch(error=>{
            console.log(error);

        });

    }

    handlechange = (e) =>{
        this.setState({[e.target.name] :e.target.value});
    }

    handleSubmit = (e) =>{
        alert("Form is been submitted");
        this.servercontact();
        e.preventDefault();

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
                
                    <div class="d-flex justify-content-center h-100 mt-lg-5">
                        <div class="card mt-lg-5" style={{height: "22rem"}}>
                            <div class="card-header">
                                <h5 class="justify-content-center alert alert-primary text-danger">{this.state.v_error}</h5>
                                <h3>Sign In</h3>
                                <div class="d-flex justify-content-end">
                                    <span><i class="fab fa-facebook-square fa-2x"></i></span>
                                    <span><i class="fab fa-google-plus-square fa-2x"></i></span>
                                    <span><i class="fab fa-twitter-square fa-2x"></i></span>
                                </div>
                            </div>
                            <div class="card-body">
                                <form onSubmit= {this.handleSubmit}>
                                    <div class="input-group form-group">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                        <input type="email" class="form-control" name="email" placeholder="email" onChange={this.handlechange}/>
                                    </div>
                                    <div class="input-group form-group">
                                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                                        <input type="password" class="form-control" name="password" placeholder="password" onChange={this.handlechange}/>
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" value="Login" class="btn float-right login_btn"/>
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