import React from 'react';

const layout = (props) => (
  <Auxiliary>
    <div>
      // Toolbar,
      // SideDrawer,
      // Backdrop,
      Toolbar, SideDrawer, Backdrop
    </div>
    <main>
      {props.children}
    </main>
  </Auxiliary>
);

export default layout;
