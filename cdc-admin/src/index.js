import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AutorBox from './Autor';
import Home from './Home';
import LivroBox from './Livro';

ReactDOM.render(
    (<Router>
        <div>
            <Route path="/" component={App} />
            <Route exact path="/" component={Home} />
            <Route path="/autor" component={AutorBox} />
            <Route path="/livro" component={LivroBox} />
        </div>
    </Router>),
    document.getElementById('root')
);
registerServiceWorker();
