import React from 'react'
import ReactDomServer from 'react-dom/server';

import App from './components/App';

 export default function serverRender () {
    return ReactDomServer.renderToString(
        <App />
    );
};
