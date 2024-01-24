import React, { useState, useEffect } from 'react';
import gif from "../assets/img/gif.webp";
import { Link, useLocation } from 'react-router-dom';
import Layout from './layout';
import axios from 'axios';

function Pg2({project}) {

  const [isMentee, setIsMentee] = useState(false);
  const [isMentor, setIsMentor] = useState(false);
  const data = JSON.parse(localStorage.getItem('project_data'));
  const [menteeUrl, setMenteeUrl] = useState('/4');
  const [mentorUrl, setMentorUrl] = useState('/4');

  useEffect(() => {
    const checkRoles = async (rollNumber, project) => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/${project}/${rollNumber}`);
        setIsMentee(response.data.is_mentee);
        setIsMentor(response.data.is_mentor);
        console.log(project)

        // Update URL variables based on the flag value
        if (response.data.is_mentee) {
          setMenteeUrl('/3/'+ project +'/mentee/');
        }

        if (response.data.is_mentor) {
          setMentorUrl('/3/'+ project +'/mentor/');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (project) {
      // Check roles only if project is available
      checkRoles(data.roll_number, project);
    }
  }, [data.roll_number, project]);

  return (
    <Layout>
      <Link to={"/1"}><i></i></Link>
      <h2>For which position do you want a certificate?</h2>
      <img src={gif} alt="" srcSet="" className='dumb_img'/>
      <div className='box-wrapper'>
        <Link to={{ pathname: menteeUrl}} className='boxes'><div className='box'>Mentee</div></Link>
        <Link to={{ pathname: mentorUrl}} className='boxes'><div className='box'>Mentor</div></Link>
      </div>
    </Layout>
  );
}

export default Pg2;
