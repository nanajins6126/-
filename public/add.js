// data fetching
const formDOM = document.querySelector(".form-section");
const nameDOM = document.getElementById("name");
const apptDOM = document.getElementById("appt");
const scalesDOM = document.getElementById("scales");
const tapptDOM = document.getElementById("tappt");
const unkeiDOM = document.getElementById("unkei");
const keikaDOM = document.getElementById("keika");

let nameText = "";
let appt = "";
let scales = "";
let tappt = "";
let unkei = "";
let keika = "";

//タイトルと内容を打ち込んだらpostメソッドを実装してデータ追加。
nameDOM.addEventListener("change", (e) => {
    //   console.log(e.target.value);
    nameText = e.target.value;
});

apptDOM.addEventListener("change", (e) => {
    appt = e.target.value;
});

scalesDOM.addEventListener("change", (e) => {
    scales = e.target.value;
});

tapptDOM.addEventListener("change", (e) => {
    tappt = e.target.value;
});

unkeiDOM.addEventListener("change", (e) => {
    unkei = e.target.value;
});

keikaDOM.addEventListener("change", (e) => {
    keika = e.target.value;
});

formDOM.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (true) {
      console.log("success");
      //postメソッドで送信する。
  
      try {
        await axios.post("/api/v1/thread", {
          date: nameText,
          time: appt,
          state: scales,
          outputTime: tappt,
          detail: unkei,
          outputState: keika,
        });
      } catch (err) {
        console.log(err);
      }
  
      //投稿したらinputのvalueを削除
      nameText = "";
      appt = "";
      scales = "";
      outputTime = "";
      tappt = "";
      unkei = "";
      keika = "";

      nameDOM.value = "";
      apptDOM.value = "";
      scalesDOM.value = "";
      tapptDOM.value = "";
      unkeiDOM.value = "";
      keikaDOM.value = "";

      location.href="./index.html"
    } else {
      console.log("error");
    }
  });
  
