import React from 'react';
import { Link } from 'react-router-dom';
import book1 from '../images/book1.jpg';
import book2 from '../images/book2.jpg';
import book3 from '../images/book3.jpg';
import './app.css';

const home = () => (
    <div className="container ">

        {/* carousel */}
        <div id="carouselExampleCaptions" className="carousel slide mt-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img style={{height:"600px"}} src={book1} className="d-block w-100 carouselImg" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>In non erat ullamcorper.</h5>
                    <p>Sed lacinia molestie nulla vel fermentum.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img style={{height:"600px"}} src={book2} className="d-block w-100 carouselImg" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Cursus ultrices.</h5>
                    <p>Class aptent taciti sociosqu ad litora conubia nostra.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img style={{height:"600px"}} src={book3} className="d-block w-100 carouselImg" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Curabitur molestie.</h5>
                    <p>Donec mattis dui vitae tortor porta pulvinar.</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
        {/* end of carousel */}
        
        <Link className="btn btn-outline-info mx-auto d-block" to='/books'>Check all the books</Link>
    </div>
);

export default home;