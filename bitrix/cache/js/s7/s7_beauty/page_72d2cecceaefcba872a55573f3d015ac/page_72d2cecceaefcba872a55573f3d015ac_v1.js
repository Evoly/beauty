
; /* Start:"a:4:{s:4:"full";s:103:"/bitrix/templates/s7_beauty/components/bitrix/iblock.element.add.form/order/script.min.js?1518354951510";s:6:"source";s:85:"/bitrix/templates/s7_beauty/components/bitrix/iblock.element.add.form/order/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($){$(document).ready(function(){setTimeout(function(){formCont=$("#order-form");formCont.find('img[alt="CAPTCHA"]').css("cursor","pointer");$(formCont).on("click",'img[alt="CAPTCHA"], .captha-img',function(){objImg=$(this);ajaxPath=formCont.data("ajax");$.getJSON(ajaxPath+"/reload_captcha.php?ajax=Y&ncc=1",function(data){if(data){objImg.attr("src","/bitrix/tools/captcha.php?captcha_sid="+data);objImg.closest("form").find('input[name="captcha_sid"]').val(data)}});return false})},1e3)})})(jQuery);
/* End */
;; /* /bitrix/templates/s7_beauty/components/bitrix/iblock.element.add.form/order/script.min.js?1518354951510*/
