//----
$(
    ()=>{
        let username
        const socket = io()
        $("#form1").on("submit",()=>{
            if(username)
                socket.emit("chat msg", $("#msg").val())
            else{
                username=$("#msg").val()
                socket.emit("login", username)}
            return false})
        socket.on("chat msg", msg => $("#messages").append($("<li>").text(msg)))})
