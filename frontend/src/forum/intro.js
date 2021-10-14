import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import pic_forum from "../images/forum.jpg";
import {MyContext} from '../context';

export default class FIntro extends Component{
    static contextType = MyContext;
    render(){
        return(
            <>
            <div class="row mt-lg-2">
                <div class="col-lg-12">
                    <div class="d-flex justify-content-center">
                        <img src={pic_forum} style={{width: "25rem",height: "13rem"}} class="mr-3" alt="..."/>
                    </div>
                </div>
            </div>
            <div class="row mt-lg-2">
                <div class="col-lg-2"></div>
                <div class="col-lg-8 text-center">
                    <h2 class="border border-dark rounded-pill"> Discuss With Us your Ideas and Imagination about the Cosmos </h2>
                </div>
                <div class="col-lg-2"></div>
            </div>
            <div class="row mt-lg-4 mt-lg-4">
                <div class="col-lg-6">
                    <h3 class="text-success text-center"> Already Have a Account! </h3>
                    <div class="d-lg-block text-center">
                    <a href="#" id="login" class="text-info" onClick={this.context.link}> Login</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <h3 class="text-warning text-center"> If Not then Create One! </h3>
                    <div class="d-lg-block text-center">
                    <a href="#" id="signup" class="text-info" onClick={this.context.link}> Signup</a>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
