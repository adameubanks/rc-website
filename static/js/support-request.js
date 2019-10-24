$("#rivanna-help").hide();
$("#storage-help").hide();
$("#categories").change(function () {
  var cat = this.value;
  if (cat == "Storage") {
    $("#rivanna-help").hide(200);
    $("#storage-help").show(400);
  } else if (cat == "Rivanna") {
    $("#rivanna-help").show(400);
    $("#storage-help").hide(200);
  } else {
    $("#rivanna-help").hide(200);
    $("#storage-help").hide(200);
  }
});

var text_max = 5000;
$('#textarea_feedback').html(text_max + ' characters remaining');
$('#description').keyup(function() {
  var text_length = $('#description').val().length;
  var text_remaining = text_max - text_length;
  $('#textarea_feedback').html(text_remaining + ' characters remaining');
  if (text_remaining <=20) {
    $('#textarea_feedback').css("color","red");
    $('#textarea_feedback').css("font-weight","bold");
  } else if (text_remaining <= 0) {
    $('#textarea_feedback').html("No more room left!");
  } else {
    $('#textarea_feedback').css("color","green");
    $('#textarea_feedback').css("font-weight","normal");
  }
});

