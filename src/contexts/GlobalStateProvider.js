import React, { useState } from 'react';
import PropTypes from 'prop-types'

const GlobalState = React.createContext(null);

export { GlobalState };

const GlobalStateProvider = (props) => {

  const [sidebarToggle, setSidebarToggle] = useState(false)
  const [contentBackground, setContentBackground] = useState('')
  const [headerDrawerToggle, setHeaderDrawerToggle] = useState(false)
  const [sidebarToggleMobile, setSidebarToggleMobile] = useState(false)
  const [sidebarFixed, setSidebarFixed] = useState(false)
  const [headerFixed, setHeaderFixed] = useState(false)
  const [footerFixed, setFooterFixed] = useState(false)
  const [headerSearchHover, setHeaderSearchHover] = useState(false)
  const [openDrawerId, setOpenDrawerId] = useState({});
  const [drawerContent, setDrawerContent] = useState([]);

  return(
    <GlobalState.Provider
      value={{ 
        sidebarToggle, 
        setSidebarToggle, 
        contentBackground,
        setContentBackground,
        headerDrawerToggle,
        setHeaderDrawerToggle,
        sidebarToggleMobile,
        setSidebarToggleMobile,
        sidebarFixed,
        setSidebarFixed,
        headerFixed,
        setHeaderFixed,
        footerFixed,
        setFooterFixed,
        headerSearchHover,
        setHeaderSearchHover,
        openDrawerId,
        setOpenDrawerId,
        drawerContent,
        setDrawerContent,
      }}
    >
      { props.children }
    </GlobalState.Provider>
  )
}

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export default GlobalStateProvider;
