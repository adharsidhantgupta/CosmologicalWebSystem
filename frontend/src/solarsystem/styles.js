import styled from 'styled-components';

export const DefaultStyle = styled.div`

    .planet-dropdown{
        display: ${props => props.planet_dropdown ? 'block': 'none'};
    }
    
    .moon-dropdown{
        display: ${props => props.moon_dropdown ? 'block': 'none'};
    }

    .dwarf-dropdown{
        display: ${props => props.dwarf_dropdown ? 'block': 'none'};
    }

    .asteroid-dropdown{
        display: ${props => props.asteroid_dropdown ? 'block': 'none'};
    }

`;

export const ItemStyles = styled.div`

    .main-wrapper{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: 10px;

    .celestial-name{
        align-self: center;
        padding: 5px 0 0 0;
    }

    .image-container{
        align-self: center;
        img{
            max-width: 200px;
            max-height: 200px;
            border-radius: 50%;
        }
    }

    .discovered{
        align-self: center;
        display: flex;
        align-items: center;
        img{
            max-width: 100px;
            max-height: 100px;
            border-radius: 50%;
        }
        .discovery-details{
            display: flex;
            align-self: center;
            flex-direction: column;
            padding-left: 40px;
            .details{
                display: flex;
                h4 + h4{
                    padding-left: 10px;
                }
            }
        }
    }

    .cel-data{
        display: flex;
        margin-top: 10px;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        .card{
            display: flex;
            flex-direction: column;
            padding: 3px;
            margin-top: 10px;
            border: 1px solid rgba(1,1,1,1);
            border-radius: 3px;
            width: 200px;
            align-items: center;
            img{
  
                max-width: 100px;
                max-height: 100px;
                border-radius: 50%;
            }
        }
    }

    .moons{
        display: flex;
        margin-top: 10px;
        flex-direction: column;
        padding-bottom: 5px;
        align-self: center;
        align-items: center;
        border: 1px solid rgba(1,1,1,1);
        width: 400px;
        img{
            max-width: 100px;
            max-height: 100px;
            border-radius: 50%;
        }

        .scroll-moons{
            display: flex;
            flex-direction: column;
            width: 350px;
            max-height: 100px;
            overflow: auto;
            align-items: center;
            .moon-item{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 5px;
                width: 300px;
                border: 1px solid black;
                p, h4{
                    margin: 0;
                }
            }


        }
    }

}   

`;