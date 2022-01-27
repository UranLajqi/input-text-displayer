
class Car {
    constructor(time, comment) {
        this.time = time;
        this.comment = comment;
    }
    formatimi() {
      return this.time + "<br>" + this.comment;
    }
  }


function shto() {
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let time = hours + ":" + minutes + ":" + seconds;
    var comment = document.getElementById("comment").value;

    let div = document.createElement('div');
    div.className = "klasa";

    let myCar = new Car(time, comment);
    div.innerHTML = myCar.formatimi();    
    document.getElementById("root").prepend(div);

    document.getElementById("heke").innerText = "";
}

var btn = document.getElementById("submit");

btn.addEventListener('click', (e) => {
    e.preventDefault()
});
