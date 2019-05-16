/**
 * App模块
 */

import React, { Component } from 'react';
import { Table, Button } from 'tinper-bee';

import './index.less';

class IndexView extends Component {
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

IndexView.displayName = "IndexView";
export default IndexView;
