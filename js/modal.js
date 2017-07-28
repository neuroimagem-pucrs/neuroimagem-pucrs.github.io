$('.openBtn').on('click',function(){
    $('.modal-body').load('content.html',function(){
        $('#myModal').modal({show:true});
    });
});
