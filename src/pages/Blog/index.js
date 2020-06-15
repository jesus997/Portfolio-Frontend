import React from 'react';

import PageHeader from '../../components/PageHeader';
import PageDescription from '../../components/PageDescription';

function Home() {
  return (
    <div>
      <PageHeader title="Blog"></PageHeader>
      <PageDescription>
        <p>Bienvenido a mi blog, espero te guste :)</p>
      </PageDescription>
    </div>
  );
}

export default Home;
