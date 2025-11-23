import data from "../../data/CloneCoding.json";
import cloneData from "../../data/Clone.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { AiFillCloseSquare } from "react-icons/ai";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";


// 팝업 컴포넌트 추가
const ProjectPopup = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="popup">
      <div className="popup-overlay">
        <button className="close-btn" onClick={onClose}><AiFillCloseSquare /></button>
        <div className="project-popup">
          <h2>{project.num}. {project.title}</h2>
          {project.sections.map((section, index) => (
            <div key={index} className="popup-section">
              <h3>{section.subtitle}</h3>
              {Array.isArray(section.content) ? (
                <ul>
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
              {section.content2 && (
                <ul className="content2">
                  {section.content2.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <a
          className="popup-image"
          href={project.link}
          target="_blank">
          <img
            src={`${process.env.PUBLIC_URL}${project.image}`}
            alt={project.title}
          />
        </a>
      </div>
    </div>
  );
};

const CloneCoding = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (projectNumber) => {
    setSelectedProject(projectNumber);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = selectedProject
    ? cloneData.find(project => project.number === selectedProject)
    : null;

  return (
    <div className="clone">
      <div className="clone-logr-wrap">
        <img
          className="clone-logo"
          src={`${process.env.PUBLIC_URL}/images/title/title06.png`}
          alt="clonecoding 로고 이미지"
        />
        <p className="clone-des">{data.mainDescription}</p>
      </div>

      <Swiper
        className="projects-list"
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        loop={true} // 무한 반복
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.projects.map((project, idx) => (
          <SwiperSlide key={project.id}>
            <div
              key={idx}
              className="project-card">
              <div className="card-name">
                <h2>{project.num}</h2>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="card">
                <img
                  src={`${process.env.PUBLIC_URL}${project.image}`}
                  alt={project.title}
                />
                <button
                  className="overlay-btn"
                  onClick={() => handleClick(project.id)}
                >OVERVIEW</button>
              </div>
              <div className="project-links">
                {project.links?.github && (
                  <button>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GITHUB 링크
                    </a>
                  </button>
                )}
                {project.links?.site && (
                  <button>
                    <a
                      href={project.links.site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SITE 링크
                    </a>
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 팝업 */}
      {selectedProject && (
        <ProjectPopup
          project={selectedProjectData}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default CloneCoding;