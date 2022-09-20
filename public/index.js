//----
$(
    ()=>{
        const socket = io()
        $("#form1").on("submit",()=>{
            socket.emit("chat msg", $("#msg").val())
            return false})
        socket.on("chat msg", msg => $("#messages").append($("<li>").text(msg)))})
