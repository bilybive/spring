/**
 * 선택테스트 테스트
 * 2. 중간 숫자 찾기
 */
const findMiddleNumber = (numbers) => {

	if(!(numbers instanceof Array)){
		throw new Error("배열형태로 입력해 주시길 바랍니다.");
	}

	//홀수개 가정
	if( !(numbers.length % 2) ){
		throw new Error("홀수 갯수 만큼 입력해 주시길 바랍니다.");
	}
	
	let sortedNumbers = [];
	sortedNumbers = sortedNumbers.concat(numbers);
	sortedNumbers.sort((a,b) => a-b);
	const middlePos = (sortedNumbers.length-1)/2;
	let middleNum = sortedNumbers[middlePos];
	let numObj = null;
	
	numbers.find((num,idx)=>{
		if(num === middleNum){
			numObj = {number: num, index: idx};
			return; 
		}
	});
	
	return numObj;
}

