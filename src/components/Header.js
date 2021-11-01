import React, { Component } from 'react';
import "./Header.css"

export class Header extends Component {
    render() {
        return (
            <header class="masthead d-flex align-items-center">
            <div class="container px-4 px-lg-5 text-center">
                <h1 class="mb-1">Kitab insan üçün mənəvi qidadır</h1>
                <h3 class="mb-5"><em>Frensis Bekon</em></h3>
                <a class="btn btn-primary btn-xl" href="#about">Read More</a>
            </div>
        </header>
        )
    }
}

export default Header
