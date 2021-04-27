"use strict";

function age() {
  var a = parseInt(prompt("Enter age? \r (0-100)"));

  if (a >= 0 && a <= 100) {
    if (a <= 12) {
      alert("Rebenok");
    } else if (a > 12 && a <= 18) {
      alert("Podrostok");
    } else if (a > 18 && a <= 60) {
      alert("Vzrosliy");
    } else if (a > 60) {
      alert("Pensioner");
    }
  } else {
    alert("Invalid data");
  }
}

function userNum() {
  var a = parseInt(prompt("Enter number\r(0-9)"));
  var text = 'Invalid data';

  if (a >= 0 && a <= 9) {
    switch (a) {
      case 0:
        text = ")";
        break;

      case 1:
        text = "!";
        break;

      case 2:
        text = "@";
        break;

      case 3:
        text = "#";
        break;

      case 4:
        text = "$";
        break;

      case 5:
        text = "%";
        break;

      case 6:
        text = "^";
        break;

      case 7:
        text = "&";
        break;

      case 8:
        text = "*";
        break;

      case 9:
        text = "(";
        break;
    }
  }

  alert(text);
}

function userThree() {
  var a = prompt("Enter number"),
      arrT = a.split(''),
      q = parseInt(arrT[0]),
      w = parseInt(arrT[1]),
      e = parseInt(arrT[2]);

  if (q == w || q == e || w == e) {
    alert("povtor");
  } else {
    alert("ne povtor");
  }
}

function userYear() {
  var a = parseInt(prompt("Enter year"));

  if (a % 400 == 0 || a % 4 == 0 && a % 100 != 0) {
    alert("visokosniy");
  } else {
    alert("ne visokosniy");
  }
}

function userPalind() {
  var a = parseInt(prompt("Enter 5 numbers")),
      str = a + '',
      M = str.split('');

  if (M[0] == M[4] && M[1] == M[3]) {
    alert("Palindrom");
  } else {
    alert("ne palindrom");
  }
}

function userConv() {
  var a = parseInt(prompt("Give me your money(USD)")),
      valuta = prompt("EUR, UAH, AZN");
  var eur = 0.83,
      uah = 27.76,
      azn = 1.7;

  switch (valuta) {
    case 'EUR':
      alert(eur * a);
      break;

    case 'UAH':
      alert(uah * a);
      break;

    case 'AZN':
      alert(azn * a);
      break;
  }
}

function userSale() {
  var a = parseInt(prompt("Enter price"));
  var f = 3,
      s = 5,
      t = 7;

  if (a >= 200 && a <= 300) {
    alert(a - a * f / 100);
  } else if (a >= 300 && a <= 500) {
    alert(a - a * s / 100);
  } else if (a >= 500) {
    alert(a - a * t / 100);
  } else {
    alert(a);
  }
}

function userLen() {
  var a = parseInt(prompt("Enter lenth circle")),
      d = a / Math.PI,
      b = parseInt(prompt("Enter lenth square")),
      f = b / 4,
      r = f >= d ? "YES" : "NO";
  alert(r);
}

function userQuiz() {
  var a = parseInt(prompt("2 + 2 = ... \r3 \r4 \r5")),
      b = parseInt(prompt("3 + 3 = ... \r5 \r6 \r7")),
      c = parseInt(prompt("4 + 4 = ... \r7 \r8 \r9")),
      r = 0;

  switch (a) {
    case 4:
      r = r + 2;
      break;
  }

  switch (b) {
    case 6:
      r = r + 2;
      break;
  }

  switch (c) {
    case 8:
      r = r + 2;
      break;
  }

  alert(r);
}

function userTomorrow() {
  var a = prompt("dd:mm:yy"),
      b = a.split(":"),
      d = parseInt(b[0]),
      m = parseInt(b[1]),
      y = parseInt(b[2]);

  switch (m) {
    case 4:
    case 6:
    case 9:
    case 11:
      if (d == 30) {
        d = 1;
        m = m + 1;
      } else {
        d = d + 1;
      }

      break;

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (d == 31) {
        d = 1;

        if (m == 12) {
          m = 1;
          y = y + 1;
        } else {
          m = m + 1;
        }
      } else {
        d = d + 1;
      }

      break;

    case 2:
      if (y % 400 == 0 || y % 4 == 0 && y % 100 != 0) {
        if (d == 29) {
          d = 1;
          m = 3;
        } else {
          d = d + 1;
        }
      } else {
        if (d == 28) {
          d = 1;
          m = 3;
        } else {
          d = d + 1;
        }
      }

      break;

    default:
      console.log("Invalid month number: " + m);
  }

  alert(d + ":" + m + ":" + y);
}