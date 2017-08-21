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
  $('form[id=contactForm] #success').hide();
  $('form[id=contactForm] #error').hide();

  // AJAX POST, with contact form data serialized, which expects a JSON response
  // Datatype must be set to 'json' to use formspree.io
  $.post($(this).attr('action'), $(this).serialize(), function(){
      $('form[id=contactForm] #success').show();
    }, 'json').fail(function(){
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
