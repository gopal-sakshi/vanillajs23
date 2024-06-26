function addScript() {
    window.variable23 = "i am variable23";

    var div02 = document.createElement('div');
    div02.innerHTML = `This is some div element that got added by a dynamic script on button click;`
    div02.id = `id_of_div02`;
    div02.style.border = `solid red 1px`;
    div02.style.width = `50%`;
    div02.style.padding = `10px`;
    div02.style.margin = `30px`
    document.body.appendChild(div02);
}

function removeScript() {
    console.log("remove script clicked");
    let divElem = document.getElementById("id_of_div02")
    document.body.removeChild(divElem);
    console.log("notice that variable23 still exists");
    alert(`in window object ====> ${window.variable23}`)
}