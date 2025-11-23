import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Aboutme = () => {
  const navigate = useNavigate('');
  const aboutTitleRef = useRef(null);
  const aboutImgRef = useRef(null);
  const about1Ref = useRef(null);
  const about2Ref = useRef(null);
  const about3Ref = useRef(null);
  const about4Ref = useRef(null);
  const about5Ref = useRef(null);

  useEffect(() => {
    const anims = [];

    const ScrollAnimation = (ref,xFrom, xTo, yFrom, yTo, opacityFrom, opacityTo, duration, startPosition, toggleMode = "play none none none") => {
      if (ref.current) {
        
        const anim = gsap.fromTo(
          ref.current,
          {x:xFrom, y: yFrom, opacity: opacityFrom }, 
          {
            y: yTo,
            x:xTo,
            opacity: opacityTo,
            duration: duration,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: startPosition, 
              toggleActions: toggleMode, 
            },
          }
        );
        anims.push(anim);
      }
    };

    ScrollAnimation(aboutTitleRef, 0, 0,-100, 0, 0, 1, 1, "top 80%"); 
    ScrollAnimation(aboutImgRef, 0, 0, -100, 0, 0, 1, 1, "top center"); 
    ScrollAnimation(about1Ref,0 ,0 ,-100, 0, 0, 1, 1, "top bottom"); 
    
    ScrollAnimation(about2Ref, -100, 0 ,0 ,0, 0, 1, 1, "top 70%");
    ScrollAnimation(about3Ref, -100, 0, 0, 0, 0, 1, 1.2, "top 70%");
    ScrollAnimation(about4Ref, -100, 0, 0, 0, 0, 1, 1.4, "top 75%");
    ScrollAnimation(about5Ref, -100, 0, 0, 0, 0, 1, 1.5, "top 85%");

    return () => {
      anims.forEach(anim => {
        if (anim.scrollTrigger) {
          anim.scrollTrigger.kill();
        }
        anim.kill();
      });
    };
  }, []);

  return (
    <div className="aboutme">
      <img
        ref={aboutTitleRef}
        className="aboutme-img"
        src={`${process.env.PUBLIC_URL}/images/title/title03.png`}
        alt="aboutme 로고 이미지"
      />
      <div className="aboutme-wrap">
        <ul className="about-keyword">
          <li ref={about2Ref}>완성도 지향<br /> (Perfection-Oriented)</li>
          <hr />
          <li ref={about3Ref}>사용자 중심<br /> (User-Centric)</li>
          <hr />
          <li ref={about4Ref}>긍정적 협력<br /> (Positive Collaborator)</li>
          <hr />
          <li ref={about5Ref}>지속 성장<br /> (Continuous Learner)</li>
          <hr />
        </ul>
        <div className="img-wrap">
          <img
            ref={aboutImgRef}
            className="img-se"
            src={`${process.env.PUBLIC_URL}/images/title/SE.png`}
            alt="PORTFOLIO 로고 이미지"
          />
          <p ref={about1Ref} className="about-me-info">사용자 중심의 사고로<br/>웹페이지의 완성도를 추구하며<br />
            협업과 소통을 통해 끊임없이 성장하는<br />
            웹퍼블리셔 장성은 입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;