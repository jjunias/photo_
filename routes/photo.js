module.exports = function(app,Counter,Photo,cloudinary,db)
{
	app.get('/photo', function(req,res){               //main 창과 photo.html 클릭시 db에 내용가져옴
        Photo.find({first:0},{v_id:false},function(err, photos){
            if(err) return res.status(500).send({error: 'database failure'});
              res.json(photos);
        })
    });
    app.post('/photo_Img:number',function(req,res){   //photo.html 에서 img 클릭시 page 이동하면서 내용가져오고 조회수 증가
    	console.log(req);
    	db.collection('photos').update({number:Number(req.body.number)},{$inc:{clicked:1}});
    	Photo.find({number:Number(req.body.number)},{_id:false},function(err,photos){
    		if(err) return res.status(500).send({error: 'database failure'});
              res.json(photos);
    	})

    });
	app.post('/photo_Upload', function(req,res){    // 글쓰기 클릭시 db에 저장
		for(i=0;i<req.files.img.length;i++){
			cloudinary.uploader.upload(req.files.img[i].path,function(result){console.log(result)},
			{public_id:req.files.img[i].name,width:1200,height:750})
		}
		getNextSequence("photoSequence");
		function getNextSequence(index) {
	   		db.collection("counters").update({_id:index},{$inc:{seq:1}});
	        Counter.findOne({name:index},function(err,counters){
	       		if(err) return res.status(500).send({error: 'database failure'});
	       		for(i=0;i<req.files.img.length;i++){
	       			db.collection("photos").insert({
	       				location : req.body.location,
	       				date : req.body.date,
	       				clicked :0,
	       				first: i,
	       				number : counters.seq,
	       				img : "http://res.cloudinary.com/hmwuqfqmp/image/upload/"+req.files.img[i].name+".jpg"
	       			})
	       		}
	       	});
	    }
	    res.redirect('/#/photo');
	});
	app.delete('/Photo_Delete/:number', function(req,res){
        Photo.remove({number:Number(req.params.number)},function(err){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json({result:true});
        })
    });
}