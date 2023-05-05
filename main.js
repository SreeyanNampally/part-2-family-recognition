
Webcam.set({
    width:350,
    height:270,
    image_format:"png",
    png_quality:90
})

camera= document.getElementById("camera")
Webcam.attach("#camera")

function takesnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">'
    })
}