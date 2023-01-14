import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Header.css';
import { Col, Row } from 'antd';

const HeaderComponent = () => {
    let navigate = useNavigate();
    const logout = () => {
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
    };
    const profile = () => {
        navigate('/dashboard/profile');
    }
    const addFriends = () => {
        navigate('/dashboard/addfriend')
    }
    const home = () => {
        navigate('/dashboard')
    }
    return (
        <Row justify="space-between" className='header'>
            <Col span={3}>
                <div className='logo' onClick={home}>
                    CHITchat
                </div>
            </Col>
            <Col span={8}>
                <Row justify="end">
                    <Col span={6}><div className='navigation' onClick={addFriends}>Add Friends</div></Col>
                    <Col span={6}><div className='navigation' onClick={profile}>Profile</div></Col>
                    <Col span={6}><div className='navigation' onClick={logout}>Logout</div></Col>
                </Row>
            </Col>
        </Row>
    )
}

export default HeaderComponent;