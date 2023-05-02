const input_text_1_1 = document.getElementById("value_1_1");
const input_text_1_2 = document.getElementById("value_1_2");
const input_text_2_1 = document.getElementById("value_2_1");
const input_text_2_2 = document.getElementById("value_2_2");

function verify_value_input(value) {
    if (value > 65535) {
        warning("Value must be lower than 65535");
        return 0;
    }
    return 1;
}

function send_data_button(button) {
    if (button === "1-1" && verify_value_input(input_text_1_1.value) === 1) {
        request_control(endpoint, body_generate("device_1", "data_1", input_text_1_1.value.toString()));
    }
    else if (button === "1-2" && verify_value_input(input_text_1_2.value) === 1) {
        request_control(endpoint, body_generate("device_1", "data_2", input_text_1_2.value.toString()));
    }
    else if (button === "2-1" && verify_value_input(input_text_2_1.value) === 1) {
        request_control(endpoint, body_generate("device_2", "data_1", input_text_2_1.value.toString()));
    }
    else if (button === "2-2" && verify_value_input(input_text_2_2.value) === 1) {
        request_control(endpoint, body_generate("device_2", "data_2", input_text_2_2.value.toString()));
    }
    else { }
}
