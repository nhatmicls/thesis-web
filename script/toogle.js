const toogle_1 = document.getElementById("toogle_led_1_1");
const toogle_2 = document.getElementById("toogle_led_1_2");
const toogle_3 = document.getElementById("toogle_led_2_1");
const toogle_4 = document.getElementById("toogle_led_2_2");

toogle_1.addEventListener('change', function () {
    if (this.checked) {
        request_control(endpoint, body_generate("device_1", "led_1", "1"));
    } else {
        request_control(endpoint, body_generate("device_1", "led_1", "0"));
    }
});

toogle_2.addEventListener('change', function () {
    if (this.checked) {
        request_control(endpoint, body_generate("device_1", "led_2", "1"));
    } else {
        request_control(endpoint, body_generate("device_1", "led_2", "0"));
    }
});

toogle_3.addEventListener('change', function () {
    if (this.checked) {
        request_control(endpoint, body_generate("device_2", "led_1", "1"));
    } else {
        request_control(endpoint, body_generate("device_2", "led_1", "0"));
    }
});

toogle_4.addEventListener('change', function () {
    if (this.checked) {
        request_control(endpoint, body_generate("device_2", "led_2", "1"));
    } else {
        request_control(endpoint, body_generate("device_2", "led_2", "0"));
    }
});