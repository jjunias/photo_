module.exports = function(app,Photo,cloudinary)
{
	app.get('/photo', function(req,res){
        Photo.find({number:0},function(err, photos){
            if(err) return res.status(500).send({error: 'database failure'});
              res.json(photos);
        })
    });
    app.post('/photo_Img',function(req,res){
    	Photo.find({location:req.body.location,date:req.body.date},{v_id:false,location:false,date:false,number:false},function(err,photos){
    		if(err) return res.status(500).send({error: 'database failure'});
              res.json(photos);
    	})
    });
	app.post('/photo_Upload', function(req,res){
		for(i=0;i<req.files.img.length;i++){
			cloudinary.uploader.upload(req.files.img[i].path,function(result){console.log(result)},
			{public_id:req.files.img[i].name,width:1200,height:750})
			var photo = new Photo();
			photo.location = req.body.location;
			photo.date = req.body.date;
			photo.clicked = 0;
			photo.number = i;
			photo.img = "http://res.cloudinary.com/hmwuqfqmp/image/upload/"+req.files.img[i].name+".jpg";
			photo.save(function(err){
	            if(err){
	               	console.error(err);
	               	res.json({result: 0});
	               	return;
	            }
        	});
		}
		res.redirect('/#/photo');
    });
}