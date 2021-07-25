log("hello world")
on("ready",function(){
    log("hello ready");
    var now = Date.now()
    log("date: " + now/1000)

    on("chat:message", handleChat);
})


function handleChat(msg) {
    //log(msg);
    if(msg.type!="api"){
        return
    }
    if (msg.content.indexOf("!hello")!=0){
        return;
    }
    log("hello chat");

    
    let tokens = findObjs({_type: "graphic", _subtype: "token", showplayers_name: false})
    
    tokens.forEach(function(t) {
        var value = t.get("bar1_value")
        if (value == null) {
            log("value not found for " + t.id)
            return
        }
        if (value == "") {
            log("value is empty for " + t.id)
            log(t)
            return
        }
        var show = t.get("showplayers_name")
        if (show == null) {
            log("show not found for " + t.id)
            return
        }
        if (show) {
            log("show already set for " + t.id)
            return
        }
        t.set({showplayers_name: true})
        log("set for " + t.id)
    })
}
