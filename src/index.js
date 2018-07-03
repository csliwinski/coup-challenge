import Root from './Root';
import store from './store';
import { injectGlobal } from 'styled-components';
import { main } from './styles/globals';

const root = new Root(store);
root.render(document.getElementById('root'));

// eslint-disable-next-line
injectGlobal`
    ${main}
`;
