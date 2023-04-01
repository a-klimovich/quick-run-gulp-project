// EXEMPLE lib Vivus
const userIcon = document.getElementById("user");

if (userIcon) {
  new Vivus("user", {
    type: "scenario",
    duration: 100,
  });
}

(function () {
  console.log("done");
})();
