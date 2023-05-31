//Sticky Notes
const AddStikeyNotes = () => {
	var noteText = document.getElementById("value");
	var notevale = noteText.value;
	var poerion1 = document.querySelector('#portion'); 
	const portion = document.querySelector('#portion').value;
	var newelement = document.createElement("div");
	if(notevale=="" || notevale==null)
	{
		alert("Please Write Something ");
	}
	else{
		switch(portion){
			case "People": 
			const People = document.getElementById("divp").childElementCount;
			if( People >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placep").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divp');
				con.appendChild(newelement); 
			}
			break;
			case "Activities": 
			const Activities = document.getElementById("diva").childElementCount;
			if( Activities >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placea").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('diva');
				con.appendChild(newelement);
			} 
			break;
			case "Location": 
			const Location = document.getElementById("divl").childElementCount;
			if( Location >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placel").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divl');
				con.appendChild(newelement); 
			}
			break;
            case "Props": 
			const Props = document.getElementById("divpo").childElementCount;
			if( Props >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placepo").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divpo');
				con.appendChild(newelement); 
			}
			break;
			
			default: alert("Select Something");
		}
	}
	noteText.value = '';
}

//Sheet Header
function setheader()
{
   var pval = document.getElementById("pname").value;
   var tid = document.getElementById("tid").value;
   
    if(pval == "" || pval == null || tid == "" || tid == null ){
            alert("Fill all fields ");
    }
    else
    {
    let pdiv = document.getElementById("d00");
    let tdiv = document.getElementById("d11");
    pdiv.style.backgroundColor = "yellow";
    tdiv.style.backgroundColor= "yellow" ;
    pdiv.innerText=pval;
    tdiv.innerText=tid;
    }
}
//Download Image
var sheet = document.getElementById("divmain");
var dow = document.getElementById("dow");
dow.addEventListener("click",() =>{
  domtoimage.toPng(sheet).then((data)=>{
    var link = document.createElement("a");
    link.download="Ideation-canvas.png";
    link.href = data;
    link.click();
  })  
});
//Save Image
var save = document.getElementById("save");
save.addEventListener("click", () => {
    alert("work in progress Sorry :) ");
}); 
