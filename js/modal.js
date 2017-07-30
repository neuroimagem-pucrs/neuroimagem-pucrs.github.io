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

$(document).ready(function() {
    $('.btn-default').click(function() {
        $('#myModal .modal-body').load($(this).data('href'), function(e) {
            $('#myModal').modal('show')
        });
      $('#myModal').on('hidden.bs.modal', function () {
    $(this).find("input,textarea,select").val('').end();

});
    });
  
});
