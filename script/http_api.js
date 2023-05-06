function request_control(url, body, handle, from, action, state) {
    let return_data;

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body), // string or object
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(response => { handle(response, from, action, state) })
        .catch((err) => { console.log(err) })
        ;

    return return_data
}

async function request_database(url, body, handle) {
    await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body), // string or object
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(response => {
            if (handle !== undefined) {
                handle(response);
            }
        })
        .catch((err) => { console.log(err) })
        ;
}

function request_alert(url, handle) {
    let return_data;

    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(response => { handle(response) })
        .catch((err) => { console.log(err) })
        ;

    return return_data
}