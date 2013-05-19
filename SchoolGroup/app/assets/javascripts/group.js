
    $( document ).ready(function() {
    	$('#task_list .alert-success').hide();
    	$('#task_list .alert-error').hide();




	    $('img').mouseenter(function (e) {
	    	var id = $(this).attr('tag');
	    	$('.table tr').each(function(name){
	    		if ($(this).attr('tag-task') == id) {
	    			$(this).attr("class", 'success');
	    		}
	    		else {
	    			$(this).attr("class", 'warning');
	    		}
			  });
	    });
	   	$('img').mouseleave(function (e) {
	    	var id = $(this).attr('tag');
	    	$('.table tr').each(function(name){
	    		$(this).removeAttr("class");
			});
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
			    $('#task_list .alert-success').show(0).delay(5000).hide(0);
			},
			
			error: function(data) {
			    
			    console.log(data);
			    
			}
	    });
	});
	/*$('tr input[type=checkbox]').click(function (e) {
	    
	    console.log("event");
	    var task_id = $(this).attr("task_id");
	    var isChecked = $(this).prop("checked")  ? 1 : 0;
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
	});*/
	$('#task_list').ready(function() {
		var current_state = ($( "tr input:checked" ).length / $('tr input[type=checkbox]').length) * 100;
	    $('#current-state').width(current_state + "%");
	});
});
	    
