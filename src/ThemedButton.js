// ThemedButton.js
import React from 'react';
import Theme from './theme.js';

const ThemedButton = (props) => (

    <Theme.Consumer>

        {theme => <button { ...props }>button with them: {theme}</button>}

    </Theme.Consumer>

);
export default ThemedButton
