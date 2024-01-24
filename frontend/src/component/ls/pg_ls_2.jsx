import React, { useState, useEffect } from 'react';
import gif from "../../assets/img/gif.webp";
import { Link, useLocation } from 'react-router-dom';
import Layout from '../layout';
import axios from 'axios';

function Pg_ls_2() {

  const [inTSS, setInTSS] = useState(false);
  const [inNTSS, setInNTSS] = useState(false);
  const data = JSON.parse(localStorage.getItem('project_data'));
  const [tssUrl, setTssUrl] = useState('/4');
  const [ntssUrl, setNtssUrl] = useState('/4');

  useEffect(() => {
    const checkRoles = async (rollNumber) => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/ls/${rollNumber}`);

        // Update URL variables based on the flag value
        if (response.data.in_ntss) {
          setNtssUrl('/3/ntss');
        }
        if (response.data.in_tss) {
          setTssUrl('/3/tss');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

      checkRoles(data.roll_number);
  }, [data.roll_number]);

  return (
    <Layout>
      <Link to={"/1"}><i></i></Link>
      <h2>You wanted certificate for which courses?</h2>
      <img src={gif} alt="" srcSet="" className='dumb_img'/>
      <div className='box-wrapper'>
        <Link to={{ pathname: ntssUrl}} className='boxes'><div className='box'>Non-Tech SS</div></Link>
        <Link to={{ pathname: tssUrl}} className='boxes'><div className='box'>Tech SS</div></Link>
      </div>
    </Layout>
  );
}

export default Pg_ls_2;
