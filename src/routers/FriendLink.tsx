import React, { Component } from 'react';
import { Common } from '../Component/common/RunPage';
import { FriendLinkList } from '../Component/friendLink/FriendLinkList';
import { FriendLinkAdd } from '../Component/friendLink/FriendLinkAdd';

export default class FriendLink extends Component {
    
    render () {
        return (<>
            <Common children={{
                list: [
                    {name: '友情链接', comp: <FriendLinkList />},
                    {name: '+ 链接', comp: <FriendLinkAdd />},
                ],
            }} />
            
        </>)
    }
}