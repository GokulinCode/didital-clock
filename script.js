let hourEl = document.getElementById('hour');
let minuteEl = document.getElementById('minutes')
let secondEl = document.getElementById('seconds')

function updateTime() {
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

h = (h<10)? '0'+h : h;
s = (s<10)? '0'+s : s;

hourEl.innerHTML = h;
minuteEl.innerHTML = m;
secondEl.innerHTML = s;

setInterval(()=>{
  updateTime()
}, 1000)
}updateTime()