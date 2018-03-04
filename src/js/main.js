import "babel-polyfill";
$(function(){
  "use strict";
  const obj = document.getElementsByClassName("mozi");
  $('.mozi').each(function(i){
    const mozi = $(this);
    const fontsize = getFontSize(mozi);
    const height = obj[i].getBoundingClientRect().height;
    const linehight = parseInt(mozi.css('line-height'));
    const height_cap = (linehight - fontsize)/2;
    mozi.wrapInner('<span />');
    const cssmap = {
      'display':'block',
      'margin-top': -height_cap,
      'margin-bottom':-height_cap,
      'height':'100%',
      'top':0,
      'position':'absolute',
    }
    const cssmap2 = {
      'height':height - linehight,
      'padding-top':height_cap,
      'padding-bottom':height_cap+height_cap/2
    }
    $(this).children('span').css(cssmap);
    $(this).css(cssmap2);
  })


  function getFontSize(target){
    const div = $('<div style="display:none;font-size:1em;margin:0;padding:0;height:auto;line-height:1;border:0;">&nbsp;</div>');
    const size = div.appendTo(target).height();
    div.remove();
    return size;
  }

})
