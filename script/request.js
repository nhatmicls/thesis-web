// const url = "http://pifclub.ddns.net"
const url = "http://127.0.0.1:5000/control/"
const button_1 = document.getElementById("button_2_1_label");
const button_2 = document.getElementById("button_2_2_label");

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

function send_data_button(button) {
    if (button === "1-1") {
        post_data({
            "data": {
                "target_control": "123",
                "object_control": "led_1",
                "status": "1"
            }
        });
    }
    else if (button === "1-2") {
        post_data({
            "data": {
                "target_control": "123",
                "object_control": "led_1",
                "status": "0"
            }
        });
    }
    else if (button === "2-1") {
        post_data({
            "data": {
                "target_control": "123",
                "object_control": "led_2",
                "status": "1"
            }
        });
    }
    else if (button === "2-2") {
        post_data({
            "data": {
                "target_control": "123",
                "object_control": "led_2",
                "status": "0"
            }
        });
    }
    else { }
}
