
; /* Start:"a:4:{s:4:"full";s:96:"/bitrix/templates/s7_beauty/components/bitrix/main.feedback/feedback/script.min.js?1518354951508";s:6:"source";s:78:"/bitrix/templates/s7_beauty/components/bitrix/main.feedback/feedback/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($){$(document).ready(function(){setTimeout(function(){formCont=$("#feedback");formCont.find('img[alt="CAPTCHA"]').css("cursor","pointer");$(formCont).on("click",'img[alt="CAPTCHA"], .captha-img',function(){objImg=$(this);ajaxPath=formCont.data("ajax");$.getJSON(ajaxPath+"/reload_captcha.php?ajax=Y&ncc=1",function(data){if(data){objImg.attr("src","/bitrix/tools/captcha.php?captcha_sid="+data);objImg.closest("form").find('input[name="captcha_sid"]').val(data)}});return false})},1e3)})})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:85:"/bitrix/components/bitrix/map.yandex.view/templates/.default/script.js?14913031341540";s:6:"source";s:70:"/bitrix/components/bitrix/map.yandex.view/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
if (!window.BX_YMapAddPlacemark)
{
	window.BX_YMapAddPlacemark = function(map, arPlacemark)
	{
		if (null == map)
			return false;

		if(!arPlacemark.LAT || !arPlacemark.LON)
			return false;

		var props = {};
		if (null != arPlacemark.TEXT && arPlacemark.TEXT.length > 0)
		{
			var value_view = '';

			if (arPlacemark.TEXT.length > 0)
			{
				var rnpos = arPlacemark.TEXT.indexOf("\n");
				value_view = rnpos <= 0 ? arPlacemark.TEXT : arPlacemark.TEXT.substring(0, rnpos);
			}

			props.balloonContent = arPlacemark.TEXT.replace(/\n/g, '<br />');
			props.hintContent = value_view;
		}

		var obPlacemark = new ymaps.Placemark(
			[arPlacemark.LAT, arPlacemark.LON],
			props,
			{balloonCloseButton: true}
		);

		map.geoObjects.add(obPlacemark);

		return obPlacemark;
	}
}

if (!window.BX_YMapAddPolyline)
{
	window.BX_YMapAddPolyline = function(map, arPolyline)
	{
		if (null == map)
			return false;

		if (null != arPolyline.POINTS && arPolyline.POINTS.length > 1)
		{
			var arPoints = [];
			for (var i = 0, len = arPolyline.POINTS.length; i < len; i++)
			{
				arPoints.push([arPolyline.POINTS[i].LAT, arPolyline.POINTS[i].LON]);
			}
		}
		else
		{
			return false;
		}

		var obParams = {clickable: true};
		if (null != arPolyline.STYLE)
		{
			obParams.strokeColor = arPolyline.STYLE.strokeColor;
			obParams.strokeWidth = arPolyline.STYLE.strokeWidth;
		}
		var obPolyline = new ymaps.Polyline(
			arPoints, {balloonContent: arPolyline.TITLE}, obParams
		);

		map.geoObjects.add(obPolyline);

		return obPolyline;
	}
}
/* End */
;; /* /bitrix/templates/s7_beauty/components/bitrix/main.feedback/feedback/script.min.js?1518354951508*/
; /* /bitrix/components/bitrix/map.yandex.view/templates/.default/script.js?14913031341540*/
