
import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    marginTop: 20,
    [theme.breakpoints.up("sm")]:{
      marginTop: 30,
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: 35,
    },
  },
  '& .MuiGrid-spacing-xs-4': {
    // margin: 0,
  },
  sidebar: {
    display: "block",
    [theme.breakpoints.down("lg")]: {
      marginBottom: 30,
    },
  },
  card: {
    [theme.breakpoints.down("xs")]: {
      margin: "0 auto",
    },
  },
  loadMore: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    margin: "30px 0 50px",
  },
}));