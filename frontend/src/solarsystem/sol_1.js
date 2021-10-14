import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import {DefaultStyle} from './styles'
import SolarItems from './solar_items';

export default class SolarSystem extends Component{

    state = {
        planet_dropdown: true,
        moon_dropdown: true,
        dwarf_dropdown: true,
        asteroid_dropdown: true,
        details_object: 'earth',
    }

    drop_down_handler = (e) => {
        e.stopPropagation();
        console.log(e.target.getAttribute('name'));
        if(e.target.getAttribute('name') === 'planet-dropdown')
        {
            this.setState( (prev_state) => {
                return {...prev_state, planet_dropdown: !prev_state.planet_dropdown}
            });
        }
        else if(e.target.getAttribute('name') === 'moon-dropdown')
        {
            this.setState( (prev_state) => {
                return {...prev_state, moon_dropdown: !prev_state.moon_dropdown}
            });
        }
        else if(e.target.getAttribute('name') === 'dwarf-dropdown')
        {
            this.setState( (prev_state) => {
                return {...prev_state, dwarf_dropdown: !prev_state.dwarf_dropdown}
            });
        }
        else if(e.target.getAttribute('name') === 'asteroid-dropdown')
        {
            this.setState( (prev_state) => {
                return {...prev_state, asteroid_dropdown: !prev_state.asteroid_dropdown}
            });
        }
    }

    handle_change_object = (e) => {
        const clicked_is = e.target.innerHTML;
        this.setState({
            details_object: clicked_is
        })
        e.stopPropagation();
    }

    handle_change_link = (e,obj) => {
        this.setState({
            details_object: obj
        })
    }


    render(){
        return(
            <DefaultStyle planet_dropdown={this.state.planet_dropdown} moon_dropdown={this.state.moon_dropdown} dwarf_dropdown={this.state.dwarf_dropdown} asteroid_dropdown={this.state.asteroid_dropdown}>
            <div class="row flex-lg-nowrap">
                <div class="col-lg-3 bd-sidebar">
                    <div class="nav flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a href="#" class="nav-link active border border-primary" id="#" data-toggle="pill" role="tab"><i class="fas fa-sun" onClick={(e) => this.handle_change_link(e,'Sun')}>  The Sun</i></a>

                        <div className="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle border border-secondary mt-lg-1" data-toggle="dropdown" name="planet-dropdown" onClick={this.drop_down_handler}><i class="fas fa-globe-americas">  Planets</i></a>

                            <div className="planet-dropdown" onClick={this.handle_change_object}>
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

                        <div className="nav-item dropdown" onClick={this.handle_change_object}>
                            <a href="#" class="nav-link dropdown-toggle border border-info mt-lg-1" data-toggle="dropdown" name="moon-dropdown" onClick={this.drop_down_handler}><i class="far fa-moon">  Moons</i></a>

                            <div className="moon-dropdown">
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
                    <SolarItems clicked={this.state.details_object} changeObject={this.handle_change_link}/>
                </div>

                <div class="col-lg-3 bd-sidebar">
                    <div class="nav flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                        <div className="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle border border-secondary mt-lg-1" data-toggle="dropdown" name="dwarf-dropdown" onClick={this.drop_down_handler}>Dwarf Planets</a>

                            <div className="dwarf-dropdown" onClick={this.handle_change_object}>
                                <a href="#" class="dropdown-item border border-secondary">Pluto</a>
                                <a href="#" class="dropdown-item border border-secondary">Ceres</a>
                                <a href="#" class="dropdown-item border border-secondary">Eris</a>
                                <a href="#" class="dropdown-item border border-secondary">Makemake</a>
                                <a href="#" class="dropdown-item border border-secondary">Sedna</a>             
                            </div>
                        </div>

                        <div className="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle border border-info mt-lg-1" data-toggle="dropdown" name="asteroid-dropdown" onClick={this.drop_down_handler}><i class="fas fa-meteor">  Asteroids And Comets</i></a>

                            <div className="asteroid-dropdown" onClick={this.handle_change_object}>
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
            </DefaultStyle>
        )
    }
}