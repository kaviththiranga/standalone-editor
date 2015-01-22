
var filePath = "";
var fileContent = "";

function receiveMessage (evt) {
    var message =  evt.data;
    var type = message._type;

    if(type === 1){
        filePath = message.filePath;
        fileContent=message.content;
        document.getElementById("header").value = "Received File:" + filePath;
        document.getElementById("editor").value = fileContent;
    }else if (type === 2){
        document.getElementById("footer").value = "Received Save Command:";
        sendSaveContentMessage();
    }

}

if (window.addEventListener) {
    // For standards-compliant web browsers
    window.addEventListener("message", receiveMessage, false);
}
else {
    window.attachEvent("onmessage", receiveMessage);
}
