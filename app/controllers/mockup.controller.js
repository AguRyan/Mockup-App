const _ = require('lodash');

//POST mockup
exports.create = (req, res) => {
	
	var REQUIRED_KEYS=process.env['POST_REQUIRED_KEYS'];
	
	var REQUIRED_KEYS_ARR=REQUIRED_KEYS.split(';');
	
	if( REQUIRED_KEYS != '' )
	for (let checkParam in REQUIRED_KEYS_ARR)
	{	
		if(!_.has(req.body, REQUIRED_KEYS_ARR[checkParam]) && !_.has(req.query, REQUIRED_KEYS_ARR[checkParam]))
			return res.status(400).send({
            message: REQUIRED_KEYS_ARR[checkParam] + " it's required"
        });
	}
		
	var HTTP_CODE_RESPONSES_NOK=process.env['POST_HTTP_CODE_RESPONSES_NOK'].split(';');
	var KEY_RESPONSES_NOK=process.env['POST_KEY_RESPONSES_NOK'];
	var KEY_RESPONSES_NOK_ARR=KEY_RESPONSES_NOK.split(';');
	var BODY_RESPONSES_NOK=process.env['POST_BODY_RESPONSES_NOK'].split(';');

	for (let iteratorArr in KEY_RESPONSES_NOK_ARR)
	if(req.body[KEY_RESPONSES_NOK_ARR[iteratorArr].substring(0, KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('='))] == KEY_RESPONSES_NOK_ARR[iteratorArr].substring(KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('=') + 1))
	{
		res.status(parseInt(HTTP_CODE_RESPONSES_NOK[iteratorArr])).send(JSON.parse(BODY_RESPONSES_NOK[iteratorArr]))
		return
		
	}
	else if (req.params[KEY_RESPONSES_NOK_ARR[iteratorArr].substring(0, KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('='))] == KEY_RESPONSES_NOK_ARR[iteratorArr].substring(KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('=') + 1))
	{
		res.status(parseInt(HTTP_CODE_RESPONSES_NOK[iteratorArr])).send(JSON.parse(BODY_RESPONSES_NOK[iteratorArr]))
		return
		
	}
	else if (req.query[KEY_RESPONSES_NOK_ARR[iteratorArr].substring(0, KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('='))] == KEY_RESPONSES_NOK_ARR[iteratorArr].substring(KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('=') + 1))
	{
		res.status(parseInt(HTTP_CODE_RESPONSES_NOK[iteratorArr])).send(JSON.parse(BODY_RESPONSES_NOK[iteratorArr]))
		return
		
	}
	
	var BODY_KEYS_ARR=_.concat(_.keys(req.body), _.keys(req.query),_.keys(req.params) );

	var BODY_RESPONSE_OK=process.env['POST_BODY_RESPONSE_OK'];
	
	
	var BODY_RESPONSE_OK_JSON=JSON.parse(BODY_RESPONSE_OK)
	
	for (let bodyKeys in BODY_KEYS_ARR)
	{
		if(_.has(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys]))
		{
			if(_.has(req.body, BODY_KEYS_ARR[bodyKeys]))
			{
				_.set(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys], _.get(req.body, BODY_KEYS_ARR[bodyKeys]) );
			}
			else if( _.has(req.params, BODY_KEYS_ARR[bodyKeys]))
			{
				_.set(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys], _.get(req.params, BODY_KEYS_ARR[bodyKeys]) );
			}
			else if(_.has(req.query, BODY_KEYS_ARR[bodyKeys]))
			{
				_.set(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys], _.get(req.query, BODY_KEYS_ARR[bodyKeys]) );
			}
		}
		
	}
				
     res.send(BODY_RESPONSE_OK_JSON);
};


// GET mockup
exports.findOne = (req, res) => {

var REQUIRED_KEYS=process.env['GET_REQUIRED_KEYS'];
	
	var REQUIRED_KEYS_ARR=REQUIRED_KEYS.split(';');
	
	if( REQUIRED_KEYS != '' )
	for (let checkParam in REQUIRED_KEYS_ARR)
	{	
		if(!_.has(req.body, REQUIRED_KEYS_ARR[checkParam]) && !_.has(req.query, REQUIRED_KEYS_ARR[checkParam]))
			return res.status(400).send({
            message: REQUIRED_KEYS_ARR[checkParam] + " it's required"
        });
	}
		
	var HTTP_CODE_RESPONSES_NOK=process.env['GET_HTTP_CODE_RESPONSES_NOK'].split(';');
	var KEY_RESPONSES_NOK=process.env['GET_KEY_RESPONSES_NOK'];
	var KEY_RESPONSES_NOK_ARR=KEY_RESPONSES_NOK.split(';');
	var BODY_RESPONSES_NOK=process.env['GET_BODY_RESPONSES_NOK'].split(';');

	for (let iteratorArr in KEY_RESPONSES_NOK_ARR)
	if(req.body[KEY_RESPONSES_NOK_ARR[iteratorArr].substring(0, KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('='))] == KEY_RESPONSES_NOK_ARR[iteratorArr].substring(KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('=') + 1))
	{
		res.status(parseInt(HTTP_CODE_RESPONSES_NOK[iteratorArr])).send(JSON.parse(BODY_RESPONSES_NOK[iteratorArr]))
		return
		
	}
	else if (req.params[KEY_RESPONSES_NOK_ARR[iteratorArr].substring(0, KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('='))] == KEY_RESPONSES_NOK_ARR[iteratorArr].substring(KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('=') + 1))
	{
		res.status(parseInt(HTTP_CODE_RESPONSES_NOK[iteratorArr])).send(JSON.parse(BODY_RESPONSES_NOK[iteratorArr]))
		return
		
	}
	else if (req.query[KEY_RESPONSES_NOK_ARR[iteratorArr].substring(0, KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('='))] == KEY_RESPONSES_NOK_ARR[iteratorArr].substring(KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('=') + 1))
	{
		res.status(parseInt(HTTP_CODE_RESPONSES_NOK[iteratorArr])).send(JSON.parse(BODY_RESPONSES_NOK[iteratorArr]))
		return
		
	}
	
	var BODY_KEYS_ARR=_.concat(_.keys(req.body), _.keys(req.query),_.keys(req.params) );

	var BODY_RESPONSE_OK=process.env['GET_BODY_RESPONSE_OK'];
	
	
	var BODY_RESPONSE_OK_JSON=JSON.parse(BODY_RESPONSE_OK)
	
	for (let bodyKeys in BODY_KEYS_ARR)
	{
		if(_.has(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys]))
		{
			if(_.has(req.body, BODY_KEYS_ARR[bodyKeys]))
			{
				_.set(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys], _.get(req.body, BODY_KEYS_ARR[bodyKeys]) );
			}
			else if( _.has(req.params, BODY_KEYS_ARR[bodyKeys]))
			{
				_.set(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys], _.get(req.params, BODY_KEYS_ARR[bodyKeys]) );
			}
			else if(_.has(req.query, BODY_KEYS_ARR[bodyKeys]))
			{
				_.set(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys], _.get(req.query, BODY_KEYS_ARR[bodyKeys]) );
			}
		}
		
	}
				
     res.send(BODY_RESPONSE_OK_JSON);
 
};

// PUT mockup
exports.update = (req, res) => {

var REQUIRED_KEYS=process.env['PUT_REQUIRED_KEYS'];
	
	var REQUIRED_KEYS_ARR=REQUIRED_KEYS.split(';');
	
	if( REQUIRED_KEYS != '' )
	for (let checkParam in REQUIRED_KEYS_ARR)
	{	
		if(!_.has(req.body, REQUIRED_KEYS_ARR[checkParam]) && !_.has(req.query, REQUIRED_KEYS_ARR[checkParam]))
			return res.status(400).send({
            message: REQUIRED_KEYS_ARR[checkParam] + " it's required"
        });
	}
		
	var HTTP_CODE_RESPONSES_NOK=process.env['PUT_HTTP_CODE_RESPONSES_NOK'].split(';');
	var KEY_RESPONSES_NOK=process.env['PUT_KEY_RESPONSES_NOK'];
	var KEY_RESPONSES_NOK_ARR=KEY_RESPONSES_NOK.split(';');
	var BODY_RESPONSES_NOK=process.env['PUT_BODY_RESPONSES_NOK'].split(';');

	for (let iteratorArr in KEY_RESPONSES_NOK_ARR)
	if(req.body[KEY_RESPONSES_NOK_ARR[iteratorArr].substring(0, KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('='))] == KEY_RESPONSES_NOK_ARR[iteratorArr].substring(KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('=') + 1))
	{
		res.status(parseInt(HTTP_CODE_RESPONSES_NOK[iteratorArr])).send(JSON.parse(BODY_RESPONSES_NOK[iteratorArr]))
		return
		
	}
	else if (req.params[KEY_RESPONSES_NOK_ARR[iteratorArr].substring(0, KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('='))] == KEY_RESPONSES_NOK_ARR[iteratorArr].substring(KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('=') + 1))
	{
		res.status(parseInt(HTTP_CODE_RESPONSES_NOK[iteratorArr])).send(JSON.parse(BODY_RESPONSES_NOK[iteratorArr]))
		return
		
	}
	else if (req.query[KEY_RESPONSES_NOK_ARR[iteratorArr].substring(0, KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('='))] == KEY_RESPONSES_NOK_ARR[iteratorArr].substring(KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('=') + 1))
	{
		res.status(parseInt(HTTP_CODE_RESPONSES_NOK[iteratorArr])).send(JSON.parse(BODY_RESPONSES_NOK[iteratorArr]))
		return
		
	}
	
	var BODY_KEYS_ARR=_.concat(_.keys(req.body), _.keys(req.query),_.keys(req.params) );

	var BODY_RESPONSE_OK=process.env['PUT_BODY_RESPONSE_OK'];
	
	
	var BODY_RESPONSE_OK_JSON=JSON.parse(BODY_RESPONSE_OK)
	
	for (let bodyKeys in BODY_KEYS_ARR)
	{
		if(_.has(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys]))
		{
			if(_.has(req.body, BODY_KEYS_ARR[bodyKeys]))
			{
				_.set(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys], _.get(req.body, BODY_KEYS_ARR[bodyKeys]) );
			}
			else if( _.has(req.params, BODY_KEYS_ARR[bodyKeys]))
			{
				_.set(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys], _.get(req.params, BODY_KEYS_ARR[bodyKeys]) );
			}
			else if(_.has(req.query, BODY_KEYS_ARR[bodyKeys]))
			{
				_.set(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys], _.get(req.query, BODY_KEYS_ARR[bodyKeys]) );
			}
		}
		
	}
				
     res.send(BODY_RESPONSE_OK_JSON);

};

// Delete mockup
exports.deleteByOperation = (req, res) => {
  
var REQUIRED_KEYS=process.env['DELETE_REQUIRED_KEYS'];
	
	var REQUIRED_KEYS_ARR=REQUIRED_KEYS.split(';');
	
	if( REQUIRED_KEYS != '' )
	for (let checkParam in REQUIRED_KEYS_ARR)
	{	
		if(!_.has(req.body, REQUIRED_KEYS_ARR[checkParam]) && !_.has(req.query, REQUIRED_KEYS_ARR[checkParam]))
			return res.status(400).send({
            message: REQUIRED_KEYS_ARR[checkParam] + " it's required"
        });
	}
		
	var HTTP_CODE_RESPONSES_NOK=process.env['DELETE_HTTP_CODE_RESPONSES_NOK'].split(';');
	var KEY_RESPONSES_NOK=process.env['DELETE_KEY_RESPONSES_NOK'];
	var KEY_RESPONSES_NOK_ARR=KEY_RESPONSES_NOK.split(';');
	var BODY_RESPONSES_NOK=process.env['DELETE_BODY_RESPONSES_NOK'].split(';');

	for (let iteratorArr in KEY_RESPONSES_NOK_ARR)
	if(req.body[KEY_RESPONSES_NOK_ARR[iteratorArr].substring(0, KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('='))] == KEY_RESPONSES_NOK_ARR[iteratorArr].substring(KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('=') + 1))
	{
		res.status(parseInt(HTTP_CODE_RESPONSES_NOK[iteratorArr])).send(JSON.parse(BODY_RESPONSES_NOK[iteratorArr]))
		return
		
	}
	else if (req.params[KEY_RESPONSES_NOK_ARR[iteratorArr].substring(0, KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('='))] == KEY_RESPONSES_NOK_ARR[iteratorArr].substring(KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('=') + 1))
	{
		res.status(parseInt(HTTP_CODE_RESPONSES_NOK[iteratorArr])).send(JSON.parse(BODY_RESPONSES_NOK[iteratorArr]))
		return
		
	}
	else if (req.query[KEY_RESPONSES_NOK_ARR[iteratorArr].substring(0, KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('='))] == KEY_RESPONSES_NOK_ARR[iteratorArr].substring(KEY_RESPONSES_NOK_ARR[iteratorArr].indexOf('=') + 1))
	{
		res.status(parseInt(HTTP_CODE_RESPONSES_NOK[iteratorArr])).send(JSON.parse(BODY_RESPONSES_NOK[iteratorArr]))
		return
		
	}
	
	var BODY_KEYS_ARR=_.concat(_.keys(req.body), _.keys(req.query),_.keys(req.params) );

	var BODY_RESPONSE_OK=process.env['DELETE_BODY_RESPONSE_OK'];
	
	
	var BODY_RESPONSE_OK_JSON=JSON.parse(BODY_RESPONSE_OK)
	
	for (let bodyKeys in BODY_KEYS_ARR)
	{
		if(_.has(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys]))
		{
			if(_.has(req.body, BODY_KEYS_ARR[bodyKeys]))
			{
				_.set(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys], _.get(req.body, BODY_KEYS_ARR[bodyKeys]) );
			}
			else if( _.has(req.params, BODY_KEYS_ARR[bodyKeys]))
			{
				_.set(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys], _.get(req.params, BODY_KEYS_ARR[bodyKeys]) );
			}
			else if(_.has(req.query, BODY_KEYS_ARR[bodyKeys]))
			{
				_.set(BODY_RESPONSE_OK_JSON, BODY_KEYS_ARR[bodyKeys], _.get(req.query, BODY_KEYS_ARR[bodyKeys]) );
			}
		}
		
	}
				
     res.send(BODY_RESPONSE_OK_JSON);

  
};
