function showFile11(input) {
    let file = input.files[0];
    console.log('this is file name ====> ', file.name)
}

function readFile12(input) {
    let reader = new FileReader();
    reader.readAsText(input.files[0]);
    reader.onload = function() {
        console.log(reader.result);
    };
    reader.onerror = function() { console.log(reader.error); };  
}

var imgFile13 = function(file) {
    var input = file.target;
    var reader = new FileReader();
    reader.onload = function() {
        var dataURL = reader.result;
        var output = document.getElementById('image23');
        output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
};