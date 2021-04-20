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
        const body = response;
        $(".show").html(
          body.moves.sprites.versions.generation -
            v.black -
            white.animated.front -
            shiny
        );
      },
      function (error) {
        $(".show").text(`There was an error processing your request: ${error}`);
      }
    );
  });
});
