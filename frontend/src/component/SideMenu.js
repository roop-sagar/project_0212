import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
import './css/sidemenu.css';

const SideMenu = () => {
    const [id, setId] = useState('');
    const [friends, setFriends] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        let resData = [];
        let token = localStorage.getItem('token');
        let userData = JSON.parse(sessionStorage.getItem('user'));
        axios.post('http://localhost:5000/getFriends', { userId: userData._id }, {
            headers: {
                'token': token
            }
        }).then(res => {
            resData = [...res.data.friends];
            resData.forEach(element => {
                setFriends(friend => [...friend, { key: element._id, label: element.username, unread:element.unread }])
            });
        })
    }, []);

    const click = (key) => {
        setId(key)
        navigate(`/dashboard/${key}`)
    };

    const select = (key) => {
        // navigate(`/dashboard/${key.key}`)
    }
    return (
        <>
            {friends.map((elem, index) => {
                return (
                    <div key={elem.key} className='friend-list' onClick={()=>click(elem.key)}>
                        <span className="avatar-item">
                            <Badge count={elem.unread}>
                                <Avatar shape="circle" icon={elem.label[0]} />
                            </Badge>
                        </span> &nbsp; &nbsp; 
                        <div className='friend-name'>{elem.label}</div>
                    </div>
                )
            })}
            {/* <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ maxHeight: '90vh', minHeight: '90vh', overflowY: 'scroll' }}
                className='sideMenu'
                items={friends}
                onSelect={(key) => select(key)}
                onClick={(key) => click(key)}
                theme='dark' /> */}
        </>
    );
}

export default SideMenu;