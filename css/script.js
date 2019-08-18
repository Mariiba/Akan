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
       return ( ( (cC/4) -2*cC-1) + ((5*yY/4) ) + ((26*(mM+1)/10)) + dD ) % 7
   };
   var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
   var femaleNames=["Akoswa", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
   
   var gender=document.getElementsByName("gender");
   var i=0;
   while(i<gender.length){
       if (gender[i].checked)
       var myGender=gender[i].value;
   };
   alert(myGender)
   