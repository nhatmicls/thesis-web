function get_query_url() {
    const url = database_endpoint;
    let list_url = [];
    list_url.push(url.concat("?query=led_1_",));
    list_url.push(url.concat("?query=led_2_",));

    return list_url;
}

function update_bootstrap_state(data) {
    const object_result = data["data"]["result"]

    object_result.forEach(element => {
        let object_name = "toogle_led_"
        if (element["metric"]["device_SN"] === "device_1") {
            object_name = object_name.concat("1_")
        }
        else {
            object_name = object_name.concat("2_")
        }
        if (element["metric"]["__name__"] === "led_1_") {
            object_name = object_name.concat("1")
        }
        else {
            object_name = object_name.concat("2")
        }

        const toogle = document.getElementById(object_name)
        if (element["value"]["1"] === "1") { toogle.checked = true; }
        else if (element["value"]["1"] === "0") {
            toogle.checked = false;
        }
    })

    console.log(data["data"]["result"])
}

function bootstrap_index() {
    const list_url = get_query_url();

    list_url.forEach(element => {
        request_database(element, {});
    });
}