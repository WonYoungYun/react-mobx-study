import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';//provider 호출

import App from './App';
import CounterStore from './stores/counter'//스토어 호출

const counter = new CounterStore();//스토어 인스턴스 생성


ReactDOM.render(
    <Provider counter={counter}>
        <App />
    </Provider>
    , document.getElementById('root'));


