window.addEventListener('load', function () {

    const last = document.getElementById("last");
    const next = document.getElementById("next");

    setTime();

    const t = setInterval(setTime, 500);

    function setTime() {
        const date = new Date();
        last.innerHTML = formatString(tillLast(date));
        next.innerHTML = formatString(tillNext(date));
    }

    function formatString({ days, hours, minutes, seconds }) {

        let daysForm, hoursForm, minutesForm, secondsForm;

        switch (days) {
            case 1:
                daysForm = "dzień";
                break;
            default:
                daysForm = "dni";
        }

        switch (hours) {
            case 1:
                hoursForm = "godzina";
                break;
            case 2:
            case 3:
            case 4:
            case 22:
            case 23:
                hoursForm = "godziny";
                break
            default:
                hoursForm = "godzin";
        }

        switch (minutes) {
            case 1:
                minutesForm = "minuta";
                break;
            case 2:
            case 3:
            case 4:
            case 22:
            case 23:
            case 24:
            case 32:
            case 33:
            case 34:
            case 42:
            case 43:
            case 44:
            case 52:
            case 53:
            case 54:
                minutesForm = "minuty";
                break;
            default:
                minutesForm = "minut";
        }

        switch (seconds) {
            case 1:
                secondsForm = "sekunda";
                break;
            case 2:
            case 3:
            case 4:
            case 22:
            case 23:
            case 24:
            case 32:
            case 33:
            case 34:
            case 42:
            case 43:
            case 44:
            case 52:
            case 53:
            case 54:
                secondsForm = "sekundy";
                break;
            default:
                secondsForm = "sekund";
        }

        return `${days} ${daysForm} ${hours} ${hoursForm} ${minutes} ${minutesForm} ${seconds} ${secondsForm}`;
    }

    function tillLast(date) {
        let days = 7 - (3 - date.getDay() % 7);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        return { days, hours, minutes, seconds };
    }

    function tillNext(date) {
        let days = (2 - date.getDay()) % 7;
        let hours = 23 - date.getHours();
        let minutes = 59 - date.getMinutes();
        let seconds = 59 - date.getSeconds()

        return { days, hours, minutes, seconds };
    };


})
