module.exports = function(app,Counter,Qa,db)
{
	app.get('/qa_View', function(req,res){
        Qa.find({},{pwd:false,_id:false,content:false},function(err, qas){
            if(err) return res.status(500).send({error: 'database failure'});
              res.json(qas);
        }).sort({number:-1});

    });
    app.post('/qa_Write',function(req,res){
    	db.collection("qas").update({number:Number(req.body.num)},{$inc:{clicked:1}});
    	Qa.findOne({number:req.body.num},{pwd:false},function(err,qas){
    		if(err) return res.status(500).send({error: 'database failure'});
    		res.json(qas);
    		console.log(qas);
    	});
    });
	app.post('/qa_Upload', function(req,res){
		getNextSequence("qaSequence");
		function getNextSequence(index) {
	   		db.collection("counters").update({_id:index},{$inc:{seq:1}});
	        Counter.findOne({name:index},function(err,counters){
	       		if(err) return res.status(500).send({error: 'database failure'});
	       			db.collection("qas").insert({
	       				number:counters.seq,
	        			writer:req.body.writer,
	        			pwd:req.body.title,
	        			title:req.body.title,
	        			content:req.body.content,
	        			date:req.body.date,
	        			clicked:0
	       			});
	       		});
		}res.redirect('/#/qa');
        /*db.collection("counters").insert({      //시퀀스 하기전 생성
        	_id: "qaSequence",
        	name:"qaSequence",
      		seq: 0
        })*/
    });
}