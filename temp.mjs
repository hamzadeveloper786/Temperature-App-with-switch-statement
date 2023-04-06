window.tempcheck() 
 function tempcheck(){
    let temp = document.querySelector("#temp").value;
    console.log("temp :", temp);
    
    let  message;
    switch(true) {
      case(temp >= 30):
      message ="Its hot day! Stay hydrated."
      break;

      case(temp >=20 && temp < 30):
      message = "It's a nice day! Enjoy the weather."
      break;

      case(temp >= 10 && temp < 20):
      message = "It's a bit chilly! Bring a sweater."
      break;

      case(temp >= 0 && temp < 10):
      message = "It's cold outside! Wear a coat."
      break;

      case(temp < 0):
      message = "Brr, it's freezing! Bundle up."
      break;

      default:
        message = "Sorry, I am not sure what to say. Please check the temperature."
    }
    console.log(message)
    document. querySelector("#output").innerHTML=message ;
}