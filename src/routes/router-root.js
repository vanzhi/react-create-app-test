
import React from 'react';
import {Route, Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const Lists = () => (
    <div className="main">
        <a>333</a>
    </div>
)

export default () => (
    <div>
        <div>
            {/*<Routes path={`${match.url}/:ListsId`} component={Lists} />*/}
            <Route path='/' component={Lists} />
        </div>
    </div>
)