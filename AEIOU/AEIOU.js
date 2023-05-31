
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
			case "Environment": 
			const Environment = document.getElementById("dive").childElementCount;
			if( Environment >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("place").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
				newelement.style.padding="7px 5px 0px 5px";
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
			case "Users": 
			const User = document.getElementById("divu").childElementCount;
			if( User >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeu").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
				newelement.style.padding="7px 5px 0px 5px";
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
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placei").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
				newelement.style.padding="7px 5px 0px 5px";
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
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeo").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
				newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divo');
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
	var gid = document.getElementById("gid").value;
	var date = document.getElementById("date").value;
	var dname = document.getElementById("dname").value;
	var version = document.getElementById("version").value;
	if(gid == "" || gid == null || date == "" || date == null || dname == "" || dname == null ||version == "" || version == null){
		alert("Fill all fields ");
	}
	else
	{
        
		
        let d00 = document.getElementById("d00");
        let d11 = document.getElementById("d11");
        let d22 = document.getElementById("d22");
        let d33 = document.getElementById("d33");
        d00.innerText = gid;
        d11.innerText = dname;
        d22.innerText = date;
        d33.innerText = version;
	}
}
//Download Image
var sheet = document.getElementById("divmain");
var dow = document.getElementById("dow");
dow.addEventListener("click",() =>{
	domtoimage.toPng(sheet).then((data)=>{
        var link = document.createElement("a");
        link.download="AEIOU-Sheet.png";
        link.href = data;
        link.click();
	})  
});
//Save Image
var save = document.querySelector('#save');
save.addEventListener("click", () => {
	alert("work in progress Sorry :) ");
}); 

