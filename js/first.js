
  function getValues() {
      const num1 = Number(document.getElementById("num1").value);
      const num2 = Number(document.getElementById("num2").value);
      return [num1, num2];
    }

function add() {
    const [num1, num2] = getValues();
    document.getElementById("sum-el").innerText = "Result: " + [num1 + num2];
   }

   function subtract() {
    const [num1, num2] = getValues();
    document.getElementById("sum-el").innerText = "Result: " + [num1 - num2];
   }

   function multiply() {
    const [num1, num2] = getValues();
    document.getElementById("sum-el").innerText = "Result: " + [num1 * num2];
   }

   function division(){
    const [num1, num2] = getValues();
    document.getElementById("sum-el").innerText = "Result: " + [num1 / num2];
   }