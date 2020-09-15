function clock() {
    let hour = document.querySelector('#hour');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');
    let ampm = document.querySelector('#ampm');

    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let am = "AM";

    if(hr > 12) {
        hr = hr - 12;
        am = "PM";
    }

    hr = (hr < 10) ? '0'  + hr : hr;
    min = (min < 10) ? '0'  + min : min;
    sec = (sec < 10) ? '0'  + sec : sec;

    hour.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    ampm.innerHTML = am;
}

var interval = setInterval(clock, 1000);