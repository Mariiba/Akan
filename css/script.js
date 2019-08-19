function validation(){
    var date=document.getElementById("dob").value;
    var month=document.getElementById("month").value;
    var year=document.getElementById("year").value;
    if(date=="" || month=="" || year==""){
        document.getElementById("result").innerHTML="Please enter the required information"
        return false;
    }
    else{
       true;
    };
    var cC=document.getElementById("year").slice(0,1);
    var yY=document.getElementById("year").slice(2,3);
    var mM=document.getElementById("month");
    var dD=document.getElementById("dob");
   var calculator= function(dD,mM,yY,cC){
       return Math.floor(( ( (cC/4) -2*cC-1) + ((5*yY/4) ) + ((26*(mM+1)/10)) + dD ) % 7)
   };
   var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
   var femaleNames=["Akoswa", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    //male function
    if(male==true && calculator==1){
       document.getElementById("result").innerHTML=maleNames[0];
    }else if(male==true && calculator==2){
        document.getElementById("result").innerHTML=maleNames[1];
    }else if(male==true && calculator==3){
        document.getElementById("result").innerHTML=maleNames[2];
    }else if(male==true && calculator==4){
        document.getElementById("result").innerHTML=maleNames[3];
    }else if(male==true && calculator==5){
        document.getElementById("result").innerHTML=maleNames[4];
    }else if(male==true && calculator==6){
        document.getElementById("result").innerHTML=maleNames[5];
    }else{
        document.getElementById("result")=alert("enter correct info")
    }
    //female function
    if(female==true && calculator==1){
        document.getElementById("result").innerHTML=femaleNames[o];
    }else if(female==2 && calculator==2){
        document.getElementById("result").innerHTML=femaleNames[1];
    }else if(female==2 && calculator==3){
        document.getElementById("result").innerHTML=femaleNames[2];
    }else if(female==2 && calculator==4){
        document.getElementById("result").innerHTML=femaleNames[3];
    }else if(female==2 && calculator==5){
        document.getElementById("result").innerHTML=femaleNames[4];
    }else if(female==2 && calculator==6){
        document.getElementById("result").innerHTML=femaleNames[5];
    }
   
 
   