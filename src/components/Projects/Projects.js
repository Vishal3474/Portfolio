import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Unit Converter"
              description=" Unit of Conversion is a multi-step process involving multiplication or division by a Measurment Units Conveter, can all be measured in various ways."
              link="https://assignment-26-unit-converter-without-prompt-vishal3474.codeyogiteam.repl.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ask CodeYogi"
              description="This is same like as Ask Jud Clone, Do you need to ask a question? Are you looking for answers? Jud offers you a space to ask anything you want."
              link="https://assignment-34-create-ask-jud-clone-vishal3474.codeyogiteam.repl.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Meet Our Team Card"
              description="Meet our Team ,Alone we can do so little; together we can do so much. – Helen Keller"
              link="https://assignment-29-create-team-list-page-using-react-vishal3474.codeyogiteam.repl.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CodeYogi Clone"
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Find Table"
              description=""
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="To-Do List App"
              description=""
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
