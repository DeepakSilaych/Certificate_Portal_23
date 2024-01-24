import axios from 'axios';  
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Auth() {
    const navigate = useNavigate();
    useEffect(() => {
        try {
            var auth_code = window.location.href.split('=')[1];
            axios.post('http://127.0.0.1:8000/userdata', {
                code: auth_code
            })
            .then((res) => {
                localStorage.setItem('project_data', JSON.stringify(res.data));
                navigate('/1');
            })
            .catch((err) => {
                navigate('/');
                console.log(err);
            });
        } catch (error) {
            window.location.replace('/');
        }
    }, []); 
    return (
        <p>Loading...</p>
    )
}