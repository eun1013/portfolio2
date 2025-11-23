import little from "../../data/OverviewLittle.json";
import  React from "react";

const OverviewLittle = () => {
  const project = little.main_project_1;

  return (
    <div className="overviewDream">
    <div className="overview-Dream">
      {/* Overview */}
      <section>
        <h1>{project.overview.title}</h1>
        <div className="overview-project">
          <div className="project-left">
            {project.overview.sections.map((sec, idx) => (
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
          <a href={project.overview.site} target="_blank">
          <img
          className="overview-img"
          src={`${process.env.PUBLIC_URL}${project.overview.image_file}`}
          alt="리틀 블리스 pc버전 예시 이미지"/></a>
        </div>
      </section>

      {/* Design System */}
    <h1>{project.design_system.title}</h1>
      <section className="overview-design">
        {project.design_system.sections.map((sec, idx) => (
          <div key={idx}
          className="design-wrap">
            <h2 className="design-title">{sec.subtitle}</h2>
            {sec.colors && (
              <div className="design-color">
                {sec.colors.map((color, i) => (
                  <div
                    className="color"
                    key={i}
                    style={{backgroundColor: color}}
                  />
                ))}
              </div>
            )}
            {sec.description && <p>{sec.description}</p>}
            {sec.fonts && (
              <ul className="design-font">
                {sec.fonts.map((font, i) => (
                  <React.Fragment key={i}>
                  <li className="font">
                    <strong>{font.name}</strong></li>
                  <li>{font.description}</li>
                  </React.Fragment>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* USER FLOW */}
      <section>
        <h1>{project.user_flow.title}</h1>
        <div className="overview-user">
        <img
        className="user-img"
          src={`${process.env.PUBLIC_URL}${project.user_flow.image_file}`}
          alt="리틀 블리스 userflow 구성 이미지"
        />
        </div>
      </section>

      {/* Retrospective */}
      <section>
        <h1 className="solution-title">{project.retrospective.title}</h1>
        <div className="overview-solution">
        {project.retrospective.sections.map((sec, idx) => (
          <div 
          key={idx}>
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
}
export default OverviewLittle;