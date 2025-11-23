import React, { useState, useEffect, useRef } from "react";
import MenuBar from "./MenuBar";
import MainPage from "./MainPage";
import OverviewSodam from "./Overview/OverviewSodam";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useLocation } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";
import OverviewGG from "./Overview/OverviewGG";
import OverviewDream from "./Overview/OverviewDream";
import OverviewLittle from "./Overview/OverviewLittle";
import { ReactComponent as TitleIcon } from "../icons/titleIcon.svg";

const MainLayout = () => {
    const [scrollTarget, setScrollTarget] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

    const mainPageScrollY = useRef(0);

    const handleMenuClick = (id) => {
        setScrollTarget(id);
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const isMainPath = location.pathname === '/';

        if (isMainPath) {
            window.scrollTo(0, mainPageScrollY.current);
        } else {
            mainPageScrollY.current = window.scrollY;
        }
    }, [location]); // location 객체가 변경될 때마다 실행

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/portfolio/') {
                if (window.scrollY > window.innerHeight * 0.5) {
                    setShowScrollToTopButton(true);
                } else {
                    setShowScrollToTopButton(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const renderContent = () => {
        if (location.pathname === '/overviewSodam') {
            return <OverviewSodam />;
        }
        if (location.pathname === '/overviewGG') {
            return <OverviewGG />;
        }
        if (location.pathname === '/overviewDream') {
            return <OverviewDream />;
        }
        if (location.pathname === '/overviewLittle') {
            return <OverviewLittle />;
        }
        return <MainPage scrollTarget={scrollTarget} />;
    };

    return (
        <div className="mainlayout">
            <div id="top"></div>
            <button
                className="btn-menu"
                onClick={toggleMenu}
            >
                {isOpen ? <ImCross /> : <FaBars />}
            </button>
            {
                isOpen &&
                <MenuBar onMenuClick={handleMenuClick} />
            }

            {renderContent()}

            {showScrollToTopButton && (
                <>
                    <button className="btn-up btn-title">
                        <TitleIcon />
                    </button>
                    <button onClick={scrollToTop} className="btn-up">
                        <FaArrowAltCircleUp />
                    </button>
                </>
            )}
        </div>
    );
};

export default MainLayout;