/**
 * 선택테스트 테스트
 * 4. 아이큐테스트
 */
const iqTest = (numbers) => {

	if(!(numbers instanceof Array)){
		throw new Error("배열형태로 입력해 주시길 바랍니다.");
	}
	
	const oddArray = [];
	const evenArray = [];
	let numObj = null;
	
	numbers.some((num,idx)=>{
		
		if(num % 2 === 0) evenArray.push({number: num, index: idx+1, isOdd: false})
		else 			  oddArray.push({number: num, index: idx+1, isOdd: true})
		
		if(evenArray.length > 1 && oddArray.length > 0){
			numObj = oddArray[0];
			return true;
		}else if(oddArray.length > 1 && evenArray.length > 0){
			numObj = evenArray[0];
			return true;
		}
	});
	
	return numObj;
}

