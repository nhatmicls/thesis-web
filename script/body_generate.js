function body_generate(target_control, object_control, status) {
    const body = {
        "data": {
            "target_control": "1",
            "object_control": "2",
            "status": "3"
        }
    }

    body["data"]["target_control"] = target_control;
    body["data"]["object_control"] = object_control;
    body["data"]["status"] = status;

    return body
}