//Sticky Notes
const AddStikeyNotes = () => {
	var noteText = document.getElementById("valuelnm");
	var notevale = noteText.value;
	var poerion1 = document.querySelector('#portionlnm'); 
	const portion = document.querySelector('#portionlnm').value;
	var newelement = document.createElement("div");
	if(notevale=="" || notevale==null)
	{
		alert("Please Write Something ");
	}
	else{
		switch(portion){
			
            case "II1": 
			const II1 = document.getElementById("b10lnm").childElementCount;
			if( II1 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh10lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b10lnm');
				con.appendChild(newelement); 
			}
			break;
            case "II2": 
			const II2 = document.getElementById("b11lnm").childElementCount;
			if( II2 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh11lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b11lnm');
				con.appendChild(newelement); 
			}
			break;
            case "II3": 
			const II3 = document.getElementById("b20lnm").childElementCount;
			if( II3 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh20lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b20lnm');
				con.appendChild(newelement); 
			}
			break;
            case "II4": 
			const II4 = document.getElementById("b21lnm").childElementCount;
			if( II4 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh21lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b21lnm');
				con.appendChild(newelement); 
			}
			break;
            case "III1": 
			const III1 = document.getElementById("b6lnm").childElementCount;
			if( III1 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh6lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b6lnm');
				con.appendChild(newelement); 
			}
			break;
            case "III2": 
			const III2 = document.getElementById("b7lnm").childElementCount;
			if( III2 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh7lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b7lnm');
				con.appendChild(newelement); 
			}
			break;
            case "III3": 
			const III3 = document.getElementById("b22lnm").childElementCount;
			if( III3 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh22lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b22lnm');
				con.appendChild(newelement); 
			}
			break;
            case "III4": 
			const III4 = document.getElementById("b23lnm").childElementCount;
			if( III4 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh23lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b23lnm');
				con.appendChild(newelement); 
			}
			break;
            case "IV1": 
			const IV1 = document.getElementById("b2lnm").childElementCount;
			if( IV1 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh2lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b2lnm');
				con.appendChild(newelement); 
			}
			break;
            case "IV2": 
			const IV2 = document.getElementById("b3lnm").childElementCount;
			if( IV2 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh3lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b3lnm');
				con.appendChild(newelement); 
			}
			break;
            case "IV3": 
			const IV3 = document.getElementById("b24lnm").childElementCount;
			if( IV3 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh24lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b24lnm');
				con.appendChild(newelement); 
			}
			break;
            case "IV4": 
			const IV4 = document.getElementById("b25lnm").childElementCount;
			if( IV4 >= 5)
			{
				alert("You can't add more than 3 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeh25lnm").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="5px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('b25lnm');
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
    var gid = document.getElementById("gidlnm").value;
    var date = document.getElementById("datelnm").value;
    var pname = document.getElementById("pnamelnm").value;
    if(gid == "" || gid == null || date == "" || date == null || pname == "" || pname == null){
            alert("Fill all fields ");
    }
    else
    {
    
    let d11 = document.getElementById("d11lnm");
    let d22 = document.getElementById("d22lnm");
    let d33 = document.getElementById("d33lnm");

    d11.innerText = gid;
    d22.innerText = date;
    d33.innerText = pname;
    }
}
//Download Image
// var sheet = document.getElementById("divmain");
// var dow = document.getElementById("dow");
// dow.addEventListener("click",() =>{
//   domtoimage.toPng(sheet).then((data)=>{
//     var link = document.createElement("a");
//     link.download="BMC-Sheet.png";
//     link.href = data;
//     link.click();
//   })  
// });

function downloadDivAsPng() {
    const element = document.getElementById('sheetlnm');
  
    html2canvas(element)
      .then(function(canvas) {
        // Convert the canvas to a data URL representing a PNG image
        const dataURL = canvas.toDataURL('image/png');
  
        // Create a temporary link element and set the download attribute
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'LNM.png';
  
        // Trigger a click on the link to start the download
        link.click();
      });
  }
  
//Save Image
var save = document.getElementById("savelnm");
save.addEventListener("click", () => {
    alert("work in progress Sorry :) ");
}); 
