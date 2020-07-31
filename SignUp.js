function form() 
{
    var n = document.getElementById("name").value;
    var e = document.getElementById("email").value;
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
    var r = document.getElementById("repassword").value;
    var c = document.getElementById("number").value;
    var d = document.getElementById("dob").value;
    var ci = document.getElementById("city").value;
    var s = document.getElementById("state").value;
    var co = document.getElementById("country").value;    

    if(n.trim()=="")
    {
        alert("Enter Name");
        return false;
    }
    else if(e.trim()=="")
    {
        alert("Enter Email");
        return false;
    }
    else if(u.trim()=="")
    {
        alert("Enter Username");
        return false;
    }
    else if(p.trim()=="")
    {
        alert("Enter Password");
        return false;
    }
    else if(r.trim()=="")
    {
        alert("Enter Retype-password");
        return false;
    }
    else if(p!=r)
    {
        alert("Password & Re-type Password doesn't match");
        return false;
    }
    else if(p.trim().length<5)
    {
        alert("Password is too short");
        return false;
    }
    else if(c.trim()=="")
    {
        alert("Enter Contact No.");
        return false;
    }
    else if(d.trim()=="")
    {
        alert("Enter Date of Birth");
        return false;
    }
    else if(ci.trim()=="")
    {
        alert("Enter City");
        return false;
    }
    else if(s.trim()=="")
    {
        alert("Enter State");
        return false;
    }
    else if(co.trim()=="")
    {
        alert("Enter Country");
        return false;
    }
    else
    {
        return true;
    }
}