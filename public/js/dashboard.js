"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.getElementById(selector);

const postalRegEx =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

//Reset Button
const onReset = (evt) => {
  evt.preventDefault();
  $("#notifications").checked = true;
  $("#off").checked = true;
  $("#location").value = "";
  $("#temperature").value = "";
};

//Submit Button
const onSubmit = (evt) => {

  let notifications = $("#notifications").checked;
  $$("setting_notifications").textContent = notifications ? "On" : "Off";

  let lighting = document.querySelectorAll("[name='lighting_mode']");
  for (let i = 0; i < lighting.length; i++) {
    if (lighting[i].checked) {
      $$("setting_lighting_mode").textContent = lighting[i].value;
    }
  }

  //Postal Code Check
  let location = $("#location").value;
  if(postalRegEx.test(location)){
    $$("setting_location").textContent = location;
    $$("location_error").textContent = "Postal Code is good :)";

  }else{
    $$("location_error").textContent = "Please enter a valid postal Code >:(";
    $$("location").textContent = ("");
  }
  
  //Temperature Check
  let temperature = $("#temperature").value;
  if(temperature>5 && temperature<30 && temperature%0.5==0){
    $$("setting_temperature").textContent = temperature;
    $$("temperature_error").textContent = "Temperature is good :)";
  }else{
    $$("temperature_error").textContent = "Should be between 5 and 30";
    $$("temperature").textContent = ("");

  }

    evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#date_display").textContent = new Date().toDateString();
  $("#reset_form").addEventListener("click", onReset);
  $("#update_settings").addEventListener("click", onSubmit);
});
