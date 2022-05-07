import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Container, Button, Form, ListGroup } from "react-bootstrap";
import { followPlayer, getFollowedPlayers, getFollowers } from "../services/api";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Text from "../components/Text";

const UserList = ({ users }) => {
  return (
    <Container>
      <ListGroup>
        {users.map((user) => (
          <ListGroup.Item key={user}>
            <Button variant="link" as={Link} to={`/home/user/${user}`}>
              {user}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

const AddFollow = ({ token }) => {
  const form = useRef();

  const follow = async (ev) => {
    ev.preventDefault();
    const username = form.current.elements["user"].value;
    const data = await followPlayer({ token, username });
    if (data.status === "SUCCESS") {
      console.log("Followed");
    } else {
      console.error(data.error);
      alert("Error");
    }
  };

  return (
    <Form className="mt-3" ref={form}>
      <Container>
        <Row>
          <Col xs={10}>
            <Form.Control
              type="text"
              name="user"
              placeholder="Username"
              className="mx-auto"
            />
          </Col>
          <Col xs={2}>
            <Button variant="primary" onClick={follow}>
              Follow
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

const MyFollowing = ({ token }) => {
  const [following, setFollowing] = useState("LOADING");

  useEffect(() => {
    async function fetchData() {
      const data = await getFollowedPlayers({ token });
      if (data.error) {
        console.error(data.error);
        setFollowing("ERROR");
        return;
      }

      setFollowing(data.data);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <h1>following</h1>
      {following === "LOADING" && <p>Loading...</p>}
      {following === "ERROR" && <p>Error</p>}
      {typeof following === "object" && <UserList users={following} />}
    </Container>
  );
};

const MyFollowers = ({ token }) => {
  const [followers, setFollowers] = useState("LOADING");

  useEffect(() => {
    async function fetchData() {
      const data = await getFollowers({ token });
      if (data.error) {
        console.error(data.error);
        setFollowers("ERROR");
        return;
      }

      setFollowers(data.data);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <h1>followers</h1>
      {followers === "LOADING" && <p>Loading...</p>}
      {followers === "ERROR" && <p>Error</p>}
      {typeof followers === "object" && <UserList users={followers} />}
    </Container>
  );
};

const Amigo = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <Container>

       <Row>
        <Col className="mx-auto text-center">
          <Text textCaption={"Social"} />
        </Col>
      </Row>

      <hr/>

      <Row>
        <Col md={8} className="mx-auto">

          <AddFollow token={token} />
        </Col>
      </Row>
      <hr />
      <MyFollowing token={token} />
      <hr />
      <MyFollowers token={token} />
    </Container>
  );
};

export default Amigo;
