import { Box, DateInput, TextInput, Button } from "grommet";
import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "grommet/components/Avatar";
import ButtonMaterial from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

let choiceColor = "rgb(237, 237, 237)";
let colorButtonOne = `${choiceColor}`;
let colorButtonTwo = `${choiceColor}`;
const useStyles = makeStyles({
  buttonOne: {
    backgroundColor: `${colorButtonOne}`,
    color: "rgb(162, 162, 163)",
    "&:hover": {
      border: "solid 1px red",
    },
  },
  buttonTwo: {
    backgroundColor: `${colorButtonTwo}`,
    color: "rgb(162, 162, 163)",
    "&:hover": {
      border: "solid 1px red",
    },
  },
});

function HouseForm() {
  const classes = useStyles();
  const [time, setTime] = React.useState("");
  const [nbPiece, setNbPiece] = React.useState("");
  const [size, setSize] = React.useState("");
  const [capital, setCapital] = React.useState("");
  const [dateBeginAssurance, setDateBeginAssurance] = React.useState("");

  return (
    <Box
      direction={"column"}
      gap={"small"}
      align={"center"}
      alignContent={"center"}
      alignSelf={"center"}
      style={{ paddingLeft: "25%", paddingRight: "25%" }}
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
          <span>Veuillez renseigner vos informations.</span>
        </Box>

        <div
          style={{
            gridTemplateColumns: "1fr 3fr",
            display: "grid",
            gap: "10px",
            width: "100%",
          }}
        >
          <div>Votre Maison est louer :</div>
          <div>
            <Box direction={"row"} gap={"small"}>
              <Button
                className={classes.buttonOne}
                primary
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  maxWidth: "355px",
                }}
                onClick={() => {
                  setTime("a l'année");
                }}
              >
                <img
                  src={
                    "data:image/png;base64,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"
                  }
                />
                À l’année au titre de la résidence principale du locataire ou
                des colocataire
              </Button>

              <Button
                className={classes.buttonTwo}
                primary
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  maxWidth: "355px",
                  backgroundColor: "",
                }}
                onClick={() => {
                  setTime("courte durée");
                }}
              >
                <img
                  src={
                    "data:image/png;base64,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"
                  }
                />
                En courte durée (location saisonnière avec renonciation à
                recours contre le locataire)
              </Button>
            </Box>
          </div>
          <div>Nombres de Pièces :</div>
          <div>
            <Box direction={"row"} gap={"medium"} style={{ width: "70%" }}>
              <Button
                hoverIndicator="light-1"
                onClick={() => {}}
                active
                onClick={() => {
                  setNbPiece("1");
                }}
              >
                <Box pad="small" direction="row" align="center" gap="small">
                  1
                </Box>
              </Button>
              <Button
                hoverIndicator="light-1"
                onClick={() => {}}
                active
                onClick={() => {
                  setNbPiece("2");
                }}
              >
                <Box pad="small" direction="row" align="center" gap="small">
                  2
                </Box>
              </Button>
              <Button
                hoverIndicator="light-1"
                onClick={() => {}}
                active
                onClick={() => {
                  setNbPiece("3");
                }}
              >
                <Box pad="small" direction="row" align="center" gap="small">
                  3
                </Box>
              </Button>
              <Button
                hoverIndicator="light-1"
                onClick={() => {}}
                active
                onClick={() => {
                  setNbPiece("4");
                }}
              >
                <Box pad="small" direction="row" align="center" gap="small">
                  4
                </Box>
              </Button>
              <Button
                hoverIndicator="light-1"
                onClick={() => {}}
                active
                onClick={() => {
                  setNbPiece("5");
                }}
              >
                <Box pad="small" direction="row" align="center" gap="small">
                  5
                </Box>
              </Button>
              <Button
                hoverIndicator="light-1"
                onClick={() => {}}
                active
                onClick={() => {
                  setNbPiece("6");
                }}
              >
                <Box pad="small" direction="row" align="center" gap="small">
                  6
                </Box>
              </Button>
              <Button
                hoverIndicator="light-1"
                onClick={() => {}}
                active
                onClick={() => {
                  setNbPiece("7");
                }}
              >
                <Box pad="small" direction="row" align="center" gap="small">
                  7
                </Box>
              </Button>
              <Button
                hoverIndicator="light-1"
                onClick={() => {}}
                active
                onClick={() => {
                  setNbPiece("8");
                }}
              >
                <Box pad="small" direction="row" align="center" gap="small">
                  8
                </Box>
              </Button>
              <Button
                hoverIndicator="light-1"
                onClick={() => {}}
                active
                onClick={() => {
                  setNbPiece("9");
                }}
              >
                <Box pad="small" direction="row" align="center" gap="small">
                  9
                </Box>
              </Button>
            </Box>
          </div>
          <div>Indiquer le nombre de nombre de m2 :</div>
          <div>
            <TextInput
              placeholder="type here"
              value={size}
              onChange={(event) => setSize(event.target.value)}
            />
          </div>
          <div>Choississez un capital mobilier :</div>
          <div>
            <Box direction={"row"} gap={"medium"} style={{ width: "70%" }}>
              <Button
                hoverIndicator="light-1"
                onClick={() => {
                  setCapital("10 000 €");
                }}
                active
              >
                <Box pad="small" direction="row" align="center" gap="small">
                  10 000 €
                </Box>
              </Button>
              <Button
                hoverIndicator="light-1"
                onClick={() => {
                  setCapital("20 000 €");
                }}
                active
              >
                <Box pad="small" direction="row" align="center" gap="small">
                  20 000 €
                </Box>
              </Button>
            </Box>
          </div>
          <div> Date à laquelle vous souhaitez débuter votre assurance :</div>
          <div>
            <DateInput
              format="dd/mm/yyyy"
              value={dateBeginAssurance}
              onChange={(event) =>
                setDateBeginAssurance(new Date().toISOString())
              }
            />
          </div>
        </div>

        <Box
          gap={"xlarge"}
          direction={"row"}
          margin={"large"}
          justify={"between"}
        >
          <ButtonMaterial
            color="primary"
            variant="contained"
            component={NavLink}
            to="/app/rules"
            style={{ borderRadius: "50px" }}
          >
            précédent
          </ButtonMaterial>
          <ButtonMaterial
            color="secondary"
            variant="contained"
            style={{ borderRadius: "50px" }}
          >
            Suivante
          </ButtonMaterial>
        </Box>
      </Box>
    </Box>
  );
}

export default HouseForm;
