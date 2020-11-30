import React, { Component } from 'react';
import { Common } from '../Component/common/RunPage';
import { ArticleList } from '../Component/article/ArticleList';
import { Publish } from '../Component/article/Publish';

export default class Article extends Component {
    
    render () {
        return (<>
            <Common children={{
                list: [
                    {name: '已发布', comp: <ArticleList />},
                    {name: '写文章', comp: <Publish />},
                ],
            }} />
        </>)
    }
}
