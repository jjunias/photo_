module.exports = function(app,View)
{
	app.get('/viewLoad', function(req,res){
        View.find(function(err, views){
            if(err) return res.status(500).send({error: 'database failure'});
              res.json(views);
        })
    });
}