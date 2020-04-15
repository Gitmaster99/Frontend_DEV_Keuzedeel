function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function equal() {
  var exp = document.form.textview.value;
  if (exp) {
    document.form.textview.value = eval(exp);
  }
}

function clean() {
  document.form.textview.value = "";
}

function back() {
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1);
}

function doSqrt() {
  var exp = document.form.textview.value;
  var result = Math.sqrt(exp);
  document.form.textview.value = result;
}

function doPow() {
    var exp = document.form.textview.value;
    var result = Math.pow(exp, 2);
    document.form.textview.value = result;
  }
  