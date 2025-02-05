import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import health from "../../Assets/Projects/health.jpg";
// import emotion from "../../Assets/Projects/emotion.png";
import Ecosync from "../../Assets/Projects/EcoSync.jpg";
import ResultSync from "../../Assets/Projects/ResultSync.jpeg";
import FontForger from "../../Assets/Projects/FontForger.png";
import FamilyCart from "../../Assets/Projects/FamilyCart.jpg";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

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
            imgPath={ResultSync}
            isBlog={false}
            title="ResultSync"
            description="ResultSync is a web app for managing student results. It features secure faculty registration, JWT-based login, and password encryption. Built with React, Node.js, Express.js, MySQL, and Tailwind CSS, it supports easy input, editing, and viewing of results, subjects, and student details."
            ghLink="https://github.com/AkibHossainOmi/ResultSync"
            // demoLink="https://chatify-49.web.app/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={Ecosync}
            isBlog={false}
            title="EcoSync"
            description="EcoSync is a waste management system that optimizes waste collection and disposal. It connects waste producers, collectors, and recyclers for efficient scheduling and tracking. With real-time monitoring, route optimization, and data analytics, EcoSync promotes recycling and environmental sustainability."
            ghLink="https://github.com/AkibHossainOmi/cs24-p2-DIIT_RUNTIME_TERROR"
            // demoLink="https://editor.soumya-jit.tech/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={health}
            isBlog={false}
            title="Health"
            description="Health is an open-source healthcare web app designed to ease challenges faced by patients and doctors. It offers features like medical report management, doctor availability, ratings, emergency services, and prescriptions. It's also a practical learning platform for students to contribute to real-world applications."
            ghLink="https://github.com/Balagha/health"
            // demoLink="https://blogs.soumya-jit.tech/"
          />
        </Col>
        
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={FamilyCart}
            isBlog={false}
            title="FamilyCart"
            description="FamilyCart is an Android app created to streamline shopping for couples and families. It features shared shopping lists, price tracking, and automatic expense calculation. Users can mark items as completed and keep track of their spending, making it easier to manage purchases and stick to a budget."
            ghLink="https://github.com/AkibHossainOmi/familycart.git"
            // demoLink="https://blogs.soumya-jit.tech/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={FontForger}
            isBlog={false}
            title="FontForger"
            description="FontForger is a Chrome extension that enables users to quickly convert selected text to uppercase or lowercase using simple keyboard shortcuts. Built with JavaScript, it works seamlessly across all editable text fields in the browser, offering a fast and efficient way to format text and improve productivity."
            ghLink="https://github.com/AkibHossainOmi/FontForger"
            // demoLink="https://blogs.soumya-jit.tech/"
          />
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
