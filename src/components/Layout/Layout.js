import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

const layout = (props) => (
  <Auxiliary>
    <SideDrawer />
    <Toolbar />
    <main className={classes.Content}>
      {props.children}
    </main>
  </Auxiliary>
);

export default layout;
