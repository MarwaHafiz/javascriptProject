function validateForm() {
    var x = document.forms["myForm"]["first-name"].value;
    var y = document.forms["myForm"]["last-name"].value;
    if (x == "" || y=="") {
      alert("Full Name must be filled out");
      return false;
    }
  }