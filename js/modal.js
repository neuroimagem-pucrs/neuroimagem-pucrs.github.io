	$(function() {
        $(".pop").click(function(){
          var pageTitle = $(this).attr('pageTitle');
          var pageName = $(this).attr('pageName');
          $(".modal .modal-title").html(pageTitle);
          $(".modal .modal-body").html("Content loading please wait...");
          $(".modal").modal("show");
          $(".modal .modal-body").load(pageName);
        });
	});	
