import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import health from "../../Assets/Projects/health.jpg";
// import emotion from "../../Assets/Projects/emotion.png";
import Ecosync from "../../Assets/Projects/EcoSync.jpg";
import ResultSync from "../../Assets/Projects/ResultSync.jpeg";
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


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
