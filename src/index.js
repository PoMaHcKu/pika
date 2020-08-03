import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker'
import {PersistGate} from 'redux-persist/integration/react'
import {persistedStore, store} from './redux/Store'
import Preloader from './components/common/preloader/Preloader'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={<Preloader/>} persistor={persistedStore}>
                <App/>
            </PersistGate>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
serviceWorker.unregister()