import React from 'react';

import PageHeader from '../../components/PageHeader';
import PageDescription from '../../components/PageDescription';
import Portfolio from '../../components/Portfolio';

function Home() {
  return (
    <div>
      <PageHeader title="Portfolio"></PageHeader>
      <PageDescription>
        <p>Mi nombre es Jesús Magallón, soy egresado de la Licenciatura en Ingeniería en Computación de la Universidad de Guadalajara. Durante más de dos años trabaje como Web Backend Developer en OH! Travel Marketing, agencia de desarrollo y marketing digital ubicada en mi natal Puerto Vallarta, Jal. Actualmente me encuentro trabajando en la Coordinación de Tecnologías para el Aprendizaje del Centro Universitario de la Costa como Consultor externo. Me gusta la música pop, ver películas de ciencia ficción, comedias y algún que otro video de Youtube.</p>
      </PageDescription>
      
      <Portfolio>
      </Portfolio>
    </div>
  );
}

export default Home;
