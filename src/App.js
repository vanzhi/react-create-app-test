import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import RootRouter from './routes/router-root'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Top from './pages/top'
import Left from './pages/left'


class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <Router>
                        <div className="fn-clear">
                            <Top />
                            <Left />
                            <RootRouter />
                        </div>
                    </Router>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;