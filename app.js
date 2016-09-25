$(document).ready(function() {

  // Add item to list
  $('#myForm').submit(function(event) {
    event.preventDefault();
    var input = $('#myInput').val();
    $('#myInput').val('');
    var html = "";
    html += '<li class="item">';
    html += '<button class="done">X</button>';
    html += input;
    html += '<button class="remove">Remove</button>';
    html += '</li>';
    $('#result').append(html);
  });

  // Remove item from list
  $(document).on('click', '.remove', function(e) {
    var what = $(this).parent();
    what.remove();
  });

  // Mark item as complete by adding line-through
  $(document).on('click', '.done', function(e) {
    var what = $(this).parent();
    what.addClass('strike');
  });

});
