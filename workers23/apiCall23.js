self.onmessage = async function (e) {
    const url = e.data;
    try {
        const response = await fetch(url);
        const data = await response.json();
        postMessage({
            length23: data.length, 
            users: data.map((info, index) => info.actor.login) 
        });
    } catch (error) {
        postMessage({ error: "Failed to fetch data" });
    }
};