var div02 = document.createElement('div');
div02.id = "div02_id";
document.body.appendChild(div02);

var div02_title = document.createElement('div');
div02_title.id = "div02_title23";
div02_title.innerHTML = "div02"
document.getElementById('div02_id').appendChild(div02_title);

var div02_info = document.createElement('div');
div02_info.innerHTML = "some Info, description"
document.getElementById('div02_id').appendChild(div02_info);