import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeProvider } from '@material-ui/styles';

import MuiTheme from './theme';
import Layout from 'layouts';
import { ModulesTable, ModulesDetail } from 'containers';
import GlobalStateProvider from 'contexts/GlobalStateProvider';
import { ConfirmProvider } from 'utils/ConfirmDialog';

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.3
  };

  
  return (
    <ThemeProvider theme={MuiTheme}>
      <GlobalStateProvider>
        <ConfirmProvider>
          <Switch>
            <Redirect exact from="/" to="/WebsitePage" />
            <Route path={[
              '/WebsitePage',
              '/WebsitePage/:moduleId',
              '/ModuleSiteSetting/:moduleId',
              '/ModuleSeo',
              '/ModuleSeo/:moduleId',
              '/ModulePageSetting',
              '/ModuleSectionSetting',
              '/ModuleWebsiteImage',
              '/ModuleMultiColumns',
              '/ModuleCard',
              '/ModuleButton',
              '/ModuleButton/:moduleId',
              '/ModuleHeader',
              '/ModuleHeader/:moduleId',
              '/ModuleMenuGroup',
              '/ModuleMenuGroup/:moduleId',
              '/ModuleSlideShow',
              '/ModuleSlideShow/:moduleId'
              ]}>
              <Layout>
                <Switch location={location} key={location.pathname}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Route exact path="/WebsitePage" component={ModulesTable} />
                    <Route exact path="/ModuleSeo" component={ModulesTable} />
                    <Route exact path="/ModulePageSetting" component={ModulesTable} />
                    <Route exact path="/ModuleSectionSetting" component={ModulesTable} />
                    <Route exact path="/ModuleWebsiteImage" component={ModulesTable} />
                    <Route exact path="/ModuleMultiColumns" component={ModulesTable} />
                    <Route exact path="/ModuleHeader" component={ModulesTable} />
                    <Route exact path="/ModuleMenuGroup" component={ModulesTable} />
                    <Route exact path="/ModuleSlideShow" component={ModulesTable} />
                    <Route exact path="/ModuleCard" component={ModulesTable} />
                    <Route exact path="/ModuleButton" component={ModulesTable} />
                    <Route path="/WebsitePage/:moduleId" component={ModulesDetail} />
                    <Route path="/ModuleSiteSetting/:moduleId" component={ModulesDetail} />
                    <Route path="/ModuleSeo/:moduleId" component={ModulesDetail} />
                    <Route path="/ModulePageSetting/:moduleId" component={ModulesDetail} />
                    <Route path="/ModuleSectionSetting/:moduleId" component={ModulesDetail} />
                    <Route path="/ModuleWebsiteImage/:moduleId" component={ModulesDetail} />
                    <Route path="/ModuleMultiColumns/:moduleId" component={ModulesDetail} />
                    <Route path="/ModuleHeader/:moduleId" component={ModulesDetail} />
                    <Route path="/ModuleMenuGroup/:moduleId" component={ModulesDetail} />
                    <Route path="/ModuleSlideShow/:moduleId" component={ModulesDetail} />
                    <Route path="/ModuleCard/:moduleId" component={ModulesDetail} />
                    <Route path="/ModuleButton/:moduleId" component={ModulesDetail} />
                  </motion.div>
                </Switch>
              </Layout>
            </Route>
          </Switch>
        </ConfirmProvider>
      </GlobalStateProvider>
    </ThemeProvider>
  );
};

export default Routes;
