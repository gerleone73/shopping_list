/*---------------------------------------------------------------------------------


	
----------------------------------------------------------------------------------*/

$(document).ready(function(){
 
//var doCount = 4;
//	var doneCount = 0;
	//updateCount();

/*	var doCount = 4;
	var doneCount = 0;
	updateCount();
*/

	//$("#clip").on('hover','#clip',point); 

	$("#clip").hover(function(){
	 	$(this).addClass('point');
	 });

	$("#clip").click(function(){
	 	window.location.reload();
	 });
	// 

	 $("#gotit").click(function() {
       $('.info').remove();
        newlist();
	
    });

	 function newlist(){
	 	doCount = 0;
		 doneCount = 0;
		updateCount();

		console.log(doCount);
		console.log(doneCount);
	 }

	// shopping();

newlist();
 //function shopping(){
 
	var doCount = 4;
	var doneCount = 0;
	updateCount(); 
	
	//shopping();


	setFocus();

	$('#list').sortable();

	$("form").submit(function(event){
		
		event.preventDefault();

		var newItem = $.trim($('#newItem').val());
		if (newItem == '') {
			setFocus();
		} else{
			addItem(newItem); // when + was + item rather than = newItem it worked??
		};
		
	});


	/*--- Check off the items ---*/




	$('#list').on('click', 'li.listitem', checkoff);
	

	

	/*--- Check off Function ---*/
	function checkoff(){
		console.log("Checking Off...");
		if($(this).hasClass("checked")) {
		
			console.debug($(this));
			doCount++;
			doneCount--;
			updateCount();
		} else {
			
			console.debug($(this));
			doneCount++;
			doCount--;
			updateCount();
		}
		$(this).toggleClass("checked");
		
	}

/*	function removeItem(){
		console.log("Removing item...");
		$(this).remove();
		
			console.debug($(this));	
		
	}* Doesn't work

	/*--- Add the new item to the list and increase the count ---*/
	function addItem(newItem) {
		doCount++;
		updateCount();
		$('<li class="listitem"><span class="item new">' + newItem + '</span></li>').prependTo('#list');//BEFORE APPEND CAME $("#list").hide()....slideDown('slow');
		console.log("You have now added " + newItem); // note this was simply item!!
		setFocus();
	}

	$(".item").hover(function() {
    $(this).addClass("hover");
}, function() {
    $(this).removeClass("hover");
});

	/*--- Clear and Set focus to the inputbox ---*/
	function setFocus() {
		$('#newItem').val('');
		$("#newItem").focus();
	}

	/*--- Update the DO, DONE  counts ---*/
	function updateCount() {
		$('#do').text(doCount);
		$('#done').text(doneCount);
	}

 //shopping


//shopping();

 	
   //shopping();

	 	//	if($('.item').hasClass('new')) {


	 	//$(".new").parent().remove(); /// parent worked!!! 
	   
  // }
  //		shopping();
  

// });

});

