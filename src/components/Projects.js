import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  IconButton
} from "@material-ui/core";
import projects from "../static/data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";

// const thief = new window.ColorThief();
const useStyles = makeStyles({
  card: {
    maxWidth: 280,
    display: "flex",
    height: "100%",
    flexDirection: "column"
  },
  media: {
    height: 160,
    objectFit: "contain",
    backgroundSize: "contain"
  },
  description: {
    flexGrow: "1"
  }
});
// const getColor = (index, url, colors, setColors) => {
//   var img = document.createElement("img");
//   img.setAttribute("crossOrigin", "");
//   img.setAttribute("src", url);
//   img.addEventListener("load", () => {
//     setColors({ ...colors, [index]: thief.getColor(img, 90) });
//   });
// };
export default function Projects() {
  const theme = useStyles();
  const [colors, setColors] = React.useState({});
  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="stretch" spacing={2}>
        {projects.map((project, index) => {
          //   getColor(index, project.url, colors, setColors);
          return (
            <Grid item key={index}>
              <Card className={theme.card}>
                <CardMedia
                  //   style={
                  //     colors[index]
                  //       ? {
                  //           backgroundColor: `rgb(${colors[index][0]},${
                  //             colors[index][1]
                  //           },${colors[index][2]})`
                  //         }
                  //       : ""
                  //   }
                  className={theme.media}
                  image={project.thumbnail}
                  title={project.title}
                />
                <CardContent className={theme.description}>
                  <Typography gutterBottom variant="h6">
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {project.description}
                  </Typography>
                </CardContent>
                {/* </CardActionArea> */}
                <CardActions>
                  <IconButton aria-label="GitHub">
                    {/* <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    > */}
                    <FontAwesomeIcon icon={["fab", "github"]} color="#161616" />
                    {/* </a> */}
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}