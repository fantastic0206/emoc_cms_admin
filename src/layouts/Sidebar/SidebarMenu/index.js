import React, { useState } from 'react';

import clsx from 'clsx';

import { Collapse } from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';

import { NavLink } from 'react-router-dom';

import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import BrokenImageTwoToneIcon from '@material-ui/icons/BrokenImageTwoTone';

const SidebarMenu = (props) => {
  const [openSiteModules, setOpenSiteModules] = useState(false);
  const toggleSiteModules = (event) => {
    setOpenSiteModules(!openSiteModules);
    event.preventDefault();
  };

  const [openBasicModules, setOpenBasicModules] = useState(false);
  const toggleBasicModules = (event) => {
    setOpenBasicModules(!openBasicModules);
    event.preventDefault();
  };

  const [openSectionModules, setOpenSectionModules] = useState(false);
  const toggleSectionModules = (event) => {
    setOpenSectionModules(!openSectionModules);
    event.preventDefault();
  };

  return (
    <>
      <PerfectScrollbar>
        <div className="sidebar-navigation">
          <div className="sidebar-header">
            <span>Modules</span>
          </div>
          <ul>
            <li>
              <a
                href="#/"
                onClick={toggleSiteModules}
                className={clsx({ active: openSiteModules })}>
                <span className="sidebar-icon">
                  <BrokenImageTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Website</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={openSiteModules}>
                <ul>
                  <li>
                    <NavLink
                      to="/WebsitePage">
                      Website Pages
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ModuleSiteSetting/1">
                      Site Settings
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleBasicModules}
                className={clsx({ active: openBasicModules })}>
                <span className="sidebar-icon">
                  <VerifiedUserTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Basic Modules</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={openBasicModules}>
                <ul>
                  <li>
                    <NavLink
                      to="/ModuleSeo">
                      Seo Module
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ModulePageSetting">
                      Page Setting Module
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ModuleSectionSetting">
                      Section Setting Module
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ModuleWebsiteImage">
                      Image Module
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleSectionModules}
                className={clsx({ active: openSectionModules })}>
                <span className="sidebar-icon">
                  <BrokenImageTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Section Modules</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={openSectionModules}>
                <ul>
                  <li>
                    <NavLink
                      to="/ModuleMultiColumns">
                      Multi Axies Module
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ModuleCard">
                      Content Block
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ModuleButton">
                      Button
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ModuleHeader">
                      Header
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ModuleMenuGroup">
                      Menu Group
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/ModuleSlideShow">
                      Module Slide Show
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>
          {/* <div className="sidebar-header">
            <span>Blocks</span>
          </div>
          <ul>
            <li>
              <a
                href="#/"
                onClick={toggleElements}
                className={clsx({ active: elementsOpen })}>
                <span className="sidebar-icon">
                  <CameraAltTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Elements</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={elementsOpen}>
                <ul>
                  <li>
                    <NavLink
                      
                      to="/ElementsAvatars">
                      Avatars
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/ElementsBadges">
                      Badges
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/ElementsButtons">
                      Buttons
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/ElementsDropdowns">
                      Dropdowns
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/ElementsIcons">
                      Icons
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/ElementsNavigationMenus">
                      Navigation Menus
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/ElementsPagination">
                      Pagination
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/ElementsProgressBars">
                      Progress Bars
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/ElementsRatings">
                      Ratings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/ElementsRibbons">
                      Ribbons
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/ElementsScrollable">
                      Scrollable Boxes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/ElementsSearchBars">
                      Search Bars
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/ElementsTimelines">
                      Timelines
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/ElementsUtilitiesHelpers">
                      Utilities & Helpers
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleBlocks}
                className={clsx({ active: blocksOpen })}>
                <span className="sidebar-icon">
                  <CollectionsTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Data Display</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={blocksOpen}>
                <ul>
                  <li>
                    <NavLink
                      
                      to="/BlocksChartsLarge">
                      Charts Large
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/BlocksChartsSmall">
                      Charts Small
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/BlocksComposed">
                      Composed Cards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/BlocksContentText">
                      Content Text
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/BlocksGrids">
                      Grids
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/BlocksIcons">
                      Icon Cards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/BlocksImages">
                      Image Cards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/BlocksListsLarge">
                      Lists Large
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/BlocksListsSmall">
                      Lists Small
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/BlocksNavigation">
                      Navigation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/BlocksProfilesSmall">
                      Profile Cards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/BlocksProgressCircular">
                      Progress Circular
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/BlocksProgressHorizontal">
                      Progress Horizontal
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/BlocksSparklinesLarge">
                      Sparklines Large
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/BlocksSparklinesSmall">
                      Sparklines Small
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/BlocksStatistics">
                      Statistics
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleUiKitComponents}
                className={clsx({ active: uiKitComponentsOpen })}>
                <span className="sidebar-icon">
                  <FavoriteTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Marketing</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={uiKitComponentsOpen}>
                <ul>
                  <li>
                    <NavLink  to="/MarketingCta">
                      Call to Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/MarketingFeatureSections">
                      Feature Sections
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/MarketingFooters">
                      Footers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/MarketingHeaders">
                      Headers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/MarketingHero">
                      Hero Sections
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/MarketingIcons">
                      Icon Boxes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/MarketingPartners">
                      Partners
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/MarketingPricingTables">
                      Pricing Tables
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/MarketingTestimonials">
                      Testimonials
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>
          <div className="sidebar-header">
            <span>Components</span>
          </div>
          <ul>
            <li>
              <a
                href="#/"
                onClick={toggleWidgets}
                className={clsx({ active: widgetsOpen })}>
                <span className="sidebar-icon">
                  <BusinessCenterTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Widgets</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={widgetsOpen}>
                <ul>
                  <li>
                    <NavLink
                      
                      to="/WidgetsAccordions">
                      Accordions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/WidgetsCalendars">
                      Calendars
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/WidgetsCarousels">
                      Carousels
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/WidgetsContextMenus">
                      Context Menus
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/WidgetsCountUp">
                      Count Up
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/WidgetsDragDrop">
                      Drag & Drop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/WidgetsGuidedTours">
                      Guided Tours
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/WidgetsImageCrop">
                      Image Crop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/WidgetsLoadingIndicators">
                      Loading Indicators
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/WidgetsModals">
                      Modal Dialogs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/WidgetsNotifications">
                      Notifications
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/WidgetsPopovers">
                      Popovers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/WidgetsTabs">
                      Tabs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/WidgetsTooltips">
                      Tooltips
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/WidgetsTreeView">
                      Tree View
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleCharts}
                className={clsx({ active: chartsOpen })}>
                <span className="sidebar-icon">
                  <AssessmentTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Charts</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={chartsOpen}>
                <ul>
                  <li>
                    <NavLink
                      activeClassName="active"
                      
                      to="/ChartsApex">
                      ApexCharts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      
                      to="/Chartjs">
                      Chart.js
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      activeClassName="active"
                      
                      to="/ChartsGauges">
                      Gauges
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      activeClassName="active"
                      
                      to="/ChartsSparklines">
                      Sparklines
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                
                className="nav-link-simple"
                to="/Tables">
                <span className="sidebar-icon">
                  <MoveToInboxTwoToneIcon />
                </span>
                Tables
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="active"
                
                className="nav-link-simple"
                to="/Maps">
                <span className="sidebar-icon">
                  <RoomTwoToneIcon />
                </span>
                Maps
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
          </ul>
          <div className="sidebar-header">
            <span>Forms</span>
          </div>
          <ul>
            <li>
              <NavLink
                activeClassName="active"
                
                className="nav-link-simple"
                to="/FormsControls">
                <span className="sidebar-icon">
                  <SettingsTwoToneIcon />
                </span>
                Controls
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleFormsComponents}
                className={clsx({ active: formsComponentsOpen })}>
                <span className="sidebar-icon">
                  <DepartureBoardTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Components</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={formsComponentsOpen}>
                <ul>
                  <li>
                    <NavLink  to="/FormsClipboard">
                      Clipboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/FormsColorpicker">
                      Colorpicker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/FormsDatepicker">
                      Datepicker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/FormsDualListbox">
                      Dual Listbox
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/FormsInputMask">
                      Input Mask
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/FormsInputSelect">
                      Input Select
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/FormsSlider">
                      Slider
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/FormsSteppers">
                      Steppers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/FormsTextareaAutosize">
                      Textarea Autosize
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/FormsTimepicker">
                      Timepicker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/FormsToggleSwitch">
                      Toggle Switch
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/FormsTypeahead">
                      Typeahead
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/FormsUpload">
                      Upload
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/FormsValidation">
                      Validation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/FormsWysiwygEditor">
                      WYSIWYG Editors
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>
          <div className="sidebar-header">
            <span>Pages</span>
          </div>
          <ul>
            <li>
              <a
                href="#/"
                onClick={toggleCollapsedLayout}
                className={clsx({ active: collapsedLayoutOpen })}>
                <span className="sidebar-icon">
                  <LibraryBooksTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Apps</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={collapsedLayoutOpen}>
                <ul>
                  <li>
                    <NavLink  to="/PageCalendar">
                      Calendar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/PageChat">
                      Chat
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      
                      to="/PageFileManager">
                      File Manager
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/PageProjects">
                      Projects
                    </NavLink>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li>
              <a
                href="#/"
                onClick={togglePages}
                className={clsx({ active: pagesOpen })}>
                <span className="sidebar-icon">
                  <AccountCircleTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Auth</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={pagesOpen}>
                <ul>
                  <li>
                    <a
                      href="#/"
                      onClick={togglePagesLogin}
                      className={clsx('pr-0', { active: pagesLoginOpen })}>
                      <span className="sidebar-item-label">Login</span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRightTwoToneIcon />
                      </span>
                    </a>
                    <Collapse in={pagesLoginOpen}>
                      <ul>
                        <li>
                          <NavLink
                            
                            to="/PageLoginBasic">
                            Basic
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            
                            to="/PageLoginCover">
                            Cover
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            
                            to="/PageLoginIllustration">
                            Illustration
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            
                            to="/PageLoginOverlay">
                            Overlay
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            
                            to="/PageAuthModals">
                            Modal Dialogs
                          </NavLink>
                        </li>
                      </ul>
                    </Collapse>
                  </li>
                  <li>
                    <a
                      href="#/"
                      onClick={togglePagesRegister}
                      className={clsx('pr-0', { active: pagesRegisterOpen })}>
                      <span className="sidebar-item-label">Register</span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRightTwoToneIcon />
                      </span>
                    </a>
                    <Collapse in={pagesRegisterOpen}>
                      <ul>
                        <li>
                          <NavLink
                            
                            to="/PageRegisterBasic">
                            Basic
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            
                            to="/PageRegisterCover">
                            Cover
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            
                            to="/PageRegisterIllustration">
                            Illustration
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            
                            to="/PageRegisterOverlay">
                            Overlay
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            
                            to="/PageAuthModals">
                            Modal Dialogs
                          </NavLink>
                        </li>
                      </ul>
                    </Collapse>
                  </li>
                  <li>
                    <a
                      href="#/"
                      onClick={togglePagesRecover}
                      className={clsx('pr-0', { active: pagesRecoverOpen })}>
                      <span className="sidebar-item-label">Recover</span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRightTwoToneIcon />
                      </span>
                    </a>
                    <Collapse in={pagesRecoverOpen}>
                      <ul>
                        <li>
                          <NavLink
                            
                            to="/PageRecoverBasic">
                            Basic
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            
                            to="/PageRecoverCover">
                            Cover
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            
                            to="/PageRecoverIllustration">
                            Illustration
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            
                            to="/PageRecoverOverlay">
                            Overlay
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            
                            to="/PageAuthModals">
                            Modal Dialogs
                          </NavLink>
                        </li>
                      </ul>
                    </Collapse>
                  </li>
                </ul>
              </Collapse>
            </li>
            <li>
              <a
                href="#/"
                onClick={toggleOtherPages}
                className={clsx({ active: otherPagesOpen })}>
                <span className="sidebar-icon">
                  <DevicesOtherTwoToneIcon />
                </span>
                <span className="sidebar-item-label">Others</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={otherPagesOpen}>
                <ul className="pb-0">
                  <li>
                    <NavLink  to="/PageProfile">
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/PageInvoice">
                      Invoice
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/PageError404">
                      Error 404 Basic
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/PageError500">
                      Error 500 Cover
                    </NavLink>
                  </li>
                  <li>
                    <NavLink  to="/PageError505">
                      Error 505 Illustration
                    </NavLink>
                  </li>
                  <li>
                    <a
                      href="#/"
                      onClick={toggleLevels}
                      className={clsx('pr-0', { active: levelsOpen })}>
                      <span className="sidebar-item-label">
                        Unlimited Levels
                      </span>
                      <span className="sidebar-icon-indicator">
                        <ChevronRightTwoToneIcon />
                      </span>
                    </a>
                    <Collapse in={levelsOpen}>
                      <ul>
                        <li>
                          <a href="#/" onClick={(e) => e.preventDefault()}>
                            Second level link 1
                          </a>
                        </li>
                        <li>
                          <a href="#/" onClick={(e) => e.preventDefault()}>
                            Second level link 2
                          </a>
                        </li>
                      </ul>
                    </Collapse>
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>
          <div className="sidebar-menu-box">
            <div className="sidebar-header">
              <span>Resources</span>
            </div>
            <ul>
              <li>
                <a
                  className="font-weight-normal"
                  href="https://uifort.com/template/bamburgh-react-admin-dashboard-material-ui-pro"
                  rel="noopener noreferrer"
                  target="_blank">
                  <span className="sidebar-icon">
                    <LinkTwoToneIcon />
                  </span>
                  <span className="sidebar-item-label">Product Page</span>
                </a>
              </li>
              <li>
                <a
                  className="font-weight-normal"
                  href="https://docs.uifort.com/bamburgh-react-admin-dashboard-material-ui-pro-docs"
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className="sidebar-icon">
                    <LinkTwoToneIcon />
                  </span>
                  <span className="sidebar-item-label">Documentation</span>
                </a>
              </li>
              <li>
                <a
                  className="font-weight-normal"
                  href="https://docs.uifort.com/bamburgh-react-admin-dashboard-material-ui-pro-docs/TechnicalSupport"
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className="sidebar-icon">
                    <LinkTwoToneIcon />
                  </span>
                  <span className="sidebar-item-label">
                    Changelog
                    <div className="badge badge-success">1.0.0</div>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#/"
                  onClick={toggleDesignSystem}
                  className={clsx('font-weight-normal', {
                    active: designSystemOpen
                  })}>
                  <span className="sidebar-icon">
                    <CameraTwoToneIcon />
                  </span>
                  <span className="sidebar-item-label text-capitalize">
                    bamburgh Design System
                  </span>
                  <span className="sidebar-icon-indicator">
                    <ChevronRightTwoToneIcon />
                  </span>
                </a>
                <Collapse in={designSystemOpen}>
                  <ul className="pb-0">
                    <li>
                      <a
                        href="https://uifort.com/bamburgh-ui-design-system"
                        target="_blank"
                        rel="noopener noreferrer">
                        <span className="sidebar-icon">
                          <LinkTwoToneIcon />
                        </span>
                        <span className="sidebar-item-label">
                          DS Presentation
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://uifort.com/template-bundles"
                        target="_blank"
                        rel="noopener noreferrer">
                        <span className="sidebar-icon">
                          <LinkTwoToneIcon />
                        </span>
                        <span className="sidebar-item-label">
                          Templates Bundles
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://uifort.com/templates/admin-templates"
                        target="_blank"
                        rel="noopener noreferrer">
                        <span className="sidebar-icon">
                          <LinkTwoToneIcon />
                        </span>
                        <span className="sidebar-item-label">
                          Admin Dashboards
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://uifort.com/templates/applications"
                        target="_blank"
                        rel="noopener noreferrer">
                        <span className="sidebar-icon">
                          <LinkTwoToneIcon />
                        </span>
                        <span className="sidebar-item-label">Applications</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://uifort.com/templates/ui-kits"
                        target="_blank"
                        rel="noopener noreferrer">
                        <span className="sidebar-icon">
                          <LinkTwoToneIcon />
                        </span>
                        <span className="sidebar-item-label">UI Kits</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://uifort.com/templates/free"
                        target="_blank"
                        rel="noopener noreferrer">
                        <span className="sidebar-icon">
                          <LinkTwoToneIcon />
                        </span>
                        <span className="sidebar-item-label">Freebies</span>
                      </a>
                    </li>
                  </ul>
                </Collapse>
              </li>
            </ul>
          </div> */}
        </div>
      </PerfectScrollbar>
    </>
  );
};

export default SidebarMenu;
