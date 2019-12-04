import React, { useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Music from "./pages/Music";
import About from "./pages/About";

import NavBar from "./components/NavBar";
import SideBarMenuItems from "./components/SideBarMenuItems";
import { Sidebar, Menu } from "semantic-ui-react";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/music", name: "Music", Component: Music }
  // { path: '/events', name: 'Events', Component: Events },
];

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
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
            <SideBarMenuItems routes={routes} />
            {/* <Menu.Item as={Link} to='/' icon='home' name='home' />
            <Menu.Item as={Link} to="/contact" icon="mail" name='Contact' />
            <Menu.Item as={Link} to="/links" icon="chain" name='Links & Resources' /> */}
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
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Route>
    </Router>
  );
}
