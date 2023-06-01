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
			case "Key Partners": 
			const KeyPartners = document.getElementById("divKeyP").childElementCount;
			if( KeyPartners >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeKeyP").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divKeyP');
				con.appendChild(newelement); 
			}
			break;
			case "Key Activities": 
			const KeyActivities = document.getElementById("divKeyA").childElementCount;
			if( KeyActivities >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeKeyA").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divKeyA');
				con.appendChild(newelement);
			} 
			break;
			case "Value Propositions": 
			const ValuePropositions = document.getElementById("divValP").childElementCount;
			if( ValuePropositions >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeValP").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divValP');
				con.appendChild(newelement); 
			}
			break;
			case "Customer Relationships": 
			const CustomerRelationships = document.getElementById("divCustR").childElementCount;
			if( CustomerRelationships >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeCustR").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divCustR');
				con.appendChild(newelement); 
			}
			break;
			case "Customer Segments": 
			const CustomerSegments = document.getElementById("divCustS").childElementCount;
			if( CustomerSegments >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeCustS").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divCustS');
				con.appendChild(newelement); 
			}
			break;
            case "Key Resources": 
			const KeyResources = document.getElementById("divKeyR").childElementCount;
			if( KeyResources >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeKeyR").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divKeyR');
				con.appendChild(newelement); 
			}
			break;
            case "Channels": 
			const Channels = document.getElementById("divC").childElementCount;
			if( Channels >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeC").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divC');
				con.appendChild(newelement); 
			}
			break;
            case "Cost Structure": 
			const CostStructure = document.getElementById("divCostS").childElementCount;
			if( CostStructure >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeCostS").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divCostS');
				con.appendChild(newelement); 
			}
			break;
            case "Revenue Stream": 
			const RevenueStream = document.getElementById("divRevS").childElementCount;
			if( RevenueStream >= 10)
			{
				alert("You can't add more than 9 Sticky Notes");
				poerion1.value = "Select";
				return;
				}else{
				document.getElementById("placeRevS").innerText = " ";
				newelement.className = 'box';
				newelement.id = 'div1';
				newelement.innerText = notevale;
				newelement.style.color="while";
                newelement.style.padding="7px 5px 0px 5px";
				// newelement.style.backgroundColor = backColor; 
				newelement.style.backgroundColor = "yellow";
				var con = document.getElementById('divRevS');
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
