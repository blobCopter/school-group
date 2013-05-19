
    $( document ).ready(function() {
    	$('#task_list .alert-success').hide();
    	$('#task_list .alert-error').hide();




	    $('img').mouseenter(function (e) {
			applyColorOnTask(this);
	    });
	   	$('img').mouseleave(function (e) {
	   		removeColorOnTask(this);
	    });

	
	$('tr input[type=checkbox]').on('ifChecked', function(event){
	    var task_id = $(this).attr("task_id");
	    var isChecked = $(this).prop("checked")  ? 1 : 0;

	    var current_state = ($( "tr input:checked" ).length / $('tr input[type=checkbox]').length) * 100;
	    $('#current-state').width(current_state + "%");

	    $.ajax({
		
			type: "POST",
			
			url: "http://localhost:3000/users/topics/1/group/1/toggle_status.json",

			dataType: 'text',
			
			data: {task_id: task_id, status: isChecked},
			
			success: function(data) {
			  //   	<div class="alert alert-success" style="display:none;"></div>
					// <div class="alert alert-error" style="display:none;"></div>
			    $('#task_list .alert-success').show(0).delay(5000).hide(0);
			},
			
			error: function(data) {
			    
			    console.log(data);
			    
			}
	    });
	});
		$('tr input[type=checkbox]').on('ifUnchecked', function(event){
	    var task_id = $(this).attr("task_id");
	    var isChecked = $(this).prop("checked")  ? 1 : 0;

	    var current_state = ($( "tr input:checked" ).length / $('tr input[type=checkbox]').length) * 100;
	    $('#current-state').width(current_state + "%");
	    
	    $.ajax({
		
			type: "POST",
			
			url: "http://localhost:3000/users/topics/1/group/1/toggle_status.json",

			dataType: 'text',
			
			data: {task_id: task_id, status: isChecked},
			
			success: function(data) {
			  //   	<div class="alert alert-success" style="display:none;"></div>
					// <div class="alert alert-error" style="display:none;"></div>
			},
			
			error: function(data) {
			    
			    console.log(data);
			    
			}
	    });
	});

	$('#task_list').ready(function() {
		var current_state = ($( "tr input:checked" ).length / $('tr input[type=checkbox]').length) * 100;
	    $('#current-state').width(current_state + "%");
	});
	$('#team_user_list').ready(function (e) {
		applyColorOnTeamMembers();
	});

});
	    
var userListID = new Array();
var userColorList = new Array();
var ColorNonSelected = "";

var Color = new Array();


function applyColorOnTeamMembers() {
	var i = 0;
	ColorNonSelected = shadeColor("#998B94", 40);
	$('#team_user_list img').each(function (e) {
		var c = rainbow($('#team_user_list img').size(), i);
		Color[c] = shadeColor(c, 70);

		userColorList[$(this).attr("tag")] = Color[c];

		$(this).css("border", "solid " + userColorList[$(this).attr("tag")] + " 5px");
		i++;
	});
	$('.table tr').each(function(name){
		$(this).css("background-color", ColorNonSelected);
	});
}

function shadeColor(color, percent) {   
    var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, B = (num >> 8 & 0x00FF) + amt, G = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
}

function rainbow(numOfSteps, step) {
    // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distiguishable vibrant markers in Google Maps and other apps.
    // Adam Cole, 2011-Sept-14
    // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
    var r, g, b;
    var h = step / numOfSteps;
    var i = ~~(h * 6);
    var f = h * 6 - i;
    var q = 1 - f;
    switch(i % 6){
        case 0: r = 1, g = f, b = 0; break;
        case 1: r = q, g = 1, b = 0; break;
        case 2: r = 0, g = 1, b = f; break;
        case 3: r = 0, g = q, b = 1; break;
        case 4: r = f, g = 0, b = 1; break;
        case 5: r = 1, g = 0, b = q; break;
    }
    var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
    return (c);
}



function applyColorOnTask(object) {
	var id = $(object).attr('tag');
	$('.table tr').each(function(name){
		if ($(this).attr('tag-task') == id) {
			$(this).css("background-color", userColorList[$(this).attr("tag-task")]);
		}
		else {
			$(this).css("background-color", ColorNonSelected);
		}
	});
}
function removeColorOnTask(object) {
	var id = $(object).attr('tag');
	$('.table tr').each(function(name){
		$(this).css("background-color", ColorNonSelected);
	});
}