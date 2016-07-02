ie浏览器用currenStyle，非ie浏览器使用getComputedStyle()。*/
function getStyle(obj,name){
if(obj.currentStyle){                           
return obj.currentStyle[name];
}
else{
return getComputedStyle(obj,false)[name];
}
}
--------------------------------------------------------------------------------
/*这是运动实体框架，其中函数的三个参数分别是对象（obj),多个属性和值（json),链式运动（fnscc)*/
function publicMove(obj,json,fnScc){    
clearInterval(obj.timer);         //给对象加一个自定的属性timer定时器
obj.timer=setInterval(function(){
var arrive=true;   //假设都已经到达目标点（多物体运动）
for(var attr in json){
var curr=0;
if(attr=='opacity'){
curr=Math.round(parseFloat(getStyle(obj,attr))*100);
}else
{
curr=parseInt(getStyle(obj,attr));
}
if(curr!=json[attr])
arrive=false;    //如果还有没到达目标的
var speed=(json[attr]-curr)/6;
speed=speed>0?Math.ceil(speed):Math.floor(speed);
if(attr=='opacity'){
obj.style.filter='alpha(opacity'+(curr+speed)+')';
obj.style.opacity=(curr+speed)/100;
}else{
obj.style[attr]=curr+speed+'px';
}
}
if(arrive){
clearInterval(obj.timer);
if(fnScc)fnScc();
}
},30);
