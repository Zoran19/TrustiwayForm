import {Box, DateInput, RadioButtonGroup, TextInput} from "grommet";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import React from "react";


function ApartForm() {

    const [time, setTime] = React.useState('');
    const [nbPiece, setNbPiece] = React.useState('');
    const [size, setSize] = React.useState('');
    const [capital, setCapital] = React.useState('');
    const [dateBeginAssurance, setDateBeginAssurance] = React.useState("");

    return(<Box  gap={"medium"} >
        <Box direction={"row"} gap={"medium"}>
            <Typography variant="p" color="inherit" >
                <strong>Votre Maison est louer:</strong>
            </Typography>
            <RadioButtonGroup

                direction={"row"}
                align={"center"} alignContent={"center"} alignSelf={"center"}
                name="doc"
                options={["A l'année","courte durée"]}
                value={time}
                onChange={(event) => setTime(event.target.value)}
            />
        </Box>
        <Box direction={"row"} gap={"medium"}>
            <Typography variant="p" color="inherit" >
                <strong>Nombres de pièces:</strong>
            </Typography>
            <RadioButtonGroup
                gap={"medium"}
                direction={"row"}
                align={"center"} alignContent={"center"} alignSelf={"center"}
                name="doc"
                options={["1","2","3","4","5","6","7","8","9"]}
                value={nbPiece}
                onChange={(event) => setNbPiece(event.target.value)}
            />
        </Box>

        <Box direction={"row"} gap={"medium"}>
            <Typography variant="p" color="inherit" >
                <strong>Indiquer le nombre de m2:</strong>
            </Typography>
            <TextInput
                placeholder="type here"
                value={size}
                onChange={event => setSize(event.target.value)}
            />
        </Box>
        <Box direction={"row"} gap={"medium"}>
            <Typography variant="p" color="inherit" >
                <strong>Choisissez un capital mobilier :</strong>
            </Typography>
            <RadioButtonGroup
                direction={"row"}
                align={"center"} alignContent={"center"} alignSelf={"center"}
                name="doc"
                options={["0 €","10 000 €","20 000 €"]}
                value={capital}
                onChange={(event) => setCapital(event.target.value)}
            />
        </Box>
        <Box direction={"row"} gap={"medium"}>
            <Typography variant="p" color="inherit" >
                <strong>Date à laquelle vous souhaitez débuter votre assurance :</strong>
            </Typography>
            <DateInput
                format="dd/mm/yyyy"
                value={dateBeginAssurance}
                onChange={(event) => setDateBeginAssurance((new Date()).toISOString())}
            />
        </Box>
        <Box gap={"xlarge"} direction={"row"}   align={"center"} alignContent={"center"} alignSelf={"center"}>
            <Button color="primary" variant="contained" style={{borderRadius:"50px"}}>précédent</Button>
            <Button color="secondary"  variant="contained" style={{borderRadius:"50px"}}>Suivante</Button>
        </Box>
    </Box>)

}

export default ApartForm;