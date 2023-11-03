const target = document.getElementById("droptarget23");
target.addEventListener("dragover", (ev) => {
    // prevent default to allow drop
    ev.preventDefault();
    console.log('event fired');
});