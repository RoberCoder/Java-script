const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText=`${hours}:${minutes}:${seconds}`;
}
//argument란? function안에 들어가는 변수

//text를 number로 바꾸는 방법: parseInt
//number를 text로 바꾸는 방법: String(##)

getClock()
setInterval(getClock, 1000)
  //setInterval<-- 매 몇 초마다 작업 반복; 실시간처럼 보아게 하는것. 
