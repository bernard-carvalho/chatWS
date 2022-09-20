//----
$(
    ()=>{
        const socket = io()
        $("#form1").on("submit",()=>{
            socket.emit("chat msg", $("#msg").val())
            return false
            })})