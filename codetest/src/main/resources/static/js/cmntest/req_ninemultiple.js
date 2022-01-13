/**
 * 필수 테스트
 * 4. 더하고빼기
 */


const getFruit = (num) => {

	if(!(num instanceof Number)){
		throw new Error("10 ~ 10000 사이의 숫자를 입력해주시길 바랍니다.");
	}

	if(num > 10000 || num < 10){
		throw new Error("숫자를 잘못입력하였습니다. \n" 
					   +"10 ~ 10000 사이의 숫자를 입력해주시길 바랍니다.");
	}
	
	//10이상의 숫자는 계산 후 반드시 9의 배수이다.
	num = getFruitNumCode(num);
	if(num % 9 !== 0){
		const e = new Error("apple 외에 과일 코드가 생성되었습니다. 프로그램 오류를 확인하여주십시오.");
		e.name = "dev";
		throw e;
	}
	
	return "apple";
}


const getFruitNumCode = (num) => {
	const numStr = num.toString();
	const numLength = numStr.length;
	let sum = 0;
	for(let idx=0; idx < numLength; idx++){
		let digit = numStr.substr(idx,1);
		sum += parseInt(digit);
	}
	
	num = num - sum;
	
	if(num > 100) {
		return getFruitNumCode(num);
	}
	
	return num;
}
