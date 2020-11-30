import React, { Component } from 'react';
import { Common } from '../Component/common/RunPage';
import { UsersList } from '../Component/users/UsersList';
import { DiscussList } from '../Component/discuss/DiscussType'

export default class Discuss extends Component {
    
    render () {
        return (<>
            <Common children={{
                list: [
                    {name: '评论', comp: <DiscussList />},
                    {name: '用户', comp: <UsersList />},
                ],
            }} />
            
        </>)
    }
}