"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.getElementById(selector);

const divisionCalculate = () => {
  let divi1 = $("#division_1").value;
  let divi2 = $("#division_2").value;
  let diviResult = divi1 / divi2;
  $$("division_result").value = diviResult;
  $$("int_division_result").value = parseInt(diviResult);
  $$("floor_division_result").value = Math.floor(diviResult);
  $$("ceiling_division_result").value = Math.ceil(diviResult);
  $$("rounded_division_result").value = Math.round(diviResult);
};
const moduloCalculate = () => {
  let modu1 = $("#modulo_1").value;
  let modu2 = $("#modulo_2").value;
  $$("modulo_result").value = modu1 % modu2;
};
const bigLoopyBoy = () => {
  let loops = parseInt($("#for_limit").value);
  let startValue = parseInt($("#for_counter").value);
  let increment = parseInt($("#for_increment").value);
  let counter = 0;
  if ($("#for_increment_direction").value == "up") {
    counter = startValue;
    for (let i = 0; i < loops; i++) {
      counter = counter + increment;
    }
  } else {
    $("#for_increment_direction").value == "down";
    counter = startValue;
    for (let i = 0; i < loops; i++) {
      counter = counter - increment;
    }
  }
  $$("for_result").value = counter;
};

//Add all calculation functions
document.addEventListener("DOMContentLoaded", () => {
  $("#division_btn").addEventListener("click", divisionCalculate);
  $("#modulo_btn").addEventListener("click", moduloCalculate);
  $("#for_loop_btn").addEventListener("click", bigLoopyBoy);
});
