function post_data(body) {
    console.log(body)
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body), // string or object
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
}