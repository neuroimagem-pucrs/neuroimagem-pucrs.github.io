/*$('#myModal').on('hidden.bs.modal', function () {
  $(this).removeData('bs.modal');
});

$('#myModal').on('show.bs.modal', function () {
       $(this).find('.modal-body').css({
              width:'auto', //probably not needed
              height:'auto', //probably not needed 
              'max-height':'100%'
       });
});*/
var $modal = $('.modal');

// Show loader & then get content when modal is shown
$modal.on('show.bs.modal', function(e) {
  var paragraphs = $(e.relatedTarget).data('paragraphs');

  $(this)
    .addClass('modal-scrollfix')
    .find('.modal-body')
    .html('loading...')
    .load('https://neuroimagem-pucrs.github.io/team/' + paragraphs, function() {
      // Use Bootstrap's built-in function to fix scrolling (to no avail)
      //$modal
        //.removeClass('modal-scrollfix')
        //.modal('handleUpdate')
    //$('.modal-backdrop').remove();
        //.modal('hide');
      //$('body').removeClass('modal-open');
      
    });
  //$('.modal-backdrop').remove();
});
