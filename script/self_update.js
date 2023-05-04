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

function verify_connection() {
    const query_list = get_connection_query_url();

    query_list.forEach(element => {
        request_database(element, {}, verify_disconnect_device);
    })
}

setInterval(function () {
    verify_connection();
    if (disconnect_noti_ack === 1) {
        setTimeout(function () { disconnect_noti = 0; }, 900000); // Interval 15 mins
        disconnect_noti_ack = 0;
    }
}, 5000); // Interval 5s
