           //scroll button
        var mybutton=document.getElementById("mybtn");
          function scrolltop(){
              document.body.scrollTop=0;
              document.documentElement.scrollTop=0;
          }
            window.onscroll=function(){
                scroll();
            }
            function scroll(){
                if(document.body.scrollTop>20 || document.documentElement.scrollTop>20 ){
                    mybutton.style.display="block";
                    
                }
                else{
                    mybutton.style.display="none";
                }
            }

            //world live update
            function table1(){
                $.get("https://api.covid19api.com/summary",
                     function(data1){
                    //console.log(data1['Countries'].length);
                    var table2=document.getElementById('table2');
                    for(var i=1;i<(data1['Countries'].length);i++){
                        var x=table2.insertRow();
                        x.insertCell(0);
                        table2.rows[i-1].cells[0].innerHTML=i;
                        x.insertCell(1);
                        table2.rows[i-1].cells[1].innerHTML=data1['Countries'][i-1]['Country'];
                        
                        x.insertCell(2);
                        table2.rows[i-1].cells[2].innerHTML=data1['Countries'][i-1]['NewConfirmed'];
                        
                        x.insertCell(3);
                        table2.rows[i-1].cells[3].innerHTML=data1['Countries'][i-1]['NewDeaths'];
                        
                        x.insertCell(4);
                        table2.rows[i-1].cells[4].innerHTML=data1['Countries'][i-1]['NewRecovered'];
                        
                        x.insertCell(5);
                        table2.rows[i-1].cells[5].innerHTML=data1['Countries'][i-1]['TotalConfirmed'];
                        
                        x.insertCell(6);
                        table2.rows[i-1].cells[6].innerHTML=data1['Countries'][i-1]['TotalDeaths'];
                        
                        x.insertCell(7);
                        table2.rows[i-1].cells[7].innerHTML=data1['Countries'][i-1]['TotalRecovered'];
                        
                        
                        
                    }
                }
                )
               
            }
            $(document).ready(function(){
                $("#search1").click(function(){
                    var value=$("#search").val().toLowerCase();
                    $("#table2 tr").filter(function(){
                       $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1); 
                    });
                });
            });