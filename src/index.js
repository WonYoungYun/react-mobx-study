import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';//provider 호출

import App from './App';
import RootStore from './stores'//스토어 호출


const root = new RootStore();//스토어 인스턴스 생성


ReactDOM.render(
    <Provider {...root}>
        <App />
    </Provider>
    , document.getElementById('root'));


