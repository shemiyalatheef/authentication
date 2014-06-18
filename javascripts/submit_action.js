function submit_action()
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
			alert("select gender");
			return false;
		}
		if(!sslc&&!degree&&!pg)
		{
			alert("select any Language");
			return false;
		}

		
}
function phone_validation()
	{
		var phtxt =document.getElementById("phtxt").value;
		if(isNaN(phtxt))
		{alert("Enter valid number");
			document.getElementById("phtxt").value="";
			document.getElementById("phtxt").focus();

		}
	}	

		

		
		
		
		

	