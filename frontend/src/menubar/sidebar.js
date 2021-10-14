import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import pic1 from "./../images/react.png";
import pic2 from "./../images/nodejs.png";
import pic3 from "./../images/express.png";
import pic4 from "./../images/mongodb.png";
import saturn from "./../images/saturn_logo.png";
import Cards from './cards';



export default class Sidebar extends Component {

    state2 = {
        arr: ["React Js","Node js","Express js","Mongo Db"],
        description: ["lkjdafsjkaslfjddasfasdf","dsafasfdasfdasdf","dasfadsfasfdafsd","dasfasdfasfdadfs"],
        path: [pic1,pic2,pic3,pic4]
    }

    state = {
        text: this.state2.arr[0],
        path: this.state2.path[0],
        des: this.state2.description[0]
    }

    handleClick = (e) =>{
        e.preventDefault();
        if(e.target.id === 'node')
        {
            this.setState({path: this.state2.path[1],text: this.state2.arr[1],des: this.state2.description[1]});
        }
        else if(e.target.id === 'express')
        {
            this.setState({path: this.state2.path[2],text: this.state2.arr[2],des: this.state2.description[2]});
        }
        else if(e.target.id === 'mongodb')
        {
            this.setState({path: this.state2.path[3],text: this.state2.arr[3],des: this.state2.description[3]});
        }
        else
        {
            this.setState({path: this.state2.path[0],text: this.state2.arr[0],des: this.state2.description[0]});
        }
    }

    render() {
        return(
            <>
            <div class="row mt-lg-2">
                <div class="col-lg-12">
                    <h3 class="d-flex justify-content-center">This Web Application is Built with MERN</h3>
                </div>
            </div>
            <div class="row mt-lg-3">
                <div class="col-lg-2">
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a href="#v-pills-home" class="nav-link active" id="react" data-toggle="pill" role="tab" onClick={this.handleClick}>React Js</a>
                        <a href="#v-pills-about" class="nav-link " id="node" data-toggle="pill " role="tab" onClick={this.handleClick}>Node JS</a>
                        <a href="#v-pills-contact" class="nav-link " id="express" data-toggle="pill" role="tab"  onClick={this.handleClick}>Express JS</a>
                        <a href="#v-pills-contact" class="nav-link " id="mongodb" data-toggle="pill" role="tab"  onClick={this.handleClick}>Mongoodb</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="media">
                            <img src={this.state.path} width={150} height={150} class="mr-3" alt="..."/>
                            <div class="media-body">
                                <h5 class="ml-4">{this.state.text}</h5>
                                <p class="ml-5">{this.state.des}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="d-flex justify-content-center">
                        <img src={saturn} width={300} height={150} class="mr-3" alt="..."/>
                    </div>
                </div>
            </div>
            <Cards/>
            </>
        );
    }
}