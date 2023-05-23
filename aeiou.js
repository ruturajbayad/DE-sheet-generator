// new js logics 
const AddStikeyNotes = () => {
    var noteText = document.getElementById("value");
    var notevale = noteText.value;
    var poerion1 = document.querySelector('#portion'); 
    const portion = document.querySelector('#portion').value;
    var newelement = document.createElement("div");
    if(notevale=="" || notevale==null)
    {
        alert("pleas write somting ");
    }
    else{
    switch(portion){
        case "Environment": 
                    const Environment = document.getElementById("dive").childElementCount;
                    if( Environment >= 10)
                    {
                        alert("you cant add more than 9 stikey notes");
                        poerion1.value = "Select";
                        return;
                    }else{
                    document.getElementById("place").innerText = " ";
                    newelement.className = 'box';
                    newelement.id = 'div1';
                    newelement.innerText = notevale;
                    newelement.style.color="while";
                    // newelement.style.backgroundColor = backColor; 
                    newelement.style.backgroundColor = "yellow";
                    var con = document.getElementById('dive');
                    con.appendChild(newelement); 
                    }
                    break;
        case "Activity": 
                    const Activity = document.getElementById("diva").childElementCount;
                    if( Activity >= 10)
                    {
                        alert("you cant add more than 9 stikey notes");
                        poerion1.value = "Select";
                        return;
                    }else{
                    document.getElementById("placea").innerText = " ";
                    newelement.className = 'box';
                    newelement.id = 'div1';
                    newelement.innerText = notevale;
                    newelement.style.color="while";
                    // newelement.style.backgroundColor = backColor; 
                    newelement.style.backgroundColor = "yellow";
                    var con = document.getElementById('diva');
                    con.appendChild(newelement);
                    } 
                    break;
        case "Users": 
                const User = document.getElementById("divu").childElementCount;
                if( User >= 10)
                 {
                        alert("you cant add more than 9 stikey notes");
                        poerion1.value = "Select";
                         return;
                 }else{
                    document.getElementById("placeu").innerText = " ";
                    newelement.className = 'box';
                    newelement.id = 'div1';
                    newelement.innerText = notevale;
                    newelement.style.color="while";
                    // newelement.style.backgroundColor = backColor; 
                    newelement.style.backgroundColor = "yellow";
                    var con = document.getElementById('divu');
                    con.appendChild(newelement); 
                 }
                    break;
        case "Interactions": 
                    const Interaction = document.getElementById("divi").childElementCount;
                    if( Interaction >= 10)
                    {
                        alert("you cant add more than 9 stikey notes");
                        poerion1.value = "Select";
                        return;
                    }else{
                    document.getElementById("placei").innerText = " ";
                    newelement.className = 'box';
                    newelement.id = 'div1';
                    newelement.innerText = notevale;
                    newelement.style.color="while";
                    // newelement.style.backgroundColor = backColor; 
                    newelement.style.backgroundColor = "yellow";
                    var con = document.getElementById('divi');
                    con.appendChild(newelement); 
                    }
                    break;
        case "Objects": 
                    const Objects = document.getElementById("divo").childElementCount;
                    if( Objects >= 10)
                    {
                        alert("you cant add more than 9 stikey notes");
                        poerion1.value = "Select";
                        return;
                    }else{
                    document.getElementById("placeo").innerText = " ";
                    newelement.className = 'box';
                    newelement.id = 'div1';
                    newelement.innerText = notevale;
                    newelement.style.color="while";
                    // newelement.style.backgroundColor = backColor; 
                    newelement.style.backgroundColor = "yellow";
                    var con = document.getElementById('divo');
                    con.appendChild(newelement); 
                    }
                    break;

                default: alert("select something");
        }
    }
    noteText.value = '';
}
