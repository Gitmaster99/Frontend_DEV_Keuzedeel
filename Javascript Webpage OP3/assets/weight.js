let dp1 = document.getElementById("output1");
let dp2 = document.getElementById("output2");
let dp3 = document.getElementById("output3");
let dp4 = document.getElementById("output4");

dp1.style.display = "none";
dp2.style.display = "none";
dp3.style.display = "none";
dp4.style.display = "none";

document.getElementById("weight_input").addEventListener("input", function (e) {
  dp1.style.display = "block";
  dp2.style.display = "none";
  dp3.style.display = "none";
  dp4.style.display = "none";

  let lbs = e.target.value;

  if (lbs == 0) {
    dp1.style.display = "none";
  }

  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;

  document.getElementById("kgOutput").innerHTML = lbs / 2.2046;

  document.getElementById("ozOutput").innerHTML = lbs * 16;
});

document
  .getElementById("weight_input_kg")
  .addEventListener("input", function (e) {
    dp2.style.display = "block";
    dp1.style.display = "none";
    dp3.style.display = "none";
    dp4.style.display = "none";

    let kgs = e.target.value;

    if (kgs == 0) {
      dp2.style.display = "none";
    }

    document.getElementById("pOutput").innerHTML = kgs * 2.2046226218;

    document.getElementById("gOutput").innerHTML = kgs * 1000;

    document.getElementById("oOutput").innerHTML = kgs * 35.27;
  });

document
  .getElementById("weight_input_grams")
  .addEventListener("input", function (e) {
    dp3.style.display = "block";
    dp1.style.display = "none";
    dp2.style.display = "none";
    dp4.style.display = "none";

    let grams = e.target.value;

    if (grams == 0) {
      dp3.style.display = "none";
    }

    document.getElementById("poundssOutput").innerHTML = grams * 0.00220462262;

    document.getElementById("kilogOutput").innerHTML = grams * 0.001;

    document.getElementById("ounceOutput").innerHTML = grams * 0.0352739619;
  });

document
  .getElementById("weight_input_ounces")
  .addEventListener("input", function (e) {
    dp4.style.display = "block";
    dp1.style.display = "none";
    dp2.style.display = "none";
    dp3.style.display = "none";

    let ounces = e.target.value;

    if (ounces == 0) {
      dp4.style.display = "none";
    }

    document.getElementById("poundOutput").innerHTML = ounces * 0.0625;

    document.getElementById("graOutput").innerHTML = ounces * 28.3495231;

    document.getElementById("kiloOutput").innerHTML = ounces * 0.0283495231;
  });
