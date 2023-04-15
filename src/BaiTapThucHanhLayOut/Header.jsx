import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div >
                <nav className="container navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid  bg-dark">
                        <a className="navbar-brand text-white" href="#">Start BoosStrap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className=" collapse navbar-collapse" id="navbarSupportedContent" style={{
                            paddingLeft: 600,

                        }}>
                            <ul className="navbar-nav text-white ml-auto ">
                                <li className="nav-item ">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Contact</a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>

                

              


                      
            </div>
        )
    }
}

