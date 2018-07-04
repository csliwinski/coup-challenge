import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import configureStore from './store/configureStore';
import { injectGlobal } from 'styled-components';
import { main } from './styles/globals';

const store = configureStore();

render(
    <Root store={store} />,
    document.getElementById('root')
);

// eslint-disable-next-line
injectGlobal`
    ${main}
`;
