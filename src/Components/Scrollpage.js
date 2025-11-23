import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 각각의 섹션 컴포넌트를 
import Cover from './Cover'; // Cover 컴포넌트
import AboutMe from './Aboutme/Aboutme'; // AboutMe 컴포넌트
import AboutmeQnA from './Aboutme/AboutmeQnA';


gsap.registerPlugin(ScrollTrigger);

const Scrollpage = () => {
    const coverSectionRef = useRef(null);
    const aboutmeSectionRef = useRef(null);
    const aboutmeQnASectionRef = useRef(null);

useEffect(()=>{
    if(coverSectionRef.current){
        gsap.to(coverSectionRef.current,{
            scrollTrigger:{
                trigger: coverSectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            },
            opacity:0,
            y: -50,
        })
    }
    if(aboutmeSectionRef.current){
      gsap.from(aboutmeSectionRef.current, {
        scrollTrigger: {
          trigger: aboutmeSectionRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: true,
        },
        opacity: 0,
        y: 50,
      });
    }

    // AboutmeQnA 섹션도 비슷하게
    if(aboutmeQnASectionRef.current){
      gsap.from(aboutmeQnASectionRef.current, {
        scrollTrigger: {
          trigger: aboutmeQnASectionRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: true,
        },
        opacity: 0,
        y: 50,
      });
    }
},[]);

    return (
        <div>
            <section
            ref={coverSectionRef}
            style={{
                height: "100vh"
            }}
            ><Cover/></section>
            <section
            ref={aboutmeSectionRef}
            style={{
                height: "100vh",
                backgroundColor:"#444444"
            }}
            ><AboutMe/></section>
            <section
            ref={aboutmeQnASectionRef}
            style={{
                height: "100vh"}}
            ><AboutmeQnA/></section>
        </div>
    );
};

export default Scrollpage;