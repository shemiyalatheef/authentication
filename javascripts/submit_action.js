/*Method for handling submit action in signup.html */
function signup_submit_action()
	{
		
		var fnametxt =document.getElementById("fnametxt").value;
		
		var lnametxt = document.getElementById("lnametxt").value;
		var emailtxt = document.getElementById("emailtxt").value;
		var phtxt =document.getElementById("phtxt").value;
		var pass1txt = document.getElementById("pass1txt").value;
		var pass2txt = document.getElementById("pass2txt").value;
		var pincodetxt = document.getElementById("pincodetxt").value;
		var statetxt = document.getElementById("statetxt").value;
		var gender1=document.getElementById("male").checked;
		var gender2=document.getElementById("female").checked;
		var sslc=document.getElementById("SSLC").checked;
		var degree=document.getElementById("Deree").checked;
		var pg=document.getElementById("PG").checked;
		
		if(fnametxt.trim()=="")
			{alert("Enter the First Name");
				document.getElementById("fnametxt").focus();
				return false;
			}
		if(lnametxt.trim()=="")
			{alert("Enter the Last Name");
				document.getElementById("lnametxt").focus();
			return false;
			}
		if(emailtxt.trim()=="")
			{alert("Enter the Email address");
			document.getElementById("emailtxt").focus();
			return false;
		}
		if(emailtxt!="")
		{
			var re = /\S+@\S+\.\S+/;
    		if(!re.test(emailtxt)) 
    		
    			{alert("Enter a valid email id");
    			document.getElementById("emailtxt").focus();
    			return false;
    			}
    			

		}
		
		if(pass1txt=="")
			{alert("Enter the password ");
			document.getElementById("pass1txt").focus();
			return false;
		}
		if(pass2txt=="")
			{alert("Retype Password");
			document.getElementById("pass2txt").focus();
			return false;
		}
		if(pass1txt!=pass2txt)
		{		alert("Password does not match");
				document.getElementById("pass2txt").focus();
				return false;
		}
		if(phtxt.trim()=="")
			{alert("Enter the Phone Number");
			document.getElementById("phtxt").focus();
			return false;
			}
			else
			{
				if(phtxt.length!==10)
				{alert("Phone number with wrong length");
				document.getElementById("phtxt").focus();
				return false;}

			}
			if(pincodetxt=="")
			{alert("Enter pin code");
			document.getElementById("pincodetxt").focus();
			return false;
			}
			else
			{
				if(pincodetxt.length!==6)
				{alert("Pincode with wrong length");
				document.getElementById("pincodetxt").focus();
				return false;}

			}

		if(statetxt=="1")
			{alert("Select state");
			document.getElementById("statetxt").focus();
			return false;
		}

		if(!gender1&&!gender2)
		{
			alert("Select Gender");
			return false;
		}
		if(!sslc&&!degree&&!pg)
		{
			alert("Select any Language");
			return false;
		}

		
}

/*Method for Validating the phone number in signup.html */	
function phone_validation()
	{
		var phtxt =document.getElementById("phtxt").value;
		if(isNaN(phtxt))
		{alert("Enter valid number");
			document.getElementById("phtxt").value="";
			document.getElementById("phtxt").focus();

		}
	}
/*Method for Validating the pin number in signup.html */	
	function pin_validation()
	{
		var pincodetxt =document.getElementById("pincodetxt").value;
		if(isNaN(pincodetxt))
		{alert("Enter valid number");
			document.getElementById("pincodetxt").value="";
			document.getElementById("pincodetxt").focus();

		}
	}

/*Method for handling reset action in signup.html */	
function signup_reset_action()
{
	document.getElementById("lnametxt").value="";
	document.getElementById("fnametxt").value="";
	document.getElementById("emailtxt").value="";
	document.getElementById("pass1txt").value="";
	document.getElementById("pass2txt").value="";
	document.getElementById("phtxt").value="";
	document.getElementById("pincodetxt").value="";
	document.getElementById("male").checked=false;
		document.getElementById("female").checked=false;
		document.getElementById("SSLC").checked=false;
		document.getElementById("Deree").checked=false;
		document.getElementById("PG").checked=false;
		document.getElementById("statetxt").value=1;

}

/*Method for handling submit action in signin.html */
function signin_submit_action()
{
		var emailtxt = document.getElementById("emailtxt").value;
		var passtxt = document.getElementById("passtxt").value;
		if(emailtxt.trim()=="")
			{alert("Enter the Email address");
			document.getElementById("emailtxt").focus();
			return false;
			}
		if(emailtxt!="")
		{
			var re = /\S+@\S+\.\S+/;
    		if(!re.test(emailtxt)) 
    		
    			{alert("Enter a valid email id");
    			document.getElementById("emailtxt").focus();
    			return false;
    			}
    			

		}
		if(passtxt=="")
			{alert("Enter the password ");
			document.getElementById("passtxt").focus();
			return false;
		}

}

/*Method for handling reset action in signin.html */	
function signin_reset_action()
{
	document.getElementById("emailtxt").value="";
	document.getElementById("passtxt").value="";
}
function email_disp()
{
	document.getElementById("disp").innerHTML="Enter Email Id";
}
function pass_disp()
{
	document.getElementById("passdisp").innerHTML="Enter Password";
}
		

