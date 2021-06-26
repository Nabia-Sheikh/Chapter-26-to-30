function ques1() {
  var inp1 = Number(prompt("Enter Any positive number"));

  var roundNum = Math.round(inp1);
  var floorNum = Math.floor(inp1);
  var ceilNum = Math.ceil(inp1);

  document.getElementById("ques1").innerHTML =
    "Number: " +
    inp1 +
    "<br> Round off value:  " +
    roundNum +
    "<br>Floor value: " +
    floorNum +
    "<br> Ceil Value: " +
    ceilNum;
}

function ques2() {
  var inp2 = Number(prompt("Enter Negative number"));

  var roundNum = Math.round(inp2);
  var floorNum = Math.floor(inp2);
  var ceilNum = Math.ceil(inp2);

  document.getElementById("ques2").innerHTML =
    "Number: " +
    inp2 +
    "<br> Round off value:  " +
    roundNum +
    "<br>Floor value: " +
    floorNum +
    "<br> Ceil Value: " +
    ceilNum;
}

function ques3() {
  var inp3 = Number(prompt("Enter Negative number"));

  var absolute3 = Math.abs(inp3);

  document.getElementById("ques3").innerHTML =
    "The Absolute value of  " + inp3 + " is " + absolute3;
}

function ques4() {
  var dice4 = Math.random() * 6 + 1;
  var dice4a = Math.floor(dice4);
  document.getElementById("ques4").innerHTML = "Random dice value : " + dice4a;

  var dice4 = Math.random() * 6 + 1;
  var dice4a = Math.floor(dice4);
  document.getElementById("ques4").innerHTML +=
    " <br> Random dice value : " + dice4a;
}

function ques5() {
  var coin5 = Math.random() * 2 + 1;
  var coin5a = Math.floor(coin5);
  document.getElementById("ques5").innerHTML = coin5a;
  if (coin5a == 2) {
    document.getElementById("ques5").innerHTML +=
      " <br> Random dice value : Heads ";
  } else {
    document.getElementById("ques5").innerHTML +=
      " <br> Random dice value : Tails ";
  }
}

function ques6() {
  var random6 = Math.random() * 100 + 1;
  var random6a = Math.floor(random6);
  document.getElementById("ques6").innerHTML =
    "Random number between 1 and 100 : " + random6a;
}

function ques7() {
  var inp7 = prompt("Enter your weight in Kilograms");

  var sepNumbInp7 = inp7.slice(0, inp7.indexOf("k"));

  document.getElementById("ques7").innerHTML =
    "The weight of user is " + sepNumbInp7 + " Kilograms";
}

function ques8() {
  var randomQues8 = Math.floor(Math.random() * 10 + 1);

  var inp8 = Number(prompt("Enter number between 1 and 10"));
  console.log(randomQues8);
  for (var i = 0; i <= 1; i++) {
    if (inp8 == randomQues8) {
      document.getElementById("ques8").innerHTML = "Congratulions!";
      break;
    } else {
      alert("Try again!");
      var inp8 = Number(prompt("Enter number between 1 and 10"));
      if (i == 1) {
        document.getElementById("ques8").innerHTML = "You failed!";
      }
    }
  }
}
