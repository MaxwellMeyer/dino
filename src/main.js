import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import PokeService from "./poke-service.js";

$(document).ready(function () {
  $(".butt").click(function () {
    let promise = PokeService.getGif();
    promise.then(
      function (response) {
        const body = JSON.parse(response);
        console.log(body);
        $(".show").html(body["sprites"].front_shiny); //
      },
      function (error) {
        $(".show").text(`There was an error processing your request: ${error}`);
      }
    );
  });
});
