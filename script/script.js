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
    
