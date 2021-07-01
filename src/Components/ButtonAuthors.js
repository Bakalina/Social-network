import React from "react";
import {Button} from "react-bootstrap";

function Btn ({name}) {
    return (
        <Button variant="success" >{name}</Button>
    )
}

export default Btn;
