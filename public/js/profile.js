"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.getElementById(selector);


const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;

const time = new Date();

//Reset Button
const onReset = (evt) => {
  $("#first_name").value = "";
  $("#last_name").value = "";
  $("#email").value = "";
  $("#dob").value = "";
  $("#password").value = "";

};

const onSubmit = (evt) => {
  //Submission field errors
  let formErrors = false;
  //Check First and Last name
  let firstName = $("#first_name").value;
  let lastName = $("#last_name").value;
  if(firstName == "" || lastName == ""){
    formErrors = true;
    $$("name_error").textContent = "Please enter a name";
  }else{
    $$("name_error").textContent = "Cool name!";

  }
  //Check email
  let email = $("#email").value;
  if(emailRegEx.test(email)){
    $$("email_error").textContent = "We will send you so many emails";
  }else{
    formErrors = true;
    $$("email_error").textContent = "Please enter a valid email";
    $$("email").textContent = ("");
  }
  //Check Password for validity, then for matching 
  let password1 = $("#password").value;
  let password2 = $("#confirm_password").value;
  if(!passwordRegEx.test(password1)){
    formErrors = true;
    $$("password_error").textContent = "Please enter a valid password";
    $$("password").textContent = ("");
    $$("confirm_password").textContent = ("");
  }else if(password1 != password2){
    formErrors = true;
    $$("password_error").textContent = "Please make sure both passwords match";
    $$("password").textContent = ("");
    $$("confirm_password").textContent = ("");
  }else{
    $$("password_error").textContent = "Sharing it with everyone on your contact list now;)";
  }
    
  //Check that the birthday is less than the current time
  let birthday = new Date($("#dob").value);
  let birthdaySent = $("#dob").value;
  let birthDay2 = birthday.getDay();
  let birthMonth = birthday.getMonth();
  let birthYear = birthday.getFullYear();
  let checkDay = time.getDay();
  let checkMonth = time.getMonth();
  let checkYear = time.getFullYear();
  if(birthYear>checkYear){
    formErrors = true;
    $$("dob_error").textContent = "You havn't been born yet?";
    $$("dob").value = "";
  }else if(birthMonth>checkMonth){
    formErrors = true;
    $$("dob_error").textContent = "You havn't been born yet?";
    $$("dob").value = "";
  }else if(birthDay2>checkDay){
    formErrors = true;
    $$("dob_error").textContent = "You havn't been born yet?";
    $$("dob").value = "";
  }else{
    $$("dob_error").textContent = "Wait when was it again?";
  }
  //Check for error flags and Send all info
  if(formErrors == false){
    $$("user_first_name").textContent = firstName;
    $$("user_last_name").textContent = lastName;
    $$("user_email").textContent = email;
    $$("user_dob").textContent = birthdaySent;
    $$("user_password_last_changed").textContent = new Date().toDateString();
  }
  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#update_profile").addEventListener("click", onSubmit);

  $("#reset_form").addEventListener("click", onReset);
});
