    Webcam.set({
        width: 300,
        height: 350,
        image_format: 'png',
        png_quality: 100
    });

    camera = document.getElementById("camera");

    Webcam.attach('#camera');

    function takeSnapshot() {
        Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img id="capturedimg" src="' + data_uri + '"/>';
        });
    }

    console.log('ml5', ml5.version);

    classifier = ml5.imageClassifier(, modelloaded);

    function modelloaded() {
        console.log("model is loaded");
    }

    function check() {
        img = document.getElementById("capturedimg");
        classifier.classify(img, gotResult);
    }

    function gotResult(error, results) {
        if (error) {
            console.log("error");
        } else {
            console.log(results);
            document.getElementById("resultobjectname").innerHTML = results[0].label;
            document.getElementById("resultobjectaccuracy").innerHTML = results[0].confidence.toFixed(2) * 100 + "%";
        }
    }