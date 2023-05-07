const toggle_1 = document.getElementById("toggleLed_1_1");
const toggle_2 = document.getElementById("toggleLed_1_2");
const toggle_3 = document.getElementById("toggleLed_2_1");
const toggle_4 = document.getElementById("toggleLed_2_2");

function send_data_button(button) {
    request_control_verify(button, "data");
}

toggle_1.addEventListener('change', function () {
    this.disabled = true;
    request_control_verify("toggleLed_1_1", "led", this.checked);
});

toggle_2.addEventListener('change', function () {
    this.disabled = true;
    request_control_verify("toggleLed_1_2", "led", this.checked);
});

toggle_3.addEventListener('change', function () {
    this.disabled = true;
    request_control_verify("toggleLed_2_1", "led", this.checked);
});

toggle_4.addEventListener('change', function () {
    this.disabled = true;
    request_control_verify("toggleLed_2_2", "led", this.checked);
});