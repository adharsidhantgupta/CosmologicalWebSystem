import axios from "axios";
import React, { Component } from "react";
import {ItemStyles} from './styles';

export default class SolarItems extends Component{

    state = {
        api_id: 'earth',
        english_name: 'Earth',
        discovered_by: '',
        discovered_date: '',
        gravity: 9.8,
        mass: {
            massExponent: 24,
            massValue: 5.99
        },
        volume: {
            volValue: 1.08321,
            volExponent: 12
        },
        density: 5.5136,
        mean_radius: 6371.0084,
        avg_temp: 288,
        moons: [
            {
                moon: 'La Lune',
                rel: 'https://api.le-systeme-solaire.net/rest/bodies/lune'
            }
        ],

    }

    componentDidUpdate(prevprops, prevState){
        if(prevprops.clicked !== this.props.clicked)
        {
            this.setState({api_id: this.props.clicked},
                () => {
                    this.server_contact_api();
                }
                )
        }
    }

    server_contact_api = () => {
        const url = 'https://api.le-systeme-solaire.net/rest/bodies/' + this.state.api_id;
        console.log("the api is: ", url);
        axios.get(url)
        .then(response => {
            const res_data = response.data;
            console.log("the response data is: ", response.data);
            this.setState({ english_name: res_data.englishName, 
                            discovered_by: res_data.discoveredBy,
                            discovered_date: res_data.discoveryDate,
                            gravity: res_data.gravity,
                            mass: res_data.mass,
                            volume: res_data.vol,
                            density: res_data.density,
                            mean_radius: res_data.meanRadius,
                            avg_temp: res_data.avgTemp,
                            moons: res_data.moons
                            })

        })
        .catch(error=> {
            console.log(error);
        })
    }

    handle_redirect = (e,link) => {
        console.log("link is: ", link);
        const splitted = link.split('/')[5];
        this.props.changeObject(e,splitted);
        e.stopPropagation();
    }

    render(){
        console.log("the state finally is: ", this.state);
        const path = "images/celestial_bodies/" + this.state.api_id + ".jpg";
        console.log('path is: ', path);
        return(
            <ItemStyles>
                <div className="main-wrapper">
                    <div className="image-container">
                        <img src ={path} onError={(e)=>{e.target.onerror = null; e.target.src="images/celestial_bodies/common.jpg"}}/>
                    </div>
                    <div className="celestial-name">
                        <h2> {this.state.english_name}</h2>
                    </div>
               
                {
                    this.state.discovered_by !== ""?
                    (
                        <div className="discovered">
                            <img src = 'images/utils/discovery.png'/>
                            <div className="discovery-details">
                                <div className="details">
                                    <h4>Discovered by: </h4> 
                                    <h4>{this.state.discovered_by}</h4>
                                </div>
                                <div className="details">
                                    <h4>Discovered date: </h4> 
                                    <h4>{this.state.discovered_date}</h4>
                                </div>
                            </div>
                        </div>
                    ):null

                }
                    <div className="cel-data">
                        <div className="card">
                            <img src = 'images/utils/gravity.jpg'/>
                            <h4>Gravity</h4>
                            { this.state.gravity === 0 ?
                            (<p>Not Available</p>):
                            <h4>{this.state.gravity}</h4>}
                            <h4>m/s<sup>2</sup></h4>
                        </div>

                        <div className="card">
                            <img src = 'images/utils/mass.png'/>
                            <h4>Mass</h4>
                            <h4>{this.state.mass.massValue} x 10 <sup>{this.state.mass.massExponent}</sup> </h4>
                            <h4>Kg</h4>
                        </div>

                        <div className="card">
                            <img src = 'images/utils/density.jpg'/>
                            <h4>Density</h4>
                            {
                                this.state.density === 1?
                                <p>Not Available</p>:
                                <h4>{this.state.density}</h4>
                            }
                            <h4>kg/m<sup>3</sup></h4>
                        </div>

                        <div className="card">
                            <img src = 'images/utils/volume.png'/>
                            <h4>Volume</h4>
                            {
                                this.state.volume.volValue === 0?
                                <p>Not Available</p>:
                                <h4>{this.state.volume.volValue} x 10 <sup>{this.state.volume.volExponent}</sup> </h4>
                            }
                            <h4>m<sup>3</sup></h4>
                        </div>

                        <div className="card">
                            <img src = 'images/utils/temperature.jpg'/>
                            <h4>Average temp</h4>
                            { this.state.avg_temp === 0?
                                <p>Not Available</p>:
                                <h4>{this.state.avg_temp}</h4>
                            }
                            <h4>Kelvin</h4>
                        </div>

                        <div className="card">
                            <img src = 'images/utils/mean_radius.png'/>
                            <h4>Mean Radius</h4>
                            <h4>{this.state.mean_radius}</h4>
                            <h4>Km</h4>
                        </div>
                    </div>
                    {
                        (this.state.moons && this.state.moons.length) > 0 ?
                        (
                            <div className="moons">
                                <img src = 'images/utils/moons.jpg' />
                                <h4>Moons Are </h4>
                                    <div className="scroll-moons">
                                        {this.state.moons.map( (val) =>{
                                            return(
                                                <div className="moon-item">
                                                    <h4>  {val.moon} </h4>
                                                    <p onClick={(e) => this.handle_redirect(e,val.rel)} style={{cursor: 'pointer'}}> click here! </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                            </div>
                        ): null
                    }
                </div>
            </ItemStyles>
        )
    }

}