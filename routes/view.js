module.exports = function(app,Counter,View,cloudinary,db)
{
	app.get('/view_Load', function(req,res){
        View.find(function(err, views){
            if(err) return res.status(500).send({error: 'database failure'});
              res.json(views);
        })
    });
    app.post('/view_Upload',function(req,res){
        cloudinary.uploader.upload(req.files.img.path,function(result){},{public_id:req.files.img.name,width:600,height:900})
        getNextSequence("viewSequence");
        function getNextSequence(index) {
            db.collection("counters").update({_id:index},{$inc:{seq:1}});
            Counter.findOne({name:index},function(err,counters){
                if(err) return res.status(500).send({error: 'database failure'});
                    db.collection("views").insert({
                        name:req.body.name,
                        number:counters.seq,
                        age:req.body.age,
                        img:"http://res.cloudinary.com/hmwuqfqmp/image/upload/"+req.files.img.name+".jpg",
                        content:req.body.content
                    });
                });
        }res.redirect('/#/review');
    });
    app.delete('/view_Delete/:number', function(req,res){
        View.remove({number:Number(req.params.number)},function(err){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json({result:true});
        })
    });
}