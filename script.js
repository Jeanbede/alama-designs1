
 
function submit_by_id() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (validation()) 
    {
    document.getElementById("form_id").submit(); 
    alert(" Name : " + name + " n Email : " + email + " n Form Id : " + document.getElementById("form_id").getAttribute("id") + "nn Form Submitted Successfully......");
    }
    }
    
       
   
    function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
    if (name === '' || email === '') {
    alert("Please fill all fields...!!!!!!");
    return false;
    } else if (!(email).match(emailReg)) {
    alert("Invalid Email...!!!!!!");
    return false;
    } else {
    return true;
    }
    }
