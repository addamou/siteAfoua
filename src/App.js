import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar/NavBar';
import Services from './components/Pages/Service/Service';
import Performance from './components/COMPS/Performance';
import About from './components/Pages/About/About';
import Testimonial from './components/Pages/Testimonial/Testimonial';
import Contact from './components/Pages/Contact/Contact';
import Footer from "./components/Footer"
import { Home } from './components/Pages/Home/Home';

const Appl = () => {
    return (
        <main id="home">
            <NavBar />
            <section id="home">
                <Home />
            </section>
            <section id="service">
                <Services />
            </section>
            <section id="performance">
                <Performance />
            </section>
            <section className="pallarax" />
            <section id="about">
                <About />
            </section>
            <section id="testimonial">
                <Testimonial />
            </section>
            <section className="pallarax2" />
            <section id="contact">
                <Contact />
            </section>
            <ToastContainer />
            <section className="rest"></section>
            <Footer />
        </main>
    );
}
export default Appl;