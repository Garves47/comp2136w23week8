"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.getElementById(selector); //same thing as $ but without the #

const postalRegEx =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

const resetErrors = ()=>{
  $("#location_error").textContent = "";
  $("#temperature_error").textContent = "";
}

//Reset Button
const onReset = (evt) => {
  evt.preventDefault();
  resetErrors();
  $("#notifications").checked = true;
  $("#off").checked = true;
  $("#location").value = "";
  $("#temperature").value = "";
};

//Submit Button
const onSubmit = (evt) => {
  resetErrors();

  //Set notification settings
  let notifications = $("#notifications").checked;
  $$("setting_notifications").textContent = notifications ? "On" : "Off";

  //Set lighting settings
  let lighting = document.querySelectorAll("[name='lighting_mode']");
  for (let i = 0; i < lighting.length; i++) {
    if (lighting[i].checked) {
      $$("setting_lighting_mode").textContent = lighting[i].value;
    }
  }

  //Postal Code Check and Set
  let location = $("#location").value;
  if(postalRegEx.test(location)){
    $$("setting_location").textContent = location;
    $$("location_error").textContent = "Postal Code is good :)";
  }else{
    $$("location_error").textContent = "Please enter a valid postal Code >:(";
    $$("location").textContent = ("");
  }
  
  //Temperature Check and Set
  let temperature = $("#temperature").value;
  if((temperature<5 && temperature>30) || temperature == ""){
    $$("temperature_error").textContent = "Should be between 5 and 30";
    $$("temperature").textContent = ("");
  }else if(temperature%0.5==0){
    $$("temperature_error").textContent = "Should be in increments of 0.5";
    $$("temperature").textContent = ("");
  }else{
    $$("setting_temperature").textContent = temperature;
    $$("temperature_error").textContent = "Temperature is good :)";
  }
    evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#date_display").textContent = new Date().toDateString();
  $("#reset_form").addEventListener("click", onReset);
  $("#update_settings").addEventListener("click", onSubmit);
});