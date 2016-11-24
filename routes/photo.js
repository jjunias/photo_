module.exports = function(app,Photo,cloudinary,db)
{
	app.get('/photo', function(req,res){               //main 창과 photo.html 클릭시 db에 내용가져옴
        Photo.find({number:0},{v_id:false},function(err, photos){
            if(err) return res.status(500).send({error: 'database failure'});
              res.json(photos);
        })
    });
    app.post('/photo_Img',function(req,res){   //photo.html 에서 img 클릭시 page 이동하면서 내용가져오고 조회수 증가
    	db.collection('photos').update({location:req.body.location,date:req.body.date},{$inc:{clicked:1}});
    	Photo.find({location:req.body.location,date:req.body.date},{_id:false,location:false,date:false,number:false},function(err,photos){
    		if(err) return res.status(500).send({error: 'database failure'});
              res.json(photos);
    	})

    });
	app.post('/photo_Upload', function(req,res){    // 글쓰기 클릭시 db에 저장
		console.log("hi");
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