
import React, { useEffect, useState } from "react";
import { Input } from 'antd';
import axios from "axios";
import './css/Addfriend.css'
const { Search } = Input;

const Addfriend = () => {
    const [searchValue, setSearchValue] = useState('');
    const [nonFriends, setNonFriends] = useState([]);

    useEffect(() => {
        let userData = JSON.parse(sessionStorage.getItem('user'));
        axios.post('/getNonFriends', { userId: userData._id }).then(res => {
            let resData = [];
            resData = [...res.data.nonFriends];
            resData.forEach((elem) => {
                setNonFriends(friend => [...friend, {
                    _id: elem._id,
                    username: elem.username
                }])
            })
        })
    }, [])


    const addFriend = (friendId) => {
        let userData = sessionStorage.getItem('user');
        let userId = JSON.parse(userData)._id;
        axios.post('/addFriend', {
            userId: userId,
            friendId: friendId
        }).then(res => {
            sessionStorage.setItem('user', JSON.stringify(res.data.user))
        })
    }
    const onSearch = (e) => {
        setSearchValue(e.target.value);
    }
    return (
        <div>
            <Search
                placeholder="Search users..."
                onSearch={onSearch}
                onChange={onSearch}
                value={searchValue}
                className='search'
            />
            <div className="all">
                {nonFriends.map((item, index) => {
                    return (
                        <div key={index} className='friend'>
                            {item.username} <button onClick={() => addFriend(item._id)}>Add</button>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Addfriend;