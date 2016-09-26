$(document).ready(function() {

  // Add item to list on form submit
  $('#myForm').submit(function(event) {
    // Prevent page from doing automatic refresh
    event.preventDefault();

    // Get value from input field
    var input = $('#myInput').val();

    // Clear input field
    $('#myInput').val('');

    // Build HTML for appending item to list
    var html = "";
    html += '<li class="item">';
    html += '<button class="done">X</button>&nbsp;';
    html += input;
    html += '<button class="remove">Remove</button>';
    html += '</li>';
    $('#result').append(html);
  });

  // Remove item from list
  $(document).on('click', '.remove', function(e) {
    $(this).parent().remove();
  });

  // Mark item as complete by adding line-through
  $(document).on('click', '.done', function(e) {
    $(this).parent().addClass('strike');
  });

});
