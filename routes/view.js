    module.exports = function(app,View,cloudinary)
{
	app.get('/viewLoad', function(req,res){
        View.find(function(err, views){
            if(err) return res.status(500).send({error: 'database failure'});
              res.json(views);
        })
    });

	app.post('/viewUpload', function(req, res){
		cloudinary.uploader.upload(req.files.img.path,function(result) {
    	console.log(result)},{public_id:req.files.img.name,width:600,height:900})	
    	var view = new View();
    	view.name = req.body.name;
    	view.age = req.body.age;
    	view.img = "http://res.cloudinary.com/hmwuqfqmp/image/upload/"+req.files.img.name+".jpg";
  	    view.content = req.body.content;
        view.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }
             res.redirect('/#/review');
        });
    });
}