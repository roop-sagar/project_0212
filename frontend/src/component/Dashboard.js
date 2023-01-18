import React, { useMemo, useState } from 'react'
import HeaderComponent from './Header';
import { Layout } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import './css/dashboard.css';
import axios from 'axios';
import SideMenu from './SideMenu';


const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  let navigate = useNavigate();
  const[userId,setUserId] = useState('');
 
  useMemo(() => {
    let token = localStorage.getItem('token');
    axios.get('http://localhost:5000/profile', {
      headers: {
        'token': token
      }
    }).then(res => {
      if(res.data.status === 'ok'){
        sessionStorage.setItem('user', JSON.stringify(res.data.user));
        setUserId(res.data.user._id);
      } else {
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
        alert(res.data.message);
      }
    })
  },[navigate]);
  

  return (
    <Layout
      style={{
        maxHeight: '100vh'
      }}
    >
      <Header
        style={{
          maxHeight: '10vh',
        }}
      ><HeaderComponent /></Header>
      <Layout
        style={{
          maxHeight: '90vh'
        }}
      >
        <Sider style={{ backgroundColor: '#233243' }} width={250}>
          <SideMenu userId={userId} />
        </Sider>
        <Content
          className='content'
          style={{ minHeight: '90vh' }}
        ><Outlet /></Content>
      </Layout>

    </Layout>
  )
}

export default Dashboard
