module.exports = function(app,Photo,cloudinary)
{
	app.post('/photoUpload', function(req,res){
       console.log(req.files.img[0].path);
    });
}