// src/components/MyProjects.js
import { Container, Row, Col, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import tableauLogo from "../assets/img/tableau-logo.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const MyProjects = () => {
  const projects = [
    {
      title: "Data Analysis - Sales Report",
      description: "Analyzed sales data using Excel and created dashboards.",
      imgUrl: projImg1,
      link: "https://github.com/Jancris042/BigMart",
    },
    {
      title: "Power BI Dashboard",
      description: "Interactive report with filters and KPIs for business insights.",
      imgUrl: projImg2,
      link: "https://github.com/Jancris042/Power-Bi-First-Project",
    },
    {
      title: "Python Data Modeling",
      description: "Used Pandas and Scikit-learn to predict customer churn.",
      imgUrl: projImg3,
      link: "https://github.com/Jancris042/Netflix-Stock-Price-Forecasting",
    },
  ];

  const extraProject = {
    title: "Tableau Profile",
    description: "Interactive visualizations and dashboards built using Tableau Public.",
    imgUrl: tableauLogo,
    link: "https://public.tableau.com/app/profile/jancris.paul.oporto/vizzes",
  };

  return (
    <section className="project" id="MyProjects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Projects</h2>
                  <p>Here are a few data projects I’ve completed recently.</p>

                  {/* Main Projects */}
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>

                  {/* Buttons for Main Projects */}
                  <div className="text-center mt-4 d-flex justify-content-center gap-3 flex-wrap">
                    {projects.map((project, index) => (
                      <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary">View {project.title}</Button>
                      </a>
                    ))}
                  </div>

                  {/* Centered Tableau Project */}
                  <h3 className="mt-5 text-center">Featured Project</h3>
                  <Row className="justify-content-center">
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                      <ProjectCard {...extraProject} />
                    </Col>
                  </Row>

                  <div className="text-center mt-4">
                    <a
                      href={extraProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="info">View My Tableau Profile</Button>
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
