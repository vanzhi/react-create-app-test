import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import RootRouter from './routes/router-root'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Router>
                        <div>
                            <Link to="/">首页</Link>
                            <RootRouter />
                        </div>
                    </Router>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;