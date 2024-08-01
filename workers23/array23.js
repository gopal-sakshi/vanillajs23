self.onmessage = function (e) {
    const array = e.data;
    array.sort((a, b) => a-b);
    postMessage(array);
};