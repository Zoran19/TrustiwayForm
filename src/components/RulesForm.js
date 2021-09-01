import { Box, Paragraph } from "grommet";

import Button from "@material-ui/core/Button";
import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "grommet/components/Avatar";

function RulesForm() {
  return (
    <Box
      direction={"column"}
      gap={"small"}
      align={"center"}
      alignContent={"center"}
      alignSelf={"center"}
      style={{ marginTop: "4%" }}
    >
      <Box gap={"medium"}>
        <Box>
          <Avatar
            src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
            size={"large"}
          />
        </Box>
        <Box
          style={{
            marginRight: "12%",
            marginLeft: "5%",
            padding: "1%",
            borderRadius: "10px",
            paddingLeft: "2%",
          }}
          elevation={"small"}
        >
          <span>
            Vous déclarez que votre habitation respect les critère ci-dessous.
          </span>
        </Box>

        <Box>
          <Box margin={"small"}>
            <Paragraph
              fill={"true"}
              style={{ color: "rgb(68, 68, 68)", fontSize: "18px" }}
            >
              - Le bien a une superficie inférieure ou égale à 250 m2
              <br />
              - Le bâtiment comporte plus de 90% de matériaux durs dans la
              construction et dans la couverture.
              <br />
              - Vous déclarez ne pas avoir occasionné ou subi moins de 2
              sinistres sur les 24 derniers mois.
              <br />- Le bien se situe en France métropolitaine (hors Corse) ou
              dans les DOM TOM
            </Paragraph>

            <Paragraph style={{ color: "rgb(68, 68, 68)" }} fill={"true"}>
              <strong>
                En cliquant le bouton "Suivant", je valide les déclarations pour
                commencer mon contrat
              </strong>
            </Paragraph>

            <Box
              gap={"xlarge"}
              direction={"row"}
              margin={"large"}
              justify={"between"}
            >
              <Button
                color="primary"
                variant="contained"
                style={{ borderRadius: "50px" }}
              >
                précédent
              </Button>
              <Button
                color="secondary"
                variant="contained"
                component={NavLink}
                to="/app/create/house"
                style={{ borderRadius: "50px" }}
              >
                Suivante
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RulesForm;
