import React from "react";

import '../styles/Table.css';

const Table = ({data}) => {
    return (
        <table>
            <caption>LEADBOARD</caption>

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Time</th>
                    <th scope="col">Score</th>
                    <th scope="col">Achievements</th>
                </tr>
            </thead>
            
            <tbody>
                {data.map(element => (
                    <tr>
                        <td>{element.number}</td>
                        <td>{element.name}</td>
                        <td>{element.time}</td>
                        <td>{element.score}</td>
                        <td>{element.Achievements}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
