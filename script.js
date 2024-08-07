let USER_INPUT_ELEMENT = document.getElementById("date")
USER_INPUT_ELEMENT.max = new Date().toISOString().split("T")[0];
let RESULT_ELEMENT = document.getElementById("result");

function handleOnClickAgeCalculateButton() {
    let birthDate = new Date(USER_INPUT_ELEMENT.value);

    let dayOfBirth = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();

    let today = new Date();

    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    let diffInDays, diffInMonths, diffInYears;

    diffInYears = currentYear - birthYear;

    // if 2nd month is greater i can do simple subtract
    if(currentMonth >= birthMonth) {
        diffInMonths = currentMonth - birthMonth;
    }else {
        // else i need to decrease year and subtract with base 12
        diffInYears--;
        diffInMonths = 12 + currentMonth - birthMonth;
    }

    if(currentDay >= dayOfBirth) {
        diffInDays = currentDay - dayOfBirth;
    }else {
        diffInMonths--;
        diffInDays = getDaysInMonth(birthYear, birthMonth) + currentDay - dayOfBirth;
    }
    if(diffInMonths < 0) {
        diffInMonths = 11;
        diffInYears--;
    }
    setResultElementInnerHtml({
        years: diffInYears,
        months: diffInMonths,
        days: diffInDays
    });
}

function setResultElementInnerHtml(diff) {
    RESULT_ELEMENT.innerHTML= `You are <span>${diff.years}</span> years, <span>${diff.months}</span> months, <span>${diff.days}</span> days old.`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}