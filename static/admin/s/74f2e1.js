try{document.documentElement.classList.add('jetpack-lazy-images-js')}catch(e){console.log(e)}try{(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KM7BGHM');}catch(e){console.log(e)}try{(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;})(window,document.documentElement,'async-hide','dataLayer',4000,{'GTM-WTDSFVM':true})}catch(e){console.log(e)}try{(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-122165531-2','auto');ga('require','GTM-WTDSFVM');ga('send','pageview');}catch(e){console.log(e)}try{ress_js("https://www.googletagmanager.com/gtag/js#id=UA-122165531-2");}catch(e){console.log(e)}try{window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','UA-122165531-2')}catch(e){console.log(e)}try{ress_js("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");}catch(e){console.log(e)}try{(adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-5033636081597857",enable_page_level_ads:true})}catch(e){console.log(e)}try{ress_js("https://daronobrien.me/wp-content/plugins/jetpack/_inc/build/photon/photon.min.js");}catch(e){console.log(e)}try{ress_js("https://daronobrien.me/wp-content/plugins/contact-form-7/includes/js/scripts.js");}catch(e){console.log(e)}try{(function(root,ns,factory){"use strict";if(typeof(module)!=='undefined'&&module.exports){module.exports=factory(ns,root);}else if(typeof(define)==='function'&&define.amd){define("factory",function(){return factory(ns,root);});}else{root[ns]=factory(ns,root);}}(window,'detectZoom',function(){var devicePixelRatio=function(){return window.devicePixelRatio||1;};var fallback=function(){return{zoom:1,devicePxPerCssPx:1};};var ie8=function(){var zoom=Math.round((screen.deviceXDPI/screen.logicalXDPI)*100)/100;return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};};var ie10=function(){var zoom=Math.round((document.documentElement.offsetHeight/window.innerHeight)*100)/100;return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};};var webkitMobile=function(){var deviceWidth=(Math.abs(window.orientation)==90)?screen.height:screen.width;var zoom=deviceWidth/window.innerWidth;return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};};var webkit=function(){var important=function(str){return str.replace(/;/g," !important;");};var div=document.createElement('div');div.innerHTML="1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0";div.setAttribute('style',important('font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;'));var container=document.createElement('div');container.setAttribute('style',important('width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;'));container.appendChild(div);document.body.appendChild(container);var zoom=1000/div.clientHeight;zoom=Math.round(zoom*100)/100;document.body.removeChild(container);return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};};var firefox4=function(){var zoom=mediaQueryBinarySearch('min--moz-device-pixel-ratio','',0,10,20,0.0001);zoom=Math.round(zoom*100)/100;return{zoom:zoom,devicePxPerCssPx:zoom};};var firefox18=function(){return{zoom:firefox4().zoom,devicePxPerCssPx:devicePixelRatio()};};var opera11=function(){var zoom=window.top.outerWidth/window.top.innerWidth;zoom=Math.round(zoom*100)/100;return{zoom:zoom,devicePxPerCssPx:zoom*devicePixelRatio()};};var mediaQueryBinarySearch=function(property,unit,a,b,maxIter,epsilon){var matchMedia;var head,style,div;if(window.matchMedia){matchMedia=window.matchMedia;}else{head=document.getElementsByTagName('head')[0];style=document.createElement('style');head.appendChild(style);div=document.createElement('div');div.className='mediaQueryBinarySearch';div.style.display='none';document.body.appendChild(div);matchMedia=function(query){style.sheet.insertRule('@media '+query+'{.mediaQueryBinarySearch '+'{text-decoration: underline} }',0);var matched=getComputedStyle(div,null).textDecoration=='underline';style.sheet.deleteRule(0);return{matches:matched};};}
var ratio=binarySearch(a,b,maxIter);if(div){head.removeChild(style);document.body.removeChild(div);}
return ratio;function binarySearch(a,b,maxIter){var mid=(a+b)/2;if(maxIter<=0||b-a<epsilon){return mid;}
var query="("+property+":"+mid+unit+")";if(matchMedia(query).matches){return binarySearch(mid,b,maxIter-1);}else{return binarySearch(a,mid,maxIter-1);}}};var detectFunction=(function(){var func=fallback;if(!isNaN(screen.logicalXDPI)&&!isNaN(screen.systemXDPI)){func=ie8;}
else if(window.navigator.msMaxTouchPoints){func=ie10;}
else if('orientation'in window&&typeof document.body.style.webkitMarquee==='string'){func=webkitMobile;}
else if(typeof document.body.style.webkitMarquee==='string'){func=webkit;}
else if(navigator.userAgent.indexOf('Opera')>=0){func=opera11;}
else if(window.devicePixelRatio){func=firefox18;}
else if(firefox4().zoom>0.001){func=firefox4;}
return func;}());return({zoom:function(){return detectFunction().zoom;},device:function(){return detectFunction().devicePxPerCssPx;}});}));var wpcom_img_zoomer={zoomed:false,timer:null,interval:1000,imgNeedsSizeAtts:function(img){if(img.getAttribute('width')!==null||img.getAttribute('height')!==null)
return false;if(img.width<img.naturalWidth||img.height<img.naturalHeight)
return false;return true;},updateResizeUrl:function(url,width,height){var url_resize=url.match(/resize=([0-9%2C,]+)/);if(url_resize===null||!url_resize[1]){return url;}
var url_sizes=url_resize[1].split(',');var new_resize=null;if(url_sizes[0]!==width){new_resize=width;}
if(url_sizes[1]!==height){if(new_resize!==null){new_resize+='%2C';}
new_resize+=height;}
if(new_resize!==url_resize[1]){new_resize='resize='+new_resize;url=url.replace(url_resize[0],new_resize);}
return url;},init:function(){var t=this;try{t.zoomImages();t.timer=setInterval(function(){t.zoomImages();},t.interval);}
catch(e){}},stop:function(){if(this.timer)
clearInterval(this.timer);},getScale:function(){var scale=detectZoom.device();if(scale>3){scale=Math.ceil(scale*2)/2;}
return scale;},shouldZoom:function(scale){var t=this;if("innerWidth"in window&&!window.innerWidth)
return false;if(scale==1.0&&t.zoomed==false)
return false;return true;},zoomImages:function(){var t=this;var scale=t.getScale();if(!t.shouldZoom(scale)){return;}
t.zoomed=true;var imgs=document.getElementsByTagName("img");for(var i=0;i<imgs.length;i++){if("complete"in imgs[i]&&!imgs[i].complete)
continue;if(imgs[i].hasAttribute('srcset')&&imgs[i].hasAttribute('sizes')&&('sizes'in imgs[i])){continue;}
var imgScale=imgs[i].getAttribute("scale");if(imgScale==scale||imgScale=="0")
continue;var scaleFail=imgs[i].getAttribute("scale-fail");if(scaleFail&&scaleFail<=scale)
continue;if(!(imgs[i].width&&imgs[i].height))
continue;if(!imgScale&&imgs[i].getAttribute("data-lazy-src")&&(imgs[i].getAttribute("data-lazy-src")!==imgs[i].getAttribute("src")))
continue;if(t.scaleImage(imgs[i],scale)){imgs[i].setAttribute("scale",scale);}
else{imgs[i].setAttribute("scale","0");}}},scaleImage:function(img,scale){var t=this;var newSrc=img.src;if(img.parentNode.className.match(/slideshow-slide/))
return false;if(img.src.match(/^https?:\/\/([^\/]*\.)?gravatar\.com\/.+[?&](s|size)=/)){newSrc=img.src.replace(/([?&](s|size)=)(\d+)/,function($0,$1,$2,$3){var originalAtt="originals",originalSize=img.getAttribute(originalAtt);if(originalSize===null){originalSize=$3;img.setAttribute(originalAtt,originalSize);if(t.imgNeedsSizeAtts(img)){img.width=img.width;img.height=img.height;}}
var size=img.clientWidth;var targetSize=Math.ceil(img.clientWidth*scale);targetSize=Math.max(targetSize,originalSize);targetSize=Math.min(targetSize,512);return $1+targetSize;});}
else if(img.src.match(/^https?:\/\/([^\/]+)\.files\.wordpress\.com\/.+[?&][wh]=/)){if(img.src.match(/[?&]crop/))
return false;var changedAttrs={};var matches=img.src.match(/([?&]([wh])=)(\d+)/g);for(var i=0;i<matches.length;i++){var lr=matches[i].split('=');var thisAttr=lr[0].replace(/[?&]/g,'');var thisVal=lr[1];var originalAtt='original'+thisAttr,originalSize=img.getAttribute(originalAtt);if(originalSize===null){originalSize=thisVal;img.setAttribute(originalAtt,originalSize);if(t.imgNeedsSizeAtts(img)){img.width=img.width;img.height=img.height;}}
var size=thisAttr=='w'?img.clientWidth:img.clientHeight;var naturalSize=(thisAttr=='w'?img.naturalWidth:img.naturalHeight);var targetSize=Math.ceil(size*scale);targetSize=Math.max(targetSize,originalSize);if(scale>img.getAttribute("scale")&&targetSize<=naturalSize)
targetSize=thisVal;if(naturalSize<thisVal)
targetSize=thisVal;if(targetSize!=thisVal)
changedAttrs[thisAttr]=targetSize;}
var w=changedAttrs.w||false;var h=changedAttrs.h||false;if(w){newSrc=img.src.replace(/([?&])w=\d+/g,function($0,$1){return $1+'w='+w;});}
if(h){newSrc=newSrc.replace(/([?&])h=\d+/g,function($0,$1){return $1+'h='+h;});}}
else if(img.src.match(/^https?:\/\/([^\/]+\.)*(wordpress|wp)\.com\/mshots\/.+[?&]w=\d+/)){newSrc=img.src.replace(/([?&]w=)(\d+)/,function($0,$1,$2){var originalAtt='originalw',originalSize=img.getAttribute(originalAtt);if(originalSize===null){originalSize=$2;img.setAttribute(originalAtt,originalSize);if(t.imgNeedsSizeAtts(img)){img.width=img.width;img.height=img.height;}}
var size=img.clientWidth;var targetSize=Math.ceil(size*scale);targetSize=Math.max(targetSize,originalSize);if(scale>img.getAttribute("scale")&&targetSize<=img.naturalWidth)
targetSize=$2;if($2!=targetSize)
return $1+targetSize;return $0;});newSrc=newSrc.replace(/([?&]h=)(\d+)/,function($0,$1,$2){if(newSrc==img.src){return $0;}
var originalAtt='originalh',originalSize=img.getAttribute(originalAtt);if(originalSize===null){originalSize=$2;img.setAttribute(originalAtt,originalSize);}
var size=img.clientHeight;var targetSize=Math.ceil(size*scale);targetSize=Math.max(targetSize,originalSize);if(scale>img.getAttribute("scale")&&targetSize<=img.naturalHeight)
targetSize=$2;if($2!=targetSize)
return $1+targetSize;return $0;});}
else if(img.src.match(/^https?:\/\/([^\/.]+\.)*(wp|wordpress)\.com\/imgpress\?(.+)/)){var imgpressSafeFunctions=["zoom","url","h","w","fit","filter","brightness","contrast","colorize","smooth","unsharpmask"];var qs=RegExp.$3.split('&');for(var q in qs){q=qs[q].split('=')[0];if(imgpressSafeFunctions.indexOf(q)==-1){return false;}}
img.width=img.width;img.height=img.height;if(scale==1)
newSrc=img.src.replace(/\?(zoom=[^&]+&)?/,'?');else
newSrc=img.src.replace(/\?(zoom=[^&]+&)?/,'?zoom='+scale+'&');}
else if(img.src.match(/^https?:\/\/([^\/.]+\.)*(wp|wordpress)\.com\/latex\.php\?(latex|zoom)=(.+)/)||img.src.match(/^https?:\/\/i[\d]{1}\.wp\.com\/(.+)/)){if(navigator.userAgent.indexOf('Firefox')>-1){return;}
img.width=img.width;img.height=img.height;if(scale==1)
newSrc=img.src.replace(/\?(zoom=[^&]+&)?/,'?');else
newSrc=img.src.replace(/\?(zoom=[^&]+&)?/,'?zoom='+scale+'&');if(!img.srcset&&img.src.match(/resize/)){newSrc=t.updateResizeUrl(newSrc,img.width,img.height);img.setAttribute('srcset',newSrc);}}
else if(img.src.match(/^https?:\/\/[^\/]+\/.*[-@]([12])x\.(gif|jpeg|jpg|png)(\?|$)/)){img.width=img.width;img.height=img.height;var currentSize=RegExp.$1,newSize=currentSize;if(scale<=1)
newSize=1;else
newSize=2;if(currentSize!=newSize)
newSrc=img.src.replace(/([-@])[12]x\.(gif|jpeg|jpg|png)(\?|$)/,'$1'+newSize+'x.$2$3');}
else{return false;}
if(newSrc!=img.src){var prevSrc,origSrc=img.getAttribute("src-orig");if(!origSrc){origSrc=img.src;img.setAttribute("src-orig",origSrc);}
prevSrc=img.src;img.onerror=function(){img.src=prevSrc;if(img.getAttribute("scale-fail")<scale)
img.setAttribute("scale-fail",scale);img.onerror=null;};img.src=newSrc;}
return true;}};wpcom_img_zoomer.init()}catch(e){console.log(e)}try{ress_js("https://daronobrien.me/wp-content/plugins/ricg-responsive-images/js/picturefill.min.js");}catch(e){console.log(e)}try{ress_js("https://daronobrien.me/wp-content/themes/hired/js/navigation.js");}catch(e){console.log(e)}try{ress_js("https://daronobrien.me/wp-content/uploads/hummingbird-assets/27490ad0e8a01b7b41a04d87b5459bcd-1.js");}catch(e){console.log(e)}try{ress_js("https://daronobrien.me/wp-content/uploads/hummingbird-assets/3715aff1a375a8c82396496b5c8b0861-1.js");}catch(e){console.log(e)}try{ress_js("https://daronobrien.me/wp-content/uploads/hummingbird-assets/6f89a285a171da5cebd4a39c5dda2ce1-1.js");}catch(e){console.log(e)}try{ress_js("https://daronobrien.me/wp-content/plugins/jetpack/_inc/build/lazy-images/js/lazy-images.min.js");}catch(e){console.log(e)}try{ress_js("https://daronobrien.me/wp-includes/js/wp-embed.min.js");}catch(e){console.log(e)}try{ress_js("https://daronobrien.me/wp-content/plugins/jetpack/_inc/build/widgets/milestone/milestone.min.js");}catch(e){console.log(e)}try{ress_js("https://stats.wp.com/e-201830.js");}catch(e){console.log(e)}try{_stq=window._stq||[];_stq.push(['view',{v:'ext',j:'1:6.3.2',blog:'149166548',post:'0',tz:'-7',srv:'daronobrien.me'}]);_stq.push(['clickTrackerInit','149166548','0'])}catch(e){console.log(e)}try{
/*! Lazy Load XT v2.0.0 2017-09-27
 * http://ressio.github.io/lazy-load-xt
 * (C) 2013-2018 RESS.io
 * Licensed under MIT */
!function(e,t,n){var o="lazyLoadXT",r=o+"_lazied",a="load error",i=t.documentElement||t.body,l={autoInit:!0,preload:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:e.onscroll===n||!!e.operamini||!i.getBoundingClientRect,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"lazyloadall",oninit:{removeClass:"lazy"},onshow:{addClass:"lazy-hidden"},onload:{removeClass:"lazy-hidden",addClass:"lazy-loaded"},onerror:{removeClass:"lazy-hidden"},checkDuplicates:!0},c={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},s=[],d=0,f=0,u=0;function g(e){for(var t,n,o=1;o<arguments.length;o++)for(n in t=arguments[o])e[n]=t[n];return e}function v(e,t){return e[t]===n?l[t]:e[t]}function h(){var t=e.pageYOffset;return t===n?i.scrollTop:t}function A(e){return"function"==typeof e}function p(e){return"string"==typeof e}function m(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1}function E(e,n,o){e=p(e)?t.querySelectorAll(e):[e],n=n.split(" ");for(var r,a=0;a<e.length;a++)for(r=0;r<n.length;r++)e[a].addEventListener(n[r],o,{capture:!0,passive:!0})}function y(e,t,n){t=t.split(" ");for(var o=0;o<t.length;o++)e.removeEventListener(t[o],n)}function C(e,t,n){if(t){var o,r=0,a=" "+e.className.replace(/[\t\r\n\f]/g," ")+" ",i=a;for(t=t.match(/\S+/g)||[];r<t.length;r++)o=t[r]+" ",n?i=i.replace(" "+o," "):i.indexOf(" "+o)<0&&(i+=o);a!==i&&(e.className=i.slice(1,-1))}}function z(e,n){var o=l["on"+e];o&&(A(o)?o.call(n):(C(n,o.addClass),C(n,o.removeClass,!0))),(o=t.createEvent("Event")).initEvent("lazy"+e,!0,!0),n.dispatchEvent(o),T()}function b(e){var t=e.currentTarget;u--,l.preload&&0===u&&L(1),y(t,a,b),z(e.type,t)}function L(t){if(s.length){t=t||l.forceLoad,d=1/0;var n,c,f=h(),g=e.innerHeight||i.clientHeight,v=e.innerWidth||i.clientWidth;for(n=0,c=s.length;n<c;n++){var p,y=s[n],C=y[o],L=!1,I=t<0||t>u||y[r]<0;if(m(i,y)){if(I||!C.visibleOnly||y.offsetWidth||y.offsetHeight){if(!I){var T=y.getBoundingClientRect(),w=C.edgeX,B=C.edgeY;I=(p=T.top+f-B-g)<=f&&T.bottom>-B&&T.left<=v+w&&T.right>-w}if(I){u++,E(y,a,b),z("show",y);var O=C.srcAttr,k=A(O)?O(y):y.getAttribute(O);k&&(y.src=k),L=!0}else p<d&&(d=p)}}else L=!0;L&&(y[r]=0,s.splice(n--,1),c--)}c||z("complete",i)}}function I(){f>1?(f=1,L(),setTimeout(I,l.throttle)):f=0}function T(t){s.length&&(t&&"scroll"===t.type&&t.currentTarget===e&&d>=h()||(f||setTimeout(I,0),f=2))}function w(e){var n,a,i,l=v(e=p(e)?{selector:e}:e||{},"blankImage"),d=v(e,"checkDuplicates"),f=v(e,"scrollContainer"),u=v(e,"show"),h={},A=v(e,"selector"),m=p(A)?t.querySelectorAll(A):[A];for(n in f&&E(f,"scroll",T),c)h[n]=v(e,n);for(n=0;n<m.length;n++)a=m[n],i=d&&a[r],a[r]=u?-1:1,i||(l&&"IMG"===a.tagName&&!a.src&&(a.src=l),a[o]=g({},h),z("init",a),s.push(a));T()}function B(){w()}function O(){L(-1)}function k(){z("start",e),E(e,l.updateEvent,T),E(e,l.forceEvent,O),E(t,l.updateEvent,T),l.autoInit&&(E(e,l.loadEvent,B),B())}g(l,c,e[o]),e[o]=w,l=g(e[o],l),g(e[o],{extend:g,isFunction:A,onEvent:E,offEvent:y,triggerEvent:z,check:T}),"loading"!==t.readyState?setTimeout(k,0):t.addEventListener("DOMContentLoaded",k)}(window,document);}catch(e){console.log(e)}try{
/*! Lazy Load XT v2.0.0 2017-09-27
 * http://ressio.github.io/lazy-load-xt
 * (C) 2013-2018 RESS.io
 * Licensed under MIT */
!function(){var t=window.lazyLoadXT;t.selector+=",video,iframe[data-src]",t.videoPoster="data-poster",t.onEvent(document,"lazyshow",function(e){var n=e.target;if("VIDEO"===n.tagName){var r=t.srcAttr,a=t.isFunction(r),o=!1,i=n.getAttribute(t.videoPoster);i&&n.setAttribute("poster",i);for(var s=n.childNodes,l=0;l<s.length;l++){var c=s[l],u=c.tagName;if("SOURCE"===u||"TRACK"===u){var d=a?r(c):c.getAttribute(r);d&&(c.setAttribute("src",d),o=!0)}}o&&n.load()}})}()}catch(e){console.log(e)}try{
/*! Lazy Load XT v2.0.0 2017-11-03
 * http://ressio.github.io/lazy-load-xt
 * (C) 2013-2018 RESS.io
 * Licensed under MIT */
!function(t,e,r){function s(t,e){for(var r=[],s=0;s<t.length;s++)e(t[s])&&r.push(t[s]);return r}function n(t,e){for(var r,s=[],n=0;n<t.length;n++)null!==(r=e(t[n]))&&s.push(r);return s}function i(t,e){return Math[e].apply(null,n(t,function(t){return t[d]}))}function c(t){return t[d]>=b[d]||t[d]===l}function a(t){return t[d]===l}function u(t){return t.replace(/^\s+|\s+$/g,"").replace(/(\s+[\d\.]+[wx]),\s*|\s*,\s+/g,"$1 @,@ ").split(" @,@ ")}function o(e){var r=e.getAttribute(f.srcsetAttr);if(!r)return!1;var o=n(u(r),function(t){return{url:w.exec(t)[1],w:parseFloat((g.exec(t)||v)[1]),x:parseFloat((h.exec(t)||p)[1])}});if(!o.length)return!1;if(b={w:t.innerWidth||x.clientWidth,x:t.devicePixelRatio||1},"auto"===e.getAttribute(f.srcsetSizesAttr)){var A=e.width;e.width=b.w,b.w=e.scrollWidth,e.width=A}b.w*=b.x;var m,E;for(m in b)d=m,l=i(o,"max"),o=s(o,c);for(m in b)d=m,l=i(o,"min"),o=s(o,a);return E=o[0].url,f.srcsetExtended&&(E=(e.getAttribute(f.srcsetBaseAttr)||"")+E+(e.getAttribute(f.srcsetExtAttr)||"")),E}var d,l,f=t.lazyLoadXT,x=e.documentElement,A="srcset"in new Image,w=/^\s*(\S+)/,g=/\S\s+(\d+)w/,h=/\S\s+([\d\.]+)x/,v=[0,1/0],p=[0,1],m={srcsetAttr:"data-srcset",srcsetExtended:!0,srcsetBaseAttr:"data-srcset-base",srcsetExtAttr:"data-srcset-ext",srcsetSizesAttr:"data-srcset-size"},b={w:0,x:0};for(d in m)f[d]===r&&(f[d]=m[d]);f.selector+=",img["+f.srcsetAttr+"]",f.onEvent(e,"lazyshow",function(t){var e=t.target;if("IMG"===e.tagName){var r=e.getAttribute(f.srcsetAttr);r&&(A&&!f.srcsetExtended?e.setAttribute("srcset",r):e.lazyLoadXT.srcAttr=o)}})}(window,document)}catch(e){console.log(e)}