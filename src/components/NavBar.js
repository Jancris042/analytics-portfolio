import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import newlogo from "../assets/img/newlogo.png";
import linkedIcon from "../assets/img/linked.svg";
import githubIcon from "../assets/img/github.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={newlogo} alt="Logo" style={{ width: "120px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#MyProjects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text d-flex align-items-center gap-3">
            <div className="social-icon d-flex gap-2">
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIcon} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/Jancris042"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
            <a href="#connect">
              <button className="vvd"><span>Let’s Connect</span></button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
