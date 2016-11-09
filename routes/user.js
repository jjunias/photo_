module.exports = function(app,User)
{
	app.get('/idCheck', function(req,res){
        User.find(function(err, users){
            if(err) return res.status(500).send({error: 'database failure'});
              res.json(views);
        })
    });

	app.post('/signUp', function(req, res){
        var user = new User();
        user.name = req.body.name;
        user.pwd = req.body.pwd;
        user.email = req.body.email;
        user.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }
            location.href='/';
        });
    });
}