import React from "react";
import {Table} from "react-bootstrap"

let Author = [
        {name: 'Ben', books: [{1: 1}, {2: 2}, {3: 3}]},
        {name: 'Bob', books: [{1: 1}, {2: 2}, {3: 3}]}
        ]

function Td () {
    for (let key in Author) {
        console.log(typeof key)
    }
 return ( <>
         <td>Mark Twen</td>
         <td>Otto</td>
         <td>@mdo</td>
         <td>@mdo</td>
         <td>@mdo</td>
     </>

 )
}






function TableAuthors () {
    return (
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th>Автор</th>
                <th colSpan="4">Книг в базе</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <Td/>
            </tr>
            </tbody>
        </Table>
    )
};

export default TableAuthors;