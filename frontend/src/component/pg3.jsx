// Pg3.jsx
import React from 'react';
import gif2 from "../assets/img/gif4.gif";
import Layout from './layout';
import { useLocation } from 'react-router-dom';

function Pg3({ project,ment}) {
  const data = JSON.parse(localStorage.getItem('project_data'));

  return (
    <Layout>
      <h2>Congratulations, You can download Certificate</h2>
      <img src={gif2} alt="" srcSet="" className='dumb_img' />
      <div className='box-wrapper pg3'>
        <div className='boxes'>
          <a
            href={`http://127.0.0.1:8000/${project}/${ment}/download/${data.roll_number}`}
            className='box'
          > 
            Download Certificate
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Pg3;
