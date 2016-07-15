      window.onload=function(){
            var aLi=document.getElementsByTagName('li');
            for(var i=0;i<aLi.length;i++){
                aLi[i].timer=null;
                aLi[i].onmouseover=function(){
                    startMove(this,{width:400,height:200,opacity:100})
                }
                aLi[i].onmouseout=function(){
                    startMove(this,{width:200,height:100,opacity:30});
                }
            }
        }
