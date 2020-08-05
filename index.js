$(function() {
	
	var url = '/o2o/ss/listcourse';

    $.getJSON(url,function(data){
        var items = [];
        $.each(data,function(key,val){
            items.push("<tr>");
            items.push("<td id = '"+key+"'>"+val.classTitle+"</td>");
           items.push("<td id = '"+key+"'>"+val.classId+"</td>");
            items.push("<td id = '"+key+"'>"+val.className+"</td>");
            items.push("<tr>");
           
        });

        $("<tbody/>",{html:items.join("")}).appendTo("table"); 
    });
 
	
});
