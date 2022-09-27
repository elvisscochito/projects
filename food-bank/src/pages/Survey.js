import React from 'react';
import TextHeader from '../components/TextHeader';
import Card from '../components/Card';
import registros from '../images/registros.png';
import graficas from '../images/graficas.png';

function Survey() {
    return (
        <>
            <TextHeader text="Survey" />
            <div className="Survey">
                <Card image={registros} title="Registros" />
                <Card image={graficas} title="Gráficas" />
            </div>
        </>
    );
}

export default Survey;
