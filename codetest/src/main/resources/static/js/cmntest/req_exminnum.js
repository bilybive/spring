/**
 * 필수 테스트
 * 2. 사용하지 않는 가장 작은 숫자 찾기
 */
const getNoUsedMinNumber = (numarray) => {

	if(!(numarray instanceof Array)){
		throw new Error("배열형태로 입력해 주시길 바랍니다.");
	}

	let minidx = -1;
	//중복제거
	numarray = numarray.filter((el,idx) => {
		return numarray.indexOf(el) === idx;
	});
	
	//정렬
	numarray.sort((a,b)=> a-b);
	
	numarray.some((num,idx) => {
		if(numarray[idx+1] - num > 1){
			minidx = idx;
			return true;
		} 
	});	
	
	//사용하지 않는 숫자를 못찾으면 제일 마지막 숫자로 한다.
	if(minidx === -1){
		minidx = numarray.length-1
	}
	
	return numarray[minidx]+1;
}

