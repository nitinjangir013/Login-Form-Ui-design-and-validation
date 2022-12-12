$(".signin").click(function(){
  $('.bar').css({marginLeft: '18%'});
  $('.form2').css({top: '400px'});
});

$(".signup").click(function(){
  $('.bar').css({marginLeft: '60%'});
  $('.form2').css({top: '60px'});
});


// Gmail validation
$("input").click(function () {
  $(this).css({'border-bottom': '2px solid rgba(0, 0, 0, 0.2)'});
});
var email_match_text = ["@gmail.com","@yahoo.com"];
var email_space= false;
var pass_result_num=false;

$(".gmail").on("change",function(){
  let email_string = $(this).val();
  var gmailLength = $(this).val().length;
  var value1 = gmailLength-10;
  var  slice_email = email_string.slice(value1,gmailLength);
  for(let i=0; i<gmailLength; i++)
  {
    if(email_string[i]!=" ")
    {
      email_space = true;
      $(this).css({'border-bottom':'2px solid rgba(0,255,0,1)'});
      $(this).parent().children('button').css({'pointer-events':'unset'});
    }
    else
    {
      email_space=false;
      $(this).css({'border-bottom':'2px solid rgba(255,0,0,1)'});
      $(this).parent().children('button').css({'pointer-events':'none'});
    }
  }
  if(email_space==true)
  {
    if(email_match_text[0]===slice_email || email_match_text[1]===slice_email)
    {
      email_result_num = true;
      $(this).css({'border-bottom':'2px solid rgba(0,255,0,1)'});
      $(this).parent().children('button').css({'pointer-events':'unset'});
    }
    else
    {
      email_result_num = false;
      $(this).css({'border-bottom':'2px solid rgba(255,0,0,1)'});
      $(this).parent().children('button').css({'pointer-events':'none'});
    }
  }
});

// Password

$(".password_input")
.on('change',function() 
{
  var pass_str = $(this).val();
  if(pass_str.length>5)
  {
    pass_result_num=true;
    $(this).css({'border-bottom':'2px solid rgba(0,255,0,1)'});
    $(this).parent().children('button').css({'pointer-events':'unset'});
  }
  else
  {
    pass_result_num=false;
    $(this).css({'border-bottom':'2px solid rgba(255,0,0,1)'});
    $(this).parent().children('button').css({'pointer-events':'none'});
  }
});

var isType=false;
$('.show').on('click',function(){
  if(isType==false)
    {
      $('.password_input').attr('type','text');
      $(this).attr('src','https://cdn-icons-png.flaticon.com/512/2767/2767146.png');
      isType=true;
    }
  else
    {
      $('.password_input').attr('type','password');
      $(this).attr('src','https://cdn-icons-png.flaticon.com/512/709/709612.png');
      isType=false;
    }
});