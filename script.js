function validateform(){  
    var name=document.myform.first-name.value;  
    // var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }

    if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            
            return false;
        }
        else{
            console.log("enter a valid email"); 
        }
    }
    else {
        if($(input).val().trim() == ''){
            return false;
        }
    }
}  