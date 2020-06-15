import React from 'react';

import PageHeader from '../../components/PageHeader';
import PageDescription from '../../components/PageDescription';

function CV() {
  return (
    <div>
      <PageHeader title="Resumen Laboral"></PageHeader>
      <PageDescription>
        <p>A continuación se listarán los hechos laborales más destacados de mi vida.<br />También puedes descargar mi hoja de vida <a href="#cv">dando clic aquí</a></p>
      </PageDescription>
    </div>
  );
}

export default CV;
