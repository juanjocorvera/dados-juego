var a=1;
var b=1;	
function rollDice(){

    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");

    var status = document.getElementById("status1");
    var status = document.getElementById("status2");


    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    

    

    die1.innerHTML = d1;
    die2.innerHTML = d2;

    
    
    {
        if(d1 >= d2)
        {
            //imprime numero mayor
            
            status.innerHTML ="El ganador es: " + d1 + " ( jugador 1 )";
        }
        else
        {
           //imprime numero mayor
           status.innerHTML ="El ganador es : " + d2 + " ( jugador 2 )";
        }
        
    }
   
    
    
    
    
}
