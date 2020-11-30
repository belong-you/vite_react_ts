import React, { Component } from 'react';
import { Common } from '../Component/common/RunPage';
import { AudioList } from '../Component/audio/AudioList';

export default class Audio extends Component {
    
    render () {
        return (<>
            <Common children={{
                list: [
                    {name: '歌单', comp: <AudioList />},
                    {name: '上传', comp: ''},
                ],
            }} />
            
        </>)
    }
}