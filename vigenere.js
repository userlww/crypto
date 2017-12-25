/**
 * Created by maxwell on 2017/12/16.
 */
//解密
function jiami()
{
    var mingwen=document.getElementById("mingwen").value.toLowerCase();
    var k1=document.getElementById("k1").value.toLowerCase();
    var miwen=document.getElementById("miwen");
    var code=new Array(0);
    for(var i=0;i<mingwen.length;i++)
    {
        code[i]=String.fromCharCode(((mingwen.charCodeAt(i)-97)+(k1.charCodeAt(i%(k1.length))-97))%26+97);
    }
    for(var j=1;j<mingwen.length;j++)
    {
        code[j]=code[j-1]+code[j];
    }
    miwen.value=code[j-1];
}
function k2pojie() {
    var s=document.getElementById("mingwen").value.toLowerCase();
    var miwen = document.getElementById("miwen").value.toLowerCase();
    var k1 = document.getElementById("k1").value.toLowerCase();
    var mingwen=document.getElementById("mingwenyu");
    var code = new Array(0);
    for (var i = 0; i < miwen.length;i++) {
        code[i]=String.fromCharCode(((miwen.charCodeAt(i)-97)-(k1.charCodeAt(i%(k1.length))-97))%26+97);
    }

    for (var j = 1; j < miwen.length; j++) {
        code[j] = code[j - 1] + code[j];
    }
    mingwen.value=s;
}
