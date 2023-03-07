"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.getElementById(selector);

const postalRegEx =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

const onReset = (evt) => {
  evt.preventDefault();
  $("#notifications").checked = true;
  $("#off").checked = true;
  $("#location").value = "";
  $("#temperature").value = "";
};

const onSubmit = (evt) => {
  //TODO::Reset any errors before submitting

  let notifications = $("#notifications").checked;
  $$("setting_notifications").textContent = notifications ? "On" : "Off";

  let lighting = document.querySelectorAll("[name='lighting_mode']");
  for (let i = 0; i < lighting.length; i++) {
    if (lighting[i].checked) {
      $$("setting_lighting_mode").textContent = lighting[i].value;
    }
  }

  //TODO:: Validate the postal code with the Regular Expression,
  //TODO:: Display an error if not valid
  let location = $("#location").value;
  if(postalRegEx.test(location)){
    $$("setting_lighting_mode").textContent = location;
    $$("location_error").textContent = "Postal Code is good :)";

  }else{
    $$("location_error").textContent = "Please enter a valid postal Code >:(";

  }
    //TODO:: Validate the temperature by checking the range and if it's a number
    //TODO:: Display an error if not valid

    evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#date_display").textContent = new Date().toDateString();
  $("#reset_form").addEventListener("click", onReset);
  $("#update_settings").addEventListener("click", onSubmit);
});
