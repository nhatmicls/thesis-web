// import { lostconnect_popup } from "./pop_up";

let disconnect_noti = 0
let disconnect_noti_ack = 0

//  { disconnect_noti_ack as "disconnect_noti"};

function get_connection_query_url() {
    const url = database_endpoint;
    let list_url = [];
    list_url.push(url.concat("?query=led_1_",));

    return list_url;
}

function get_toggle_query_url() {
    const url = database_endpoint;
    let list_url = [];
    list_url.push(url.concat("?query=led_1_",));
    list_url.push(url.concat("?query=led_2_",));

    return list_url;
}

function verify_disconnect_device(response) {
    if (response["data"]["result"].length > 0 && disconnect_noti === 0) {
        let name_device_lost_connect = [];
        Object.assign(name_device_lost_connect, list_device);
        response["data"]["result"].forEach(element => {
            let index = name_device_lost_connect.indexOf(element["metric"]["device_SN"]);
            if (index !== -1) {
                name_device_lost_connect.splice(index, 1);
            }
        })

        if (name_device_lost_connect.length > 0) {
            lostconnect_popup(name_device_lost_connect);
            disconnect_noti = 1;
        }
    }
    else if (response["data"]["result"].length === 0 && disconnect_noti === 0) {
        lostconnect_popup();
        disconnect_noti = 1;
    }
}

function alert_update(body) {
    if (Object.keys(body).length > 0) {
        let err_string = body["type"].toUpperCase() + " ";
        err_string = err_string.concat(body["ERR"], " at ", body["device_SN"]);
        alert(err_string);
    }
}

function verify_connection() {
    const query_list = get_connection_query_url();

    query_list.forEach(element => {
        request_database(element, {}, verify_disconnect_device);
    })
}

function check_alert() {
    request_alert(alert_endpoint, alert_update);
}

function update_toggle_button(response) {
    const result = response["data"]["result"]
    if (result.length > 0) {
        console.log(result);
        result.forEach(element => {
            const device_SN = element["metric"]["device_SN"];
            const name = element["metric"]["__name__"];
            const dash_deviceSN_location = device_SN.indexOf("_");
            const dash_name_location = name.indexOf("_");
            let toggle_name = "toggleLed_" + device_SN.charAt(dash_deviceSN_location + 1) + "_" + name.charAt(dash_name_location + 1);
            if (element["value"][1] == "1") {
                document.getElementById(toggle_name).checked = true;
            }
            else {
                document.getElementById(toggle_name).checked = false;
            }
        });
    }
}

function auto_update_data() {
    const query_list = get_toggle_query_url()

    //Check toggle button
    query_list.forEach(element => {
        request_database(element, {}, update_toggle_button);
    })
}

setInterval(function () {
    verify_connection();
    if (disconnect_noti_ack === 1) {
        setTimeout(function () { disconnect_noti = 0; }, 900000); // Interval 15 mins
        disconnect_noti_ack = 0;
    }
}, 5000); // Interval 5s

setInterval(function () {
    check_alert();
}, 1000); // Interval 1s

setInterval(function () {
    auto_update_data();
}, 1000); // Interval 1s

