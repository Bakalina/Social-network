import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Btn from "./Components/ButtonAuthors";
import TableAuthors from "./Components/TableAuthors";

function App() {
    return (
            <Container>
                <h1>BOOKS</h1>
                <Row>
                    <Col>
                        <Btn name={'Авторы'}/>{' '}
                        <Btn name={'Жанры'}/>
                    </Col>
                </Row>
                <Row>
                    <TableAuthors/>
                </Row>
            </Container>
    );
}

export default App;
