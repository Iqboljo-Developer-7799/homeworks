function math1(obj) {
  obj.gender == "male"
    ? console.log(`Janob ${obj.name}`)
    : console.log(`Xonim ${obj.name}`);
}

// math1({ gender: "male", name: "Farhod" });
// math1({ gender: "female", name: "Shahlo" });

// ---------- - - - -

function math2(card, check) {
  check
    ? console.log(card)
    : (function (cardNumber) {
        let cNumber = cardNumber.split("");
        let result = [];
        for (let i = 0, length = cNumber.length; i < length; i++) {
          if (i <= 4) {
            result.push(cNumber[i]);
          } else {
            if (cNumber[i] === " ") {
              result.push(" ");
            } else if (cNumber[i] !== "" && i < length - 2) {
              result.push("*");
            } else {
              result.push(cNumber[i]);
            }
          }
        }
        console.log(result.join(""));
      })(card);
}

// math2("8600 1234 4321 8998 2589", false);
// math2("8600 5534 7329 9991 4501", true);

// ---------- - - - -

function math3(a, b) {
  return 2 * (a + b);
}

// console.log(math3(10, 10));
// console.log(math3(4, 2));

// ---------- - - - -

function math4(data) {
  return data.toLowerCase() === "ha"
    ? true
    : data.toLowerCase() === "yo'q"
    ? false
    : null;
}

// console.log(math4("yo'q"));

// ---------- - - - -

function math5(phoneN) {
  phoneN = String(phoneN);
  return !phoneN.startsWith("+") ? "+" + phoneN : phoneN;
}

// console.log(math5(998997975767));
// console.log(math5(998932507325));
// console.log(math5(+998950567272));

// ---------- - - - -

function greeting6Decloration() {
  return "Salom dunyo";
}
const greeting6Arrow = () => "Salom dunyo";

// console.log(greeting6Decloration());
// console.log(greeting6Arrow());

// ---------- - - - -

function mode7(str) {
  return str == "light" ? "dark" : "light";
}
// console.log(mode("light"));
