import React from 'react';

import Text from "../components/Text";
import { Col, Container, Row } from "react-bootstrap";

const Docs = () => {

    const src = `/assets/img/file-earmark-pdf-fill.svg`;

    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col className="mx-auto text-center">
                        <Text textCaption={"Docs"} />
                    </Col>
                </Row>
            </Container>

            <hr style={{marginBottom: "100px"}}/>


            <Row>
                <Col className="mx-auto text-center">
                    <img src={src}/>
                    
                    <a href="https://docs.google.com/document/d/1h3o608zn3BpLxpOVFuxadi3O3ok3XspC8VxYJsz9Abo/edit"> Download manual in PDF document format.</a>
                </Col>
            </Row>
        </>
    );
};

export default Docs;
