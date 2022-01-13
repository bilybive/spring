/**
 * 필수 테스트
 * 3. 승점구하기
 */


const getScore = (games) => {
	
	const scorearray = getScoreArray(games);
	const score = sumScore(scorearray)
	return score;
}

const getScoreArray = (games) => {

	if(!(games instanceof Array)){
		throw new Error("배열형태로 입력해 주시길 바랍니다.");
	}
    
    const scorearray = games.map((game)=> {

            let gameSide = game.split(":");
            let gameRight = gameSide[0];
            let gameLeft = gameSide[1];

            if(gameRight > gameLeft){
                return 3
            }else if(gameRight < gameLeft){
                return 0
            }else if(gameRight === gameLeft){
                return 1
            }
    });

    return scorearray;
}

const sumScore = (scorearray) => {
	return scorearray.reduce((acc,curr)=> acc+curr );
}

