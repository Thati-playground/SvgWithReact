import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './data';
import elements from './elements';

ReactDOM.render(<App datasets={data} elements={elements}/>, document.getElementById('root'));
