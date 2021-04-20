export default class PokeService {
  static getGif() {
    return new Promise(function (resolve, reject) {
      let rand = Math.floor(Math.random() * 100) + 1;
      let request = new XMLHttpRequest();
      const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${rand}.gif`;

      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
