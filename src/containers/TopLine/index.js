import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux';
import { compose } from 'redux';

import useStyles from './topLineStyles';
import TopLineDrawer from './TopLineDrawer';
import ToggleSwitch from './ToggleSwitch';

const TopLine = props => {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const [signIn, setSignIn] = useState(false);
  const handleChange = event => {
    if (signIn) {
      props.history.push("/");

    } else {
      props.history.push("/sign-in");
    }

    setSignIn(event.target.checked)
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const links = props.isAuthenticated
    ? [
      { to: "/logout", label: "Logout" }
    ]
    : [
      { to: "/sign-in", label: "Sign In" },
      { to: "/sign-up", label: "Sign Up" }
    ];

  const handleClickMobileMenu = event => setAnchorEl(event.currentTarget);
  const handleCloseMobileMenu = () => {
    if (props.isAuthenticated) {
      return;
    }
    setAnchorEl(null);
  };

  const renderMobileMenu = (
    <Menu
      id="mobile-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleCloseMobileMenu}
      className={classes.mobileMenu}
    >
      {links.map(link => (
        <MenuItem key={link.label}>
          <Link to={link.to} onClick={handleCloseMobileMenu}>
            {link.label}
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Quick Shop
          </Typography>

          <TopLineDrawer open={state.left} toggleDrawer={toggleDrawer} />

          <div className={classes.sectionDeskTop}>
            <ToggleSwitch signIn={signIn} handleChange={handleChange} />

            <Link to="/sign-up" className={classes.linkSignUp}>Sign Up</Link>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="more"
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleClickMobileMenu}
            >
              <MoreVertIcon />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
      
      <Toolbar />
      {renderMobileMenu}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: Boolean(state.auth.token)
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(TopLine)