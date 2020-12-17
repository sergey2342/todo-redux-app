import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import App from './components/App/App'
import store from './redux/store'
import './index.scss'

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);


reportWebVitals();
