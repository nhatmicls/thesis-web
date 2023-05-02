function request_control(url, body) {
    let return_data;

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body), // string or object
        headers: {
            'Content-Type': 'application/json',
        }
    })
        // .then(response => response.json())
        .then(response => { console.log(response) })
        .catch((err) => { console.log(err) })
        .finally(console.log("Connection closed"))
        ;

    return return_data
}

async function request_database(url, body) {
    let test = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body), // string or object
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(response => { update_bootstrap_state(response) })
        .catch((err) => { console.log(err) })
        .finally(console.log("Connection closed"))
        ;
    // test.re
    // let b = test.text()
    // console.log(test.status)
    // console.log(b)
}

