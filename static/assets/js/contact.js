// Initial form validation
$(document).ready(function() {
  $.validate({
    modules : 'html5, toggleDisabled'
  });
});

// Revalidate on change
$('form[id=contactForm]').change(function() {
  $.validate({
    modules : 'html5, toggleDisabled'
  });
});

// Async contact form
$('form[id=contactForm]').submit(function(){
  $.post($(this).attr('action'), $(this).serialize(), function(res){
    $('form[id=contactForm] #success').hide();
    $('form[id=contactForm] #error').hide();
    if (res.code == "200")
      $('form[id=contactForm] #success').show();
    }).fail(function(){
    $('form[id=contactForm] #success').hide();
    $('form[id=contactForm] #error').hide();
    $('form[id=contactForm] #error').show();
  });
  return false;
});

// Callback function for captcha
function onSubmit(token) {
  if (!token) {
     return;
  }
  $('form[id=contactForm]').submit();
}
