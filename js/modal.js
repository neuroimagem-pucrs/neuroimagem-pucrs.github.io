$(document).ready(function() {
        // Fill modal with content from link href
        $(".openModal").on("click", function(e) {
            var link = $(this).data("href");
        $('#popup').modal("show");
        $('#popup .modal-body').load(link );
        });
    })
