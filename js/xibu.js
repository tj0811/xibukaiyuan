/**
 * Created by asus1 on 2016/12/5.
 */
function lunboqi(obj,objaImg){


    obj.style.width=objaImg[0].offsetWidth*objaImg.length+'px';
    var num=1;      //计数器
    var num2=4;     //计数器
    setInterval(function(){
        if(num<4) {
            sportFrame(obj, 'left',-(num*1280)); // 运动框架运动
            num++;                         //计数器自增
        }
        else
        {
            if(num2>0) {

                num2--;
                sportFrame(obj,'left', -(num2*1280));
            }
            else
            {
                num=1;       // 恢复计数器原始状态
                num2=4;
            }
        }
    },4000);
}