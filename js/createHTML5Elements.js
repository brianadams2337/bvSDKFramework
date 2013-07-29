(function () {
    if (! /*@cc_on!@*/ 0) return;
    var e = "abbr,article,aside,audio,bb,bdi,canvas,data,datagrid,datalist,details,dialog,eventsource,figcaption,figure,footer,header,hgroup,main,mark,menu,meter,nav,output,progress,section,summary,time,video".split(','),
        i = e.length;
    while (i--) {
        document.createElement(e[i])
    }
})()