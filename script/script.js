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
    
