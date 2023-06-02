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
			
            case "II1": 
			const II1 = document.getElementById("b10").childElementCount;
			if( II1 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh10").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b10');
				con.appendChild(newelement); 
			}
			break;
            case "II2": 
			const II2 = document.getElementById("b11").childElementCount;
			if( II2 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh11").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b11');
				con.appendChild(newelement); 
			}
			break;
            case "II3": 
			const II3 = document.getElementById("b20").childElementCount;
			if( II3 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh20").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b20');
				con.appendChild(newelement); 
			}
			break;
            case "II4": 
			const II4 = document.getElementById("b21").childElementCount;
			if( II4 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh21").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b21');
				con.appendChild(newelement); 
			}
			break;
            case "III1": 
			const III1 = document.getElementById("b6").childElementCount;
			if( III1 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh6").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b6');
				con.appendChild(newelement); 
			}
			break;
            case "III2": 
			const III2 = document.getElementById("b7").childElementCount;
			if( III2 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh7").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b7');
				con.appendChild(newelement); 
			}
			break;
            case "III3": 
			const III3 = document.getElementById("b22").childElementCount;
			if( III3 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh22").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b22');
				con.appendChild(newelement); 
			}
			break;
            case "III4": 
			const III4 = document.getElementById("b23").childElementCount;
			if( III4 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh23").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b23');
				con.appendChild(newelement); 
			}
			break;
            case "IV1": 
			const IV1 = document.getElementById("b2").childElementCount;
			if( IV1 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh2").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b2');
				con.appendChild(newelement); 
			}
			break;
            case "IV2": 
			const IV2 = document.getElementById("b3").childElementCount;
			if( IV2 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh3").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b3');
				con.appendChild(newelement); 
			}
			break;
            case "IV3": 
			const IV3 = document.getElementById("b24").childElementCount;
			if( IV3 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh24").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b24');
				con.appendChild(newelement); 
			}
			break;
            case "IV4": 
			const IV4 = document.getElementById("b25").childElementCount;
			if( IV4 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh25").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b25');
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
    var pname = document.getElementById("pname").value;
    if(gid == "" || gid == null || date == "" || date == null || pname == "" || pname == null){
            alert("Fill all fields ");
    }
    else
    {
    
    let d11 = document.getElementById("d11");
    let d22 = document.getElementById("d22");
    let d33 = document.getElementById("d33");

    d11.innerText = gid;
    d22.innerText = date;
    d33.innerText = pname;
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
