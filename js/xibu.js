/**
 * Created by asus1 on 2016/12/5.
 */
function lunboqi(obj,objaImg){


    obj.style.width=objaImg[0].offsetWidth*objaImg.length+'px';
    var num=1;      //������
    var num2=4;     //������
    setInterval(function(){
        if(num<4) {
            sportFrame(obj, 'left',-(num*1280)); // �˶�����˶�
            num++;                         //����������
        }
        else
        {
            if(num2>0) {

                num2--;
                sportFrame(obj,'left', -(num2*1280));
            }
            else
            {
                num=1;       // �ָ�������ԭʼ״̬
                num2=4;
            }
        }
    },4000);
}