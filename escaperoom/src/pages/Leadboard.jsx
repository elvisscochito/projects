import React from "react";

import Text from "../components/Text";
import { Col, Container, Row } from "react-bootstrap";

import Table from '../components/Table';
/* import '../styles/Leadboard.css'; */
import data from '../data/data';

const Leadboard = () => {
    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col className="mx-auto text-center">
                    <Text textCaption={"Score"} />
                    </Col>
                </Row>
            </Container>

            <hr/>

            <Table data={data}></Table>
        </>
    );
};

export default Leadboard;
