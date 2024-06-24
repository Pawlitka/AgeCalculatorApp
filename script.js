let userInput = document.getElementById("date")
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function CalculateAgeOnClickButton() {
    let birthDate = new Date(userInput.value);

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
    result.innerHTML= `You are <span>${diffInYears}</span> years, <span>${diffInMonths}</span> months, <span>${diffInDays}</span> days old.`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}