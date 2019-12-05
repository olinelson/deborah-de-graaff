import React, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Music from "./pages/Music";
import About from "./pages/About";
import Teaching from "./pages/Teaching";

import NavBar from "./components/NavBar";
import SideBarMenuItems from "./components/SideBarMenuItems";
import { Sidebar, Menu } from "semantic-ui-react";
import Footer from "./components/Footer";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/music", name: "Music", Component: Music },
  { path: "/teaching", name: "Teaching", Component: Teaching }
];

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Router>
        <Route>
          <Sidebar.Pushable as='div'>
            <Sidebar
              as={Menu}
              animation='push'
              icon='labeled'
              onHide={() => setVisible(false)}
              vertical
              visible={visible}
              width='thin'
              pointing
              inverted
            >
              <SideBarMenuItems
                setVisible={e => setVisible(e)}
                routes={routes}
              />
            </Sidebar>

            <Sidebar.Pusher className='appContainer'>
              <NavBar
                routes={routes}
                sideBarIsOpen={visible}
                setVisible={e => setVisible(e)}
              />

              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames='page'
                      unmountOnExit
                    >
                      <div className='page'>
                        <Component />
                        <Footer />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))}
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Route>
      </Router>
    </>
  );
}
