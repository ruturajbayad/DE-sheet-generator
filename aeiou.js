{/*  */}

var count = 0;
var rgbValue = [255, 0, 0];
//validation counter not work properly
function countnumber()
{    
    var text = document.getElementById("value").value;
    var selectElement = document.querySelector('#li');
    output = selectElement.value;
    let inputVal = document.getElementById("number").value;
   // alert(count);
   if(inputVal=="" || inputVal==null || text=="" || text==null)
    {
    alert("Enter Somting In Text Box");
    }
        else if(inputVal>count){
        temp = AddDive();
        count++;
    }
else{
        alert("Please select new portion");
        count=0;    
    }
}
//Add div box in spacific portion 
function AddDive() {
    //random back color logic 
    rgbValue[0] = Math.round(Math.random() * 255);
    rgbValue[1] = Math.round(Math.random() * 255);
    rgbValue[2] = Math.round(Math.random() * 255);
    var color = Math.round(((parseInt(rgbValue[0]) * 299) + (parseInt(rgbValue[1]) * 587) +(parseInt(rgbValue[2]) * 114)) / 1000);
    var textColor = (color > 125) ? 'black' : 'white';
    var backColor = 'rgb(' + rgbValue[0] + ', ' + rgbValue[1] + ', ' + rgbValue[2] + ')';
    //entered elements
    var text = document.getElementById("value").value;
    var selectElement = document.querySelector('#li');
    
    output = selectElement.value;
    var newelement = document.createElement("div");
    if(output == "Environment"){
    document.getElementById("place").innerText = " ";
    newelement.className = 'box';
    newelement.id = 'div1';
    newelement.innerText = text;
    newelement.style.color=textColor 
    newelement.style.backgroundColor = backColor; 
    //newelement.style.backgroundColor = 
    let con = document.getElementById('dive');
    con.appendChild(newelement); 
    }
    else if(output == "Activity"){
    document.getElementById("placea").innerText = " ";
    newelement.className = 'box';
    newelement.id = 'div2';
    newelement.innerText = text;
    newelement.style.color=textColor 
    newelement.style.backgroundColor = backColor;
    let con = document.getElementById('diva');
    con.appendChild(newelement);
    }
    else if(output == "Users"){
    document.getElementById("placeu").innerText = " ";
    newelement.className = 'box';
    newelement.id = 'div3';
    newelement.innerText = text;
    newelement.style.color=textColor 
    newelement.style.backgroundColor = backColor;
    let con = document.getElementById('divu');
    con.appendChild(newelement);
    }
    else if(output == "Interactions"){
    document.getElementById("placei").innerText = " ";
    newelement.className = 'box';
    newelement.id = 'div4';
    newelement.innerText = text;
    newelement.style.color=textColor 
    newelement.style.backgroundColor = backColor;
    let con = document.getElementById('divi');
    con.appendChild(newelement);
    }
    else{
    document.getElementById("placeo").innerText = " ";
    newelement.className = 'box';
    newelement.id = 'div5';
    newelement.innerText = text;
    newelement.style.color=textColor 
    newelement.style.backgroundColor = backColor;
    let con = document.getElementById('divo');
    con.appendChild(newelement);
    }
}
//header set
 function setheader() {
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
// var sheet = document.getElementById("mainsheet");
// var dow = document.getElementById("dow");
// dow.addEventListener("click",() =>{
//   domtoimage.toPng(sheet).then((data)=>{
//     var link = document.createElement("a");
//     link.download="AEIOU-Sheet.png";
//     link.href = data;
//     link.click();
//   })  
// });
// //save function 

console.log("hello");