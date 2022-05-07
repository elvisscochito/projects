import React from "react";
import Text from "../components/Text";
import { Col, Container, Row } from "react-bootstrap";

const Help = () => {

    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col className="mx-auto text-center">
                        <Text textCaption={"Help"} />
                    </Col>
                </Row>
            </Container>

            <hr style={{marginBottom: "100px"}}/>

            <Row>
                <Col className="mx-auto text-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7vRxB54SRHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/>
                    <span>How puzzles works?</span>
                </Col>

                <Col className="mx-auto text-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5kUnO9HmhwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/>
                    <span>Demo gameplay</span>
                </Col>
            </Row>

            <Row>
                <Col className="mx-auto text-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/gCsFTZTMInA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/>

                    <span>Here's why puzzles help your brain</span>
                </Col>
            </Row>
        </>
    );
}

export default Help;
