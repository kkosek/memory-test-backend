$(document).ready(function(){
    $("button").click(function(){
    	if($('input[name=gender]:checked', '#sex').val()==undefined)
    		alert("Zaznacz płeć.");
        else if($('#index').val().length != 6)
            alert("Wpisz poprawny numer indeksu.")
    	else{
		    var info = {"index": $('#index').val(), 
		    	"sex":$('input[name=gender]:checked', '#sex').val()};
		    
	        $.post("/information.html", info, dataType="json")

            .done(function(data){
                console.log("Posted.");
                console.log(data);
            })
            .fail(function(xhr, status, error) {
            	console.log("Post failed.", error.responseJSON, status, xhr.responseText)
            })
            .always(function() {
            });
            window.location.href = "/test.html";
    	}
	});
})
