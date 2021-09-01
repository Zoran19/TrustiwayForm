import React from "react";

import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Box, Grommet, Image } from "grommet";
import HouseForm from "../components/HouseForm";
import RulesForm from "../components/RulesForm";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

function Pricing() {
  return (
    <Grommet>
      <CssBaseline />
      <header>
        <Box
          height="xxsmall"
          width="small"
          style={{ borderRadius: "50px" }}
          elevation={"medium"}
        >
          <Image
            fit="contain"
            src="https://www.trustiway.com/trusti-pno-test/static/logo-f4dfc7f7d36487025c67efbbf1467778.png"
            margin={"none"}
          />
        </Box>
      </header>

      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/app/rules">
              <RulesForm />
            </Route>
            <Route exact path="/app/create/house">
              <HouseForm />
            </Route>
            <Redirect to="/app/rules" />
          </Switch>
        </BrowserRouter>
      </main>
    </Grommet>
  );
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Pricing;
