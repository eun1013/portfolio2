import React, { useState } from 'react';
import ProjectData from "../../data/project.json";
import OverviewSodam from '../Overview/OverviewSodam';
import OverviewGG from '../Overview/OverviewGG';
import OverviewDream from '../Overview/OverviewDream';
import OverviewLittle from '../Overview/OverviewLittle';
import Modal from '../Projects/Modal';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOverviewType, setSelectedOverviewType] = useState(null);

  const openModal = (overviewPath) => {
    setIsModalOpen(true);
    const type = overviewPath.replace('/overview', '');
    setSelectedOverviewType(type);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOverviewType(null); 
  };

  return (
    <div className="projects">
      <div className="projects-logo-wrap">
      <img
        className="projects-logo"
        src={`${process.env.PUBLIC_URL}/images/title/title05.png`}
        alt="projects 로고 이미지"
      />
      </div>
      {
        ProjectData.map((item, idx) => {
          return (
            <div
              key={idx}
              className="projects-main">
              <div className="projects-info-wrap">
              <div className="projects-info">
                <h2>{item.projectName}</h2>
                <div className="projects-line"></div>
                <h3>{item.projectType}</h3>
                <div className="link-btn">
                  {item.links.overview && (
                    <button onClick={() => openModal(item.links.overview)}>
                      OVERVIEW
                    </button>
                  )}
                  {item.links.github && (
                    <button>
                      <a href={item.links.github} target="_blank" rel="noopener noreferrer"> {/* rel="noopener noreferrer" 추가 권장! */}
                        GITHUB 링크
                      </a>
                    </button>
                  )}

                  {item.links.site && (
                    <button>
                      <a href={item.links.site} target="_blank" rel="noopener noreferrer"> {/* rel="noopener noreferrer" 추가 권장! */}
                        SITE 링크
                      </a>
                    </button>
                  )}
                </div>
                <div className="projects-content">
                  <h4>제작에 사용된 스킬</h4>
                  <p>{item.skillsUsed}</p>
                  <h4>프로젝트 설명</h4>
                  <p>{item.description}</p>
                  <h4>제작기간</h4>
                  <p>{item.duration}</p>
                  <h4>제작기여도</h4>
                  <p>{item.contributors}</p>
                  <p>{item.role}</p>
                </div>
              </div>
              </div>
                            <div className="projects-img">
                {item.images.mobile && (
                  <img
                    className="mobile-img"
                    src={`${process.env.PUBLIC_URL}${item.images.mobile}`}
                    alt={item.images.mobilealt}
                  ></img>
                )}
                {item.images.desktop && (
                  <img
                    className="desktop-img"
                    src={`${process.env.PUBLIC_URL}${item.images.desktop}`}
                    alt={item.images.desktopalt}
                  ></img>)}
              </div>
            </div>
          )
        })
      }

      {isModalOpen && (
        <Modal onClose={closeModal}>
          {selectedOverviewType === 'Sodam' && <OverviewSodam/>}
          {selectedOverviewType === 'GG' && <OverviewGG />}
          {selectedOverviewType === 'Dream' && <OverviewDream />}
          {selectedOverviewType === 'Little' && <OverviewLittle />}
        </Modal>
      )}

    </div>
  )
}

export default Projects;