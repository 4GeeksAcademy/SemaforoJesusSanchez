import React, { useState, useEffect } from 'react';
import "/styles/semaforocss.css";

const Semaforocss = () => {
  const [luzActiva, setLuzActiva] = useState(null);

  const luzEncendida = (color) => {
    return `luz ${luzActiva === color ? color : 'apagado'}`;
  };

  return (
    <div className="semaforo mx-auto mt-5">
      <div className={luzEncendida('rojo')} onClick={() => setLuzActiva('rojo')}></div>
      <div className={luzEncendida('amarillo')} onClick={() => setLuzActiva('amarillo')}></div>
      <div className={luzEncendida('verde')} onClick={() => setLuzActiva('verde')}></div>
    </div>
  );
};

export default Semaforocss;