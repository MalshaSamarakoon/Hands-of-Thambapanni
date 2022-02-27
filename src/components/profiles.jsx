import React from "react";
import { link, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const images = [
  {
    url: "/img/cane.jpg",
    title: "Cane",
    width: "25%",
    link: "./cane",
    //href:"./bathik",
  },
  {
    url: "/img/pottery.jpg",
    title: "Pottery",
    width: "25%",
  },
  {
    url: "/img/masks.jpg",
    title: "Masks",
    width: "25%",
  },
  {
    url: "/img/handloom.jpg",
    title: "Handloom",
    width: "25%",
  },
  {
    url: "/img/bathik.jpg",
    title: "Bathik",
    width: "25%",
    link: "./bathik",
  },
  {
    url: "/img/brass.jpg",
    title: "Brass",
    width: "25%",
  },
  {
    url: "/img/carvings.jpg",
    title: "Carvings",
    width: "25%",
  },
  {
    url: "/img/laksha.png",
    title: "Laksha",
    width: "25%",
  },
  {
    url: "/img/beeralu.jpg",
    title: "Beeralu",
    width: "25%",
  },
  {
    url: "/img/drums.jpg",
    title: "Drums",
    width: "25%",
  },
  {
    url: "/img/coir.jpg",
    title: "Coir",
    width: "25%",
  },
  {
    url: "/img/others.jpg",
    title: "Others",
    width: "25%",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("s")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
    fontSize: 30,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

export default function Profile() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div id="Profiles">
      <div className="container mt-4">
        <div className="section-title">
          <h2 style={{ color: "#318E6F" }}>Top Enterprises</h2>
        </div>
      </div>

      <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            onClick={() => {
              navigate(image?.link);
            }}
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
    </div>
  );
}
