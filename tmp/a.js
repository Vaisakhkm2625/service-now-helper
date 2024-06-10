
function setUserDetails(html) {
    $('#rspns').html(DOMPurify.sanitize(html));

    if ($('#createdby').length > 0) {
        $('.nav-tabs a[data-bs-target="#tabuser"]').tab('show');
        $('#createdby').click(function() {
            var usr = $(this).data('username');
            $('#tbxname').val(usr).focus(function() {
                $(this).select();
            });

            getUserDetails(usr);
        });
    }
    else
        $('#tbxname').val('');

    $('#waitinguser').hide();
}



