import React from "react";
import RootLayout from "@/components/layout/RootLayout";

const About = () =>{
    return <h1>About page</h1>
}



About.getLayout = function getLayout(page){
    return <RootLayout>{page}</RootLayout> 
}

export default About;

