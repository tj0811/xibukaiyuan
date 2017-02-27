/**
 * Created by Administrator on 2016/11/25.
 */
function sportFrame(obj,attr,end)
{
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var speed=0;
        if(attr=='opacity')
        {
            speed=(end-parseInt(cssStyle(obj,attr)*100))/10;
        }else
        {
            speed=(end-parseInt(cssStyle(obj,attr)))/10;
        }

        speed=speed>0?Math.ceil(speed):Math.floor(speed);

        if(parseInt(cssStyle(obj,attr))==end)
        {
            clearInterval(obj.timer);
        }
        else
        {
            if(attr=='opacity')
            {
                var m=parseInt(cssStyle(obj,attr)*100)+speed;

//                        obj.style.filter='alpha(opacity:'+m+')';  //iE
//                        obj.style.opacity=m/100;                     //ff chrome

                cssStyle(obj,'filter','alpha(opacity:'+m+')');
                cssStyle(obj,attr,m/100);
            }else
            {
                cssStyle(obj,attr,(parseInt(cssStyle(obj,attr))+speed+'px'));
            }

        }
    },30);

}

//样式框架
function cssStyle(obj,attr,value)
{
    if(arguments.length==2)
    {
        if(obj.currentStyle)
        {
            return obj.currentStyle[attr];   // px
        }
        else
        {
            return getComputedStyle(obj,false)[attr];
        }
    }
    else
    {
        if(arguments.length==3)
        {
            obj.style[attr]=value;
        }
    }
}
