import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Preloader from '../utils/Preloader';
import Twitter from './Twitter';
import "../utils/darkmode";

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Preloader />
                <Twitter />
            </BrowserRouter>
        );
    }
}

export default App;