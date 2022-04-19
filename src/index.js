import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { ProfileProvider } from './components/context/profileContext';
import { store } from './store';
import App from './containers/App';
import "./i18n";

render(
    <ProfileProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </ProfileProvider>,
    document.getElementById("root"));