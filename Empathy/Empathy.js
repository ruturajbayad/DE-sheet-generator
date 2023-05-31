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
			case "USER": 
			const USER = document.getElementById("divU").childElementCount;
			if( USER >= 10)
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
				var con = document.getElementById('divU');
				con.appendChild(newelement); 
			}
			break;
			case "STAKEHOLDERS": 
			const STAKEHOLDERS = document.getElementById("divS").childElementCount;
			if( STAKEHOLDERS >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("places").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divS');
				con.appendChild(newelement);
			} 
			break;
			case "ACTIVITIES": 
			const ACTIVITIES = document.getElementById("divA").childElementCount;
			if( ACTIVITIES >= 10)
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
				var con = document.getElementById('divA');
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
    var defor = document.getElementById("defor").value;
    var date = document.getElementById("date").value;
    var deby = document.getElementById("deby").value;
    var version = document.getElementById("version").value;
    if(defor == "" || defor == null || date == "" || date == null || deby == "" || deby == null ||version == "" || version == null){
            alert("Fill all fields ");
    }
    else
    {
    
    let d00 = document.getElementById("d00");
    let d11 = document.getElementById("d11");
    let d22 = document.getElementById("d22");
    let d33 = document.getElementById("d33");
    d00.innerText = defor;
    d11.innerText = deby;
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
    link.download="BMC-Sheet.png";
    link.href = data;
    link.click();
  })  
});
//Save Image
var save = document.getElementById("save");
save.addEventListener("click", () => {
    alert("work in progress Sorry :) ");
}); 
