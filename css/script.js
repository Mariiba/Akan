function validation(){
    var date=document.getElementById("dob");
    var month=document.getElementById("month");
    var year=document.getElementById("year");
    var gender = document.getElementsByName("gender");
    var formValid = false;
    i = 0;
    
    // return false


    // validate date of birth
    
        if (date.value  == "" || 1 < date.value > 31) {
            alert("Please input date");
            return false
        }

        // validate month
        if (month.value  == "" || 1 < month.value > 12) {
            alert("Please input Month");
            return false
        }

        // validate year
        if (year.value  == "") {
            alert("Please input Year");
            return false
        } 


        

        while (!formValid && i < gender.length) {
            if (gender[i].checked) {
                // mgender = gender[i].value;                
                formValid = true;

            }
            i++;

        }
        if (!formValid) {  
            alert("Gender required");        
            return false;
        }
        return formValid;
    }


     //male Akan names
    var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    //Akan female names
    var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

     
    //data collection
    var date = document.getElementById("dob");
    var dd = date;
    var month = document.getElementById("month");
    var mm = month;
    var year = document.getElementById("year");
    var yy = parseInt(year.toString().slice(2,4));
    var cc = Math.ceil(year/100);


    //formula
    var calculator= Math.floor( ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
     

    //male  and female names

    if(male == true && calculator == 1){
        document.getElementById("result").innerHTML=("Your Akan name is " + maleNames[0] + ".")
    }
    else if(male == true && calculator == 2){
        document.getElementById("result").innerHTML=("Your Akan name is " + maleNames[1] + ".")
    }
    else if(male == true && calculator == 3){
        document.getElementById("result").innerHTML=("Your Akan name is " + maleNames[2] + ".")
    }
    else if(male == true && calculator == 4){
        document.getElementById("result").innerHTML=("Your Akan name is " + maleNames[3] + ".")
    }
    else if(male == true && calculator == 5){
        document.getElementById("result").innerHTML=("Your Akan name is " + maleNames[4] + ".")
    }
    else if(male == true && calculator == 6){
        document.getElementById("result").innerHTML=("Your Akan name is " + maleNames[5] + ".")
    }
    else if(male == true && calculator == 7){
        document.getElementById("result").innerHTML=("Your Akan name is " + maleNames[6] + ".")
    }
    else if(female == true && calculator == 1){
        document.getElementById("result").innerHTML=("Your Akan name is " + femaleNames[0] + ".")
    }
    else if(female == true && calculator == 2){
        document.getElementById("result").innerHTML=("Your Akan name is " + femaleNames[1] +  ".")
    }
    else if(female == true && calculator == 3){
        document.getElementById("result").innerHTML=("Your Akan name is " + femaleNames[2] +  ".")
    }
    else if(female == true && calculator == 4){
        document.getElementById("result").innerHTML=("Your Akan name is " + femaleNames[3] +  ".")
    }
    else if(female == true && calculator == 5){
        document.getElementById("result").innerHTML=("Your Akan name is " + femaleNames[4] +  ".")
    }
    else if(female == true && calculator == 6){
        document.getElementById("result").innerHTML=("Your Akan name is " + femaleNames[5] +  ".")
    }
    else if(female == true && calculator == 7){
        document.getElementById("result").innerHTML=("Your Akan name is " + femaleNames[6] +  ".")
    }
    else{
        alert("The information you entered is invalid!")
    }






if(document.getElementById("male").checked){
    var gender = "male"
}
else{
    var gender = "female"
}

if(gender=="male" && calculator === 0){
    
}

    