var box = document.getElementById('search');
var oSpan = box.getElementsByTagName('span');
for(var i=0;i<oSpan.length;i++){
    oSpan[i].name = i;
    oSpan[i].onclick = function(){
        for(var j=0;j<oSpan.length;j++){
            oSpan[j].className = '';
            oSpan[j].className = '';
        }
        this.className = 'active';
        oSpan[this.name].className ='active';
    }
}




var attr_box=document.getElementsByClassName('attr_box')[0];
var oUl=attr_box.getElementsByClassName('sec_attr')[0];
var aLi=oUl.getElementsByClassName('list');
var nav_list=document.getElementsByClassName('nav_list');
for(var i=0;i<aLi.length;i++){
    (function (index){
        aLi[index].onmouseenter=function (){
            aLi[index].style.opacity='1';
            nav_list[index].style.display='block';
            animate(nav_list[index],{opacity:1})
        };
        aLi[index].onmouseleave=function (){
            aLi[index].style.opacity='1';
            nav_list[index].style.display='none';
            animate(nav_list[index],{opacity:1})
        }
    })(i);
}




var oDiv=document.getElementById('goTop1');
var timer=null;
var bOk=false;
window.onscroll=function(){
    if(bOk){
        clearInterval(timer);
    }
    bOk=true;
    if(utils.win('scrollTop')>utils.win('clientHeight')){
        oDiv.style.display='block';
    }else{
        oDiv.style.display='none';
    }
};
oDiv.onclick=function(){
    var target=utils.win('scrollTop');
    var duration=1000;
    var interval=30;
    var step=target/duration*interval;
    timer=setInterval(function(){
        var curTop=utils.win('scrollTop');
        if(curTop<=0){
            clearInterval(timer);
            return;
        }
        curTop-=step;
        utils.win('scrollTop',curTop);
        bOk=false;
    },interval)
};



(function(){
    //»ñÈ¡ÔªËØ
    var oBox=document.getElementById('box');
    var oBoxInner=oBox.getElementsByTagName('div')[0];
    var aDiv=oBoxInner.getElementsByTagName('div');
    var aImg=oBoxInner.getElementsByTagName('img');
    var oUl=oBox.getElementsByTagName('ul')[0];
    var aLi=oUl.getElementsByTagName('li');
    var oBtnLeft=oBox.getElementsByTagName('a')[0];
    var oBtnRight=oBox.getElementsByTagName('a')[1];
    var step=0;
    oBoxInner.innerHTML+='<div><img src="img/1.jpg" alt=""/></div>';
    utils.css(oBoxInner,'width',aDiv.length*aDiv[0].offsetWidth);

    var timer=null;
    clearInterval(timer);
    timer=setInterval(autoMove,5000);
    function autoMove(){
        if(step>=aDiv.length-1){
            step=0;
            utils.css(oBoxInner,'left',0);
            //animate(oBoxInner,{left:0},1000)
        }
        step++;
        animate(oBoxInner,{left:-step*896});
        bannerTip();
    }

    function bannerTip(){
        var tmpStep=step>=aLi.length?0:step;
        for(var i=0; i<aLi.length; i++){
            aLi[i].className=i==tmpStep?'on':null;
        }
    }

    oBox.onmouseover=function(){
        clearInterval(timer);
        utils.css(oBtnLeft,'display','block');
        utils.css(oBtnRight,'display','block');
    };
    oBox.onmouseout=function(){
        timer=setInterval(autoMove,2000);
        utils.css(oBtnLeft,'display','none');
        utils.css(oBtnRight,'display','none');
    };

    handleChange();
    function handleChange(){
        for(var i=0; i<aLi.length; i++){
            aLi[i].index=i;
            aLi[i].onclick=function(){
                step=this.index;
                animate(oBoxInner,{left:-step*896})
                bannerTip();
            }
        }
    }

    oBtnRight.onclick=autoMove;
    oBtnLeft.onclick=function(){
        if(step<=0){
            step=aDiv.length-1;
            utils.css(oBoxInner,'left',-step*896);
        }
        step--;
        animate(oBoxInner,{left:-step*896})
        bannerTip();
    }


})();