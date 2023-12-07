import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/drafts">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(['/inbox/:id', '/drafts', '/trash']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab label="Inbox" value="/inbox/:id" to="/inbox/1" component={Link} />
      <Tab label="Drafts" value="/drafts" to="/drafts" component={Link} />
      <Tab label="Trash" value="/trash" to="/trash" component={Link} />
    </Tabs>
  );
}

function CurrentRoute() {
  const location = useLocation();

  return (
    <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
      Current route: {location.pathname}
    </Typography>
  );
}

export default function TabsRouter() {
  return (
    <Router>
      <Box sx={{ width: '100%' }}>
        <Routes>
          <Route path="*" element={<CurrentRoute />} />
        </Routes>
        <MyTabs />
      </Box>
    </Router>
  );
}

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
// import { StaticRouter } from 'react-router-dom/server';
// import Link from '@mui/material/Link';
// import Box from '@mui/material/Box';

// const LinkBehavior = React.forwardRef((props, ref) => (
//   <RouterLink ref={ref} to="/material-ui/getting-started/installation/" {...props} />
// ));

// function Router(props) {
//   const { children } = props;
//   if (typeof window === 'undefined') {
//     return <StaticRouter location="/">{children}</StaticRouter>;
//   }

//   return <MemoryRouter>{children}</MemoryRouter>;
// }

// Router.propTypes = {
//   children: PropTypes.node,
// };

// export default function LinkRouter() {
//   return (
//     <Box sx={{ typography: 'body1' }}>
//       <Router>
//         <Link component={RouterLink} to="/">
//           With prop forwarding
//         </Link>
//         <br />
//         <Link component={LinkBehavior}>Without prop forwarding</Link>
//       </Router>
//     </Box>
//   );
// }


// class AppContainer extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div id="div_app_container" className="app-container">
//         <div id="div_nav" className="nav-bar">
//           <span>Navigation bar</span>
//           <Link to="/hello">
//             <span>Link to /hello</span>
//           </Link>
//           <Link to="/world">
//             <span>Link to /world</span>
//           </Link>
//           <Link to="/clearlyinvalidpath">
//             <span>Link to a clearly invalid path.</span>
//           </Link>
//         </div>
//         <div id="main_container" className="main-container">
//           <span>Main Container</span>
//           <Switch>
//             <Route exact path="/">
//               <div>
//                 <span>
//                   Default container. We are in root path
//                 </span>
//               </div>
//             </Route>
//             <Route path="/hello" component={HelloBanner} />
//             <Route path="/world">
//               <WorldBanner />
//             </Route>
//             <Redirect to="/" />
//           </Switch>
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <BrowserRouter>
//     <AppContainer />
//   </BrowserRouter>,
//   document.getElementById("app")
// );