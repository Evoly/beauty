/* Start:"a:4:{s:4:"full";s:83:"/bitrix/templates/s7_beauty/vendor/fancybox/jquery.fancybox.pack.js?151835495123135";s:6:"source";s:67:"/bitrix/templates/s7_beauty/vendor/fancybox/jquery.fancybox.pack.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
/* End */

/* Start:"a:4:{s:4:"full";s:82:"/bitrix/templates/s7_beauty/vendor/bxslider/jquery.bxslider.min.js?151835495127059";s:6:"source";s:66:"/bitrix/templates/s7_beauty/vendor/bxslider/jquery.bxslider.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function($){var plugin={};var defaults={mode:"horizontal",slideSelector:"",infiniteLoop:true,hideControlOnEnd:false,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:false,captions:false,ticker:false,tickerHover:false,adaptiveHeight:false,adaptiveHeightSpeed:500,video:false,useCSS:true,preloadImages:"visible",responsive:true,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:true,swipeThreshold:50,oneToOneTouch:true,preventDefaultSwipeX:true,preventDefaultSwipeY:false,pager:true,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:true,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:false,startText:"Start",stopText:"Stop",autoControlsCombine:false,autoControlsSelector:null,auto:false,pause:4e3,autoStart:true,autoDirection:"next",autoHover:false,autoDelay:0,autoSlideForOnePage:false,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};$.fn.bxSlider=function(options){if(this.length==0)return this;if(this.length>1){this.each(function(){$(this).bxSlider(options)});return this}var slider={};var el=this;plugin.el=this;var windowWidth=$(window).width();var windowHeight=$(window).height();var init=function(){slider.settings=$.extend({},defaults,options);slider.settings.slideWidth=parseInt(slider.settings.slideWidth);slider.children=el.children(slider.settings.slideSelector);if(slider.children.length<slider.settings.minSlides)slider.settings.minSlides=slider.children.length;if(slider.children.length<slider.settings.maxSlides)slider.settings.maxSlides=slider.children.length;if(slider.settings.randomStart)slider.settings.startSlide=Math.floor(Math.random()*slider.children.length);slider.active={index:slider.settings.startSlide};slider.carousel=slider.settings.minSlides>1||slider.settings.maxSlides>1;if(slider.carousel)slider.settings.preloadImages="all";slider.minThreshold=slider.settings.minSlides*slider.settings.slideWidth+(slider.settings.minSlides-1)*slider.settings.slideMargin;slider.maxThreshold=slider.settings.maxSlides*slider.settings.slideWidth+(slider.settings.maxSlides-1)*slider.settings.slideMargin;slider.working=false;slider.controls={};slider.interval=null;slider.animProp=slider.settings.mode=="vertical"?"top":"left";slider.usingCSS=slider.settings.useCSS&&slider.settings.mode!="fade"&&function(){var div=document.createElement("div");var props=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in props){if(div.style[props[i]]!==undefined){slider.cssPrefix=props[i].replace("Perspective","").toLowerCase();slider.animProp="-"+slider.cssPrefix+"-transform";return true}}return false}();if(slider.settings.mode=="vertical")slider.settings.maxSlides=slider.settings.minSlides;el.data("origStyle",el.attr("style"));el.children(slider.settings.slideSelector).each(function(){$(this).data("origStyle",$(this).attr("style"))});setup()};var setup=function(){el.wrap('<div class="'+slider.settings.wrapperClass+'"><div class="bx-viewport"></div></div>');slider.viewport=el.parent();slider.loader=$('<div class="bx-loading" />');slider.viewport.prepend(slider.loader);el.css({width:slider.settings.mode=="horizontal"?slider.children.length*100+215+"%":"auto",position:"relative"});if(slider.usingCSS&&slider.settings.easing){el.css("-"+slider.cssPrefix+"-transition-timing-function",slider.settings.easing)}else if(!slider.settings.easing){slider.settings.easing="swing"}var slidesShowing=getNumberSlidesShowing();slider.viewport.css({width:"100%",overflow:"hidden",position:"relative"});slider.viewport.parent().css({maxWidth:getViewportMaxWidth()});if(!slider.settings.pager){slider.viewport.parent().css({margin:"0 auto 0px"})}slider.children.css({float:slider.settings.mode=="horizontal"?"left":"none",listStyle:"none",position:"relative"});slider.children.css("width",getSlideWidth());if(slider.settings.mode=="horizontal"&&slider.settings.slideMargin>0)slider.children.css("marginRight",slider.settings.slideMargin);if(slider.settings.mode=="vertical"&&slider.settings.slideMargin>0)slider.children.css("marginBottom",slider.settings.slideMargin);if(slider.settings.mode=="fade"){slider.children.css({position:"absolute",zIndex:0,display:"none"});slider.children.eq(slider.settings.startSlide).css({zIndex:slider.settings.slideZIndex,display:"block"})}slider.controls.el=$('<div class="bx-controls" />');if(slider.settings.captions)appendCaptions();slider.active.last=slider.settings.startSlide==getPagerQty()-1;if(slider.settings.video)el.fitVids();var preloadSelector=slider.children.eq(slider.settings.startSlide);if(slider.settings.preloadImages=="all")preloadSelector=slider.children;if(!slider.settings.ticker){if(slider.settings.pager)appendPager();if(slider.settings.controls)appendControls();if(slider.settings.auto&&slider.settings.autoControls)appendControlsAuto();if(slider.settings.controls||slider.settings.autoControls||slider.settings.pager)slider.viewport.after(slider.controls.el)}else{slider.settings.pager=false}loadElements(preloadSelector,start)};var loadElements=function(selector,callback){var total=selector.find("img, iframe").length;if(total==0){callback();return}var count=0;selector.find("img, iframe").each(function(){$(this).one("load",function(){if(++count==total)callback()}).each(function(){if(this.complete)$(this).trigger("load")})})};var start=function(){if(slider.settings.infiniteLoop&&slider.settings.mode!="fade"&&!slider.settings.ticker){var slice=slider.settings.mode=="vertical"?slider.settings.minSlides:slider.settings.maxSlides;var sliceAppend=slider.children.slice(0,slice).clone().addClass("bx-clone");var slicePrepend=slider.children.slice(-slice).clone().addClass("bx-clone");el.append(sliceAppend).prepend(slicePrepend)}slider.loader.remove();setSlidePosition();if(slider.settings.mode=="vertical")slider.settings.adaptiveHeight=true;slider.viewport.height(getViewportHeight());el.redrawSlider();slider.settings.onSliderLoad(slider.active.index);slider.initialized=true;if(slider.settings.responsive)$(window).bind("resize",resizeWindow);if(slider.settings.auto&&slider.settings.autoStart&&(getPagerQty()>1||slider.settings.autoSlideForOnePage))initAuto();if(slider.settings.ticker)initTicker();if(slider.settings.pager)updatePagerActive(slider.settings.startSlide);if(slider.settings.controls)updateDirectionControls();if(slider.settings.touchEnabled&&!slider.settings.ticker)initTouch()};var getViewportHeight=function(){var height=0;var children=$();if(slider.settings.mode!="vertical"&&!slider.settings.adaptiveHeight){children=slider.children}else{if(!slider.carousel){children=slider.children.eq(slider.active.index)}else{var currentIndex=slider.settings.moveSlides==1?slider.active.index:slider.active.index*getMoveBy();children=slider.children.eq(currentIndex);for(i=1;i<=slider.settings.maxSlides-1;i++){if(currentIndex+i>=slider.children.length){children=children.add(slider.children.eq(i-1))}else{children=children.add(slider.children.eq(currentIndex+i))}}}}if(slider.settings.mode=="vertical"){children.each(function(index){height+=$(this).outerHeight()});if(slider.settings.slideMargin>0){height+=slider.settings.slideMargin*(slider.settings.minSlides-1)}}else{height=Math.max.apply(Math,children.map(function(){return $(this).outerHeight(false)}).get())}if(slider.viewport.css("box-sizing")=="border-box"){height+=parseFloat(slider.viewport.css("padding-top"))+parseFloat(slider.viewport.css("padding-bottom"))+parseFloat(slider.viewport.css("border-top-width"))+parseFloat(slider.viewport.css("border-bottom-width"))}else if(slider.viewport.css("box-sizing")=="padding-box"){height+=parseFloat(slider.viewport.css("padding-top"))+parseFloat(slider.viewport.css("padding-bottom"))}return height};var getViewportMaxWidth=function(){var width="100%";if(slider.settings.slideWidth>0){if(slider.settings.mode=="horizontal"){width=slider.settings.maxSlides*slider.settings.slideWidth+(slider.settings.maxSlides-1)*slider.settings.slideMargin}else{width=slider.settings.slideWidth}}return width};var getSlideWidth=function(){var newElWidth=slider.settings.slideWidth;var wrapWidth=slider.viewport.width();if(slider.settings.slideWidth==0||slider.settings.slideWidth>wrapWidth&&!slider.carousel||slider.settings.mode=="vertical"){newElWidth=wrapWidth}else if(slider.settings.maxSlides>1&&slider.settings.mode=="horizontal"){if(wrapWidth>slider.maxThreshold){}else if(wrapWidth<slider.minThreshold){newElWidth=(wrapWidth-slider.settings.slideMargin*(slider.settings.minSlides-1))/slider.settings.minSlides}}return newElWidth};var getNumberSlidesShowing=function(){var slidesShowing=1;if(slider.settings.mode=="horizontal"&&slider.settings.slideWidth>0){if(slider.viewport.width()<slider.minThreshold){slidesShowing=slider.settings.minSlides}else if(slider.viewport.width()>slider.maxThreshold){slidesShowing=slider.settings.maxSlides}else{var childWidth=slider.children.first().width()+slider.settings.slideMargin;slidesShowing=Math.floor((slider.viewport.width()+slider.settings.slideMargin)/childWidth)}}else if(slider.settings.mode=="vertical"){slidesShowing=slider.settings.minSlides}return slidesShowing};var getPagerQty=function(){var pagerQty=0;if(slider.settings.moveSlides>0){if(slider.settings.infiniteLoop){pagerQty=Math.ceil(slider.children.length/getMoveBy())}else{var breakPoint=0;var counter=0;while(breakPoint<slider.children.length){++pagerQty;breakPoint=counter+getNumberSlidesShowing();counter+=slider.settings.moveSlides<=getNumberSlidesShowing()?slider.settings.moveSlides:getNumberSlidesShowing()}}}else{pagerQty=Math.ceil(slider.children.length/getNumberSlidesShowing())}return pagerQty};var getMoveBy=function(){if(slider.settings.moveSlides>0&&slider.settings.moveSlides<=getNumberSlidesShowing()){return slider.settings.moveSlides}return getNumberSlidesShowing()};var setSlidePosition=function(){if(slider.children.length>slider.settings.maxSlides&&slider.active.last&&!slider.settings.infiniteLoop){if(slider.settings.mode=="horizontal"){var lastChild=slider.children.last();var position=lastChild.position();setPositionProperty(-(position.left-(slider.viewport.width()-lastChild.outerWidth())),"reset",0)}else if(slider.settings.mode=="vertical"){var lastShowingIndex=slider.children.length-slider.settings.minSlides;var position=slider.children.eq(lastShowingIndex).position();setPositionProperty(-position.top,"reset",0)}}else{var position=slider.children.eq(slider.active.index*getMoveBy()).position();if(slider.active.index==getPagerQty()-1)slider.active.last=true;if(position!=undefined){if(slider.settings.mode=="horizontal")setPositionProperty(-position.left,"reset",0);else if(slider.settings.mode=="vertical")setPositionProperty(-position.top,"reset",0)}}};var setPositionProperty=function(value,type,duration,params){if(slider.usingCSS){var propValue=slider.settings.mode=="vertical"?"translate3d(0, "+value+"px, 0)":"translate3d("+value+"px, 0, 0)";el.css("-"+slider.cssPrefix+"-transition-duration",duration/1e3+"s");if(type=="slide"){el.css(slider.animProp,propValue);el.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){el.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");updateAfterSlideTransition()})}else if(type=="reset"){el.css(slider.animProp,propValue)}else if(type=="ticker"){el.css("-"+slider.cssPrefix+"-transition-timing-function","linear");el.css(slider.animProp,propValue);el.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){el.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd");setPositionProperty(params["resetValue"],"reset",0);tickerLoop()})}}else{var animateObj={};animateObj[slider.animProp]=value;if(type=="slide"){el.animate(animateObj,duration,slider.settings.easing,function(){updateAfterSlideTransition()})}else if(type=="reset"){el.css(slider.animProp,value)}else if(type=="ticker"){el.animate(animateObj,speed,"linear",function(){setPositionProperty(params["resetValue"],"reset",0);tickerLoop()})}}};var populatePager=function(){var pagerHtml="";var pagerQty=getPagerQty();for(var i=0;i<pagerQty;i++){var linkContent="";if(slider.settings.buildPager&&$.isFunction(slider.settings.buildPager)){linkContent=slider.settings.buildPager(i);slider.pagerEl.addClass("bx-custom-pager")}else{linkContent=i+1;slider.pagerEl.addClass("bx-default-pager")}pagerHtml+='<div class="bx-pager-item"><a href="" data-slide-index="'+i+'" class="bx-pager-link">'+linkContent+"</a></div>"}slider.pagerEl.html(pagerHtml)};var appendPager=function(){if(!slider.settings.pagerCustom){slider.pagerEl=$('<div class="bx-pager" />');if(slider.settings.pagerSelector){$(slider.settings.pagerSelector).html(slider.pagerEl)}else{slider.controls.el.addClass("bx-has-pager").append(slider.pagerEl)}populatePager()}else{slider.pagerEl=$(slider.settings.pagerCustom)}slider.pagerEl.on("click","a",clickPagerBind)};var appendControls=function(){slider.controls.next=$('<a class="bx-next" href="">'+slider.settings.nextText+"</a>");slider.controls.prev=$('<a class="bx-prev" href="">'+slider.settings.prevText+"</a>");slider.controls.next.bind("click",clickNextBind);slider.controls.prev.bind("click",clickPrevBind);if(slider.settings.nextSelector){$(slider.settings.nextSelector).append(slider.controls.next)}if(slider.settings.prevSelector){$(slider.settings.prevSelector).append(slider.controls.prev)}if(!slider.settings.nextSelector&&!slider.settings.prevSelector){slider.controls.directionEl=$('<div class="bx-controls-direction" />');slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);slider.controls.el.addClass("bx-has-controls-direction").append(slider.controls.directionEl)}};var appendControlsAuto=function(){slider.controls.start=$('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+slider.settings.startText+"</a></div>");slider.controls.stop=$('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+slider.settings.stopText+"</a></div>");slider.controls.autoEl=$('<div class="bx-controls-auto" />');slider.controls.autoEl.on("click",".bx-start",clickStartBind);slider.controls.autoEl.on("click",".bx-stop",clickStopBind);if(slider.settings.autoControlsCombine){slider.controls.autoEl.append(slider.controls.start)}else{slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop)}if(slider.settings.autoControlsSelector){$(slider.settings.autoControlsSelector).html(slider.controls.autoEl)}else{slider.controls.el.addClass("bx-has-controls-auto").append(slider.controls.autoEl)}updateAutoControls(slider.settings.autoStart?"stop":"start")};var appendCaptions=function(){slider.children.each(function(index){var title=$(this).find("img:first").attr("title");if(title!=undefined&&(""+title).length){$(this).append('<div class="bx-caption"><span>'+title+"</span></div>")}})};var clickNextBind=function(e){if(slider.settings.auto)el.stopAuto();el.goToNextSlide();e.preventDefault()};var clickPrevBind=function(e){if(slider.settings.auto)el.stopAuto();el.goToPrevSlide();e.preventDefault()};var clickStartBind=function(e){el.startAuto();e.preventDefault()};var clickStopBind=function(e){el.stopAuto();e.preventDefault()};var clickPagerBind=function(e){if(slider.settings.auto)el.stopAuto();var pagerLink=$(e.currentTarget);if(pagerLink.attr("data-slide-index")!==undefined){var pagerIndex=parseInt(pagerLink.attr("data-slide-index"));if(pagerIndex!=slider.active.index)el.goToSlide(pagerIndex);e.preventDefault()}};var updatePagerActive=function(slideIndex){var len=slider.children.length;if(slider.settings.pagerType=="short"){if(slider.settings.maxSlides>1){len=Math.ceil(slider.children.length/slider.settings.maxSlides)}slider.pagerEl.html(slideIndex+1+slider.settings.pagerShortSeparator+len);return}slider.pagerEl.find("a").removeClass("active");slider.pagerEl.each(function(i,el){$(el).find("a").eq(slideIndex).addClass("active")})};var updateAfterSlideTransition=function(){if(slider.settings.infiniteLoop){var position="";if(slider.active.index==0){position=slider.children.eq(0).position()}else if(slider.active.index==getPagerQty()-1&&slider.carousel){position=slider.children.eq((getPagerQty()-1)*getMoveBy()).position()}else if(slider.active.index==slider.children.length-1){position=slider.children.eq(slider.children.length-1).position()}if(position){if(slider.settings.mode=="horizontal"){setPositionProperty(-position.left,"reset",0)}else if(slider.settings.mode=="vertical"){setPositionProperty(-position.top,"reset",0)}}}slider.working=false;slider.settings.onSlideAfter(slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index)};var updateAutoControls=function(state){if(slider.settings.autoControlsCombine){slider.controls.autoEl.html(slider.controls[state])}else{slider.controls.autoEl.find("a").removeClass("active");slider.controls.autoEl.find("a:not(.bx-"+state+")").addClass("active")}};var updateDirectionControls=function(){if(getPagerQty()==1){slider.controls.prev.addClass("disabled");slider.controls.next.addClass("disabled")}else if(!slider.settings.infiniteLoop&&slider.settings.hideControlOnEnd){if(slider.active.index==0){slider.controls.prev.addClass("disabled");slider.controls.next.removeClass("disabled")}else if(slider.active.index==getPagerQty()-1){slider.controls.next.addClass("disabled");slider.controls.prev.removeClass("disabled")}else{slider.controls.prev.removeClass("disabled");slider.controls.next.removeClass("disabled")}}};var initAuto=function(){if(slider.settings.autoDelay>0){var timeout=setTimeout(el.startAuto,slider.settings.autoDelay)}else{el.startAuto()}if(slider.settings.autoHover){el.hover(function(){if(slider.interval){el.stopAuto(true);slider.autoPaused=true}},function(){if(slider.autoPaused){el.startAuto(true);slider.autoPaused=null}})}};var initTicker=function(){var startPosition=0;if(slider.settings.autoDirection=="next"){el.append(slider.children.clone().addClass("bx-clone"))}else{el.prepend(slider.children.clone().addClass("bx-clone"));var position=slider.children.first().position();startPosition=slider.settings.mode=="horizontal"?-position.left:-position.top}setPositionProperty(startPosition,"reset",0);slider.settings.pager=false;slider.settings.controls=false;slider.settings.autoControls=false;if(slider.settings.tickerHover&&!slider.usingCSS){slider.viewport.hover(function(){el.stop()},function(){var totalDimens=0;slider.children.each(function(index){totalDimens+=slider.settings.mode=="horizontal"?$(this).outerWidth(true):$(this).outerHeight(true)});var ratio=slider.settings.speed/totalDimens;var property=slider.settings.mode=="horizontal"?"left":"top";var newSpeed=ratio*(totalDimens-Math.abs(parseInt(el.css(property))));tickerLoop(newSpeed)})}tickerLoop()};var tickerLoop=function(resumeSpeed){speed=resumeSpeed?resumeSpeed:slider.settings.speed;var position={left:0,top:0};var reset={left:0,top:0};if(slider.settings.autoDirection=="next"){position=el.find(".bx-clone").first().position()}else{reset=slider.children.first().position()}var animateProperty=slider.settings.mode=="horizontal"?-position.left:-position.top;var resetValue=slider.settings.mode=="horizontal"?-reset.left:-reset.top;var params={resetValue:resetValue};setPositionProperty(animateProperty,"ticker",speed,params)};var initTouch=function(){slider.touch={start:{x:0,y:0},end:{x:0,y:0}};slider.viewport.bind("touchstart",onTouchStart)};var onTouchStart=function(e){if(slider.working){e.preventDefault()}else{slider.touch.originalPos=el.position();var orig=e.originalEvent;slider.touch.start.x=orig.changedTouches[0].pageX;slider.touch.start.y=orig.changedTouches[0].pageY;slider.viewport.bind("touchmove",onTouchMove);slider.viewport.bind("touchend",onTouchEnd)}};var onTouchMove=function(e){var orig=e.originalEvent;var xMovement=Math.abs(orig.changedTouches[0].pageX-slider.touch.start.x);var yMovement=Math.abs(orig.changedTouches[0].pageY-slider.touch.start.y);if(xMovement*3>yMovement&&slider.settings.preventDefaultSwipeX){e.preventDefault()}else if(yMovement*3>xMovement&&slider.settings.preventDefaultSwipeY){e.preventDefault()}if(slider.settings.mode!="fade"&&slider.settings.oneToOneTouch){var value=0;if(slider.settings.mode=="horizontal"){var change=orig.changedTouches[0].pageX-slider.touch.start.x;value=slider.touch.originalPos.left+change}else{var change=orig.changedTouches[0].pageY-slider.touch.start.y;value=slider.touch.originalPos.top+change}setPositionProperty(value,"reset",0)}};var onTouchEnd=function(e){slider.viewport.unbind("touchmove",onTouchMove);var orig=e.originalEvent;var value=0;slider.touch.end.x=orig.changedTouches[0].pageX;slider.touch.end.y=orig.changedTouches[0].pageY;if(slider.settings.mode=="fade"){var distance=Math.abs(slider.touch.start.x-slider.touch.end.x);if(distance>=slider.settings.swipeThreshold){slider.touch.start.x>slider.touch.end.x?el.goToNextSlide():el.goToPrevSlide();el.stopAuto()}}else{var distance=0;if(slider.settings.mode=="horizontal"){distance=slider.touch.end.x-slider.touch.start.x;value=slider.touch.originalPos.left}else{distance=slider.touch.end.y-slider.touch.start.y;value=slider.touch.originalPos.top}if(!slider.settings.infiniteLoop&&(slider.active.index==0&&distance>0||slider.active.last&&distance<0)){setPositionProperty(value,"reset",200)}else{if(Math.abs(distance)>=slider.settings.swipeThreshold){distance<0?el.goToNextSlide():el.goToPrevSlide();el.stopAuto()}else{setPositionProperty(value,"reset",200)}}}slider.viewport.unbind("touchend",onTouchEnd)};var resizeWindow=function(e){if(!slider.initialized)return;var windowWidthNew=$(window).width();var windowHeightNew=$(window).height();if(windowWidth!=windowWidthNew||windowHeight!=windowHeightNew){windowWidth=windowWidthNew;windowHeight=windowHeightNew;el.redrawSlider();slider.settings.onSliderResize.call(el,slider.active.index)}};el.goToSlide=function(slideIndex,direction){if(slider.working||slider.active.index==slideIndex)return;slider.working=true;slider.oldIndex=slider.active.index;if(slideIndex<0){slider.active.index=getPagerQty()-1}else if(slideIndex>=getPagerQty()){slider.active.index=0}else{slider.active.index=slideIndex}slider.settings.onSlideBefore(slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index);if(direction=="next"){slider.settings.onSlideNext(slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index)}else if(direction=="prev"){slider.settings.onSlidePrev(slider.children.eq(slider.active.index),slider.oldIndex,slider.active.index)}slider.active.last=slider.active.index>=getPagerQty()-1;if(slider.settings.pager)updatePagerActive(slider.active.index);if(slider.settings.controls)updateDirectionControls();if(slider.settings.mode=="fade"){if(slider.settings.adaptiveHeight&&slider.viewport.height()!=getViewportHeight()){slider.viewport.animate({height:getViewportHeight()},slider.settings.adaptiveHeightSpeed)}slider.children.filter(":visible").fadeOut(slider.settings.speed).css({zIndex:0});slider.children.eq(slider.active.index).css("zIndex",slider.settings.slideZIndex+1).fadeIn(slider.settings.speed,function(){$(this).css("zIndex",slider.settings.slideZIndex);updateAfterSlideTransition()})}else{if(slider.settings.adaptiveHeight&&slider.viewport.height()!=getViewportHeight()){slider.viewport.animate({height:getViewportHeight()},slider.settings.adaptiveHeightSpeed)}var moveBy=0;var position={left:0,top:0};if(!slider.settings.infiniteLoop&&slider.carousel&&slider.active.last){if(slider.settings.mode=="horizontal"){var lastChild=slider.children.eq(slider.children.length-1);position=lastChild.position();moveBy=slider.viewport.width()-lastChild.outerWidth()}else{var lastShowingIndex=slider.children.length-slider.settings.minSlides;position=slider.children.eq(lastShowingIndex).position()}}else if(slider.carousel&&slider.active.last&&direction=="prev"){var eq=slider.settings.moveSlides==1?slider.settings.maxSlides-getMoveBy():(getPagerQty()-1)*getMoveBy()-(slider.children.length-slider.settings.maxSlides);var lastChild=el.children(".bx-clone").eq(eq);position=lastChild.position()}else if(direction=="next"&&slider.active.index==0){position=el.find("> .bx-clone").eq(slider.settings.maxSlides).position();slider.active.last=false}else if(slideIndex>=0){var requestEl=slideIndex*getMoveBy();position=slider.children.eq(requestEl).position()}if("undefined"!==typeof position){var value=slider.settings.mode=="horizontal"?-(position.left-moveBy):-position.top;setPositionProperty(value,"slide",slider.settings.speed)}}};el.goToNextSlide=function(){if(!slider.settings.infiniteLoop&&slider.active.last)return;var pagerIndex=parseInt(slider.active.index)+1;el.goToSlide(pagerIndex,"next")};el.goToPrevSlide=function(){if(!slider.settings.infiniteLoop&&slider.active.index==0)return;var pagerIndex=parseInt(slider.active.index)-1;el.goToSlide(pagerIndex,"prev")};el.startAuto=function(preventControlUpdate){if(slider.interval)return;slider.interval=setInterval(function(){slider.settings.autoDirection=="next"?el.goToNextSlide():el.goToPrevSlide()},slider.settings.pause);if(slider.settings.autoControls&&preventControlUpdate!=true)updateAutoControls("stop")};el.stopAuto=function(preventControlUpdate){if(!slider.interval)return;clearInterval(slider.interval);slider.interval=null;if(slider.settings.autoControls&&preventControlUpdate!=true)updateAutoControls("start")};el.getCurrentSlide=function(){return slider.active.index};el.getCurrentSlideElement=function(){return slider.children.eq(slider.active.index)};el.getSlideCount=function(){return slider.children.length};el.redrawSlider=function(){slider.children.add(el.find(".bx-clone")).width(getSlideWidth());slider.viewport.css("height",getViewportHeight());if(!slider.settings.ticker)setSlidePosition();if(slider.active.last)slider.active.index=getPagerQty()-1;if(slider.active.index>=getPagerQty())slider.active.last=true;if(slider.settings.pager&&!slider.settings.pagerCustom){populatePager();updatePagerActive(slider.active.index)}};el.destroySlider=function(){if(!slider.initialized)return;slider.initialized=false;$(".bx-clone",this).remove();slider.children.each(function(){$(this).data("origStyle")!=undefined?$(this).attr("style",$(this).data("origStyle")):$(this).removeAttr("style")});$(this).data("origStyle")!=undefined?this.attr("style",$(this).data("origStyle")):$(this).removeAttr("style");$(this).unwrap().unwrap();if(slider.controls.el)slider.controls.el.remove();if(slider.controls.next)slider.controls.next.remove();if(slider.controls.prev)slider.controls.prev.remove();if(slider.pagerEl&&slider.settings.controls)slider.pagerEl.remove();$(".bx-caption",this).remove();if(slider.controls.autoEl)slider.controls.autoEl.remove();clearInterval(slider.interval);if(slider.settings.responsive)$(window).unbind("resize",resizeWindow)};el.reloadSlider=function(settings){if(settings!=undefined)options=settings;el.destroySlider();init()};init();return this}})(jQuery);
/* End */
(function($){$(document).ready(function(){$(".reviews-slider").bxSlider({speed:1e3,pager:false})})})(jQuery);

$(document).ready(function() {
  $('.fancybox-detail').fancybox();
  $('[data-fancybox-group="slider-sm"]').fancybox();
  $('[data-fancybox-group="gallery"]').fancybox();
  var icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792.033 792.033"><path d="M617.858,370.896L221.513,9.705c-13.006-12.94-34.099-12.94-47.105,0c-13.006,12.939-13.006,33.934,0,46.874     l372.447,339.438L174.441,735.454c-13.006,12.94-13.006,33.935,0,46.874s34.099,12.939,47.104,0l396.346-361.191     c6.932-6.898,9.904-16.043,9.441-25.087C627.763,386.972,624.792,377.828,617.858,370.896z"/></svg>'

  var owlOptions_1 = {
    loop: true,
    margin: 5,
    nav: true,
    navText: [icon, icon],
    dot: false,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    // lazyLoad : true,
    responsive: {
      768: {
        nav: true
      },
      0: {
        nav: true
      }
    }
  };

  var owlOptions_4 = {
    loop: false,
    margin: 20,
    nav: true,
    navText: [icon, icon],
    dot: false,
    items: 4,
    responsive: {
      1200: {
        items: 4
      },
      979: {
        items: 3
      },
      400: {
        items: 2,
        margin: 10,
      },
      0: {
        items: 1,
        margin: 10,
      }
    }
  };

  var owlOptions_3 = {
    loop: false,
    margin: 20,
    nav: true,
    navText: [icon, icon],
    dot: false,
    items: 3,
    responsive: {
      1200: {
        items: 3
      },
      600: {
        items: 2
      },
      400: {
        items: 1,
        margin: 10,
      },
      0: {
        items: 1,
        margin: 10,
      }
    }
  };

  var owlOptions_8 = {
    loop: false,
    margin: 30,
    nav: true,
    navText: [icon, icon],
    dot: false,
    items: 8,
    responsive: {
      1200: {
        items: 8
      },
      979: {
        items: 6
      },
      600: {
        items: 4
      },
      400: {
        items: 3,
        margin: 20,
      },
      0: {
        items: 2
      }
    }
  };

  $('.js-slider-sm').owlCarousel(owlOptions_4);

  $('.js-detail-slider').owlCarousel(owlOptions_3);

  $('.js-main-slider').on('initialize.owl.carousel', function(event){
    $('.main-slider__img-sm').addClass('invisible');
    $('.main-slider__button-block').addClass('invisible');
  });

  $('.js-main-slider').owlCarousel(owlOptions_1);
  $('.js-partners-slider').owlCarousel(owlOptions_8);

  $(".first").one("load", function() {
    $('.main-slider__img-sm').removeClass('invisible');
    $('.main-slider__button-block').removeClass('invisible');
  }).each(function() {
    if(this.complete) {
        $(this).trigger('load');
    }
  });


  $('input[name="tel"]').inputmask({
    "mask": "+7 (999) 999-9999"
  });

// валидация форм
function checkInput(el) {
  var $this = el;
  var value = $this.val();
  var inputType = $this.attr('data-type');

  if (inputType === 'text') {
    if (!value.match(/^[а-яА-ЯёЁa-zA-Z0-9]*$/)) {
      $this.parent().addClass('has-error');
    } else {
      $this.parent().removeClass('has-error');
    }
  }

  // phone
  if (inputType === 'tel') {
    var tel = value.replace(/[^0-9]/g, '');
    if (tel.length !== 11) {
      $this.parent().addClass('has-error');
    } else {
      $this.parent().removeClass('has-error');
    }
  }

  // E-mail
  if (inputType === 'email') {
    if (!value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      $this.parent().addClass('has-error');
    } else {
      $this.parent().removeClass('has-error');
    }
  }

  // checkbox
  if (inputType === 'checkbox' && !$this.prop('checked')) {
    $this.parent().addClass('has-error');
  }

  // Количество

  if (inputType === 'amount' && value < 1) {
    $this.parent().addClass('has-error');
  }

  //проверка на пустое значение
  if (el.prop('required') && value === '') {
    console.log($this.parent());
    $this.parent().addClass('has-error');
  }
}

$(document).on('input', '.modal-body input , .feedback input', function() {
  $(this).parent().removeClass('has-error');
  checkInput($(this));
});

//form
function serializeFormJSON() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name]) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

$.fn.serializeFormJSON = serializeFormJSON; $(document).on('click', '.js-submit', function(e) {
  e.preventDefault();
  var $this = $(this);
  var form = $this.parents('form');
  var url = form.attr('action');
  var input = form.find('input');
  var textarea = form.find('textarea');

  input.each(function() {
    checkInput($(this));
  });
  textarea.each(function() {
    checkInput($(this));
  });

  if (!form.find('.has-error').length) {
    $.ajax({
      type: 'POST',
      url: ''+url+'?_format=json',
      data: JSON.stringify(form.serializeFormJSON()),
      contentType: 'application/json'
    });
    $('.modal').modal('hide');

    if (form.hasClass('feedback')) {
      form.siblings('.alert').removeClass('hidden')
    }
  }
});

$('.js-truncate').on('click', function (e) {
  e.preventDefault();
  var content = $(this).siblings('.trancate-block');

  if (content.hasClass('trancate')) {
    content.removeClass('trancate');
     $(this).find('a').text('Свернуть');

  } else {
    content.addClass('trancate');
    $(this).find('a').text('Показать все');

    var top = content.parent().siblings('h2').offset().top;
    console.log(top);
    $('body,html').animate({
      scrollTop: top
    }, 1300);
  }
});

$('.modal-link a').on('click', function (){
  // $(this).
  $('.modal').modal('hide');
});
});
