module.exports = function(app,Qa)
{	
	app.get('/qa_View', function(req,res){
        Qa.find({},{pwd:false},function(err, qas){
            if(err) return res.status(500).send({error: 'database failure'});
              res.json(qas);
        })
    });
	app.post('/qa_Upload', function(req,res){
		var qa = new Qa();
		qa.writer = req.body.writer;
		qa.pwd = req.body.pwd;
		qa.title = req.body.title;
		qa.content = req.body.content;
		qa.date = req.body.date;
		qa.clicked = 0;
		qa.save(function(err){
	        if(err){
	          	console.error(err);
	          	res.json({result: 0});
	           	return;
	        }
        });
		res.redirect('/#/qa');
    });
}