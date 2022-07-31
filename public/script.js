const threadSectionDOM = document.querySelector(".thread-section");

// 日付
let date = "";
// 時刻
let time = "";
// 腹痛の状態
let state = "";
// 排便時間(時:分)
let outputTime = "";
// 形状
let detail = "";
// 排便後の状態
let outputState = "";

//最初はThreadを全て読み込む
const getAllThreads = async () => {
    console.log("getAllThreads");
    try {
      console.log("show");
      let allThreads = await axios.get("/api/v1/threads");
      console.log(allThreads);
      let { data } = allThreads;
      console.log(data);
      //出力
      allThreads = data
        .map((thread) => {
          console.log(thread["_id"]);
          const {date, detail, outputState, outputTime, state, time } = thread;
          console.log(date);
          return `
          <tr>
            <td><input type="checkbox" id="scales" name="scales"></td>
            <td>${date}</td>
            <td>${time}</td>
            <td><font color="red">${state}</font></td>
            <td>${outputTime}</td>
            <td>${detail}</td>
            <td>${outputState}</td>
        </tr>
        `
        })
        .join("");
    threadSectionDOM.innerHTML = allThreads;
    } catch (err) {
      console.log(err);
    }
  };
  
  getAllThreads();


