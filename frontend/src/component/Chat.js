import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Chat.css';
import { Col, Row } from 'antd';
import axios from 'axios';

const Chat = () => {
    const [toId, setToId] = useState([]);
    const [fromId, setFromId] = useState([]);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [token, setToken] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
        let path = window.location.pathname;
        let userData = JSON.parse(sessionStorage.getItem('user'));
        let token = localStorage.getItem('token');
        setFromId(userData._id)
        setToId(path.split('/'));
        setToken(token)
        navigate(path);
    }, [navigate]);

    useEffect(() => {
        if (token) {
            getMessages();
        }
    }, [toId])
    const send = (to) => {
        axios.post('http://localhost:5000/sendMessage', {
            from: fromId,
            to: to,
            message: inputValue
        }, {
            headers: {
                'token': token
            }
        }).then(res => {
            console.log(res.data);
            setInputValue('');
            getMessages();
        })
    }

    const getMessages = () => {
        axios.post('http://localhost:5000/getMessages', {
            from: fromId,
            to: toId[2]
        }, {
            headers: {
                'token': token
            }
        }).then(res => {
            let data = [];
            setMessages([]);
            data = [...res.data.messages];
            data.forEach((elem) => {
                setMessages((msg) => [...msg, { message: elem.message, from: elem.from, to: elem.to }]);
            })
        })
    }

    return (
        <div className="chat" key={toId[2]}>
            <div className='messages'>
                {messages.map((elem, index) => {
                    let msgStyle = {};
                    if (elem.to === toId[2]) {
                        msgStyle = {
                            marginLeft: 'auto'
                        }
                    }
                    return (
                        <div key={index} className='msg' style={msgStyle}>
                            {elem.message}
                        </div>
                    )
                })}
            </div>
            <div className='text-input'>
                <Row justify="space-around">
                    <Col span={20}><input type='text' value={inputValue} onChange={((e) => setInputValue(e.target.value))} /></Col>
                    <Col span={4}><button onClick={() => send(toId[2])}>Send</button></Col>
                </Row>
            </div>
        </div>
    )
}

export default Chat;
