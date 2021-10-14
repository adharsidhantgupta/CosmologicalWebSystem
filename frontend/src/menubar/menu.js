import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Styles from "./menu.module.css";

import Extraterrestial from "../extraterrestial/et_1";
import Exoplanet from "../exoplanet/exo_1";
import Nebula from "../nebula/neb_1";
import SolarSystem from "../solarsystem/sol_1";
import Law from "../laws/law_1";
import Upcoming from "../upcoming/up_1";
import FIntro from "../forum/intro";
import FLogin from "../forum/login";
import FSignup from "../forum/signup";
import Dashboard from "../forum/dashboard";

import Sidebar from './sidebar';
import {Provider} from '../context';
export default class Menu extends Component {
    state={
        page: <Sidebar/>,
        loggedin: false,
        r_username: ""
    }

    handleClickContext = (e) =>{
        console.log(e.target.id);
        if(e.target.id === "et")
        {
            console.log("in extraterrestial");
            this.setState({page: <Extraterrestial/>});
        }
        else if(e.target.id === "exo")
        {
            this.setState({page: <Exoplanet/>});
        }
        else if(e.target.id === "neb")
        {
            this.setState({page: <Nebula/>})
        }
        else if(e.target.id === "sol")
        {
            this.setState({page: <SolarSystem/>})
        }
        else if(e.target.id === "law")
        {
            this.setState({page: <Law/>});
        }
        else if(e.target.id === "up")
        {
            this.setState({page: <Upcoming/>});
        }
        else if(e.target.id === "forum")
        {
            if(this.state.loggedin === true)
            {
                this.setState({page: <Dashboard/>});
            }
            else
            {
                this.setState({page: <FIntro/>});
            }
        }
        else if(e.target.id === "login")
        {
            this.setState({page: <FLogin/>})
        }
        else if(e.target.id === "signup")
        {
            this.setState({page: <FSignup/>})
        }
        else
        {
            this.setState({page: <Sidebar/>})
        }
    }

    handle_login = (username) =>{
        this.setState({r_username: username})
        this.setState({loggedin: true});
        this.setState({page: <Dashboard/>});
    }
    handle_logout = () =>{
        this.setState({loggedin: false});
        this.setState({page: <FLogin/>});
    }

    render() {
        const contextValue={
            link: this.handleClickContext,
            loggedin: this.handle_login,
            loggedout: this.handle_logout,
            r_username: this.state.r_username
        }
        return (
          <>
          <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <span class="navbar-brand h6">
                        <i class="fas fa-globe mr-lg-5">UOWebS</i>
                    </span>
                    <ul class="navbar-nav">
                        <li class="nav-item"><a href="#h" id="home" class="nav-link" onClick={this.handleClickContext}><i class="fas fa-home">Home</i></a></li>
                        <li class="nav-item"><a href="#h" id="et" class="nav-link" onClick={this.handleClickContext}>Extraterrestial</a></li>
                        <li class="nav-item"><a href="#e" id="exo" class="nav-link" onClick={this.handleClickContext}>Exo Catalog</a></li>
                        <li class="nav-item"><a href="#g" id="neb" class="nav-link" onClick={this.handleClickContext}>Nebula Catalog</a></li>
                        <li class="nav-item"><a href="#h" id="sol" class="nav-link" onClick={this.handleClickContext}>Solar System</a></li>
                        <li class="nav-item"><a href="#i" id="law" class="nav-link" onClick={this.hansdleClickContext}>Laws of Universe</a></li>
                        <li class="nav-item"><a href="#j" id="up" class="nav-link" onClick={this.handleClickContext}>Upcoming</a></li>
                        <li class="nav-item"><a href="#k" id="forum" class="nav-link" onClick={this.handleClickContext}>Our Forum</a></li>
                    </ul>
                    <form class="form-inline ml-lg-4">
                        <input class="form-control mr-lg-2 " type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success ml-lg-2 btn-sm" type="submit"><i class="fas fa-search"></i></button>
                    </form>
                    {
                    this.state.loggedin?
                    <div>
                        <ul class="navbar-nav ml-lg-auto">
                        <li class="nav-item"><p  class="text-middle align-middle mx-lg-2">{this.state.r_username}</p></li>
                        <li class="nav-item"><button type="button" id="logout" class="btn btn-primary ml-lg-3" onClick={this.handle_logout}>Logout</button></li>
                        </ul>
                    </div>
                    :
                    <ul class="navbar-nav ml-lg-auto">
                    <li class="nav-item"><button type="button" id="login" class="btn btn-success" onClick={this.handleClickContext}>Login</button></li>
                    <li class="nav-item"><button type="button" id="signup" class="btn btn-primary ml-lg-3" onClick={this.handleClickContext}>Signup</button></li>
                    </ul>
                    }
                    </nav>
                </div>
            </div>
            <Provider value={contextValue}>
            {this.state.page}
            </Provider>
        </div>
          </>
        );
    }
}
