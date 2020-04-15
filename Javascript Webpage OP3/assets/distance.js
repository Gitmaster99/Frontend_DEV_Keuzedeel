let dp1 = document.getElementById("output1");
let dp2 = document.getElementById("output2");
let dp3 = document.getElementById("output3");
let dp4 = document.getElementById("output4");

dp1.style.display = "none";
dp2.style.display = "none";
dp3.style.display = "none";
dp4.style.display = "none";

document.getElementById("distance_input").addEventListener("input", function (e) {
  dp1.style.display = "block";
  dp2.style.display = "none";
  dp3.style.display = "none";
  dp4.style.display = "none";

  let inches = e.target.value;

  if (inches == 0) {
    dp1.style.display = "none";
  }

  document.getElementById("meterOutput").innerHTML = inches * 0.0254;

  document.getElementById("centimeterOutput").innerHTML = inches * 2.54;

  document.getElementById("millimeterOutput").innerHTML = inches * 25.4;
});

document
  .getElementById("distance_input_m")
  .addEventListener("input", function (e) {
    dp2.style.display = "block";
    dp1.style.display = "none";
    dp3.style.display = "none";
    dp4.style.display = "none";

    let meters = e.target.value;

    if (meters == 0) {
      dp2.style.display = "none";
    }

    document.getElementById("inchesOutput").innerHTML = meters * 39.3700787;

    document.getElementById("centimetersOutput").innerHTML = meters * 100;

    document.getElementById("millimetersOutput").innerHTML = meters * 1000;
  });

document
  .getElementById("distance_input_cm")
  .addEventListener("input", function (e) {
    dp3.style.display = "block";
    dp1.style.display = "none";
    dp2.style.display = "none";
    dp4.style.display = "none";

    let centimeters = e.target.value;

    if (centimeters == 0) {
      dp3.style.display = "none";
    }

    document.getElementById("inchessOutput").innerHTML = centimeters * 0.3937007874;

    document.getElementById("metersOutput").innerHTML = centimeters * 0.01;

    document.getElementById("millimeterssOutput").innerHTML = centimeters * 10;
  });

document
  .getElementById("distance_input_mm")
  .addEventListener("input", function (e) {
    dp4.style.display = "block";
    dp1.style.display = "none";
    dp2.style.display = "none";
    dp3.style.display = "none";

    let millimeters = e.target.value;

    if (millimeters == 0) {
      dp4.style.display = "none";
    }

    document.getElementById("inchesssOutput").innerHTML = millimeters * 0.0393700787;

    document.getElementById("meterssOutput").innerHTML = millimeters * 0.001;

    document.getElementById("centimeterssOutput").innerHTML = millimeters * 0.1;
  });
