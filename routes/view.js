module.exports = function(app,View,multer)
{
	app.get('/viewLoad', function(req,res){
        View.find(function(err, views){
            if(err) return res.status(500).send({error: 'database failure'});
              res.json(views);
        })
    });
	app.post('/viewWrite', function(req, res){
        var view = new View();
        view.name = req.body.name;
        view.age = req.body.age;
        view.img = req.body.img;
        view.content = req.body.content;
        view.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }
            res.json({result: 1});
        });
    });
    app.post('/viewUpload',multer({dest:'/images/upload/'}).single('123'),function(req,res){
        
    });

}