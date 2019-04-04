<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<link rel = "stylesheet" href = "style.css">
</head>
<body>



<%@ page import="java.sql.*"%>
<%@ page import ="javax.sql.*" %>
<%
String user=request.getParameter("uname");
//session.putValue("uname",user);
String pwd=request.getParameter("pwd");
String fname=request.getParameter("fname");
String lname=request.getParameter("lname");
String age=request.getParameter("age");
String gender=request.getParameter("gender");
String email=request.getParameter("mail");
String mob=request.getParameter("mob");
Class.forName("com.mysql.jdbc.Driver");
Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/test","root", "mysql");
Statement st= con.createStatement();
ResultSet rs;
int i=st.executeUpdate("insert into users values('"+user+"','"+pwd+"','"+fname+"','"+lname+"', '"+age+"', '"+gender+"','"+email+"', '"+mob+"')");
%>

		<div class="title">
			<h1>NEWS</h1>
		</div>
		
		<div class="nav">
			<div class="left-side">
				<div class="nav-linker">
					<a href="news.html">Home</a>
				</div>
				<div class="nav-linker">
					<a href="about.html">About</a>
				</div>
			</div>
			<div class="right-side">
				<div class="nav-linker">
					<a href="login_form.html">Log in</a>
				</div>
				<div class="nav-linker">
					<a href="signup_form.html">Sign up</a>
				</div>
			</div>
		</div>
	<div class = "title">
		<p align = "center">Your response has been submitted!!!</p>
	</div>

</body>
</html>