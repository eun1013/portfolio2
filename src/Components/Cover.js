import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Cover = () => {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const portfolioRef = useRef(null);
  const navigate = useNavigate('');
  
useEffect(() => {
    // 요소들이 모두 렌더링된 후에만 실행되도록
    if (titleRef.current && imgRef.current && portfolioRef.current)
    {
      const tl = gsap.timeline();

      // 타이틀 애니메이션
      tl.fromTo(imgRef.current, 
        {x: 100, opacity: 0},
        {x: 0, opacity: 1, duration: 3, ease: "power3.out", delay: 0.2}
      );
      
      // 이미지 애니메이션 (타이틀 애니메이션 2.5초 전에 시작)
      tl.fromTo(titleRef.current,
        {x: 50, opacity: 0},
        {x: 0, opacity: 1, duration: 2, ease: "power3.out"},
        "-=2.5"
      );
      tl.fromTo(portfolioRef.current,
        {y: 50, opacity: 0},
        {y: 0, opacity: 1, duration: 2, ease: "power3.out"},
        "-=2"
      );
    }
  }, []);

  return (
    <div className="cover">
        <img
        ref={imgRef} 
        src={`${process.env.PUBLIC_URL}/images/title/title01.png`}
        alt="PORTFOLIO 로고 이미지"
        />
        <h3 ref={titleRef}>사용자의 마음에 따뜻하게 공감하며
<br/>디자인 의도를 꼼꼼히 구현하는 웹퍼블리셔 장성은입니다</h3>
        <p ref={portfolioRef}>*  텍스쳐는 AI를 활용해 제작하였습니다</p>
    </div>
  );
};

export default Cover; 