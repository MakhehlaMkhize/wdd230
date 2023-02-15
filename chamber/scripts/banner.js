let banner = document.querySelector(".banner");

let bannerInfo = "Join up for a meet and greet every Wednesday at 7:00 p.m";
let currentDate = new Date().getDay();

if (currentDate == 1 || currentDate == 2 || currentDate == 3){
    banner.textContent= bannerInfo;
}
