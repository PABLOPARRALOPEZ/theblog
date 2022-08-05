var editElement = "";
$('#Submit').click(function() {
    var userName = $('#DisplayName').val(); // input
    var message = $('#Comment').val(); // input

    if(editElement != ""){
        editElement.parent().parent().find('.user_name').text(userName);
        editElement.parent().parent().find('.user_comment').text(message);
        editElement = "";
    }
    else if(userName != "" && message != ""){
        var html = "<div class='commentContainer'>"
        +"<img src='./userIcon.png' alt='Avatar' style='width:100%;'>"
        +"<span class='user_name'>"+userName+"</span><br>"
        +"<span class='user_comment'>"+message+"</span>"
        +"<div class='commentContainerbuttons'><a href='#' class='editBtn'>Edit</a><a href='#' class='deleteBtn'>Delete</a></div></div>";
        $('.commentsectionbox').append(html);
    }
    $('#DisplayName').val('');
    $('#Comment').val('');
});

$('.commentsectionbox').on('click', '.deleteBtn', function() {
     $(this).closest(".commentContainer").remove();
 });

 $('.commentsectionbox').on('click', '.editBtn', function() {
    var user_name = $(this).parent().parent().find('.user_name').text();
    var user_comment = $(this).parent().parent().find('.user_comment').text();
    $('#DisplayName').val(user_name)
    $('#Comment').val(user_comment)
    editElement = $(this);
 });