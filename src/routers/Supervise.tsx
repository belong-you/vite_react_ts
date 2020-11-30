import React, { Component, lazy, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import { Article } from './Article';
// import { Discuss } from './Discuss';
// import { FriendLink } from './FriendLink';
// import { Audio } from './Audio';
const Article = lazy(() => import('./Article'));
const Discuss = lazy(() => import('./Discuss'));
const FriendLink = lazy(() => import('./FriendLink'));
const Audio = lazy(() => import('./Audio'));
import { SignIn } from './SignIn';
const Default = () => (<Redirect to='/vise/signIn' />);  // 路由重定向
import { signIn, popup } from '../Component/context';

export class Supervise extends Component {
    url: string;
    constructor (props: any) {
        super(props);
        this.url = props.match.url;
    }
    state = {
        isSignIn: false,
        sign: () => {
            this.setState({
                isSignIn: true
            })
        },
        open: false,  // 是否显示弹出层
        change: () => {
            this.setState({
                open: !this.state.open
            })
        }
    }

    render () {
        return (<signIn.Provider value={this.state}>
            <>
                <header>
                    <div className="logo">belong-you</div>
                    <ul className='nav'>
                        <li><NavLink activeClassName='active' to={this.url + '/article'}>文章</NavLink></li>
                        <li><NavLink activeClassName='active' to={this.url + '/discuss'}>留言</NavLink></li>
                        <li><NavLink activeClassName='active' to={this.url + '/friendLink'}>友链</NavLink></li>
                        <li><NavLink activeClassName='active' to={this.url + '/audio'}>音乐</NavLink></li>
                    </ul>
                </header>
                <section>
                    <popup.Provider value={this.state}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route path={this.url + '/article'} component={Article} exact />
                                <Route path={this.url + '/discuss'} component={Discuss} exact/>
                                <Route path={this.url + '/friendLink'} component={FriendLink} exact/>
                                <Route path={this.url + '/audio'} component={Audio} exact />
                                <Route path={this.url + '/signIn'} component={SignIn} exact />
                                <Route component={Default} exact/>
                            </Switch>
                        </Suspense>
                    </popup.Provider>
                </section>
                <footer>
                    <p>Copyright © 2020 bozai.tech晋ICP备20006880号 Powered by Yubo.Yang</p>
                </footer>
            </>
        </signIn.Provider>)
    }
}
