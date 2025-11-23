import SodamData from "../../data/OverviewSodam.json"; 
import React from "react";

const OverviewSodam = () => {
  const project = SodamData.main_project_1;

  return (
    <div className="overviewSodam">
      <div className="overview-Sodam">
      {/* OVERVIEW */}
      <section>
        <h1>{project.overview.title}</h1>
        <div className="overview-project">
          <div className="project-left">
            {project.overview.sections.map((sec, idx) => (
              <div key={idx}>
                <h2>{sec.title}</h2>
                {Array.isArray(sec.content) ? (
                  <ul>
                    {sec.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{sec.content}</p>
                )}
              </div>
            ))}
          </div>
          <a href={project.overview.site} target="_blank">
          <img
          className="overview-img"
            src={`${process.env.PUBLIC_URL}${project.overview.image_file}`}
            alt="소담상점 Overview\ 이미지"
          /></a>
        </div>
      </section>

      {/* DESIGN SYSTEM */}
    <h1>{project.design_system.title}</h1>
      <section className="overview-design">
        {project.design_system.sections.map((sec, idx) => (
          <div
          className="design-wrap" 
          key={idx}>
            <h2 className="design-title"
            >{sec.subtitle}</h2>

            {sec.colors && (
              <div className="design-color">
                {sec.colors.map((color, i) => (
                  <div
                    className="color"
                    key={i}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}

            {sec.description && <p>{sec.description}</p>}

            {sec.fonts && (
              <ul className="design-font">
                {sec.fonts.map((font, i) => (
                  <React.Fragment key={i}>
                  <div className="font-title-wrap">
                  <li 
                  className="font Inter" 
                  >{font.name}</li>
                  <li 
                  className="font Poppins" 
                  >{font.name2}</li>
                  </div>
                  <li>{font.description}</li>
                  </React.Fragment>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section>
        <h1>{project.user_flow.title}</h1>
        <div className="overview-user">
        <img
          src={`${process.env.PUBLIC_URL}${project.user_flow.image_file}`}
          alt="소담상점 User Flow 구성 이미지 "
        />
        </div>
      </section>

      <section>
        <h1>{project.retrospective.title}</h1>
        <div className="overview-solution">
          {project.retrospective.sections.map((sec, idx) => (
            <div key={idx}>
              <h2>{sec.subtitle}</h2>
              {Array.isArray(sec.content) ? (
                <ul>
                  {sec.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{sec.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
};

export default OverviewSodam;
