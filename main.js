function calc() {
    let a = parseInt(document.querySelector("#value1").value);
    let b = parseInt(document.querySelector("#value2").value);
    let op = document.querySelector("#Operator").value;
    let calculate;

    if (op == "Add") {
        calculate = a + b;
    } else if (op == "Min") {
        calculate = a - b;
    } else if (op == "Div") {
        calculate = a / b;
    } else if (op == "Mul") {
        calculate = a * b;
    } 

  
    document.querySelector("#result").innerHTML = calculate;
  
}