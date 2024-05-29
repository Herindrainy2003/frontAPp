import React, { useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { allSera } from "../../Redux/Actions/ActionSera";
import { Buffer } from "buffer/";
import Loading from "../Loading/Loading";
import { SeraMisyMitady } from "../../Redux/Actions/ActionTadySera";

function Display() {
  //pour le sera
  const seraList = useSelector((state) => state.allSera);
  const { loading, error } = seraList;
  const seras = seraList.sera;
  const dispatch = useDispatch();

  //pour les seras que les gens besoins
  const seraTadiavinaList = useSelector((state) => state.seraMisyMitady);
  const { loadingT, errorT } = seraTadiavinaList;
  const serasT = seraTadiavinaList.sera;

  useEffect(() => {
    dispatch(allSera());
    console.log(seraTadiavinaList);
    dispatch(SeraMisyMitady());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{textAlign : 'center'}}>IREO SERA</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        {loading && <Loading />}
        {error && <p>Error: {error.message}</p>}
        {!loading &&
          !error &&
          seras.map((sera, index) => (
            <Card key={index} style={{ margin: "16px", width: "300px" }}>
              <CardMedia
                component="img"
                height="280"
                image={`data:image/png;base64,${Buffer.from(
                  sera.image.data
                ).toString("base64")}`}
                alt={sera.nameSera}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Contact: {sera.contact}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description: {sera.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Prix: {sera.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Seraina
                </Button>
              </CardActions>
            </Card>
          ))}
      </div>
      <h1 style={{textAlign : 'center'}}>SERA MISY PITADY</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        {loading && <Loading />}
        {errorT && <p>Error: {error.message}</p>}
        {!loadingT &&
          !error &&
          serasT.map((sera, index) => (
            <Card key={index} style={{ margin: "16px", width: "300px" }}>
              <CardMedia
                component="img"
                height="280"
                image={`data:image/png;base64,${Buffer.from(
                  sera.image.data
                ).toString("base64")}`}
                alt={sera.nameSera}
              />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Contact: {sera.contact}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Description: {sera.description}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Prix: {sera.price}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small" color="primary">
                  Seraina
                </Button>
              </CardActions>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default Display;
