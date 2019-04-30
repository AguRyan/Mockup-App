const _ = require('lodash');

//POST mockup
exports.create = (req, res) => {
	
var REQUIRED_KEYS=process.env['POST_REQUIRED_KEYS'];
	
	var REQUIRED_KEYS_ARR=REQUIRED_KEYS.split(',');
	
	
	for (let checkParam in REQUIRED_KEYS_ARR)
	{	
		if(!_.has(req.body, REQUIRED_KEYS_ARR[checkParam]) && !_.has(req.query, REQUIRED_KEYS_ARR[checkParam]))
			return res.status(400).send({
            message: REQUIRED_KEYS_ARR[checkParam] + " it's required"
        });
	}
		
	var KEY_RESPONSE_500=process.env['POST_KEY_RESPONSE_500'];
	var KEY_RESPONSE_500_ARR=KEY_RESPONSE_500.split('=');
	var BODY_RESPONSE_500=process.env['POST_BODY_RESPONSE_500'];

		
	if(req.body[KEY_RESPONSE_500_ARR[0]] == KEY_RESPONSE_500_ARR[1])
	{
		res.status(500).send(JSON.parse(BODY_RESPONSE_500))
		return
		
	}
	else if (req.params[KEY_RESPONSE_500_ARR[0]] == KEY_RESPONSE_500_ARR[1])
	{
		res.status(500).send(JSON.parse(BODY_RESPONSE_500))
		return
		
	}
	else if (req.query[KEY_RESPONSE_500_ARR[0]] == KEY_RESPONSE_500_ARR[1])
	{
		res.status(500).send(JSON.parse(BODY_RESPONSE_500))
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
	
	var REQUIRED_KEYS_ARR=REQUIRED_KEYS.split(',');
	
	
	for (let checkParam in REQUIRED_KEYS_ARR)
	{	
		if(!_.has(req.body, REQUIRED_KEYS_ARR[checkParam]) && !_.has(req.query, REQUIRED_KEYS_ARR[checkParam]))
			return res.status(400).send({
            message: REQUIRED_KEYS_ARR[checkParam] + " it's required"
        });
	}
		
	var KEY_RESPONSE_500=process.env['GET_KEY_RESPONSE_500'];
	var KEY_RESPONSE_500_ARR=KEY_RESPONSE_500.split('=');
	var BODY_RESPONSE_500=process.env['GET_BODY_RESPONSE_500'];

		
	if(req.body[KEY_RESPONSE_500_ARR[0]] == KEY_RESPONSE_500_ARR[1])
	{
		res.status(500).send(JSON.parse(BODY_RESPONSE_500))
		return
		
	}
	else if (req.params[KEY_RESPONSE_500_ARR[0]] == KEY_RESPONSE_500_ARR[1])
	{
		res.status(500).send(JSON.parse(BODY_RESPONSE_500))
		return
		
	}
	else if (req.query[KEY_RESPONSE_500_ARR[0]] == KEY_RESPONSE_500_ARR[1])
	{
		res.status(500).send(JSON.parse(BODY_RESPONSE_500))
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
	
	var REQUIRED_KEYS_ARR=REQUIRED_KEYS.split(',');
	
	
	for (let checkParam in REQUIRED_KEYS_ARR)
	{	
		if(!_.has(req.body, REQUIRED_KEYS_ARR[checkParam]) && !_.has(req.query, REQUIRED_KEYS_ARR[checkParam]))
			return res.status(400).send({
            message: REQUIRED_KEYS_ARR[checkParam] + " it's required"
        });
	}
		
	var KEY_RESPONSE_500=process.env['PUT_KEY_RESPONSE_500'];
	var KEY_RESPONSE_500_ARR=KEY_RESPONSE_500.split('=');
	var BODY_RESPONSE_500=process.env['PUT_BODY_RESPONSE_500'];

		
	if(req.body[KEY_RESPONSE_500_ARR[0]] == KEY_RESPONSE_500_ARR[1])
	{
		res.status(500).send(JSON.parse(BODY_RESPONSE_500))
		return
		
	}
	else if (req.params[KEY_RESPONSE_500_ARR[0]] == KEY_RESPONSE_500_ARR[1])
	{
		res.status(500).send(JSON.parse(BODY_RESPONSE_500))
		return
		
	}
	else if (req.query[KEY_RESPONSE_500_ARR[0]] == KEY_RESPONSE_500_ARR[1])
	{
		res.status(500).send(JSON.parse(BODY_RESPONSE_500))
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
	
	var REQUIRED_KEYS_ARR=REQUIRED_KEYS.split(',');
	
	
	for (let checkParam in REQUIRED_KEYS_ARR)
	{	
		if(!_.has(req.body, REQUIRED_KEYS_ARR[checkParam]) && !_.has(req.query, REQUIRED_KEYS_ARR[checkParam]))
			return res.status(400).send({
            message: REQUIRED_KEYS_ARR[checkParam] + " it's required"
        });
	}
		
	var KEY_RESPONSE_500=process.env['DELETE_KEY_RESPONSE_500'];
	var KEY_RESPONSE_500_ARR=KEY_RESPONSE_500.split('=');
	var BODY_RESPONSE_500=process.env['DELETE_BODY_RESPONSE_500'];

		
	if(req.body[KEY_RESPONSE_500_ARR[0]] == KEY_RESPONSE_500_ARR[1])
	{
		res.status(500).send(JSON.parse(BODY_RESPONSE_500))
		return
		
	}
	else if (req.params[KEY_RESPONSE_500_ARR[0]] == KEY_RESPONSE_500_ARR[1])
	{
		res.status(500).send(JSON.parse(BODY_RESPONSE_500))
		return
		
	}
	else if (req.query[KEY_RESPONSE_500_ARR[0]] == KEY_RESPONSE_500_ARR[1])
	{
		res.status(500).send(JSON.parse(BODY_RESPONSE_500))
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
