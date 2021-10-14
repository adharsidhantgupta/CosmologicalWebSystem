import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import card1 from "./../images/extraterrestial2.jpg";
import card2 from "./../images/exoplanets.jpg";
import card3 from "./../images/Nebula.jpg";
import card4 from "./../images/solarsystem.jpg";
import card5 from "./../images/laws.jpg";
import card6 from "./../images/upcoming.jpg";
import {MyContext} from '../context';

export default class Cards extends Component{
    static contextType = MyContext;
    render(){
        return(
            <div class="row mt-lg-5">
                <div class="col-lg-2">
                    <div class="card" style={{width: "14rem"}}>
                        <img src={card1} style={{width: "14rem",height: "12rem"}} class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                            <h5 class="card-title">Extra Terrestial Life</h5>
                            <p class="card-text">Explore  and broden your imagination on how can be life on other planets be look like </p>
                            <a href="#et" id="et" class="card-link" onClick={this.context.link} >Visit</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="card" style={{width: "14rem"}}>
                        <img src={card2} style={{width: "14rem",height: "12rem"}} class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                            <h5 class="card-title">Exoplanet Catalog</h5>
                            <p class="card-text">Explore beyound your solar system to know about the Cosmos of bizzare planets</p>
                            <a href="#exo" id="exo" class="card-link">Visit</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-2 ">
                    <div class="card" style={{width: "14rem"}}>
                        <img src={card3}  style={{width: "14rem",height: "12rem"}} class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                            <h5 class="card-title">Exotic Nebulas</h5>
                            <p class="card-text">Ever Imagine how our sun was born, Explore the cosmic Nursery of Stars </p>
                            <br/>
                            <a href="#neb" id="neb" class="card-link">Visit</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-2 ">
                    <div class="card" style={{width: "14rem"}}>
                        <img src={card4}  style={{width: "14rem",height: "12rem"}} class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                            <h5 class="card-title">Our Solar System</h5>
                            <p class="card-text">Explore and learn even more about the hidden and vast solar system. </p>
                            <br/>
                            <a href="#sol" id="sol" class="card-link" onClick={this.context.link}>Visit</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-2 ">
                    <div class="card" style={{width: "14rem"}}>
                        <img src={card5}  style={{width: "14rem",height: "12rem"}} class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                            <h5 class="card-title">Laws of Universe </h5>
                            <p class="card-text">Interested in Cosmos Give a chance to know about how it works. </p>
                            <br/>
                            <a href="#law" id="law" class="card-link">Visit</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-2 ">
                    <div class="card" style={{width: "14rem"}}>
                        <img src={card6}  style={{width: "14rem",height: "12rem"}} class="card-img-top" alt="..."/>
                        <div class="card-body text-center">
                            <h5 class="card-title">Upcoming Events</h5>
                            <p class="card-text">Keep Yourself Updated about the Upcoming projects and researches. </p>
                            <br/>
                            <a href="#up" id="up" class="card-link">Visit</a>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}