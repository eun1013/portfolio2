import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/Clone.json";

const Clone = () => {
  const { number } = useParams(); // URL에서 프로젝트 번호 가져오기
  const project = data.find((p) => p.number === parseInt(number));

  if (!project) return <p>프로젝트를 찾을 수 없습니다.</p>;

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <div className="card">
      <img src={project.image} alt={project.title} />
      </div>
      {project.sections.map((section, idx) => (
        <div key={idx}>
          <h3>{section.subtitle}</h3>
          {section.content && (
            <ul>
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {section.content2 && (
            <ul>
              {section.content2.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {project.sections[project.sections.length - 1].content2 && (
        <div>
          {project.sections[project.sections.length - 1].content2.map((item, i) => (
            item.startsWith("· GITHUB URL") ? (
              <button key={i}>
                <a href={item.split(" : ")[1]} target="_blank" rel="noopener noreferrer">
                  GITHUB 링크
                </a>
              </button>
            ) : item.startsWith("· SITE URL") ? (
              <p key={i}>
                SITE 링크: <a href={item.split(" : ")[1]} target="_blank" rel="noopener noreferrer">{item.split(" : ")[1]}</a>
              </p>
            ) : null
          ))}
        </div>
      )}
    </div>
  );
};

export default Clone;