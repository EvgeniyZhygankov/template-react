import React from "react";

import '../src/styles/App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu'






class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>My React App!</h1>
                </div>
                <Header />
                <Menu />
            </div>
        );
    }
}

export default App; 