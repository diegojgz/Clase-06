//////////////////////////////////////////////////////////////////////////////////
/////Importar funciones o clases

import Button from  ".//Components/button.js";
import Input from "./Components/input.js";
import Video from "./Components/video.js";
//////////////////////////////////////////////////////////////////////////////////
///////Datos

let myArray1 = ["Login", "SignUp", "Reset", "Cancel"];

let inputArray = ['Username', 'Surname', 'E-mail', 'Password'];

let inputArrayFiltered = inputArray.filter(element => element == "Password");

//////////////////////////////////////////////////////////////////////////////////
////Funciones

function RenderButton(text){
  let myButton = new Button ("app", text);
  myButton.render();
};

function RenderInput(type) {
  let input_type = "none"
  switch (type) {
      case "Password":
          input_type = "password"
          break;
      case "E-mail":
          input_type = "email";
          break;
      default:
          input_type = "text"
          break;
  }
  let myInput = new Input("app", input_type);
  myInput.render();
}

/////////////////////////////////////////////////////////////////////////////
////Logica de aplicacion

myArray1.forEach(element => RenderButton(element));

inputArrayFiltered.forEach(element => RenderInput(element));

let myVideo = new Video("videoID", "https://www.w3schools.com/tags/movie.mp4",320, 480, "video/mp4");
myVideo.render();

  