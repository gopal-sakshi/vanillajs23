// Create a div ====> "div01"            // it'll have 4 elements
        // div01_title
        // input01_a
        // button01_a
        // response01_a
var div01 = document.createElement('div');
div01.id = "div01_id";
document.body.appendChild(div01);

var div01_title = document.createElement('div');
div01_title.id = "div01_title23";
div01_title.innerHTML = "div01 ===> add bad script to response01_a"
document.getElementById('div01_id').appendChild(div01_title);

var input01_a = document.createElement('input');
input01_a.id = "input01_id";
document.getElementById('div01_id').appendChild(input01_a);

var button01_a = document.createElement('button');
button01_a.innerHTML = 'submit23';
button01_a.onclick = updateResponse01;
document.getElementById('div01_id').appendChild(button01_a);

var response01_a = document.createElement('div');

function updateResponse01() {
    response01_a.innerHTML = document.getElementById('input01_id').value;
    console.log(document.getElementById('input01_id').value);
    document.getElementById('div01_id').appendChild(response01_a);
}
