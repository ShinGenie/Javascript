	
	window.onload = function (){
	
	// var hello = document.getElementById("hello"); // 객체임
	// this.console.log('aaaaa',hello);
	// if(hello === "hello world"){
	// 		btn.addEventListener('click', function(e){
	// 			//document.write("<h1 style='color:pink'>hello world<h1>");
	// 			hello.innerHTML="Hi Genie!";
	// 			console.log("hello world");

	// 		});
	// 	}else{
	// 		btn.addEventListener('click', function(e){
	// 			//document.write("<h1 style='color:pink'>hello world<h1>");
	// 			hello.innerHTML="Miss you, Genie!";
	// 			console.log("Miss world");
	// 		});
	// 	}
	// var a = "핼로우";
	// var b = "월드";
	// var c = 30;
	// var d = 50;
	// this.console.log(a);
	// this.console.log(b);
	// this.console.log(a + b + (c + d));


	// var a = sub(30,40); // 호이스팅되서 출력됨
	// this.console.log(a);

	// function sub(a,b){
	// 	return a-b;
	// }

	// sub 변수던 함수든 같은 이름을 찾는데, 함수선언이 아닌 
	// 변수에 담겨있는거라 호이스팅 안됨
	// var sub = function (a,b){
	// 	return a-b;
	// }

	function hello(z,x,y){
		console.log("안녕" + z,x,y);
	}

	window.global = "window global";

	function fn(){
		local = "local"; // var 선언안했을때 window.local로 자동 전역선언해줌. 반드시 자료형! 그래서 출력됨
		console.log(global, local);
	}
	fn();
	this.console.log(global, local);

	function cal(){
		for(var i=0; i<5; i++){ // 그래서 var 대신 let을 쓴다
			console.log(i);
		}
		console.log('aaaaaa',i);
	}
	cal();

	var randomNumber = Math.floor(Math.random()*10) + 1;
	this.console.log('randomNumber',randomNumber);

	var number = this.document.getElementById("number");
	var btn = this.document.getElementById("button");
	var result = this.document.getElementById("result");
	
	function buttonHandler(a){
		console.log("클릭됨",a);
	}
	// button.onclick = buttonHandler;

	// button.onclick = function(e){
	// 	console.log(e);
	// 	buttonHandler(5);
	// }
	//이벤트 객체를 받음 mouseEvent
	// btn.addEventListener('click', buttonHandler, false);

	// function buttonHandler(a){
	// 	console.log("클릭됨", a);
	// }

	// function buttonHandler2(e){
	// 	console.lg("클릭됨",e);
	// }

	// addEvent는 여러 이름으로
	btn.addEventListener('click', function(e){
		var val = parseInt(number.value);
		if(val === randomNumber) { // === 은 자료형까지 맞아야
			result.innerHTML = "당첨"
			console.log(typeof(val))
		}else if(val < randomNumber){
			result.innerHTML = " 더 큰 수를 적으세요";
		}else {
			result.innerHTML = " 더 작은 수를 적으세요";
		}
	}, false);
	// btn.addEventListener('click', buttonHandler2, false);

}