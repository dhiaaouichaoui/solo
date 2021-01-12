
 $(document).ready(function () {
  $(".clcl").hide();
  $(".test").show();
      $("#btn").click(function () {
        var name1 = $("#name").val();
        var pass1 = $("#pass").val();
        localStorage.setItem("name", name1);
        localStorage.setItem("pass", pass1);

      });

      $("#loginbtn").click(function (e) {
        e.preventDefault();
        var entername = $("#username").val();
        var enterpass = $("#userpass").val();

        var checkname = localStorage.getItem("name");
        var checkpass = localStorage.getItem("pass");
        // var ach=$('<a></a>')
        //   ach.attr("href", "calcul.html")
        //   var href = 'calcul.html';

        

        if (entername !== checkname || enterpass !== checkpass) {
                  alert("Somthing Wrong Try Again");
                 // $(".test").hide();
                 // // $(".clcl").toggle();
                 // console.log(console.log( $( ".clcl" ) ));
  
        }
        else {
          $(".test").hide();
          $(".clcl").toggle();
          
        }

      });

    });
