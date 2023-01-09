import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: "Roboto",
    margin: "auto",
    marginTop: "0.5rem",
    maxWidth: "60%",
    textAlign: "center",
    border: "1px solid #E8E8E8",
    borderRadius: "5px",
  },
  wordBox: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    lineBreak: "anywhere",
    width: "100%",
    fontFamily: "Roboto",
    fontSize: "1.7rem",
    fontWeight: 500,
    textAlign: "left",
    color: "#444",
    lineHeight: "1.8rem",
    letterSpacing: "0.05rem",
  },
  correct: {
    color: "darkgreen",
  },
  mistake: {
    color: "red",
  },
  normal: {
    color: "#444",
  },
  currentWord: {
    backgroundColor: "khaki",
    borderRadius: "5px",
    display: "inline-block",
  },
  word: {
    padding: "0.3rem",
    display: "inline-block",
    borderRadius: "5px",
  },
  wordMatched: {
    backgroundColor: "lightgreen",
    borderRadius: "5px",
    padding: "0.3rem",
    display: "inline-block",
  },
  wordMistaken: {
    backgroundColor: "tomato",
    borderRadius: "5px",
    padding: "0.3rem",
    display: "inline-block",
  },
});
export default useStyles;
