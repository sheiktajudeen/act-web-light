var socket = io();

socket.on('connect', function() {
  console.log('connected to server');
});

socket.on('disconnect',function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
  console.log('new message: ',message);
});

socket.on('accountValidated', function(message){
  console.log(message);
  jQuery('#glassSpinner').removeClass('fa-spinner');
  jQuery('#glassSpinner').removeClass('fa-spin').addClass('fa-thumbs-up');
});

socket.on('fetchedProduct', function(message){
  console.log(message);
  jQuery('#prdSpinner').removeClass('fa-spinner');
  jQuery('#prdSpinner').removeClass('fa-spin').addClass('fa-thumbs-up');
});

socket.on('activated', function(message){
  console.log(message);
  jQuery('#actSpinner').removeClass('fa-spinner');
  jQuery('#actSpinner').removeClass('fa-spin').addClass('fa-thumbs-up');
});

socket.on('resetDevice', function(message){
  console.log(message);
  jQuery('#resetSpinner').removeClass('fa-spinner');
  jQuery('#resetSpinner').removeClass('fa-spin').addClass('fa-thumbs-up');
  var actButton = jQuery('#act-button');
  actButton.attr('disabled', 'disabled').text('Done');
});


jQuery('#contact_form').on('submit', function(e){
  e.preventDefault();
});

var actButton = jQuery('#act-button');
actButton.on('click', function(){
  actButton.attr('disabled', 'disabled').text('Activating...');
  jQuery('#api_calls').css('display','block');
  socket.emit('glassValidation',{
    text:"AccountNumber"
  },function(){

  });
});
