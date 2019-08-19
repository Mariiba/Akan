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
    



    // if(date=="" || month=="" || year==""){
    //     document.getElementById("result").innerHTML="Please enter the required information"
    //     return false;
    // }
    // else{
    //    true;
    // };
//     var cC=document.getElementById("year").slice(0,1);
//     var yY=document.getElementById("year").slice(2,3);
//     var mM=document.getElementById("month");
//     var dD=document.getElementById("dob");
//    var calculator= math.floor(( ( (cC/4) -2*cC-1) + ((5*yY/4) ) + ((26*(mM+1)/10)) + dD ) % 7);
//    var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//    var femaleNames=["Akoswa", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//     //male function
//     if(male==true && calculator==1){
//        document.getElementById("result").innerHTML=maleNames[0];
//     }else if(male==true && calculator==2){
//         document.getElementById("result").innerHTML=maleNames[1];
//     }else if(male==true && calculator==3){
//         document.getElementById("result").innerHTML=maleNames[2];
//     }else if(male==true && calculator==4){
//         document.getElementById("result").innerHTML=maleNames[3];
//     }else if(male==true && calculator==5){
//         document.getElementById("result").innerHTML=maleNames[4];
//     }else if(male==true && calculator==6){
//         document.getElementById("result").innerHTML=maleNames[5];
//     }else{
//         document.getElementById("result")=alert("enter correct info")
//     }
//     //female function
//     if(female==true && calculator==1){
//         document.getElementById("result").innerHTML=femaleNames[o];
//     }else if(female==2 && calculator==2){
//         document.getElementById("result").innerHTML=femaleNames[1];
//     }else if(female==2 && calculator==3){
//         document.getElementById("result").innerHTML=femaleNames[2];
//     }else if(female==2 && calculator==4){
//         document.getElementById("result").innerHTML=femaleNames[3];
//     }else if(female==2 && calculator==5){
//         document.getElementById("result").innerHTML=femaleNames[4];
//     }else if(female==2 && calculator==6){
//         document.getElementById("result").innerHTML=femaleNames[5];
//     }
   
 
   