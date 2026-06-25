const hourEL = document.getElementById("HOUR");
const minuteEL = document.getElementById("MINUTES");
const secondEL = document.getElementById("SECONDS");
const ampmEL = document.getElementById("AMPM");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h >= 12) {
        ampm = "PM";
        if (h > 12) {
            h = h - 12;
        }
    }

    if (h == 0) {
        h = 12;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEL.innerText = h;
    minuteEL.innerText = m;
    secondEL.innerText = s;
    ampmEL.innerText = ampm;

    setTimeout(updateClock, 1000);
}

// 👉 IMPORTANT
updateClock();