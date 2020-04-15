let dp1 = document.getElementById("output1");
let dp2 = document.getElementById("output2");
let dp3 = document.getElementById("output3");
let dp4 = document.getElementById("output4");

dp1.style.display = "none";
dp2.style.display = "none";
dp3.style.display = "none";
dp4.style.display = "none";

document.getElementById("temperature_input").addEventListener("input", function (e) {
  dp1.style.display = "block";
  dp2.style.display = "none";
  dp3.style.display = "none";
  dp4.style.display = "none";

  let celcius = e.target.value;

  if (celcius == 0) {
    dp1.style.display = "none";
  }

  document.getElementById("fOutput").innerHTML = celcius * 33.8;

  document.getElementById("kOutput").innerHTML = celcius * 274.15;

  document.getElementById("rOutput").innerHTML = celcius * 493.47;
});

document
  .getElementById("temperature_input_f")
  .addEventListener("input", function (e) {
    dp2.style.display = "block";
    dp1.style.display = "none";
    dp3.style.display = "none";
    dp4.style.display = "none";

    let fahrenheit = e.target.value;

    if (fahrenheit == 0) {
      dp2.style.display = "none";
    }

    document.getElementById("cOutput").innerHTML = fahrenheit * -17.2222222;

    document.getElementById("kkOutput").innerHTML = fahrenheit * 255.927778;

    document.getElementById("rrOutput").innerHTML = fahrenheit * 460.67;
  });

document
  .getElementById("temperature_input_k")
  .addEventListener("input", function (e) {
    dp3.style.display = "block";
    dp1.style.display = "none";
    dp2.style.display = "none";
    dp4.style.display = "none";

    let kelvin = e.target.value;

    if (kelvin == 0) {
      dp3.style.display = "none";
    }

    document.getElementById("ccOutput").innerHTML = kelvin * -272.15;

    document.getElementById("ffOutput").innerHTML = kelvin * -457.87;

    document.getElementById("rrrOutput").innerHTML = kelvin * 1.8;
  });

document
  .getElementById("temperature_input_r")
  .addEventListener("input", function (e) {
    dp4.style.display = "block";
    dp1.style.display = "none";
    dp2.style.display = "none";
    dp3.style.display = "none";

    let rankine = e.target.value;

    if (rankine == 0) {
      dp4.style.display = "none";
    }

    document.getElementById("cccOutput").innerHTML = rankine * -272.59444444;

    document.getElementById("fffOutput").innerHTML = rankine * -458.67;

    document.getElementById("kkkOutput").innerHTML = rankine * 0.55555555556;
  });
