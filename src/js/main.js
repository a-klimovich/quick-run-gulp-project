// Vivus library example
const userIcon = document.getElementById("user");

if (userIcon) {
  new Vivus("user", {
    type: "scenario",
    duration: 100,
  });
}