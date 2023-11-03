import React from "react";
import { NavBar } from "components/_ui/nav/NavBar";
import { Hero } from "components/home/hero/Hero";
import { Information } from "components/home/information/Information";

export const Home = () => {
    return(
        <main>
        <NavBar/>
        <Hero/>
        <Information/>
        </main>
    )
}