$( document ).ready(function() {

    // SUBMIT FORM
    $("#userForm").submit(function(event) {
        // Prevent the form from submitting via the browser.
        event.preventDefault();
        ajaxPost();
    });


    function ajaxPost(){

        // PREPARE FORM DATA
        var formData = {
            name : $("#name").val(),
            email :  $("#email").val(),
            nim :  $("#nim").val()
        }

        // DO POST
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : "http://localhost:8000/api/user/save",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : function(result) {
                if(result.status == "OK"){
                    $("#postResultDiv").html("<p style='background-color:#7FA7B0; color:white; padding:20px 20px 20px 20px'>" +
                        "Post Successfully! <br>" +
                        "---> User's Info: Name = " +
                        result.data.name + " ,NIM = " + result.data.nim + "</p>");
                }else{
                    $("#postResultDiv").html("<strong>Error</strong>");
                }
                console.log(result);
            },
            error : function(e) {
                alert("Error!")
                console.log("ERROR: ", e);
            }
        });

        // Reset FormData after Posting
        resetData();

    }

    function resetData(){
        $("#name").val("");
        $("#email").val("");
        $("#nim").val("");
    }
})
