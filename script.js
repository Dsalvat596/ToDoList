var addItemToList = function (item) {
    if (item.length > 0) {
        $('#todolist').append('<li>' + item + '<button class="btn btn-danger btn-md remove-item">Done</button></li>');
    } else {
        alert('Please enter a list item!');
    }
};

$('.add-item').click(function () {
    var listItem = $('#item-input').val();
    addItemToList(listItem);
    $('#item-input').val('');
});

$('#todolist').on('click', '.remove-item', function(){
  $(this).parent().remove();
});