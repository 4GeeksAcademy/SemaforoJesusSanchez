import React, { useState, useEffect } from 'react';
import './Semaforocss.css';

const Semaforocss = () => {
  const [luzActiva, setLuzActiva] = useState('rojo');
  const [ClickEnLaLuz, setClickEnLaLuz] = useState(null);

  useEffect(() => {
    const ciclo = ['rojo', 'amarillo', 'verde'];
    let inicio = 0;

    const intervalo = setInterval(() => {
      inicio = (inicio + 1) % ciclo.length;
      setLuzActiva(ciclo[inicio]);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  const ClickFoco = (color) => {
    setClickEnLaLuz(color);
    setTimeout(() => setClickEnLaLuz(null), 3000);
  };

  const LuzBrillante = (color) => {
    const activa = luzActiva === color ? color : 'apagado';
    const brillo = ClickEnLaLuz === color ? 'brillo' : '';
    return `luz ${activa} ${brillo}`;
  };

  return (
    <div className="Semaforo mx-auto mt-5">
      <div className={LuzBrillante('rojo')} onClick={() => ClickFoco('rojo')}></div>
      <div className={LuzBrillante('amarillo')} onClick={() => ClickFoco('amarillo')}></div>
      <div className={LuzBrillante('verde')} onClick={() => ClickFoco('verde')}></div>
    </div>
  );
};


export default Semaforocss;