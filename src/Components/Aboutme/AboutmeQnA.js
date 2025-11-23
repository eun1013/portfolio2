import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutmeQnA = () => {
    const navigate = useNavigate('');
    const about2TitleRef = useRef(null);
    const about2Box1 = useRef(null);
    const about2Box2 = useRef(null);

    useEffect(() => {
        const anims = [];

        const ScrollAnimation = (ref,xFrom, xTo, opacityFrom, opacityTo, duration, startPosition, toggleMode = "play none none none") => {
            if (ref.current) {

                const anim = gsap.fromTo(
                    ref.current,
                    {x:xFrom, opacity: opacityFrom },
                    {
                        x: xTo,
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

        ScrollAnimation(about2TitleRef,-100, 0, 0, 1, 1, "top 80%");
        ScrollAnimation(about2Box1,-100, 0, 0, 1, 1, "top 70%");
        ScrollAnimation(about2Box2, -100, 0, 0, 1, 1, "top 60%");

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
        <div className="aboutme-QnA">
            <img
                ref={about2TitleRef}
                className="aboutme-img"
                src={`${process.env.PUBLIC_URL}/images/title/title03.png`}
                alt="aboutme 로고 이미지"
            />
            <div
                ref={about2Box1}
                className="QnA-1">
                <h2>Q . 웹퍼블리셔로서 자신을 소개해 주세요</h2>
                <p>저는 언제나 사용자의 마음을 섬세하게 읽고 시각적인 불편함을 해소하며,<br />
                    창의적인 시선으로 디자인 의도를 웹 표준에 맞춰 완벽하게 구현하는 웹퍼블리셔 장성은입니다.
                </p>
            </div>
            <div
                ref={about2Box2}
                className="QnA-2">
                <h2>Q . 어떤 것을 추구하나요?</h2>
                <p>다양한 툴과 기술에 대한 탐구심을 바탕으로, 효율적이고 직관적이면서도
                    완성도 높은 UI/UX를 구현하고자 노력합니다.<br />
                    무엇보다 동료들과의 적극적인 소통과 유기적인 협업을 통해
                    기대 이상의 시너지를 만들어내는 것을 가장 중요한 가치로 생각합니다.
                </p>
            </div>
        </div>
    );
};

export default AboutmeQnA;