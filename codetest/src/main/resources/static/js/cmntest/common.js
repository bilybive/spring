/**
 * 
 */

const prompt = (message) => {
	var a = window.prompt(message);
	return jsonParser(a);
}

const jsonParser = (a) =>{
	if(!(parseInt(a) instanceof Number)){
		a = a.replaceAll("'","").replaceAll("\"","");
		a = "\""+a+"\"";
	}
	return JSON.parse(a);
}