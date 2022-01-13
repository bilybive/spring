/**
 * 
 */

window.onload = () => {
		
	//1-1. 분기 숫자 구하기
	const btnReqTest1 = document.getElementById("btnReqTest1");
	btnReqTest1.addEventListener("click",()=>{
		let month = prompt("월을 입력해주시길 바랍니다.");
		if(!month) return;
		
		let quarter = getQuarter(month);
		let message = `${month}월의 분기는 ${quarter} 입니다.`
		alert(message);
	});
	
	//1-2. 사용하지 않는 가장 작은 숫자 찾기
	const btnReqTest2 = document.getElementById("btnReqTest2");
	btnReqTest2.addEventListener("click",()=>{
		let numarray = prompt("숫자 배열 값을 입력해주시길 바랍니다.");
		if(!numarray) return;
		
		//numarray = jsonParser(numarray);
		let minnum = getNoUsedMinNumber(numarray);
		let message = `${numarray}의 사용하지 않는 가장 작은 숫자는 ${minnum} 입니다.`
		alert(message);
	})
	
	//1-3. 승점구하기
	const btnReqTest3 = document.getElementById("btnReqTest3");
	btnReqTest3.addEventListener("click",()=>{
		let games = prompt("게임 배열 값을 입력해주시길 바랍니다.");
		if(!games) return;
		
		//games = jsonParser(games);
		let score = getScore(games);
		let message = `${games}의 전체 승점은 ${score} 입니다.`
		alert(message);
	});
	
	//1-4. 더하고 빼기
	const btnReqTest4 = document.getElementById("btnReqTest4");
	btnReqTest4.addEventListener("click",()=>{
		let num = prompt("10 ~ 10000 사이의 숫자를 입력해주시길 바랍니다.");
		if(!num) return;
		
		//num = parseInt(num);
		let fruit = getFruit(num);
		let message = `${num}의 결과는 ${fruit} 입니다.`
		alert(message);
	});
	
	//2-1. 모음 찾기
	const btnOptnTest1 = document.getElementById("btnOptnTest1");
	btnOptnTest1.addEventListener("click",()=>{
		let str = prompt("영어를 입력하여 주십시오.");
		if(!str) return;
		
		let vowelCnt = findVowelCnt(str);
		let message = `${str}의 영문 모음 갯수는 ${vowelCnt} 입니다.`
		alert(message);
	});
	
	//2-2. 중간 숫자 찾기
	const btnOptnTest2 = document.getElementById("btnOptnTest2");
	btnOptnTest2.addEventListener("click",()=>{
		let numbers = prompt("숫자들을 입력해주시길 바랍니다.");
		if(!numbers) return;
		
		//numbers = jsonParser(numbers);
		let numObj = findMiddleNumber(numbers);
		const number = numObj.number;
		const index = numObj.index;
		
		let message = `${numbers} 중간 숫자 ${number}의 위치는 ${index} 입니다.`
		alert(message);
	});
	
	//2-3. 친구 찾기
	const btnOptnTest3 = document.getElementById("btnOptnTest3");
	btnOptnTest3.addEventListener("click",()=>{
		let users = prompt("유저명들을 입력해 주시길 바랍니다.");
		if(!users) return;
		
		//users = jsonParser(users);
		let friends = findFriends(users);
		friends = friends.join(",");
		let message = `${users} 중 친구는 ${friends} 입니다.`
		alert(message);
	});
	
	//2-4. 아이큐 테스트
	const btnOptnTest4 = document.getElementById("btnOptnTest4");
	btnOptnTest4.addEventListener("click",()=>{
		let numbers = prompt("숫자들을 입력해주시길 바랍니다.");
		if(!numbers) return;
		
		//numbers = jsonParser(numbers);
		let numObj = iqTest(numbers);
		let message = "";
		if(numObj){
			const number = numObj.number;
			const index = numObj.index;
			const oddeven = numObj.isOdd ? "홀수" : "짝수";
			message = `${numbers} => ${index} # ${number}만 ${oddeven} 입니다.`
		}else{
			message = `모두 홀수 이거나 짝수 입니다.`				
		}
		
		alert(message);
	});
}

window.onerror = (message,source,lineno,colno,error) => {
	if(error["name"] === null || error.name !== "dev"){
		alert(error.message);
	}
}