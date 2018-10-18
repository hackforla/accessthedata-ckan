!function(root,factory){"function"==typeof define&&define.amd?define(["jquery"],factory):"object"==typeof exports?module.exports=factory(require("jquery")):root.jquery_dotdotdot_js=factory(root.jQuery)}(this,function(jQuery){return function(t){"use strict";function e(){h=t(window),s={},o={},r={},t.each([s,o,r],function(t,e){e.add=function(t){for(var i=0,n=(t=t.split(" ")).length;i<n;i++)e[t[i]]=e.ddd(t[i])}}),s.ddd=function(t){return"ddd-"+t},s.add("truncated keep"),o.ddd=function(t){return"ddd-"+t},r.ddd=function(t){return t+".ddd"},r.add("resize"),e=function(){}}var s,o,r,h,i="dotdotdot",n="3.2.2";t[i]&&t[i].version>n||(t[i]=function(t,e){this.$dot=t,this.api=["getInstance","truncate","restore","destroy","watch","unwatch"],this.opts=e;var n=this.$dot.data(i);return n&&n.destroy(),this.init(),this.truncate(),this.opts.watch&&this.watch(),this},t[i].version=n,t[i].uniqueId=0,t[i].defaults={ellipsis:"… ",callback:function(t){},truncate:"word",tolerance:0,keep:null,watch:"window",height:null},t[i].prototype={init:function(){this.watchTimeout=null,this.watchInterval=null,this.uniqueId=t[i].uniqueId++,this.originalStyle=this.$dot.attr("style")||"",this.originalContent=this._getOriginalContent(),"break-word"!==this.$dot.css("word-wrap")&&this.$dot.css("word-wrap","break-word"),"nowrap"===this.$dot.css("white-space")&&this.$dot.css("white-space","normal"),null===this.opts.height&&(this.opts.height=this._getMaxHeight()),"string"==typeof this.opts.ellipsis&&(this.opts.ellipsis=document.createTextNode(this.opts.ellipsis))},getInstance:function(){return this},truncate:function(){this.$inner=this.$dot.wrapInner("<div />").children().css({display:"block",height:"auto",width:"auto",border:"none",padding:0,margin:0}),this.$inner.empty().append(this.originalContent.clone(!0)),this.maxHeight=this._getMaxHeight();var t=!1;return this._fits()||(t=!0,this._truncateToNode(this.$inner[0])),this.$dot[t?"addClass":"removeClass"](s.truncated),this.$inner.replaceWith(this.$inner.contents()),this.$inner=null,this.opts.callback.call(this.$dot[0],t),t},restore:function(){this.unwatch(),this.$dot.empty().append(this.originalContent).attr("style",this.originalStyle).removeClass(s.truncated)},destroy:function(){this.restore(),this.$dot.data(i,null)},watch:function(){var t=this;this.unwatch();var e={};"window"==this.opts.watch?h.on(r.resize+t.uniqueId,function(i){t.watchTimeout&&clearTimeout(t.watchTimeout),t.watchTimeout=setTimeout(function(){e=t._watchSizes(e,h,"width","height")},100)}):this.watchInterval=setInterval(function(){e=t._watchSizes(e,t.$dot,"innerWidth","innerHeight")},500)},unwatch:function(){h.off(r.resize+this.uniqueId),this.watchInterval&&clearInterval(this.watchInterval),this.watchTimeout&&clearTimeout(this.watchTimeout)},_api:function(){var e=this,i={};return t.each(this.api,function(t){var n=this;i[n]=function(){var t=e[n].apply(e,arguments);return void 0===t?i:t}}),i},_truncateToNode:function(e){var i=[],n=[];if(t(e).contents().each(function(){var e=t(this);if(!e.hasClass(s.keep)){var o=document.createComment("");e.replaceWith(o),n.push(this),i.push(o)}}),n.length){for(var o=0;o<n.length;o++){t(i[o]).replaceWith(n[o]),t(n[o]).append(this.opts.ellipsis);var r=this._fits();if(t(this.opts.ellipsis,n[o]).remove(),!r){if("node"==this.opts.truncate&&1<o)return void t(n[o-2]).remove();break}}for(var h=o;h<i.length;h++)t(i[h]).remove();var a=n[Math.max(0,Math.min(o,n.length-1))];if(1==a.nodeType){var d=t("<"+a.nodeName+" />");d.append(this.opts.ellipsis),t(a).replaceWith(d),this._fits()?d.replaceWith(a):(d.remove(),a=n[Math.max(0,o-1)])}1==a.nodeType?this._truncateToNode(a):this._truncateToWord(a)}},_truncateToWord:function(t){for(var e=t,i=this,n=this.__getTextContent(e),s=-1!==n.indexOf(" ")?" ":"　",o=n.split(s),r="",h=o.length;0<=h;h--)if(r=o.slice(0,h).join(s),i.__setTextContent(e,i._addEllipsis(r)),i._fits()){"letter"==i.opts.truncate&&(i.__setTextContent(e,o.slice(0,h+1).join(s)),i._truncateToLetter(e));break}},_truncateToLetter:function(t){for(var e=this,n=this.__getTextContent(t).split(""),s="",o=n.length;0<=o&&(!(s=n.slice(0,o).join("")).length||(e.__setTextContent(t,e._addEllipsis(s)),!e._fits()));o--);},_fits:function(){return this.$inner.innerHeight()<=this.maxHeight+this.opts.tolerance},_addEllipsis:function(e){for(var i=[" ","　",",",";",".","!","?"];-1<t.inArray(e.slice(-1),i);)e=e.slice(0,-1);return e+this.__getTextContent(this.opts.ellipsis)},_getOriginalContent:function(){var e=this;return this.$dot.find("script, style").addClass(s.keep),this.opts.keep&&this.$dot.find(this.opts.keep).addClass(s.keep),this.$dot.find("*").not("."+s.keep).add(this.$dot).contents().each(function(){var i=this,n=t(this);if(3==i.nodeType){if(""==t.trim(e.__getTextContent(i))){if(n.parent().is("table, thead, tbody, tfoot, tr, dl, ul, ol, video"))return void n.remove();if(n.prev().is("div, p, table, td, td, dt, dd, li"))return void n.remove();if(n.next().is("div, p, table, td, td, dt, dd, li"))return void n.remove();if(!n.prev().length)return void n.remove();if(!n.next().length)return void n.remove()}}else 8==i.nodeType&&n.remove()}),this.$dot.contents()},_getMaxHeight:function(){if("number"==typeof this.opts.height)return this.opts.height;for(var t=["maxHeight","height"],e=0,i=0;i<t.length;i++)if("px"==(e=window.getComputedStyle(this.$dot[0])[t[i]]).slice(-2)){e=parseFloat(e);break}t=[];switch(this.$dot.css("boxSizing")){case"border-box":t.push("borderTopWidth"),t.push("borderBottomWidth");case"padding-box":t.push("paddingTop"),t.push("paddingBottom")}for(i=0;i<t.length;i++){var n=window.getComputedStyle(this.$dot[0])[t[i]];"px"==n.slice(-2)&&(e-=parseFloat(n))}return Math.max(e,0)},_watchSizes:function(t,e,i,n){if(this.$dot.is(":visible")){var s={width:e[i](),height:e[n]()};return t.width==s.width&&t.height==s.height||this.truncate(),s}return t},__getTextContent:function(t){for(var e=["nodeValue","textContent","innerText"],i=0;i<e.length;i++)if("string"==typeof t[e[i]])return t[e[i]];return""},__setTextContent:function(t,e){for(var i=["nodeValue","textContent","innerText"],n=0;n<i.length;n++)t[i[n]]=e}},t.fn[i]=function(n){return e(),n=t.extend(!0,{},t[i].defaults,n),this.each(function(){t(this).data(i,new t[i](t(this),n)._api())})})}(jQuery),!0}),function(root,factory){"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?module.exports=factory():factory()}(0,function(){var domNode="",maxTweets=20,parseLinks=!0,queue=[],inProgress=!1,printTime=!0,printUser=!0,formatterFunction=null,supportsClassName=!0,showRts=!0,customCallbackFunction=null,showInteractionLinks=!0,showImages=!1,useEmoji=!1,targetBlank=!0,permalinks=!0,dataOnly=!1,script=null;function strip(data){return data.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,s){return s}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function targetLinksToNewWindow(el){for(var links=el.getElementsByTagName("a"),i=links.length-1;0<=i;i--)links[i].setAttribute("target","_blank"),links[i].setAttribute("rel","noopener")}function getElementsByClassName(node,classname){for(var a=[],regex=new RegExp("(^| )"+classname+"( |$)"),elems=node.getElementsByTagName("*"),i=0,j=elems.length;i<j;i++)regex.test(elems[i].className)&&a.push(elems[i]);return a}function extractImageUrl(image_data){if(void 0!==image_data&&0<=image_data.innerHTML.indexOf("data-image")){var data_src=image_data.innerHTML.match(/data-image=\"([A-z0-9]+:\/\/[A-z0-9]+\.[A-z0-9]+\.[A-z0-9]+\/[A-z0-9]+\/[A-z0-9\-]+)/i)[1];return decodeURIComponent(data_src)+".jpg"}}var twitterFetcher={fetch:function(config){if(void 0===config.maxTweets&&(config.maxTweets=20),void 0===config.enableLinks&&(config.enableLinks=!0),void 0===config.showUser&&(config.showUser=!0),void 0===config.showTime&&(config.showTime=!0),void 0===config.dateFunction&&(config.dateFunction="default"),void 0===config.showRetweet&&(config.showRetweet=!0),void 0===config.customCallback&&(config.customCallback=null),void 0===config.showInteraction&&(config.showInteraction=!0),void 0===config.showImages&&(config.showImages=!1),void 0===config.useEmoji&&(config.useEmoji=!1),void 0===config.linksInNewWindow&&(config.linksInNewWindow=!0),void 0===config.showPermalinks&&(config.showPermalinks=!0),void 0===config.dataOnly&&(config.dataOnly=!1),inProgress)queue.push(config);else{inProgress=!0,domNode=config.domId,maxTweets=config.maxTweets,parseLinks=config.enableLinks,printUser=config.showUser,printTime=config.showTime,showRts=config.showRetweet,formatterFunction=config.dateFunction,customCallbackFunction=config.customCallback,showInteractionLinks=config.showInteraction,showImages=config.showImages,useEmoji=config.useEmoji,targetBlank=config.linksInNewWindow,permalinks=config.showPermalinks,dataOnly=config.dataOnly;var head=document.getElementsByTagName("head")[0];null!==script&&head.removeChild(script),(script=document.createElement("script")).type="text/javascript",void 0!==config.list?script.src="https://syndication.twitter.com/timeline/list?callback=__twttrf.callback&dnt=false&list_slug="+config.list.listSlug+"&screen_name="+config.list.screenName+"&suppress_response_codes=true&lang="+(config.lang||"en")+"&rnd="+Math.random():void 0!==config.profile?script.src="https://syndication.twitter.com/timeline/profile?callback=__twttrf.callback&dnt=false&screen_name="+config.profile.screenName+"&suppress_response_codes=true&lang="+(config.lang||"en")+"&rnd="+Math.random():void 0!==config.likes?script.src="https://syndication.twitter.com/timeline/likes?callback=__twttrf.callback&dnt=false&screen_name="+config.likes.screenName+"&suppress_response_codes=true&lang="+(config.lang||"en")+"&rnd="+Math.random():script.src="https://cdn.syndication.twimg.com/widgets/timelines/"+config.id+"?&lang="+(config.lang||"en")+"&callback=__twttrf.callback&suppress_response_codes=true&rnd="+Math.random(),head.appendChild(script)}},callback:function(data){if(void 0===data||void 0===data.body)return inProgress=!1,void(0<queue.length&&(twitterFetcher.fetch(queue[0]),queue.splice(0,1)));useEmoji||(data.body=data.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,"")),showImages||(data.body=data.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,"")),printUser||(data.body=data.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g,""));var div=document.createElement("div");function swapDataSrc(element){var avatarImg=element.getElementsByTagName("img")[0];if(avatarImg)avatarImg.src=avatarImg.getAttribute("data-src-2x");else{var screenName=element.getElementsByTagName("a")[0].getAttribute("href").split("twitter.com/")[1],img=document.createElement("img");img.setAttribute("src","https://twitter.com/"+screenName+"/profile_image?size=bigger"),element.prepend(img)}return element}div.innerHTML=data.body,void 0===div.getElementsByClassName&&(supportsClassName=!1);var tweets=[],authors=[],times=[],images=[],rts=[],tids=[],permalinksURL=[],x=0;if(supportsClassName)for(var tmp=div.getElementsByClassName("timeline-Tweet");x<tmp.length;)0<tmp[x].getElementsByClassName("timeline-Tweet-retweetCredit").length?rts.push(!0):rts.push(!1),(!rts[x]||rts[x]&&showRts)&&(tweets.push(tmp[x].getElementsByClassName("timeline-Tweet-text")[0]),tids.push(tmp[x].getAttribute("data-tweet-id")),printUser&&authors.push(swapDataSrc(tmp[x].getElementsByClassName("timeline-Tweet-author")[0])),times.push(tmp[x].getElementsByClassName("dt-updated")[0]),permalinksURL.push(tmp[x].getElementsByClassName("timeline-Tweet-timestamp")[0]),void 0!==tmp[x].getElementsByClassName("timeline-Tweet-media")[0]?images.push(tmp[x].getElementsByClassName("timeline-Tweet-media")[0]):images.push(void 0)),x++;else for(tmp=getElementsByClassName(div,"timeline-Tweet");x<tmp.length;)0<getElementsByClassName(tmp[x],"timeline-Tweet-retweetCredit").length?rts.push(!0):rts.push(!1),(!rts[x]||rts[x]&&showRts)&&(tweets.push(getElementsByClassName(tmp[x],"timeline-Tweet-text")[0]),tids.push(tmp[x].getAttribute("data-tweet-id")),printUser&&authors.push(swapDataSrc(getElementsByClassName(tmp[x],"timeline-Tweet-author")[0])),times.push(getElementsByClassName(tmp[x],"dt-updated")[0]),permalinksURL.push(getElementsByClassName(tmp[x],"timeline-Tweet-timestamp")[0]),void 0!==getElementsByClassName(tmp[x],"timeline-Tweet-media")[0]?images.push(getElementsByClassName(tmp[x],"timeline-Tweet-media")[0]):images.push(void 0)),x++;tweets.length>maxTweets&&(tweets.splice(maxTweets,tweets.length-maxTweets),authors.splice(maxTweets,authors.length-maxTweets),times.splice(maxTweets,times.length-maxTweets),rts.splice(maxTweets,rts.length-maxTweets),images.splice(maxTweets,images.length-maxTweets),permalinksURL.splice(maxTweets,permalinksURL.length-maxTweets));var arrayTweets=[],n=(x=tweets.length,0);if(dataOnly)for(;n<x;)arrayTweets.push({tweet:tweets[n].innerHTML,author:authors[n]?authors[n].innerHTML:"Unknown Author",author_data:{profile_url:authors[n]?authors[n].querySelector('[data-scribe="element:user_link"]').href:null,profile_image:authors[n]?"https://twitter.com/"+authors[n].querySelector('[data-scribe="element:screen_name"]').title.split("@")[1]+"/profile_image?size=bigger":null,profile_image_2x:authors[n]?"https://twitter.com/"+authors[n].querySelector('[data-scribe="element:screen_name"]').title.split("@")[1]+"/profile_image?size=original":null,screen_name:authors[n]?authors[n].querySelector('[data-scribe="element:screen_name"]').title:null,name:authors[n]?authors[n].querySelector('[data-scribe="element:name"]').title:null},time:times[n].textContent,timestamp:times[n].getAttribute("datetime").replace("+0000","Z").replace(/([\+\-])(\d\d)(\d\d)/,"$1$2:$3"),image:extractImageUrl(images[n]),rt:rts[n],tid:tids[n],permalinkURL:void 0===permalinksURL[n]?"":permalinksURL[n].href}),n++;else for(;n<x;){if("string"!=typeof formatterFunction){var datetimeText=times[n].getAttribute("datetime"),newDate=new Date(times[n].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),dateString=formatterFunction(newDate,datetimeText);if(times[n].setAttribute("aria-label",dateString),tweets[n].textContent)if(supportsClassName)times[n].textContent=dateString;else{var h=document.createElement("p"),t=document.createTextNode(dateString);h.appendChild(t),h.setAttribute("aria-label",dateString),times[n]=h}else times[n].textContent=dateString}var op="";parseLinks?(targetBlank&&(targetLinksToNewWindow(tweets[n]),printUser&&targetLinksToNewWindow(authors[n])),printUser&&(op+='<div class="user">'+strip(authors[n].innerHTML)+"</div>"),op+='<p class="tweet">'+strip(tweets[n].innerHTML)+"</p>",printTime&&(op+=permalinks?'<p class="timePosted"><a href="'+permalinksURL[n]+'">'+times[n].getAttribute("aria-label")+"</a></p>":'<p class="timePosted">'+times[n].getAttribute("aria-label")+"</p>")):(tweets[n].textContent,printUser&&(op+='<p class="user">'+authors[n].textContent+"</p>"),op+='<p class="tweet">'+tweets[n].textContent+"</p>",printTime&&(op+='<p class="timePosted">'+times[n].textContent+"</p>")),showInteractionLinks&&(op+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+tids[n]+'" class="twitter_reply_icon"'+(targetBlank?' target="_blank" rel="noopener">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+tids[n]+'" class="twitter_retweet_icon"'+(targetBlank?' target="_blank" rel="noopener">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+tids[n]+'" class="twitter_fav_icon"'+(targetBlank?' target="_blank" rel="noopener">':">")+"Favorite</a></p>"),showImages&&void 0!==images[n]&&void 0!==extractImageUrl(images[n])&&(op+='<div class="media"><img src="'+extractImageUrl(images[n])+'" alt="Image from tweet" /></div>'),showImages?arrayTweets.push(op):!showImages&&tweets[n].textContent.length&&arrayTweets.push(op),n++}!function(tweets){if(null===customCallbackFunction){for(var x=tweets.length,n=0,element=document.getElementById(domNode),html="<ul>";n<x;)html+="<li>"+tweets[n]+"</li>",n++;html+="</ul>",element.innerHTML=html}else customCallbackFunction(tweets)}(arrayTweets),inProgress=!1,0<queue.length&&(twitterFetcher.fetch(queue[0]),queue.splice(0,1))}};return window.__twttrf=twitterFetcher,window.twitterFetcher=twitterFetcher}),[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach(function(item){item.hasOwnProperty("prepend")||Object.defineProperty(item,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(){var argArr=Array.prototype.slice.call(arguments),docFrag=document.createDocumentFragment();argArr.forEach(function(argItem){var isNode=argItem instanceof Node;docFrag.appendChild(isNode?argItem:document.createTextNode(String(argItem)))}),this.insertBefore(docFrag,this.firstChild)}})}),$(document).ready(function(){function closeSearch(){$(".page").addClass("inactive-search"),$(".page").removeClass("active-search"),$(".masthead .site-search .close").remove()}function openSearch(){$(".page").addClass("active-search"),$(".page").removeClass("inactive-search"),$(".site-search").append('<button class="close" type="button"><i class="fa fa-times" aria-hidden="true"></i><span class="sr-only">Close</span></button>');var firstInput=$(".active-search #field-sitewide-search"),lastInput=$(".active-search .masthead .site-search .close");lastInput.on("keydown",function(e){9!==e.which||e.shiftKey||(e.preventDefault(),firstInput.focus())}),firstInput.on("keydown",function(e){9===e.which&&e.shiftKey&&(e.preventDefault(),lastInput.focus())}),$(".active-search .masthead .site-search .close").on("click",function(){closeSearch()}),$(".active-search .masthead .site-search .close").on("keypress",function(e){13==e.which&&closeSearch()})}$(".page").addClass("inactive-search"),$(".masthead .site-search label").attr("tabindex","0"),$(".inactive-search .masthead .site-search label").on("click",function(){openSearch()}),$(".inactive-search .masthead .site-search label").on("keypress",function(e){13==e.which&&(openSearch(),$("#field-sitewide-search").focus())}),$(".masthead").affix({offset:1}),$(".featured-visualisation .toggle").on("click",function(){$(this).parents(".caption-header").toggleClass("show-as-collapsed"),$(this).parents("figcaption").children(".caption-body").collapse("toggle")}),$(".stories-list article .text").dotdotdot({}),$("#field-related-datasets").select2({placeholder:"Click to get a drop-down list or start typing a dataset title"}),$(".story .notes p:first-of-type").addClass("lead").prependTo($(".story .notes"))});