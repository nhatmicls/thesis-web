function request_control_respond_handle(response, from, action, state) {
    if (response["status"] === 408) {
        controlTimeOut_popup("Can not send control command");
        if (action === "led") {
            document.getElementById(from).checked = !state;
        }
    }
    else if (response["status"] === 200) {
        control_ack_queue.push(from);
    }
    document.getElementById(from).disabled = false;
}

function verify_value_input(value) {
    if (value > 65535) { return 0; }
    else { return 1; }
}

function request_control_verify(from, action, state) {
    let data = "";
    const device_name_location = from.indexOf("_");
    const block_data_location = from.indexOf("_", device_name_location + 1);
    const device_name = "device_" + from.charAt(device_name_location + 1);
    const block_data = action + "_" + from.charAt(block_data_location + 1);


    if (action === "led") {
        if (state === true) { data = "1"; }
        else if (state === false) { data = "0"; }
        request_control(endpoint, body_generate(device_name, block_data, data), request_control_respond_handle, from, action, state);
    }
    else if (action === "data") {
        data = document.getElementById(from).value.toString();

        if (verify_value_input(Number(data)) === 1) {
            request_control(endpoint, body_generate(device_name, block_data, data), request_control_respond_handle, from, action, state);
        }
        else {
            warning_popup("Value must be lower than 65535");
        }
    }
}