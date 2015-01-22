/**
 * Created by kavith on 1/21/15.
 */
var sendSaveContentMessage = function() {
    var msg = {'_type' : 3, 'content' : document.getElementById("editor").value, 'filePath':filePath };
    parent.postMessage(msg, '*');
    document.getElementById("footer").value = "Sent Type 3 message to Che.";
}

var sendDirtyContentMessage = function() {

    var msg = {'_type' : 4, 'dirty' : true, 'filePath':filePath };

    parent.postMessage(msg, '*');
    document.getElementById("footer").value = "Sent Type 4 message to Che.";
}