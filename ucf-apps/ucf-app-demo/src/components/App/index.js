/**
 * App模块
 */

import React, { Component } from 'react';
import { Table, Button } from 'tinper-bee';

import './index.less';

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="app-wrap">
            
                    Hello World
                
            </div>
        );
    }
}

App.displayName = "App";
export default App;
