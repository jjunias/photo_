module.exports = function(app,Counter,Reply,db)
{
	app.post('/reply_Upload',function(req,res){
		getNextSequence("replySequence");
        function getNextSequence(index) {
            db.collection("counters").update({_id:index},{$inc:{seq:1}});
            Counter.findOne({name:index},function(err,counters){
        		if(err) return res.status(500).send({error: 'database failure'});
            	db.collection("replies").insert({
                    number:counters.seq,
				   	location:req.body.location,
				   	parent:Number(req.body.parent),
			       	reply:req.body.reply,
			       	id:req.body.id,
			       	pwd:req.body.pwd,
			       	date:req.body.date
                });
            	res.json({result:1});
    		});
        }
    });

    app.post('/reply_View',function(req,res){
    	Reply.find({location:req.body.location,parent:Number(req.body.parent)},function(err, replies){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(replies);
        })
    });
    app.delete('/reply_Delete/:number', function(req,res){
        Reply.remove({number:Number(req.params.number)},function(err){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json({result:true});
        })
    });
}