module.exports = (app) => {
    const association = require('../controllers/mockup.controller.js');

	var POST_API_PATH=process.env['POST_API_PATH'] || ""; 	
	var GET_API_PATH=process.env['GET_API_PATH'] || "";	
	var PUT_API_PATH=process.env['PUT_API_PATH'] || "";	
	var DELETE_API_PATH=process.env['DELETE_API_PATH'] || "";	


	if(POST_API_PATH != "")
    app.post(POST_API_PATH, association.create);

	if(GET_API_PATH != "")
	{
		var GET_API_PATH_ARR=GET_API_PATH.split(';');
	
		if(GET_API_PATH_ARR.length > 1)
			app.get(GET_API_PATH_ARR[0], association.findOne);
			app.get(GET_API_PATH_ARR[1], association.findOne);
		else
			app.get(GET_API_PATH_ARR[0], association.findOne);

	}

	if(PUT_API_PATH != "")
    app.put(PUT_API_PATH, association.update);

	if(DELETE_API_PATH != "")
    app.delete(DELETE_API_PATH, association.deleteByOperation);

	app.use(function(req, res){
       res.status(405).send({message: "Metodo no definido"});
   });
}