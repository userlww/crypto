//  加密功能
function jiami()
{
    var mingwen=document.getElementById("mingwen").value.toLowerCase();
    var a=parseInt(document.getElementById("k1").value);
    var b=parseInt(document.getElementById("k2").value);
    var code=new Array(0);
    var miwen=new Array(0);
    var j;
    var str;
    for(var i=0;i<mingwen.length;i++)
    {
        code[i]=((a*(mingwen.charCodeAt(i)-97)+b)%26);
        miwen[i]=String.fromCharCode(code[i]+97);
    }
    for( j=1;j<miwen.length;j++)
    {
        miwen[j]=miwen[j-1]+miwen[j];
    }
    var result=document.getElementById("miwen");
    result.innerText=miwen[j-1];
}
//求秘钥
function qiuk2() {
    var a = parseInt(document.getElementById("k1").value);
    var b=parseInt(document.getElementById("k2").value);
    var c = document.getElementById("k3");
    var d=document.getElementById("k4");
    var e;
    switch (a)
    {
        case 1:e=1;break;
        case 3:e=9;break;
        case 5:e=21;break;
        case 7:e=15;break;
        case 9:e=3;break;
        case 11:e=19;break;
        case 15:e=7;break;
        case 17:e=23;break;
        case 19:e=11;break;
        case 21:e=15;break;
        case 23:e=17;break;
        case 25:e=25;break;
        default: alert("您输入的密钥有误");
    }
    c.value=e;
}
//已知密钥破解
function k2pojie()
{
    var miwen=document.getElementById("miwen").value.toLowerCase();
    var result=document.getElementById("mingwenyu");
    var c=parseInt(document.getElementById("k3").value);
    var d=parseInt(document.getElementById("k2").value);
    var mingwen=new Array(0);
    var code=new Array(0);
    for(var i=0;i<miwen.length;i++)
    {
        code[i]=(c*(miwen.charCodeAt(i)-97-d+26))%26;
        mingwen[i]=String.fromCharCode(code[i]+97);
    }
    for(var i=1;i<mingwen.length;i++)
    {
        mingwen[i]=mingwen[i-1]+mingwen[i];
    }
    result.value=mingwen[i-1];
}
//暴力破解
function baopo() {
    var miwen = document.getElementById("miwen").value.toLowerCase();
    var a = [1, 9, 21, 15, 3, 19, 7, 23, 11, 15, 17, 25];
    var code = new Array(0);
    var mingwen = new Array(0);
    var result=document.getElementById("mingwenyu");
    for (var j = 0; j < 12; j++)
        for (var b = 0; b < 26; b++)
        {
            for (var i = 0; i < miwen.length; i++)
            {
                code[i] = ((a[j] * (miwen.charCodeAt(i) - 97) + b) % 26);
                mingwen[i] = String.fromCharCode(code[i] + 97);
            }
            for (var k = 1; k < miwen.length; k++)
            {
                mingwen[k] = mingwen[k - 1] + mingwen[k];
            }
            mingwen[k]=mingwen[k-1]+" \n";
            result.value+=mingwen[k];

        }

}







