import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import HeroSection from "./components/Hero/HeroSection";
import Quote from "./components/Quote/Quote";
import Footer from "./components/Footer/Footer";

const MainPage = () => {
	return (
        <>
            <Navbar />
            <Sidebar />
            <HeroSection />
            <Quote />
            <Footer />
        </>
	);
};

export default MainPage;
