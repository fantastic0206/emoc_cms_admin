import React from 'react';
import clsx from 'clsx';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';
import SidebarFooter from './SidebarFooter';

const Sidebar = (props) => {

  return (
    <>
      <div
        className={clsx('app-sidebar', 'app-sidebar--dark', {
          'app-sidebar--shadow': false
        })}>
        <SidebarHeader />
        <div className="app-sidebar--content">
          <SidebarMenu />
        </div>
        {/* <SidebarFooter /> */}
      </div>
    </>
  );
};

export default Sidebar;
