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
			case "Purpose": 
			const Purpose = document.getElementById("divpur").childElementCount;
			if( Purpose >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placepur").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divpur');
				con.appendChild(newelement); 
			}
			break;
			case "Product Experience": 
			const ProductExperience = document.getElementById("divpex").childElementCount;
			if( ProductExperience >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placepex").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divpex');
				con.appendChild(newelement);
			} 
			break;
			case "Customer Revalidation": 
			const CustomerRevalidation = document.getElementById("divcustrev").childElementCount;
			if( CustomerRevalidation >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placecustrev").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divcustrev');
				con.appendChild(newelement); 
			}
			break;
            case "Product Functions": 
			const ProductFunctions = document.getElementById("divpfun").childElementCount;
			if( ProductFunctions >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placepfun").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divpfun');
				con.appendChild(newelement); 
			}
			break;
            case "Product Features": 
			const ProductFeatures = document.getElementById("divpfea").childElementCount;
			if( ProductFeatures >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placepfea").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divpfea');
				con.appendChild(newelement); 
			}
			break;
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
            case "Components": 
			const Components = document.getElementById("divc").childElementCount;
			if( Components >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placec").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divc');
				con.appendChild(newelement); 
			}
			break;
            case "RRR": 
			const RRR = document.getElementById("divrrr").childElementCount;
			if( RRR >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placerrr").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divrrr');
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
   var Htime = document.getElementById("time").value;
   var Hdate = document.getElementById("date").value;
   var Hversion = document.getElementById("version").value;
   
    if(Htime == "" || Htime == null || Hdate == "" || Hdate == null  || Hversion == "" || Hversion == null ){
            alert("Fill all fields ");
    }
    else
    {
    let time = document.getElementById("d11");
    let date = document.getElementById("d22");
    let version = document.getElementById("d33");
    time.style.backgroundColor = "yellow";
    date.style.backgroundColor = "yellow";
    version.style.backgroundColor= "yellow" ;
    time.innerText=Htime;
    date.innerText=Hdate;
    version.innerText=Hversion;
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
