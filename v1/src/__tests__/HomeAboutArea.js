import React from 'react';
import ReactDOM from 'react-dom';
import HomeAboutArea from "../pages/Home/HomeAboutArea";

it('Render About Component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomeAboutArea />, div);
});