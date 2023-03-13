//Java file for writing logic and functions
let screen = document.getElementById("display");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener
  ("click", (e) => 
  {
  //Adding functions for clearing, printing result, and error
    buttonText = e.target.innerText;
    if (buttonText == "AC") 
    {
      screenValue = "";
      screen.value = screenValue;
    } 
    else if (buttonText == "=") 
    {
      var result;
      try 
      {
        result = eval(screenValue); //printing result
      } 
      catch (error) 
      {
        result = "Expression error";
      }
      screen.value = result;
    } 
    else 
    {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  }
  );
}