function validate()
{
	var uname = myform.uname.value;
	var pwd = myform.pwd.value;
	var cpwd = myform.cpwd.value;
	var fname = myform.fname.value;
	var lname = myform.lname.value;
	var age = myform.age.value;
	var mail = myform.mail.value;
	var mob = myform.mob.value;

	var flag = true;
	var str = "";
	var email_filter = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var name_filter = /^([a-zA-Z0-9])+$/;

	if(uname.trim() === "")
	{
		flag = false;
		str += "Username should not be blank!!\n";
	}

	if(pwd.trim() === "")
	{
		flag = false;
		str += "Password should not be blank!!\n";
	}

	if(cpwd.trim() === "" || pwd != cpwd)
	{
		flag = false;
		str += "Password is blank or does not match!!\n";
	}

	if(fname.trim() === "" || !name_filter.test(fname))
	{
		flag = false;
		str += "First name should not be blank and it should not contain special characters!!\n"
	}

	if(lname.trim() === "" || !name_filter.test(lname))
	{
		flag = false;
		str += "Last name should not be blank and it should not contain special characters!!\n"
	}

	if(age.trim() === "")
	{
		flag = false;
		str += "Age should not be blank!!\n";
	}

	if(myform.gender[0].checked == false && myform.gender[1].checked == false && myform.gender[2].checked == false)
	{
		flag = false;
		str += "Gender is not selected!!\n";
	}

	if(mail.trim() === "" || !email_filter.test(mail))
	{
		flag = false;
		str += "Email Id is blank or is invalid!!\n";
	}

	if(!flag)
	{
		alert("Warning!!!\n" + str);
	}
	return flag;

}