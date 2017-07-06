  $(document).ready(function () {
                $('#carrusel1').cycle({
                   fx: 'fade',
                    timeout: '4000'
                });
                $('#carrrepresentadas').cycle({
                    fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
                });
                  
            });

  /*
  <script type="text/javascript">

           function myFunction() {
           document.getElementById("Contactenos").style.display = "block";

            }

             function myMostrar() {
           document.getElementById("Laempresa").style.display = "block";
           
            }
           
        </script>
        */
   $(document).ready(function(){
                $("#Cir1").mouseover(function(){
                       $('#T1').animate({
                            'left':'+20px',
                            'opacity':'1',
                        },'slow');
                    });
                    $("#Cir1").mouseleave(function(){
                       $('#T1').animate({
                            'opacity':'0',
                            'right':'50px',
                        },'slow');
                    });
                     $("#Cir2").mouseover(function(){
                       $('#T2').animate({
                            'left':'+20px',
                            'opacity':'1',
                        },'slow');
                    });
                    $("#Cir2").mouseleave(function(){
                       $('#T2').animate({
                            'opacity':'0',
                            'right':'50px',
                        },'slow');
                    });
                     $("#Cir3").mouseover(function(){
                       $('#T3').animate({
                            'left':'+20px',
                            'opacity':'1',
                        },'slow');
                    });
                    $("#Cir3").mouseleave(function(){
                       $('#T3').animate({
                            'opacity':'0',
                            'right':'50px',
                        },'slow');
                    });
         });