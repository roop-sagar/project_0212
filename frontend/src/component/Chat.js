import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Chat.css';
import { Col, Row } from 'antd';
import axios from 'axios';

const Chat = () => {
    const [toId, setToId] = useState([]);
    const [fromId, setFromId] = useState([]);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    let navigate = useNavigate();

    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior:'auto' });
      };
    useEffect(scrollToBottom, [messages]);
    useEffect(() => {
        let path = window.location.pathname;
        let userData = JSON.parse(sessionStorage.getItem('user'));
        setFromId(userData._id)
        setToId(path.split('/'));
        navigate(path);
    }, [navigate]);

    useEffect(() => {
            getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toId])
    const send = (to) => {
        axios.post('http://localhost:5000/sendMessage', {
            from: fromId,
            to: to,
            message: inputValue
        }).then(res => {
            setInputValue('');
            getMessages();
        })
    }

    const getMessages = () => {
        axios.post('http://localhost:5000/getMessages', {
            from: fromId,
            to: toId[2]
        }).then(res => {
            let data = [];
            setMessages([]);
            data = [...res.data.messages];
            data.forEach((elem) => {
                setMessages((msg) => [...msg, { message: elem.message, from: elem.from, to: elem.to }]);
            })
        })
    }

    const keyDown =(e,id) => {
        if(e.key === 'Enter') send(id)
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
                <div ref={messagesEndRef} />
            </div>
            <div className='text-input'>
                <Row justify="space-around">
                    <Col span={20}><textarea autoFocus rows='1' type='text' onKeyDown={(e)=>keyDown(e,toId[2])} value={inputValue} placeholder='Send message...' onChange={((e) => setInputValue(e.target.value))} /></Col>
                    <Col span={4}><button onClick={() => send(toId[2])}>Send</button></Col>
                </Row>
            </div>
        </div>
    )
}

export default Chat;
