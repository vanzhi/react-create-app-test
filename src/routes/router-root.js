
import React from 'react';
import {Route, Link} from 'react-router-dom';

const Lists = () => (
    <div>123</div>
)

export default () => (
    <div>
        {/*<Routes path={`${match.url}/:ListsId`} component={Lists} />*/}
        <Route path='/' component={Lists} />
    </div>
)