import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/logo/shopsy.jpg";
import projImg2 from "../assets/logo/hotel.avif";
import projImg3 from "../assets/logo/coffee.jpg";
import projImg4 from "../assets/logo/vista.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ecommerce",
      description: "Buy and Sell Products",
      imgUrl: projImg1,
      projectLink: "https://shopsy-1-xete.onrender.com/"  
    },
    {
      title: "Hotel Admin Dashboard",
      description: "Management of the dashboard",
      imgUrl: projImg2,
      projectLink: "https://github.com/ajay1264/Hotel-Onbarding-System" 
    },
    {
      title: "VISTA-TABLE",
      description: "HOTEL RESERVATION WEBSITE",
      imgUrl: projImg4,
      projectLink: "https://github.com/ajay1264/Restaurant-Reservation-app"  
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>MERN stack projects highlight the integration of MongoDB, Express.js, React.js, and Node.js to build dynamic, full-stack web applications. These projects often include features like user authentication, CRUD operations, and responsive user interfaces. They demonstrate expertise in creating scalable and efficient solutions, from backend APIs to interactive frontends. Common examples include e-commerce platforms, social media apps, and task management tools.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
