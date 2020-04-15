
  




let dp1 = document.getElementById("output1");
let dp2 = document.getElementById("output2");
let dp3 = document.getElementById("output3");
let dp4 = document.getElementById("output4");

dp1.style.display = "none";
dp2.style.display = "none";
dp3.style.display = "none";
dp4.style.display = "none";

document.getElementById("currency_input").addEventListener("input", function (e) {
  dp1.style.display = "block";
  dp2.style.display = "none";
  dp3.style.display = "none";
  dp4.style.display = "none";

  let eur = e.target.value;

  if (eur == 0) {
    dp1.style.display = "none";
  }

  document.getElementById("usdOutput").innerHTML = eur / 1.09;

  document.getElementById("cadOutput").innerHTML = eur / 1.53;

  document.getElementById("gbpOutput").innerHTML = eur * 0.88;
});

document
  .getElementById("currency_input_usd")
  .addEventListener("input", function (e) {
    dp2.style.display = "block";
    dp1.style.display = "none";
    dp3.style.display = "none";
    dp4.style.display = "none";

    let usd = e.target.value;

    if (usd == 0) {
      dp2.style.display = "none";
    }

    document.getElementById("eurOutput").innerHTML = usd * 0.92;

    document.getElementById("caddOutput").innerHTML = usd * 1.40;

    document.getElementById("gbppOutput").innerHTML = usd * 0.81;
  });

document
  .getElementById("currency_input_cad")
  .addEventListener("input", function (e) {
    dp3.style.display = "block";
    dp1.style.display = "none";
    dp2.style.display = "none";
    dp4.style.display = "none";

    let cad = e.target.value;

    if (cad == 0) {
      dp3.style.display = "none";
    }

    document.getElementById("eurrOutput").innerHTML = cad * 0.66;

    document.getElementById("usddOutput").innerHTML = cad * 0.71;

    document.getElementById("gbpppOutput").innerHTML = cad * 0.58;
  });

document
  .getElementById("currency_input_gbp")
  .addEventListener("input", function (e) {
    dp4.style.display = "block";
    dp1.style.display = "none";
    dp2.style.display = "none";
    dp3.style.display = "none";

    let gbp = e.target.value;

    if (gbp == 0) {
      dp4.style.display = "none";
    }

    document.getElementById("eurrrOutput").innerHTML = gbp * 1.13;

    document.getElementById("usdddOutput").innerHTML = gbp * 1.23;

    document.getElementById("cadddOutput").innerHTML = gbp * 1.73;
  });
