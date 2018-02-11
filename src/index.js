import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import './styles.scss';

render(
    <div>
        <header className="app__title">React Boilerplate</header>
        <label className="app__author">by Kai Wedekind</label>
    </div>,
    document.querySelector('#app')
)