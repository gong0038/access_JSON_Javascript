
document.getElementById("btnn").addEventListener("click", myFunction());

function myFunction() {
	  document.getElementById("a").innerHTML = "Hello World";
	}

$.each(data,function(key,val){
    items.push("<tr>");
    items.push("<td id = '"+key+"'>"+val.classTitle+"</td>");
   items.push("<td id = '"+key+"'>"+val.classId+"</td>");
    items.push("<td id = '"+key+"'>"+val.className+"</td>");
    items.push("<tr>");
    items.push("<button id = 'btn"+key+"'>", onclick="add_course"); 
});

$("<tbody/>",{html:items.join("")}).appendTo("table"); 

//var btn = document.createElement("BUTTON");   // Create a <button> element
//btn.innerHTML = "CLICK ME";                   // Insert text
//document.body.appendChild(btn);               // Append <button> to <body>