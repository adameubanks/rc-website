// look for SEARCH key
var searchKey = {
  83: 's'
};    
document.addEventListener('keydown', function(e) {
  var key = searchKey[e.keyCode];
  if (key == 's') {
    showSearch();
        
  } else {
    // do nothing
  }  
}); 
function showSearch() {
  $('.search-modal').modal('show');
}; 

$(document).ready(function() {
  if(window.location.href.indexOf('#search') != -1) {
    $('.search-modal').modal('show');
  }
});
