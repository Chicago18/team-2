var user = cookie.get('user');
if (!user) {
      cookie.set('user', user);
  };


// connect to a server
var socket = io();

// handle receiving messages
socket.on('count', function (data){
    $('.user-count').html(data);
});
socket.on('message', function (data) {
    $('.chat').append('<p><strong>' + data.user + '</strong>: ' + data.message + '</p>');
  });

  $('form').submit(function (e) {
    // Avoid submitting it through HTTP
    e.preventDefault();
  
    // Retrieve the message from the user
    var message = $(e.target).find('input').val();
  
    // Send the message to the server
    socket.emit('message', {
      user: cookie.get('user') || 'Anonymous',
      message: message
    });
  
    // Clear the input and focus it for a new message
    e.target.reset();
    $(e.target).find('input').focus();
  });