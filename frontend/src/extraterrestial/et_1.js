import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

export default class Extraterrestial extends Component{
    render(){
        return(
            <>
            <div class="row flex-lg-nowrap">
                <div class="col-lg-3 bd-sidebar">
                    <div class="nav flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a href="#" class="nav-link active border border-primary" id="#" data-toggle="pill" role="tab"><i class="fas fa-sun">  The Sun</i></a>

                        <div className="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle border border-secondary mt-lg-1" data-toggle="dropdown"><i class="fas fa-globe-americas">  Planets</i></a>

                            <div >
                                <a href="#" class="dropdown-item border border-secondary">Mercury</a>
                                <a href="#" class="dropdown-item border border-secondary">Venus</a>
                                <a href="#" class="dropdown-item border border-secondary">Earth</a>
                                <a href="#" class="dropdown-item border border-secondary">Mars</a>
                                <a href="#" class="dropdown-item border border-secondary">Jupiter</a>
                                <a href="#" class="dropdown-item border border-secondary">Saturn</a>
                                <a href="#" class="dropdown-item border border-secondary">Uranus</a>
                                <a href="#" class="dropdown-item border border-secondary ">Neptune</a>             
                            </div>
                        </div>

                        <div className="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle border border-info mt-lg-1" data-toggle="dropdown"><i class="far fa-moon">  Moons</i></a>

                            <div >
                                <a href="#" class="dropdown-item border border-info">Luna</a>
                                <a href="#" class="dropdown-item border border-info">Phobos</a>
                                <a href="#" class="dropdown-item border border-info">Deimos</a>
                                <a href="#" class="dropdown-item border border-info">Europa</a>
                                <a href="#" class="dropdown-item border border-info">IO</a>
                                <a href="#" class="dropdown-item border border-info">Ganymede</a>
                                <a href="#" class="dropdown-item border border-info">Titan</a>
                                <a href="#" class="dropdown-item border border-info ">Enceladus</a>
                                <a href="#" class="dropdown-item border border-info ">Umbriel</a>
                                <a href="#" class="dropdown-item border border-info ">Miranda</a>
                                <a href="#" class="dropdown-item border border-info ">Triton</a>                
                            </div>
                        </div>

                    </div>
                </div>

                <div class="col-lg-6">
                </div>

                <div class="col-lg-3 bd-sidebar">
                    <div class="nav flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                        <div className="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle border border-secondary mt-lg-1" data-toggle="dropdown">Dwarf Planets</a>

                            <div >
                                <a href="#" class="dropdown-item border border-secondary">Pluto</a>
                                <a href="#" class="dropdown-item border border-secondary">Ceres</a>
                                <a href="#" class="dropdown-item border border-secondary">Eris</a>
                                <a href="#" class="dropdown-item border border-secondary">Makemake</a>
                                <a href="#" class="dropdown-item border border-secondary">Sedna</a>             
                            </div>
                        </div>

                        <div className="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle border border-info mt-lg-1" data-toggle="dropdown"><i class="fas fa-meteor">  Asteroids And Comets</i></a>

                            <div >
                                <a href="#" class="dropdown-item border border-warning">Hailey's Comet</a>
                                <a href="#" class="dropdown-item border border-warning">Swan</a>
                                <a href="#" class="dropdown-item border border-warning">Atlas</a>
                                <a href="#" class="dropdown-item border border-warning">Vesta</a>               
                            </div>
                        </div>

                        <a href="#" class="nav-link border border-dark" id="#" >Asteroid belt</a>
                        <a href="#" class="nav-link border border-dark" id="#" >Kuiper belt</a>
                        <a href="#" class="nav-link border border-dark" id="#" >Oort Cloud</a>
                        <a href="#" class="nav-link border border-dark" id="#" >Oumuamua</a>

                    </div>
                </div>

             </div>
            </>
        )
    }
}