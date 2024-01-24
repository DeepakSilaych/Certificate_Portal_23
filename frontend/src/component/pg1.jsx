// Pg1.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './layout';

function Pg1() {
  return (
    <Layout>
      <h2>Enjoyed the Process? Now enjoy results!! :)</h2>
      <p>
      
Celebrate your success at ITSA! Your dedication to technical excellence during the summer activities shines through in every certificate – a testament to your skills and commitment. 
      </p>
      <div className='box-wrapper'>
        <Link to={{ pathname: "/soon"}} className='boxes'>
          <div className='box'>Kritika Summer Project</div>
        </Link>
        <Link to={{ pathname: "/ls"}} className='boxes'>
          <div className='box'>Learner Space</div>
        </Link>
        <Link to={{ pathname: "/2/itsp"}} className='boxes'>
          <div className='box'>ITSP</div>
        </Link>
        <Link to={{ pathname: "/soon"}} className='boxes'>
          <div className='box'>Season of Code</div>
        </Link>
        <Link to={{ pathname: "/2/sos"}} className='boxes'>
          <div className='box'>Summer of Science</div>
        </Link>
      </div>
    </Layout>
  );
}

export default Pg1;
