import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './Comp';
import './reset.scss';

const str = 'hello';
function App () {
    return <>{str}
        <Comp />
    </>
}

ReactDOM.render(<App />, document.getElementById('root'));