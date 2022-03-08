function getAkanName() {
    //use getElementById to collect data from html form and store it in js variables.
    let yearOfBirth = document.getElementById("year-input").value;
    let monthOfBirth = Number(document.getElementById("month-input").value);
    let dayOfBirth = Number(document.getElementById("day-input").value);
    let genders = document.getElementsByName("gender");

    //function to get gender and validate that data has been selected.
    function getGender() {
        for (let gender of genders) {
            if (gender.checked) {
                return gender.value;
            }
        }
    }

    let myGenderValue = getGender();
    console.log(myGenderValue);

    //Validate the month variable to be between 1 and 12 values
    function monthValidator(){
        if (monthOfBirth < 1 || monthOfBirth > 12) {
            return false;
        } else {
            return true;
        }
    }

    //validate day of birth to be between 1 and 28 for february or 1 and 31 for normal days
    function dayValidator() {
        if (monthOfBirth === 2 && Number(yearOfBirth) % 4 === 0) {
            if (dayOfBirth > 28 || dayOfBirth < 1) {
                return false;
            } else if (monthOfBirth === 2 && dayOfBirth > 29) {
                return false;
            } else if (monthOfBirth === 2 && dayOfBirth < 1) {
                return false;
            } else {
                return true;
            }
        } else if (dayOfBirth < 1 || dayOfBirth > 31) {
            return false;
        } else {
            return true;
        }
    }

    //validation variables
    let monthValid = monthValidator();
    let dayValid = dayValidator();

    //formula to determine Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
     let dayOfWeekNumber = Math.floor(
        (Number(yearOfBirth.slice(0, 2)) / 4 - // (((CC/4)
            2 * Number(yearOfBirth.slice(0, 2)) -  // 2*CC-1)
            1 +
            (5 * Number(yearOfBirth.slice(2, 4))) / 4 + // ((5*YY/4)) 
            (26 * (monthOfBirth + 1)) / 10 +  // ((26*(MM+1)/10))
            dayOfBirth) % 7 // DD ) mod 7
    );
