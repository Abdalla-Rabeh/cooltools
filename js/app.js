$(document).ready(function(){
  $(".logo").fadeOut(5000);
});
  

var scroll_top =$('.Scroll-top')
$(window).scroll(function(){
  if($(window).scrollTop() >= 100){
      if(scroll_top.is(':hidden')){
      $(scroll_top).fadeIn(400)
      }
  }else{
      $(scroll_top).fadeOut(400)
  }
})
$(".scroll_top").click(function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop:0
      
  },1000)
})

var currentYear = new Date().getFullYear();
    

document.getElementById("currentYear").textContent = currentYear;
function generateWhatsAppLink(phoneNumber, message) {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var baseUrl = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';
  var urlParams = new URLSearchParams({ phone: phoneNumber, text: message });
  return baseUrl + '?' + urlParams.toString();
}

var phoneNumber = '201023279424'; // Replace with your phone number
var message = `للأشتراك في الحزمة كامله
ب10$
يرجي تحويل مبلغ الأشتراك الي رقم (01023279424) وتأكيد التحويل بأرسال سكرين شوت

سيتم إرسال الحزمه في خلال 24 ساعه من وقت الدفع ❤️💯
`; 

var whatsappLink = generateWhatsAppLink(phoneNumber, message);
var whatsappLinks = document.querySelectorAll('.whatsappLink');
whatsappLinks.forEach(function(link) {
    link.href = whatsappLink;
});