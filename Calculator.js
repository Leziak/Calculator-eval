var number = "";
var numbers = [];

//numbers
$("#one").click(function(){
	$("#field").append("1");
	number+="1";
});
$("#two").click(function(){
	$("#field").append("2");
	number+="2";
});
$("#three").click(function(){
	$("#field").append("3");
	number+="3";
});
$("#four").click(function(){
	$("#field").append("4");
	number+="4";
});
$("#five").click(function(){
	$("#field").append("5");
	number+="5";
});
$("#six").click(function(){
	$("#field").append("6");
	number+="6";
});
$("#seven").click(function(){
	$("#field").append("7");
	number+="7";
});
$("#eight").click(function(){
	$("#field").append("8");
	number+="8";
});
$("#nine").click(function(){
	$("#field").append("9");
	number+="9";
});
$("#zero").click(function(){
	$("#field").append("0");
	number+="0";
});
$("#dot").click(function(){
	$("#field").append(".");
	number+=".";
});
//operators

$("#return").click(function(){
	numbers.push(number);
	number="";
	console.log(eval(numbers.join("")));
	$("#field").text((eval(numbers.join("")).toString()).substring(0,4));
	numbers=[];
});

$("#minus").click(function(){
	numbers.push(number);
	number="";
	numbers.push("-");
	$("#field").text("");
});

$("#plus").click(function(){
	numbers.push(number);
	number="";
	numbers.push("+");
	$("#field").text("");
});

$("#times").click(function(){
	numbers.push(number);
	number="";
	numbers.push("*");
	$("#field").text("");
});

$("#divide").click(function(){
	numbers.push(number);
	number="";
	numbers.push("/");
	$("#field").text("");
});

$("#AC").click(function(){
	$("#field").text("");
	numbers=[];
	number="";
})

	
