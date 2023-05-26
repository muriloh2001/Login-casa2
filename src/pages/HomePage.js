import React, { useState } from 'react';

function HomePage () {
    
      const [coordenadas, setCoordenadas] = useState(null);
    
      const registrarBatidaPonto = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
    
              const dataAtual = new Date();
              const horario = dataAtual.toLocaleTimeString();
              const dia = dataAtual.toLocaleDateString();
    
              const dadosBatidaPonto = {
                latitude,
                longitude,
                horario,
                dia,
              };
    
              // Aqui você pode enviar os dados para o servidor usando axios ou qualquer outra biblioteca de sua preferência
              console.log(dadosBatidaPonto);
    
              setCoordenadas({ latitude, longitude });
            },
            (error) => {
              console.error(error);
            }
          );
        } else {
          console.error('Geolocalização não suportada pelo navegador.');
        }
      };
    
      return (
        <div>
          <h1>Página de Registro de Ponto</h1>
          <button onClick={registrarBatidaPonto}>Registrar Batida de Ponto</button>
    
          {coordenadas && (
            <div>
              <p>Coordenadas:</p>
              <p>Latitude: {coordenadas.latitude}</p>
              <p>Longitude: {coordenadas.longitude}</p>
            </div>
          )}
        </div>
      );
    };

export default HomePage;
