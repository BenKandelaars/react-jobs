'use strict';var h,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ca=function(){ca=function(){};ba.Symbol||(ba.Symbol=da)},fa=0,da=function(a){return"jscomp_symbol_"+(a||"")+fa++},ha=function(){ca();var a=ba.Symbol.iterator;a||(a=ba.Symbol.iterator=ba.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&
aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ga(this)}});ha=function(){}},ga=function(a){var b=0;return ia(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},ia=function(a){ha();a={next:a};a[ba.Symbol.iterator]=function(){return this};return a},ja=function(a){ha();var b=a[Symbol.iterator];return b?b.call(a):ga(a)},ka=function(a,b){function c(){}c.prototype=b.prototype;a.W=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=
Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]},la=function(a){if(!(a instanceof Array)){a=ja(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a},ma=ma||{},na=this,k=function(a){return void 0!==a},oa=function(a,b){a=a.split(".");b=b||na;for(var c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b},pa=function(){},qa=function(a){a.df=void 0;a.S=function(){return a.df?a.df:a.df=new a}},ra=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof
Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==
typeof a.call)return"object";return b},sa=function(a){return null===a},ta=function(a){return"array"==ra(a)},ua=function(a){var b=ra(a);return"array"==b||"object"==b&&"number"==typeof a.length},va=function(a){return"string"==typeof a},l=function(a){return"number"==typeof a},xa=function(a){return"function"==ra(a)},ya=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},Aa=function(a){null!==a&&"removeAttribute"in a&&a.removeAttribute(za);try{delete a[za]}catch(b){}},za="closure_uid_"+
(1E9*Math.random()>>>0),Ba=0,Ca=function(a,b,c){return a.call.apply(a.bind,arguments)},Da=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},n=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n=Ca:n=Da;return n.apply(null,arguments)},
Ea=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},Fa=Date.now||function(){return+new Date},p=function(a,b){a=a.split(".");var c=na;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&k(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}},r=function(a,b){function c(){}c.prototype=b.prototype;a.W=b.prototype;a.prototype=new c;a.prototype.constructor=
a;a.Tq=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var chrome=chrome||window.chrome||{};chrome.cast=chrome.cast||{};chrome.cast.media=chrome.cast.media||{};var Ga=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ga);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};r(Ga,Error);Ga.prototype.name="CustomError";var Ha;var Ia=function(a,b){return 0==a.lastIndexOf(b,0)},Ja=function(a,b){return a.toLowerCase()==b.toLowerCase()},Ka=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},La=function(a){return/^[\s\xa0]*$/.test(a)},Ma=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Na=/&/g,Oa=/</g,Pa=/>/g,Qa=/"/g,Ra=/'/g,Sa=/\x00/g,Ta=/[\x00&<>"']/,Ua=function(a){return null==
a?"":String(a)},Va=function(a){return Array.prototype.join.call(arguments,"")},Wa=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Fa()).toString(36)},Ya=function(a,b){var c=0;a=Ma(String(a)).split(".");b=Ma(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;
c=Xa(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Xa(0==f[2].length,0==g[2].length)||Xa(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c},Xa=function(a,b){return a<b?-1:a>b?1:0},Za=function(a,b,c){a=a.split(b);for(var d=[];0<c&&a.length;)d.push(a.shift()),c--;a.length&&d.push(a.join(b));return d};var $a=function(a,b){b.unshift(a);Ga.call(this,Ka.apply(null,b));b.shift()};r($a,Ga);$a.prototype.name="AssertionError";var ab=function(a,b){throw new $a("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var bb=function(a){return a[a.length-1]},cb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(va(a))return va(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},t=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=va(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=function(a,b){for(var c=va(a)?
a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},eb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=va(a)?a.split(""):a,m=0;m<d;m++)if(m in g){var q=g[m];b.call(c,q,m,a)&&(e[f++]=q)}return e},fb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=va(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},gb=Array.prototype.reduce?
function(a,b,c,d){d&&(b=n(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;t(a,function(c,g){e=b.call(d,e,c,g,a)});return e},hb=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=va(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},ib=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=va(a)?a.split(""):a,f=0;f<d;f++)if(f in
e&&!b.call(c,e[f],f,a))return!1;return!0},kb=function(a,b,c){b=jb(a,b,c);return 0>b?null:va(a)?a.charAt(b):a[b]},jb=function(a,b,c){for(var d=a.length,e=va(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1},lb=function(a,b,c){a:{for(var d=va(a)?a.split(""):a,e=a.length-1;0<=e;e--)if(e in d&&b.call(c,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:va(a)?a.charAt(b):a[b]},mb=function(a,b){return 0<=cb(a,b)},nb=function(a){return 0==a.length},ob=function(a){if(!ta(a))for(var b=
a.length-1;0<=b;b--)delete a[b];a.length=0},pb=function(a,b){mb(a,b)||a.push(b)},rb=function(a,b,c){var d;2==arguments.length||0>(d=cb(a,c))?a.push(b):qb(a,d,0,b)},tb=function(a,b){b=cb(a,b);var c;(c=0<=b)&&sb(a,b);return c},sb=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length},ub=function(a,b,c){b=jb(a,b,c);return 0<=b?(sb(a,b),!0):!1},vb=function(a,b){var c=0;db(a,function(d,e){b.call(void 0,d,e,a)&&sb(a,e)&&c++})},wb=function(a){return Array.prototype.concat.apply([],arguments)},
xb=function(a){return Array.prototype.concat.apply([],arguments)},u=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},yb=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ua(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}},qb=function(a,b,c,d){Array.prototype.splice.apply(a,zb(arguments,1))},zb=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,
b,c)},Ab=function(a,b){b=b||a;for(var c={},d=0,e=0;e<a.length;){var f=a[e++],g;g=f;g=ya(g)?"o"+(g[za]||(g[za]=++Ba)):(typeof g).charAt(0)+g;Object.prototype.hasOwnProperty.call(c,g)||(c[g]=!0,b[d++]=f)}b.length=d},Cb=function(a,b){a.sort(b||Bb)},Db=function(a,b){var c=Bb;Cb(a,function(a,e){return c(b(a),b(e))})},Eb=function(a){Db(a,function(a){return a.t})},Gb=function(a,b,c){if(!ua(a)||!ua(b)||a.length!=b.length)return!1;var d=a.length;c=c||Fb;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0},
Bb=function(a,b){return a>b?1:a<b?-1:0},Fb=function(a,b){return a===b},Hb=function(a,b,c){var d={};t(a,function(e,f){d[b.call(c,e,f,a)]=e});return d};var Ib;a:{var Jb=na.navigator;if(Jb){var Kb=Jb.userAgent;if(Kb){Ib=Kb;break a}}Ib=""}var Lb=function(a){return-1!=Ib.indexOf(a)};var Mb=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)},Nb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1},Ob=function(a){var b=0,c;for(c in a)b++;return b},Pb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Qb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Rb=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1},Sb=function(a,b,c){a:{for(var d in a)if(b.call(c,a[d],d,a)){b=d;break a}b=void 0}return b&&a[b]},Tb=function(a){for(var b in a)return!1;
return!0},Ub=function(a){for(var b in a)delete a[b]},Wb=function(a,b){var c={wa:Vb(),Bg:!1};return b in a?a[b]:a[b]=c},Xb=function(a){var b={},c;for(c in a)b[c]=a[c];return b},Yb=function(a){var b=ra(a);if("object"==b||"array"==b){if(xa(a.clone))return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=Yb(a[c]);return b}return a},Zb=function(a){var b={},c;for(c in a)b[a[c]]=c;return b},$b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),ac=
function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<$b.length;f++)c=$b[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var bc=function(){return(Lb("Chrome")||Lb("CriOS"))&&!Lb("Edge")};var cc=function(){return Lb("iPhone")&&!Lb("iPod")&&!Lb("iPad")};var dc=function(a){dc[" "](a);return a};dc[" "]=pa;var ec=function(a,b){try{return dc(a[b]),!0}catch(c){}return!1},gc=function(a,b){var c=fc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var hc=Lb("Opera"),ic=Lb("Trident")||Lb("MSIE"),jc=Lb("Edge"),kc=Lb("Gecko")&&!(-1!=Ib.toLowerCase().indexOf("webkit")&&!Lb("Edge"))&&!(Lb("Trident")||Lb("MSIE"))&&!Lb("Edge"),lc=-1!=Ib.toLowerCase().indexOf("webkit")&&!Lb("Edge"),mc=lc&&Lb("Mobile"),nc=na.navigator||null,oc=nc&&nc.platform||"",pc=Lb("Macintosh"),qc=Lb("Windows"),rc=Lb("Linux")||Lb("CrOS"),sc=Lb("Android"),tc=cc(),uc=Lb("iPad"),vc=Lb("iPod"),wc=function(){var a=na.document;return a?a.documentMode:void 0},xc;
a:{var yc="",zc=function(){var a=Ib;if(kc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(jc)return/Edge\/([\d\.]+)/.exec(a);if(ic)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(lc)return/WebKit\/(\S+)/.exec(a);if(hc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();zc&&(yc=zc?zc[1]:"");if(ic){var Ac=wc();if(null!=Ac&&Ac>parseFloat(yc)){xc=String(Ac);break a}}xc=yc}var Bc=xc,fc={},Cc=function(a){return gc(a,function(){return 0<=Ya(Bc,a)})},Dc;var Ec=na.document;
Dc=Ec&&ic?wc()||("CSS1Compat"==Ec.compatMode?parseInt(Bc,10):5):void 0;var Fc=function(){return Promise.reject(Error("Not implemented"))};var Gc=function(a){this.a=a},v=function(a){var b=Hc.get(a);b||(b=new Gc(a),Hc.set(a,b));return b},Kc=function(a){a.level>=Ic&&Jc.forEach(function(b){return b(a)})};Gc.prototype.log=function(a,b,c){if(!(a<Ic)){"function"==typeof b&&(b=b());b=b.replace(Lc,"[Redacted URL]");b=b.replace(Mc,"[Redacted domain/email]");var d={G:this.a,level:a,time:Date.now(),message:b,Hb:c};Jc.forEach(function(a){return a(d)})}};Gc.prototype.error=function(a,b){this.log(3,a,b)};
var w=function(a,b,c){a.log(2,b,c)},x=function(a,b){a.log(1,b,void 0)},z=function(a,b,c){a.log(0,b,c)},Oc=function(a){a=Nc.indexOf(a);return-1==a?0:a},Pc=function(a){return 600>=a?0:850>=a?1:950>=a?2:3},Jc=[],Hc=new Map,Nc=["FINE","INFO","WARNING","SEVERE"],Mc=/(([\w.+-]+@)|((www|m|mail|ftp)[.]))[\w.-]+[.][\w-]{2,4}/gi,Lc=/(data:|https?:\/\/)\S+/gi,Ic=1;var Qc=function(){var a=this;this.a=new Promise(function(b,c){a.f=b;a.b=c})};Qc.prototype.resolve=function(a){this.f(a)};var Rc=function(a,b){a.b(b)};var Sc=function(a,b,c){this.l=c;this.f=a;this.g=b;this.b=0;this.a=null};Sc.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.f();return a};var Tc=function(a,b){a.g(b);a.b<a.l&&(a.b++,b.next=a.a,a.a=b)};var Uc=function(a){return function(){return a}},Vc=Uc(!1),Wc=Uc(!0),Xc=function(a){return a},Yc=function(a){return function(){throw Error(a);}};var Zc=function(a){na.setTimeout(function(){throw a;},0)},$c,ad=function(){var a=na.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!Lb("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
a=n(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!Lb("Trident")&&!Lb("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(k(c.next)){c=c.next;var a=c.Se;c.Se=null;a()}};return function(a){d.next={Se:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){na.setTimeout(a,0)}};var bd=function(){this.b=this.a=null},dd=new Sc(function(){return new cd},function(a){a.reset()},100);bd.prototype.add=function(a,b){var c=dd.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};bd.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};var cd=function(){this.next=this.scope=this.a=null};cd.prototype.set=function(a,b){this.a=a;this.scope=b;this.next=null};
cd.prototype.reset=function(){this.next=this.scope=this.a=null};var id=function(a,b){ed||fd();gd||(ed(),gd=!0);hd.add(a,b)},ed,fd=function(){if(-1!=String(na.Promise).indexOf("[native code]")){var a=na.Promise.resolve(void 0);ed=function(){a.then(jd)}}else ed=function(){var a=jd;!xa(na.setImmediate)||na.Window&&na.Window.prototype&&!Lb("Edge")&&na.Window.prototype.setImmediate==na.setImmediate?($c||($c=ad()),$c(a)):na.setImmediate(a)}},gd=!1,hd=new bd,jd=function(){for(var a;a=hd.remove();){try{a.a.call(a.scope)}catch(b){Zc(b)}Tc(dd,a)}gd=!1};var kd=function(){this.w=this.w;this.aa=this.aa};kd.prototype.w=!1;kd.prototype.Ba=function(){this.w||(this.w=!0,this.X())};kd.prototype.l=function(a){ld(this,Ea(nd,a))};var ld=function(a,b){a.w?k(void 0)?b.call(void 0):b():(a.aa||(a.aa=[]),a.aa.push(k(void 0)?n(b,void 0):b))};kd.prototype.X=function(){if(this.aa)for(;this.aa.length;)this.aa.shift()()};
var nd=function(a){a&&"function"==typeof a.Ba&&a.Ba()},od=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ua(d)?od.apply(null,d):nd(d)}};var pd=!ic||9<=Number(Dc),qd=ic&&!Cc("9");!lc||Cc("528");kc&&Cc("1.9b")||ic&&Cc("8")||hc&&Cc("9.5")||lc&&Cc("528");kc&&!Cc("8")||ic&&Cc("9");var A=function(a,b){this.type=a;this.f=this.target=b;this.Hh=!0};A.prototype.g=function(){this.Hh=!1};var rd=function(a,b){A.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.a=this.state=null;a&&this.init(a,b)};r(rd,A);
rd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;(b=a.relatedTarget)?kc&&(ec(b,"nodeName")||(b=null)):"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=
void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.a=a;a.defaultPrevented&&this.g()};rd.prototype.g=function(){rd.W.g.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,qd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var sd="closure_listenable_"+(1E6*Math.random()|0),td=function(a){return!(!a||!a[sd])},vd=0;var wd=function(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Sa=e;this.key=++vd;this.removed=this.Zd=!1},xd=function(a){a.removed=!0;a.listener=null;a.proxy=null;a.src=null;a.Sa=null};var yd=function(a){this.src=a;this.a={};this.b=0};yd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=zd(a,b,d,e);-1<g?(b=a[g],c||(b.Zd=!1)):(b=new wd(b,this.src,f,!!d,e),b.Zd=c,a.push(b));return b};yd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=zd(e,b,c,d);return-1<b?(xd(e[b]),sb(e,b),0==e.length&&(delete this.a[a],this.b--),!0):!1};
var Ad=function(a,b){var c=b.type;if(!(c in a.a))return!1;var d=tb(a.a[c],b);d&&(xd(b),0==a.a[c].length&&(delete a.a[c],a.b--));return d};yd.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.a)if(!a||c==a){for(var d=this.a[c],e=0;e<d.length;e++)++b,xd(d[e]);delete this.a[c];this.b--}return b};
var Bd=function(a,b,c,d,e){a=a.a[b.toString()];b=-1;a&&(b=zd(a,c,d,e));return-1<b?a[b]:null},zd=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.removed&&f.listener==b&&f.capture==!!c&&f.Sa==d)return e}return-1};var Cd="closure_lm_"+(1E6*Math.random()|0),Dd={},Ed=0,Fd=function(a,b,c,d,e){if(ta(b)){for(var f=0;f<b.length;f++)Fd(a,b[f],c,d,e);return null}c=Gd(c);return td(a)?a.listen(b,c,d,e):Hd(a,b,c,!1,d,e)},Hd=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,m=Id(a);m||(a[Cd]=m=new yd(a));c=m.add(b,c,d,e,f);if(c.proxy)return c;d=Jd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Kd(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
Ed++;return c},Jd=function(){var a=Ld,b=pd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},Md=function(a,b,c,d,e){if(ta(b)){for(var f=0;f<b.length;f++)Md(a,b[f],c,d,e);return null}c=Gd(c);return td(a)?Nd(a,b,c,d,e):Hd(a,b,c,!0,d,e)},Od=function(a,b,c,d,e){if(ta(b))for(var f=0;f<b.length;f++)Od(a,b[f],c,d,e);else c=Gd(c),td(a)?a.v(b,c,d,e):a&&(a=Id(a))&&(b=Bd(a,b,c,!!d,e))&&Pd(b)},Pd=function(a){if(l(a)||!a||a.removed)return!1;var b=
a.src;if(td(b))return Ad(b.sb,a);var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(Kd(c),d);Ed--;(c=Id(b))?(Ad(c,a),0==c.b&&(c.src=null,b[Cd]=null)):xd(a);return!0},Kd=function(a){return a in Dd?Dd[a]:Dd[a]="on"+a},Rd=function(a,b,c,d){var e=!0;if(a=Id(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.removed&&(f=Qd(f,d),e=e&&!1!==f)}return e},Qd=function(a,b){var c=a.listener,d=a.Sa||a.src;a.Zd&&
Pd(a);return c.call(d,b)},Ld=function(a,b){if(a.removed)return!0;if(!pd){var c=b||oa("window.event");b=new rd(c,this);var d=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var e=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==c.returnValue)c.returnValue=!0}c=[];for(e=b.f;e;e=e.parentNode)c.push(e);a=a.type;for(e=c.length-1;0<=e;e--){b.f=c[e];var f=Rd(c[e],a,!0,b),d=d&&f}for(e=0;e<c.length;e++)b.f=c[e],f=Rd(c[e],a,!1,b),d=d&&f}return d}return Qd(a,new rd(b,this))},Id=function(a){a=
a[Cd];return a instanceof yd?a:null},Sd="__closure_events_fn_"+(1E9*Math.random()>>>0),Gd=function(a){if(xa(a))return a;a[Sd]||(a[Sd]=function(b){return a.handleEvent(b)});return a[Sd]};var B=function(){kd.call(this);this.sb=new yd(this);this.ri=this;this.K=null};r(B,kd);B.prototype[sd]=!0;B.prototype.removeEventListener=function(a,b,c,d){Od(this,a,b,c,d)};
B.prototype.dispatchEvent=function(a){var b,c=this.K;if(c)for(b=[];c;c=c.K)b.push(c);var c=this.ri,d=a.type||a;if(va(a))a=new A(a,c);else if(a instanceof A)a.target=a.target||c;else{var e=a;a=new A(d,c);ac(a,e)}var e=!0,f;if(b)for(var g=b.length-1;0<=g;g--)f=a.f=b[g],e=Td(f,d,!0,a)&&e;f=a.f=c;e=Td(f,d,!0,a)&&e;e=Td(f,d,!1,a)&&e;if(b)for(g=0;g<b.length;g++)f=a.f=b[g],e=Td(f,d,!1,a)&&e;return e};B.prototype.X=function(){B.W.X.call(this);this.sb&&this.sb.removeAll(void 0);this.K=null};
B.prototype.listen=function(a,b,c,d){return this.sb.add(String(a),b,!1,c,d)};var Nd=function(a,b,c,d,e){return a.sb.add(String(b),c,!0,d,e)};B.prototype.v=function(a,b,c,d){return this.sb.remove(String(a),b,c,d)};var Td=function(a,b,c,d){b=a.sb.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.removed&&g.capture==c){var m=g.listener,q=g.Sa||g.src;g.Zd&&Ad(a.sb,g);e=!1!==m.call(q,d)&&e}}return e&&0!=d.Hh};var Ud=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},Vd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var Yd=function(a,b){this.a=0;this.m=void 0;this.g=this.b=this.f=null;this.l=this.h=!1;if(a!=pa)try{var c=this;a.call(b,function(a){Wd(c,2,a)},function(a){if(!(a instanceof Xd))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}Wd(c,3,a)})}catch(d){Wd(this,3,d)}},Zd=function(){this.next=this.g=this.b=this.l=this.a=null;this.f=!1};Zd.prototype.reset=function(){this.g=this.b=this.l=this.a=null;this.f=!1};
var $d=new Sc(function(){return new Zd},function(a){a.reset()},100),ae=function(a,b,c){var d=$d.get();d.l=a;d.b=b;d.g=c;return d},be=function(a){if(a instanceof Yd)return a;var b=new Yd(pa);Wd(b,2,a);return b},ce=function(a){return new Yd(function(b,c){c(a)})},ee=function(a,b,c){de(a,b,c,null)||id(Ea(b,a))},fe=function(a){return new Yd(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],ee(e,b,c)})},ge=function(a){return new Yd(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,
c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},m=0,q;m<a.length;m++)q=a[m],ee(q,Ea(f,m),g);else b(e)})},he=function(a){return new Yd(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{bc:!0,value:f}:{bc:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],ee(g,Ea(e,f,!0),Ea(e,f,!1));else b(d)})},Vb=function(){var a,b,c=new Yd(function(c,e){a=c;b=e});return new ie(c,a,b)};Yd.prototype.then=function(a,b,c){return je(this,xa(a)?a:null,xa(b)?b:null,c)};Ud(Yd);
var le=function(a,b,c){b=ae(b,b,c);b.f=!0;ke(a,b);return a},me=function(a,b,c){return je(a,null,b,c)};Yd.prototype.cancel=function(a){0==this.a&&id(function(){var b=new Xd(a);ne(this,b)},this)};
var ne=function(a,b){if(0==a.a)if(a.f){var c=a.f;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.f||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.a&&1==d?ne(c,b):(f?(d=f,d.next==c.g&&(c.g=d),d.next=d.next.next):oe(c),pe(c,e,3,b)))}a.f=null}else Wd(a,3,b)},ke=function(a,b){a.b||2!=a.a&&3!=a.a||qe(a);a.g?a.g.next=b:a.b=b;a.g=b},je=function(a,b,c,d){var e=ae(null,null,null);e.a=new Yd(function(a,g){e.l=b?function(c){try{var e=b.call(d,c);a(e)}catch(y){g(y)}}:a;e.b=c?function(b){try{var e=c.call(d,
b);!k(e)&&b instanceof Xd?g(b):a(e)}catch(y){g(y)}}:g});e.a.f=a;ke(a,e);return e.a};Yd.prototype.v=function(a){this.a=0;Wd(this,2,a)};Yd.prototype.o=function(a){this.a=0;Wd(this,3,a)};
var Wd=function(a,b,c){0==a.a&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.a=1,de(c,a.v,a.o,a)||(a.m=c,a.a=b,a.f=null,qe(a),3!=b||c instanceof Xd||re(a,c)))},de=function(a,b,c,d){if(a instanceof Yd)return ke(a,ae(b||pa,c||null,d)),!0;if(Vd(a))return a.then(b,c,d),!0;if(ya(a))try{var e=a.then;if(xa(e))return se(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},se=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},m=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,
g,m)}catch(q){m(q)}},qe=function(a){a.h||(a.h=!0,id(a.w,a))},oe=function(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.g=null);return b};Yd.prototype.w=function(){for(var a;a=oe(this);)pe(this,a,this.a,this.m);this.h=!1};
var pe=function(a,b,c,d){if(3==c&&b.b&&!b.f)for(;a&&a.l;a=a.f)a.l=!1;if(b.a)b.a.f=null,te(b,c,d);else try{b.f?b.l.call(b.g):te(b,c,d)}catch(e){ue.call(null,e)}Tc($d,b)},te=function(a,b,c){2==b?a.l.call(a.g,c):a.b&&a.b.call(a.g,c)},re=function(a,b){a.l=!0;id(function(){a.l&&ue.call(null,b)})},ue=Zc,Xd=function(a){Ga.call(this,a)};r(Xd,Ga);Xd.prototype.name="cancel";var ie=function(a,b,c){this.a=a;this.resolve=b;this.b=c};var ve=function(a,b){B.call(this);this.b=a||1;this.a=b||na;this.f=n(this.Jl,this);this.g=Fa()};r(ve,B);h=ve.prototype;h.enabled=!1;h.zb=null;h.Jl=function(){if(this.enabled){var a=Fa()-this.g;0<a&&a<.8*this.b?this.zb=this.a.setTimeout(this.f,this.b-a):(this.zb&&(this.a.clearTimeout(this.zb),this.zb=null),this.dispatchEvent("tick"),this.enabled&&(this.zb=this.a.setTimeout(this.f,this.b),this.g=Fa()))}};h.start=function(){this.enabled=!0;this.zb||(this.zb=this.a.setTimeout(this.f,this.b),this.g=Fa())};
h.stop=function(){this.enabled=!1;this.zb&&(this.a.clearTimeout(this.zb),this.zb=null)};h.X=function(){ve.W.X.call(this);this.stop();delete this.a};
var we=function(a,b,c){if(xa(a))c&&(a=n(a,c));else if(a&&"function"==typeof a.handleEvent)a=n(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:na.setTimeout(a,b||0)},xe=function(a){na.clearTimeout(a)},ye=function(a){var b=null;return me(new Yd(function(c,d){b=we(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))}),function(a){xe(b);throw a;})};var ze=function(a,b,c){this.f=a;this.l=b;this.g=c;this.a=0;this.b=[]};ze.prototype.send=function(a,b,c,d){var e=void 0===d?{}:d;d=void 0===e.timeoutMillis?this.l:e.timeoutMillis;var f=void 0===e.bh?this.g:e.bh,g=void 0===e.headers?null:e.headers,e=void 0===e.responseType?"":e.responseType;a={wa:new Qc,url:a,method:b,headers:g,responseType:e,body:c,timeoutMillis:d,dh:f};this.a<this.f?Ae(this,a):this.b.push(a);return a.wa.a};
var Be=function(a){if(0<a.b.length&&a.a<a.f){var b=a.b.shift();Ae(a,b)}},Ae=function(a,b){a.a++;b.dh--;Ce(b).then(function(c){b.wa.resolve(c);a.a--;Be(a)},function(c){0==b.dh?b.wa.b(c):a.b.push(b);a.a--;Be(a)})},Ce=function(a){return new Promise(function(b,c){var d=new XMLHttpRequest;d.onreadystatechange=function(){d.readyState==XMLHttpRequest.DONE&&b(d)};d.timeout=a.timeoutMillis;d.ontimeout=function(){c(Error("Timed out"))};d.open(a.method,a.url,!0);null==a.headers?d.setRequestHeader("Content-Type",
"application/x-www-form-urlencoded;charset=utf-8"):a.headers.forEach(function(a){return d.setRequestHeader(a[0],a[1])});d.responseType=a.responseType;d.send(a.body)})};var De=function(a,b,c){this.v=a;this.f=0<b?b:10;this.w=0<c?c:1;this.l=1;this.h=0;this.g=!1;this.a=this.b=null};De.prototype.start=function(){if(null!=this.a)return Promise.reject(Error("Cannot call Retry.start more than once."));this.a=new Qc;this.m();return this.a.a};De.prototype.m=function(){var a=this;this.b=null;this.g||(this.h++,this.v().then(function(b){Ee(a);a.a.resolve(b)},function(){a.h>=a.w?(Ee(a),a.a.b(Error("Max attempts reached"))):(a.b=we(a.m,a.f,a),a.f*=a.l)}))};
var Fe=function(a,b){a.l=b;return a};De.prototype.abort=function(){Ee(this);this.a.b(Error("abort"))};var Ee=function(a){null!=a.b&&(xe(a.b),a.b=null);a.g=!0};var Ge=function(a,b,c){this.source=a;this.type=b;this.message=c};var Ie=function(a,b,c){null==He&&(He=new ze(1,3E5,1));var d="https://crash.corp.google.com/samples?stbtiq="+b,e="http://"+a+":8008/setup/send_log_report";He.send(e,"POST",JSON.stringify({uuid:b}),{headers:[["Content-Type","application/json"]]}).then(function(a){200==a.status?c("ok",d):c("error","Unable to POST to "+e+", "+("error = "+a.status))},function(a){c("error",String(a))});return d},Le=function(a){var b=new Je;if("string"!==typeof a)return Promise.resolve(b);null==Ke&&(Ke=new ze(1,3E3,1));
return Ke.send("http://"+a+":8008/setup/eureka_info","GET",void 0,{responseType:"text"}).then(function(a){a=JSON.parse(a.responseText);"cast_build_revision"in a?b.a=String(a.cast_build_revision):"build_version"in a&&(b.a=String(a.build_version));"connected"in a&&(b.g="true"==String(a.connected));"ethernet_connected"in a&&(b.f="true"==String(a.ethernet_connected));"has_update"in a&&(b.b="true"==String(a.has_update));"uptime"in a&&(a=Number(a.uptime),Number.isFinite(a)&&(b.l=a))}).catch(function(a){w(v("mr.DongleUtils"),
"Unable to fetch/parse setup info.",a)}).then(function(){return b})},Je=function(){this.l=this.b=this.f=this.g=this.a=null},He=null,Ke=null;var Ne=function(){this.a="";this.b=Me};Ne.prototype.ec=!0;Ne.prototype.Ic=function(){return this.a};Ne.prototype.toString=function(){return"Const{"+this.a+"}"};var Me={},Oe=function(a){var b=new Ne;b.a=a;return b};Oe("");var Qe=function(){this.a=Pe};Qe.prototype.ec=!0;var Pe={};Qe.prototype.Ic=function(){return""};Qe.prototype.toString=function(){return"SafeScript{}"};var Re=function(a){if(a instanceof Qe&&a.constructor===Qe&&a.a===Pe)return"";ab("expected object of type SafeScript, got '"+a+"' of type "+ra(a));return"type_error:SafeScript"};var Ue=function(){this.a=Te};Ue.prototype.ec=!0;var Te={};Ue.prototype.Ic=function(){return""};Ue.prototype.toString=function(){return"SafeStyle{}"};var Ve=function(a){if(a instanceof Ue&&a.constructor===Ue&&a.a===Te)return"";ab("expected object of type SafeStyle, got '"+a+"' of type "+ra(a));return"type_error:SafeStyle"};var We=/[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,Xe=/^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]/,Ye=/^http:\/\/.*/,Ze=/\s+/,$e=/[\d\u06f0-\u06f9]/;var bf=function(){this.a="";this.b=af};bf.prototype.ec=!0;bf.prototype.Ic=function(){return this.a};bf.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var cf=function(a){if(a instanceof bf&&a.constructor===bf&&a.b===af)return a.a;ab("expected object of type TrustedResourceUrl, got '"+a+"' of type "+ra(a));return"type_error:TrustedResourceUrl"},af={};var ef=function(){this.a=df};ef.prototype.ec=!0;ef.prototype.Ic=function(){return""};ef.prototype.toString=function(){return"SafeUrl{}"};var ff=function(a){if(a instanceof ef&&a.constructor===ef&&a.a===df)return"";ab("expected object of type SafeUrl, got '"+a+"' of type "+ra(a));return"type_error:SafeUrl"},df={};var hf=function(){this.a="";this.b=gf;this.ld=null};hf.prototype.ec=!0;hf.prototype.Ic=function(){return this.a};hf.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var jf=function(a){if(a instanceof hf&&a.constructor===hf&&a.b===gf)return a.a;ab("expected object of type SafeHtml, got '"+a+"' of type "+ra(a));return"type_error:SafeHtml"},gf={},kf=function(a){var b=new hf;b.a=a;b.ld=0};kf("<!DOCTYPE html>");kf("");kf("<br>");
