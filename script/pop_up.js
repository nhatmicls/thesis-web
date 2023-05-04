function warning_popup(text) {
    confirm(text);
    return;
}

function controlTimeOut_popup(text) {
    alert(text);
}

function lostconnect_popup(device_name) {
    let error_notificate = "ERR: Lost connected to "

    if (device_name !== undefined) {
        device_name.forEach(element => {
            console.log(device_name)

            error_notificate = error_notificate.concat(element)

            if (device_name.indexOf(element) !== device_name.length - 1) {
                error_notificate = error_notificate.concat(", ");
            }
            else { error_notificate = error_notificate.concat("."); }
        });
    }
    else {
        error_notificate = error_notificate.concat("all device ")
    }

    alert(error_notificate);
    disconnect_noti_ack = 1;
}