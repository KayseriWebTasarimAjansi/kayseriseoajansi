!function(t){var e=t("#header-outer").outerHeight()+34,o=t("#wpadminbar").length>0?28:0,i="1"==t("#header-outer").attr("data-using-secondary")?33:0;t(window).load(function(){e=t("#header-outer").outerHeight()+34,o=t("#wpadminbar").length>0?28:0}),t.fn.extend({stickyMojo:function(n){var r=t.extend({footerID:"",contentID:"",orientation:"right"},n),s={el:t(this),stickyLeft:t(r.contentID).outerWidth()+t(r.contentID).offset.left,stickyTop2:t(this).offset().top,stickyHeight:t(this).outerHeight(!0),contentHeight:t(r.contentID).outerHeight(!0),win:t(window),breakPoint:t(this).outerWidth(!0)+t(r.contentID).outerWidth(!0),marg:parseInt(t(this).css("margin-top"),10)},a=function(){var t=[];for(var e in r)r[e]||t.push(r[e]);return!document.querySelector&&t.push("NO IE 7"),t}();return r.footerID=t(r.footerID),r.contentID=t(r.contentID),this.each(function(){a.length?console&&console.warn?console.warn(a):alert(a):(s.el.css("left",s.stickyLeft),s.win.bind({scroll:l,resize:function(){s.el.css("left",s.stickyLeft),s.contentHeight=t(r.contentID).outerHeight(!0),s.stickyHeight=s.el.outerHeight(!0),l(),c()}}),setTimeout(function(){c()},600))});function c(){parseInt(t("#sidebar").height())+50>=parseInt(t(".post-area").height())?(s.win.unbind("scroll",l),s.el.removeClass("fixed-sidebar"),s.el.css({position:"relative",top:0,"margin-left":0,bottom:0})):(s.win.unbind("scroll",l),s.win.bind("scroll",l),s.el.addClass("fixed-sidebar")),t("#sidebar").length>0&&t(window).scrollTop()<100&&(s.stickyTop2=t("#sidebar").offset().top,s.marg=parseInt(t("#sidebar").css("margin-top"),10))}function l(){var n,a,c,l=(n=t(".bottom_controls").length>0?t(".bottom_controls").outerHeight(!0):0,a=t(".comment-wrap.full-width-section").length>0?t(".comment-wrap.full-width-section").outerHeight(!0):0,c=0==t('body[data-footer-reveal="1"]').length?t("#footer-outer").height():0,{limit:t("#ajax-content-wrap").height()+t("#ajax-content-wrap").offset().top-s.stickyHeight-c-e-o-i-n-a,windowTop:s.win.scrollTop(),stickyTop:s.stickyTop2-s.marg-e-o-i}),h=l.stickyTop<l.windowTop&&s.win.width()>=s.breakPoint;if(e=t("#header-outer").outerHeight()+34,h?(s.el.css({position:"fixed",right:"auto",top:e+o+i,bottom:"auto"}),"left"===r.orientation?r.contentID.css("margin-left",s.el.outerWidth(!0)):s.el.css("margin-left",r.contentID.outerWidth(!0))):(s.el.css({position:"static","margin-left":"0px",bottom:"auto"}),r.contentID.css("margin-left","0px")),l.limit<l.windowTop){s.el.css({position:"absolute",top:"auto",right:"0",bottom:-38})}}}})}(jQuery);