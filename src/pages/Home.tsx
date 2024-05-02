import AboutMe from '../components/LandingPage/AboutMe';
import AcademicEducation from '../components/LandingPage/AcademicEducation';
import Banner from '../components/LandingPage/Banner';
import Footer from '../components/LandingPage/Footer';
import Header from '../components/LandingPage/Header';
import Professional from '../components/LandingPage/Professional';
import Projects from '../components/LandingPage/Projects';
import Skills from '../components/LandingPage/Skills';
import ScrollProgress from '../components/ScrollProgress';
import './Home.css';
import React from 'react';

const Home: React.FC = () => (
  <main className="flex flex-col items-center justify-between">
    <ScrollProgress />
    <Header />
    <Banner />
    <AboutMe />
    <Skills />
    <AcademicEducation />
    <Professional />
    <Projects />
    <Footer />
  </main>
);

export default Home;
