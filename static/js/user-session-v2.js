$('form').submit(function() {
  $(this).find("button[type='submit']").prop('disabled',true);
});

//Add a JQuery click event handler onto our checkbox.
$('#data-agreement').click(function(){
    //If the checkbox is checked.
    if($(this).is(':checked')){
        //Enable the submit button.
        $('#submit').attr("disabled", false);
    } else{
        //If it is not checked, disable the button.
        $('#submit').attr("disabled", true);
    }
});

function getCookie(c_name) {
  var c_value = document.cookie,
      c_start = c_value.indexOf(" " + c_name + "=");
  if (c_start == -1) c_start = c_value.indexOf(c_name + "=");
  if (c_start == -1) {
      c_value = null;
  } else {
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1) {
          c_end = c_value.length;
      }
      c_value = unescape(c_value.substring(c_start, c_end));
  }
  if (c_value === null) {
    // missing cookie
    let sch = setCookie('__rc_school', "VVZB", '1');
  } else {
    // do nothing
  }
  return c_value;
};
  
function setCookie(key, value, expiry) {
  var expires = new Date();
  expires.setTime(expires.getTime() + (expiry * 60 * 60 * 1000));
  // document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + ';path=/' + ';domain=localhost';
  document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + ';path=/' + ';domain=rc.virginia.edu';
};

function decode64(str) {
  var r = atob(str);
  return r;
};

function encode64(str) {
  var d = window.btoa(unescape(encodeURIComponent(str)));
  return d;
}

// show extra "Other" field if selected for Academic Discipline
$("#discipline-other").hide();
$("#discipline-other-label").hide();
$("#discipline").on("change",function () {
  var discval = this.value;
  if (discval == "Other") {
    $("#discipline-other").show(400);
    $("#discipline-other-label").show(400);
  } else {
    $("#discipline-other").hide(400);
    $("#discipline-other-label").hide(400);
  }
  var discvalx = encode64(discval);
  let discdo = setCookie('__rc_discipline', discvalx, '4464');
});


if (getCookie("__rc_name") == null || getCookie("__rc_name") == '') {
  window.location.replace( "https://auth.rc.virginia.edu/session.php" );  
};

if (getCookie("__rc_department") == null || getCookie("__rc_department") == '') {
  window.location.replace( "https://auth.rc.virginia.edu/session.php" );  
};

// document.cookie = "__rc_form_referrer= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
var form_url = window.location;
let referrer = setCookie('__rc_form_referrer', form_url, '24');

// var form = document.getElementById('request-form');

// name
let name = getCookie("__rc_name");
let name_dec = decode64(name);
var set_name = document.getElementById("name").value = name_dec;

// uid
let uid = getCookie("__rc_uid");
let uid_dec = decode64(uid);
var set_uid = document.getElementById("uid").value = uid_dec;

// email
let email = getCookie("__rc_email");
let email_dec = decode64(email);
var set_email = document.getElementById("email").value = email_dec;

// department
let deptc = getCookie("__rc_department");
let dept_dec = decode64(deptc);
$("#department").val(dept_dec);

// discipline
let discc = getCookie("__rc_discipline");
let disc_dec = decode64(discc);
$("#discipline").val(disc_dec);

// school
// let school_dec = decode64(getCookie("__rc_school"));
// var school = document.getElementById("school").value = school_dec;
// var display_school = document.getElementById("school_name").innerHTML = school_dec;


