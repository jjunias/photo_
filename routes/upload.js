module.exports = function(app,View,cloudinary)
{
	app.post('/upload', function(req, res){
		cloudinary.uploader.upload(req.files.img.path,function(result) {
    	console.log(result)},{public_id:req.files.img.name,width:400,height:600})	

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