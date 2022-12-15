// exercises on both if else statement and switch statement

var age = 70;
if (age >= 65)
{
    console.log("you get your income from your pension");
}
else if (age < 65 && age >= 18)
{
    console.log("Each month, you get your salary");
}
else if (age < 18)
{
    console.log("you get an allowance");
}
else
{
    console.log("the value of your age is not numeral");
}

// switch statement

var day = "food day";

switch (day) {
    case "sunday":
        console.log("go to church");
        break;
    case "monday":
        console.log("go to school");
        break;
    case "tuesday":
        console.log("go to school");
        break;
    case "wednesday":
        console.log("go to school");
        break;
    case "thursday":
        console.log("go to school");
        break;
    case "friday":
        console.log("go to school");
        break;
    case "saturday":
        console.log("stay at home and rest");
        break;
    default:
        console.log("does not apply")
        break;
}
