import React from "react";

import LinkButton from '../components/LinkButton';

import { Button, Col, Container, Row } from "react-bootstrap";

import Text from "../components/Text";
import ImageButton from "../components/ImageButton";

const Home = () => {

  const src = `/assets/img/file-earmark-zip-fill.svg`;

  return (
    <Container className="mt-3">
      <Row>
        <Col className="mx-auto text-center">
          <Text textCaption={"Home"} />
        </Col>
      </Row>

      <hr style={{marginBottom: "100px"}}/>

      <Row>

        <Col className="mx-auto text-center" style={{marginTop: "100px"}}>
          <ImageButton path={"/home/profile"} pictureName={"person-circle"} />
          <LinkButton reference={"/home/profile"} text={"PROFILE"} />
        </Col>

        <Col className="mx-auto text-center">
          <ImageButton path={"/home/social"} pictureName={"people-fill"} />
          <LinkButton reference={"/home/social"} text={"SOCIAL"} />
        </Col>

        <Col className="mx-auto text-center" style={{marginTop: "100px"}}>
          <ImageButton path={"/home/help"} pictureName={"question-circle-fill"} />
          <LinkButton reference={"/home/help"} text={"HELP"} />
        </Col>
      </Row>

      <Row>
        <Col className="mx-auto text-center">
          <img src={src}/>
                    
          <a href="https://drive.google.com/file/d/16b84WmQQ0ESPPsLobTEElFYZN4hcvDsb/view?usp=sharing"> Download unity game in zip format.</a>
        </Col>
        </Row>

     {/*  <Row>
        <Col xs={6} className="mx-auto text-center">
          <Button  as={Link} to="/home/social" variant="primary">
            Social
          </Button>
        </Col>
        <Col xs={6} className="mx-auto text-center">
          <Button as={Link} to="/home/profile" variant="primary">
            Profile
          </Button>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Home;
