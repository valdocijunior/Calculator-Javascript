const hoursPointer = document.querySelector(".pointer.hours");
const minutesPointer = document.querySelector(".pointer.minutes");
const secondsPointer = document.querySelector(".pointer.seconds");

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
    const currentDate = new Date();

    const secondsPercentage = currentDate.getSeconds() / 60;
    const minutesPercentage = ((secondsPercentage + currentDate.getMinutes()) / 60);
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

    setRotation(secondsPointer, secondsPercentage);
    setRotation(minutesPointer, minutesPercentage);
    setRotation(hoursPointer, hoursPercentage);
};

setClock();

setInterval(setClock, 1000);