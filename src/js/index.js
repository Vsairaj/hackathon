import data from '../data/data.js'

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")

button1.innerHTML='Music'
button2.innerHTML='Modern Art'
button3.innerHTML='Coding'

const clickEventFunction = (e) => {
  localStorage.setItem("type", e.target.id);
  let url = "../"+"quiz"+".html"
  window.location.href = url;
}

button1.addEventListener('click', clickEventFunction)
button2.addEventListener('click', clickEventFunction)
button3.addEventListener('click', clickEventFunction)


localStorage.getItem(Object.keys(data)[0]) === 'done' ? button1.disabled="true": true;
localStorage.getItem(Object.keys(data)[1]) === 'done' ? button2.disabled="true": true;
localStorage.getItem(Object.keys(data)[2]) === 'done' ? button3.disabled="true": true;

