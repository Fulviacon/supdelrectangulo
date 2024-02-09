import React, { useState } from 'react';

const SupRectangulo = () => {
    const [rectangulo, setRectangulo] = useState({
        alto: "",
        ancho: "",
    });
    const [superficie, setSuperficie] = useState(0);

    const handleChangeInputAncho = (e) => {
        setRectangulo({
            ...rectangulo,
            ancho: e.target.value
        });
    };

    const handleChangeInputAlto = (e) => {
        setRectangulo({
            ...rectangulo,
            alto: e.target.value
        });
    };

    const calcularSuperficie = () => {
        const area = parseFloat(rectangulo.ancho) * parseFloat(rectangulo.alto);
        if (!isNaN(area)) {
            setSuperficie(area);
        } else {
            setSuperficie(0); // Manejar valores no numéricos
        }
    };

    return (
        <div>
            <h2>Calculadora del área del Rectángulo</h2>
            <label>
                Alto:
                <input
                    type="text"
                    onChange={handleChangeInputAncho}
                    placeholder="Ingrese el ancho del rectángulo"
                />
            </label>
            <br />
            <label>
                Ancho:
                <input
                    type="text"
                    onChange={handleChangeInputAlto}
                    placeholder="Ingrese el alto del rectángulo"
                />
            </label>
            <br />
            <button onClick={calcularSuperficie}>Calcular</button>
            <h1>La superficie del rectángulo es {superficie}</h1>
        </div>
    );
};

export default SupRectangulo;

