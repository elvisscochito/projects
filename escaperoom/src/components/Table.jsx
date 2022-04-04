import React from "react";

import '../styles/Table.css';

const Table = () => {
    
    return (
        <table>
            <caption>LEADBOARD</caption>

            <thead>
                <tr>
                    <th scope="col" scope="row">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Time</th>
                    <th scope="col">Score</th>
                    <th scope="col">Achievements</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <th scope="row">...</th>
                    <th>...</th>
                    <th>...</th>
                    <th>...</th>
                    <th>...</th>
                </tr>
            </tbody>

            <tbody>
                <tr>
                    <th scope="row">...</th>
                    <th>...</th>
                    <th>...</th>
                    <th>...</th>
                    <th>...</th>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
