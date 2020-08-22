import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Icon,
} from "@material-ui/core";
import { css } from "@emotion/core";

const Layout = ({ children, title, right }) => {
  return (
    <div>
      <main>
        <AppBar
          position="static"
          css={css`
            display: flex;
          `}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography
              variant="h6"
              css={css`
                flex-grow: 1;
              `}
            >
              {title}
            </Typography>
            {right}
          </Toolbar>
        </AppBar>
        <div>{children}</div>
      </main>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
  right: PropTypes.element
};

export default Layout;
