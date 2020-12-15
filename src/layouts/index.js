import React, { useContext } from 'react';
import clsx from 'clsx';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { GlobalState } from 'contexts/GlobalStateProvider';
import './style.scss';

const Layout = ({
  children
}) => {

  const {
    sidebarToggle,
    sidebarToggleMobile,
    sidebarFixed,
    headerFixed,
    headerSearchHover,
    headerDrawerToggle,
    footerFixed,
    contentBackground,
  } = useContext(GlobalState);

  return (
    <div
      className={clsx('app-wrapper app-sidebar-fixed', contentBackground, {
        'header-drawer-open': headerDrawerToggle,
        'app-sidebar-collapsed': sidebarToggle,
        'app-sidebar-mobile-open': sidebarToggleMobile,
        'app-sidebar-fixed': sidebarFixed,
        'app-header-fixed': headerFixed,
        'app-footer-fixed': footerFixed,
        'search-wrapper-open': headerSearchHover
      })}>
      <div>
        <Sidebar />
      </div>
      <div className="app-main">
        <div className="app-content">
          <div className="app-content--inner">
            <div className="app-content--inner__wrapper">{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout;
