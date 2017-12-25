/**
 * Created by maxwell on 2017/12/20.
 */
function klength()
{
    var miwen=document.getElementById("miwen").value.toLowerCase();
    var klen={1,2,3,4,5,6,7,8,9,70};
    var realIC=new Array(0);
    for (var i in klen)
    {
        var ICs=new Array(i);
        for(var c=0;c<i;c++)
        {
            ICs[i]=new Array(0);
        }
        for(var a=0;a<miwen.length;a++)
        {
            for(var b=0;b<i;b++)
            {
                while(a%i==b%i)
                {
                    ICs[i]+=miwen[a];         //将密文分组
                }
            }
        }
        for(var letters='a';letters<'z';letters++) {
            for (var i = 0, l = miwen.length; i < l; i++) {
                miwen[str[i]] = ([str[i]] + 1) || 1;     //确定每一个字符出现的次数
            }
        }
            var IC=new Array(0);
            for(d=0;d<i;d++)
            {
                IC[d]+=(str[i]-1)/(ICs[i].length*(ICs[i].length-1));    //计算IC值
            }
            realIC[i]=average(IC[i]);

        }
        for(i=0;i<10;i++) {
            var ICtrue = realIC[i];
            while (abs(realIC - 0.065) < ICtrue) {
                ICtrue = realIC[i]
            }
        }
        for(i=0;i<10;i++)
{
    if(realIC[i]=ICtrue)
    {
        return i;
        break;
    }
}
}
function qiumiyao() {
    var miwen = document.getElementById("miwen").value.toLowerCase();
    var n = klength();
    var n1=(int)miwen.length/n;
    for(var a=0;a<miwen.length;a++)
    {
        for(var b=0;b<n;b++)
        {
            while(a%i==b%i)
            {
                ICs[n]+=miwen[a];         //将密文分组
            }
        }
    }
    for(var letters='a';letters<'z';letters++) {
        for (var i = 0, l = ICs[i].length; i < l; i++) {
            ICS[f[i]] = ([f[i]] + 1) || 1;     //确定每一个字符出现的次数
        }
    }
    var key=new Array();
   for(var j=1;j<=25;j++)
   {
       M[j]+=f[i]*(f[(i+j)%26])/(n1^2);
   }
    for(i=0;i<;i++) {
        var key = M[j];
        while (M[j] - 0.065)< key) {
            key[i]=k;
        }
    }
return key();
}

