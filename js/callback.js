function sendMessage(message){
    console.log("message : "+message);
}

function getMessage(call) {
    const message="this is secret"
    call(message)
}

getMessage(sendMessage)