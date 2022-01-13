/**
 * 선택테스트 테스트
 * 3. 친구 찾기
 */
const findFriends = (users) => {
	
	if(!(users instanceof Array)){
		throw new Error("배열형태로 입력해 주시길 바랍니다.");
	}
	
	return users.filter((user)=>{
		if(user.length === 4){
			return user;
		}
	});
	
}

