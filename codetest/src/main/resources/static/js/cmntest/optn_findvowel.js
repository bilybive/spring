/**
 * 선택테스트 테스트
 * 1. 모음 찾기
 */
const findVowelCnt = (str) => {

	if(!str.match(/[a-zA-Z]/)){
		throw new Error("영어로 입력해주시길 바랍니다.");
	}
	
	let matched = str.match(/[aeiou]/g);
	return matched.length;
}

