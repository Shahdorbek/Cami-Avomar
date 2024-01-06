//bot token
var telegram_bot_id = "6936373128:AAFob6ndNucOk4QAziIB2cn2ntdbsIfpxRQ"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 6100819989; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, call, email, message;
var ready = function () {
  u_name = document.getElementById("text").value;
  call = document.getElementById("call").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;
  message =
    "Ismi: " +
    u_name +
    " \nTelefoni: " +
    call +
    " \nEmail: " +
    email +
    " \nIzoh: " +
    message;
};
var sendtelegram = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById("text").value = "";
  document.getElementById("call").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  return false;
};

function updateClock() {
  var now = new Date();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateClock, 1000);

const burger = document.querySelector(".nav-burger");
const navlink = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navlink.classList.toggle("sss");
});
