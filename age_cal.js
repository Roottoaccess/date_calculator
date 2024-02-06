function calculate()
{
    let year;
    let month;
    let date;
    // console.log(current_date.value.slice(0,4));
    let currentDay = parseInt(current_date.value.slice(8,10),10);
    let currentMonth = parseInt(current_date.value.slice(5,7),10);
    let currentYear = parseInt(current_date.value.slice(0,4),10);
    console.log('current date:- ',currentYear,currentMonth,currentDay);


    let birthDay = parseInt(birth_date.value.slice(8,10),10);
    let birthMonth = parseInt(birth_date.value.slice(5,7),10);
    let birthYear = parseInt(birth_date.value.slice(0,4),10);
    console.log('birth date:- ',birthYear,birthMonth,birthDay);

    if(currentDay >= birthDay){
        day = currentDay - birthDay;
    }
    else{
        day = currentDay + new Date(currentYear, currentMonth).getDate() - birthDay;
        currentMonth --;
    }

    if(currentMonth >= birthMonth)
    {
        month = currentMonth - birthMonth;
    }
    else{
        currentMonth + 12 - birthMonth;
        year --;
    }

    year = currentYear - birthYear;

    if(year < 0){
        let ageText =  ageText.innerHtml = "kya mazak kar rahe ho yar, sahi date dalo";
    } else {
        let ageText = ageText.innerHtml = year + "years, "+ month +" months, " + day + " days";
    }
}