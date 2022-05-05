import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Text from "../components/Text";
import Avatar from "../components/Avatar";

const Profile = () => {
  const params = useParams();
  const username = params.username;

  return (
    <Container className="mt-3">
      <Row>
        <Col className="mx-auto text-center">
          <Text textCaption={"Profile"} />
        </Col>
      </Row>

      <hr style={{marginBottom: "100px"}}/>

      <Avatar id={2} username={"@username"} />

      <Row>
        {username && (
          <Col className="mx-auto text-center align-self-center">
            <h3>{username}</h3>
          </Col>
        )}
        {username && (
          /* random image from internet */ <Col className="mx-auto text-center">
            <Image src="https://picsum.photos/200" roundedCircle />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Profile;
