module.exports = function(app,fs,cloudinary){
	app.post('/upload', function(req, res){
		/*cloudinary.uploader.upload("1.jpg",function(result) { console.log(result) });*/

		cloudinary.uploader.upload("1.jpg",function(result) {
    console.log(result)
    }, {public_id: 'sample_remote',width:500,height:300})
	});
}