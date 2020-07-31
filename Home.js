function form ()
{
    var usrname = document.getElementById("uname").value;
    var pswrd = document.getElementById("pword").value ;

    if(usrname.trim()=="" && pswrd.trim()=="")
    {
        alert("Write username and password");
        uname.style.border="solid 5px red";
        pword.style.border="solid 5px red";
        return false;
    }
    else if (usrname.trim()=="")
    {
        alert("Write username");
        pword.style.border="solid 1px rgba(0, 0, 0, 0)";
        uname.style.border="solid 5px red";
        return false;
    }
    else if (pswrd.trim()=="")
    {
        alert("Write password");
        uname.style.border="solid 1px rgba(0, 0, 0, 0)";
        pword.style.border="solid 5px red";
        return false;
    }
    else if (usrname!="sankiii7")
    {
        alert("Username and Password doen't match");
        uname.style.border="solid 5px red";
        pword.style.border="solid 5px red";
        return false;
    }
    else if (uname=="sankiii7" || pswrd!="strings29")
    {
        alert("Password is incorrect");
        pword.style.border="solid 5px red";
        return false;
    }
    else if (uname=="sankiii7" || pswrd=="strings29")
    {
        return true;
    }
    /*
    else if (usrname!="sankiii7" || pswrd=="strings29")
    {
        alert("Username and Password doen't match");
        return false;
    }

    This statement is invalid 
    It'll not work
    */ 
}