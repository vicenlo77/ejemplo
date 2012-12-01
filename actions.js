function conn(n,p)
{
$.ajax({
  type: "POST",
  url: "http://192.168.1.168/conectando/login.php",
  data: "{}",
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  success: function(msg) {
    // Do something interesting here.
  }
});

	}


$(document).ready(function(e) {   
   $('#enviar').tap(function(){	   
	   var name = $('input[name=nombre]').val();
	   var pass = $('input[name=pass]').val();
	   
	conn(name,pass);
	   
	   
   });
   
    
});

