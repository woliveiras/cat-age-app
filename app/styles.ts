import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textTransform: "uppercase",
  },
  input: {
    height: 60,
    fontSize: 16,
    borderBottomWidth: 2,
    backgroundColor: "#ffdeed",
  },
  nameInput: {
    width: "100%",
    paddingLeft: 10,
  },
  ageInput: {
    width: "48.7%",
    paddingLeft: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  calculateButton: {
    width: 100,
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
    backgroundColor: "#ffdeed",
  },
  buttonText: {
    textAlign: "center",
  },
  resultContainer: {
    marginTop: 20,
    borderTopWidth: 2,
  },
});
