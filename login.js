
 $(document).ready(function () {
      $("#register").submit(function () {
        var name1 = $("#name").val();
        var pass1 = $("#pass").val();
        localStorage.setItem("name", name1);
        localStorage.setItem("pass", pass1);

      });

      $("#logins").submit(function () {
        var entername = $("#username").val();
        var enterpass = $("#userpass").val();

        var checkname = localStorage.getItem("name");
        var checkpass = localStorage.getItem("pass");
        // var ach=$('<a></a>')
        //   ach.attr("href", "calcul.html")
        //   var href = 'calcul.html';

        

        if (entername === checkname && enterpass === checkpass) {
                  
         location.href="calcul.html"
  
        }
        else {
          alert("Somthing Wrong Try Again");
        }

      });

    });
