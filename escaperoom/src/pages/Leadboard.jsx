import React from "react";

import Table from '../components/Table';
/* import '../styles/Leadboard.css'; */
import data from '../data/data'

const Leadboard = () => {
    return (
        <>
            <Table data={data}></Table>
        </>
    );
};

export default Leadboard;
