/**
 * 필수 테스트
 * 1. 분기 숫자 구하기
 */

const getQuarter = (month) => {

	//월에 0을 안붙이고 입력하면 0을 붙인다.
	if( month.length === 1){
		month = "0"+month;
	}
	
	//월 유효성 검사
	if(!month.match(/(0[1-9]|1[012])/)){
		throw new Error("월(Month)를 입력해주시길 바랍니다.\n"
					   +"월(Month)는 1~12 입력가능합니다.");
	}
	return Math.floor(month / 4) + 1;
}

