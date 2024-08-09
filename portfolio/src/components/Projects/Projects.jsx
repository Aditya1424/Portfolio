import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards.jsx";
import Particle from "../Particle.jsx";

import port from "../../Assets/Projects/port.png";
import textUtils from "../../Assets/Projects/textUtils.png";
import realEstate from "../../Assets/Projects/realEstate.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realEstate}
              isBlog={false}
              title="Real E-state"
              description="A platform that enables seamless property search by location, price range, and amenities, with intuitive
navigation and interactive maps. Detailed property listings feature high-quality images, descriptions, and key
features."
              ghLink="https://github.com/Aditya1424/Mern-Estate"
              demoLink="https://mern-estate-qz63ga591-aditya1424s-projects.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textUtils}
              isBlog={false}
              title="Text-Utils"
              description="It is a tool that allows you to analyse a text by counting the number of sentences, words and characters present. It also provides statistical information on the repetition of phrases and keywords. Our online TextUtils is easy to use and free of charge."
              ghLink="https://github.com/Aditya1424/TextUtils-React"
              demoLink="https://aditya1424.github.io/TextUtils-React/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio"
              ghLink="https://github.com/Hardyy00/portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
