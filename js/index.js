//输入框获取焦点和失去焦点特效
var text=getClass("text");
for (var i = 0; i < text.length; i++) {
	text[i].qq=i
	text[i].onfocus=function(){
		if(text[this.qq].value=="年中促超值来抢"){
			text[this.qq].value="";
		}
	}
	text[i].onblur=function(){
		if(text[this.qq].value==""){
			text[this.qq].value="年中促超值来抢";
		}
	}
};
//输入框获取焦点和失去焦点特效



//右侧黑色小长条划上特效
var youcebox=$(".youcebox");
var zhaoi=$(".zhaoi");
for(var i=0;i<youcebox.length;i++){
    youcebox[i].bb=i;
    youcebox[i].onmouseover=function(){
        zhaoi[this.bb].style.display="block";
    }
    youcebox[i].onmouseout=function(){
        zhaoi[this.bb].style.display="none";
    }
}
//右侧黑色小长条划上特效



// 主导航部分，鼠标划过小猫上移
var narrightli=$("li",$(".nav-right")[0]);
var narrightp=$("p",$(".nav-right")[0]);
for (var i = 0; i < narrightli.length; i++) {
	narrightli[i].aa=i
	narrightli[i].onmouseover=function(){
		animate(narrightp[this.aa],{top:-10},150)
	}
	narrightli[i].onmouseout=function(){
		animate(narrightp[this.aa],{top:0},150)
	}
};
// 主导航部分，鼠标划过小猫上移



//pailie部分划过改变透明度
var pailiecon=$(".pailie-content");
	for (var i = 0; i < pailiecon.length; i++) {
		pailiecon[i].zz=i;
		pailiecon[i].onmouseover=function(){
		// animate(pailiecon[this.zz],{opacity:0.6},150)
		pailiecon[this.zz].style.opacity=0.6;
		}
		pailiecon[i].onmouseout=function(){
		//animate(pailiecon[this.zz],{opacity:1},150)
		pailiecon[this.zz].style.opacity=1;
		}
	};
//pailie部分划过改变透明度



// 热门品牌划过特效代码
var box=getClass("box");
var zhezhao=getClass("zhezhao");
for (var i = 0; i < box.length; i++) {	 
	box[i].aa=i	;
	box[i].onmouseover=function(){
		zhezhao[this.aa].style.display="block";
	}
	box[i].onmouseout=function(){
		zhezhao[this.aa].style.display="none";
	}			
};
var box1=getClass("box1")[0];
var zhezhao1=getClass("zhezhao1")[0];
box1.onmouseover=function(){
	zhezhao1.style.display="block";
}
box1.onmouseout=function(){
	zhezhao1.style.display="none";
}
// 热门品牌划过特效代码



//热门品牌右侧划过改变透明度特效
var huaimg=$(".huaimg");
var huacon=$(".huacon");
var huap=$(".huap")
for (var i = 0; i < huaimg.length; i++) {
	huaimg[i].dd=i;
	huaimg[i].onmouseover=function(){
		// animate(huaimg[this.dd],{opacity:0.6},100)
		// animate(huacon[this.dd],{color:"red"},300)
		// animate(huap[this.dd],{color:red},300)
		huaimg[this.dd].style.opacity="0.6";
		huacon[this.dd].style.color="red";
		huap[this.dd].style.color="red";
	}
	huaimg[i].onmouseout=function(){
		//animate(huaimg[this.dd],{opacity:1},100)
		// animate(huacon[this.dd],{color:333333},300)
		// animate(huap[this.dd],{color:999999},300)
		huaimg[this.dd].style.opacity="1";
		huacon[this.dd].style.color="#333333";
		huap[this.dd].style.color="#999999";
	}
};

for (var i = 0; i < huacon.length; i++) {
	huacon[i].dd=i;
	huacon[i].onmouseover=function(){
		//animate(huaimg[this.dd],{opacity:0.6},100)
		huaimg[this.dd].style.opacity="0.6";
		huacon[this.dd].style.color="red";
		huap[this.dd].style.color="red";
	}
	huacon[i].onmouseout=function(){
		//animate(huaimg[this.dd],{opacity:1},100)
		huaimg[this.dd].style.opacity="1";
		huacon[this.dd].style.color="#333333";
		huap[this.dd].style.color="#999999";
	}
};
//热门品牌右侧划过改变透明度特效



//楼层划过图片改变透明度
var loucengbottomleft=$(".louceng-bottom-left");
var loucengbottomleftimg=$(".louceng-bottom-leftimg");
for (var i = 0; i < loucengbottomleft.length; i++) {
	loucengbottomleft[i].gg=i;
	loucengbottomleft[i].onmouseover=function(){
		loucengbottomleftimg[this.gg].style.opacity="0.8";
	}
	loucengbottomleft[i].onmouseout=function(){
		loucengbottomleftimg[this.gg].style.opacity="1";
	}
};
//楼层划过图片改变透明度



//楼层划过图片左移
var loucengbottomcentercon=$(".louceng-bottom-center-con");
var loucengzuoyi=$(".loucengzuoyi");
for (var i = 0; i < loucengbottomcentercon.length; i++) {
	loucengbottomcentercon[i].ff=i;
	loucengbottomcentercon[i].onmouseover=function(){
		animate(loucengzuoyi[this.ff],{left:94},300);
		// loucengbottomcentercon[this.ff].style.right="5px"
	}
	loucengbottomcentercon[i].onmouseout=function(){
		animate(loucengzuoyi[this.ff],{left:104},300);
		// loucengbottomcentercon[this.ff].style.right="5px"
	}
};

var loucengbottomcenterconi=$(".louceng-bottom-center-coni");
var loucengzuoyii=$(".loucengzuoyii");
for (var j = 0; j < loucengbottomcenterconi.length; j++) {
	loucengbottomcenterconi[j].kk=j;
	loucengbottomcenterconi[j].onmouseover=function(){
		animate(loucengzuoyii[this.kk],{left:145},300);
		// loucengbottomcentercon[this.kk].style.right="5px"
	}
	loucengbottomcenterconi[j].onmouseout=function(){
		animate(loucengzuoyii[this.kk],{left:155},300);
		// loucengbottomcentercon[this.kk].style.right="5px"
	}
};
// //楼层划过图片左移



// 楼层跳转代码
var floor=$(".lou");
var btnli=$("li",$(".leftbtn")[0]);
var now=0;
var colorarr=["#ea5f8d","#64c333","#de4d4c","#f7a945","#19c8a9","#0aa6e8","#dd2727","#dd2727"];
document.documentElement.scrollTop=1;
if(document.documentElement.scrollTop){
	obj=document.documentElement;
}else{
	obj=document.body;
}
//楼层跳转代码

//隐藏导航代码
var leftbtnbox=$(".leftbtnbox")[0]
var ycbigbox=$(".ycbigbox")[0];
var flagdown=1;
var flagup=1;
document.documentElement.scrollTop=1;
if(document.documentElement.scrollTop){
	obj=document.documentElement;
}else{
	obj=document.body;
}
//隐藏导航代码

window.onscroll=function(){
	// 隐藏导航代码		
	if(obj.scrollTop>=1100){
		if(flagdown==1){
			animate(ycbigbox,{top:0},400);
			animate(leftbtnbox,{left:0},400)
			// animate(leftbtnbox,{width:36},400)
			// animate(leftbtnbox,{width:390},400)
			flagdown=2;
			flagup=1;
		}
	}else{
		if(flagup==1){
		animate(ycbigbox,{top:-50},400);
		animate(leftbtnbox,{left:-36},400)
		// animate(leftbtnbox,{width:-36},400)
		// animate(leftbtnbox,{width:-390},400)
		flagup=2;
		flagdown=1;
		}	
	}
//隐藏导航代码

//楼层跳转代码
	for(var i=0; i<floor.length; i++){
		if(floor[i].offsetTop<=obj.scrollTop+150){
			now=i;
			for (var j = 0; j < btnli.length; j++) {
				btnli[j].style.background="#626262";
			};
				btnli[i].style.background=colorarr[i];
		}
		if(floor[0].offsetTop>obj.scrollTop){
				btnli[i].style.background="#626262";
			}
	}

	for (var i = 0; i < btnli.length; i++) {
		btnli[i].index=i;
		btnli[i].onclick=function(){
		now=this.index;
		animate(obj,{scrollTop:floor[this.index].offsetTop-30},500)
		}
		btnli[i].onmouseover=function(){
			for (var j = 0; j < btnli.length; j++) {
				if(now!=j){
				btnli[j].style.background="#626262";
				}
			};
			this.style.background=colorarr[this.index];
		}
		btnli[i].onmouseout=function(){
			for (var j = 0; j < btnli.length; j++) {
				if(now!=j){
				btnli[j].style.background="#626262";
				}
			};
			this.style.background=colorarr[j];
		}
	}
}
// 楼层跳转代码



//旗舰店和猜你喜欢划过图片改变透明度
var tu =$(".tu")
for (var i = 0; i < tu.length; i++) {
	tu[i].yy=i;
	tu[i].onmouseover=function(){
		tu[this.yy].style.opacity=0.5;
	}
	tu[i].onmouseout=function(){
		tu[this.yy].style.opacity=1;
	}
};
//旗舰店划过图片改变透明度



// 潮流划过特效代码
var chaoliucon=getClass("chaoliucon");
//alert(chaoliucon.length)
var chaoliuimg=getClass("chaoliuimg");
// alert(chaoliuimg.length)
for (var i = 0; i < chaoliucon.length; i++) {
	chaoliucon[i].ee=i
	chaoliucon[i].onmouseover=function(){
		animate(chaoliuimg[this.ee],{width:140},60)
		animate(chaoliuimg[this.ee],{height:140},60)
	}
	chaoliucon[i].onmouseout=function(){
		animate(chaoliuimg[this.ee],{width:130},60)
		animate(chaoliuimg[this.ee],{height:130},60)
	}
};
// 潮流划过特效代码



/*闪现轮播*/
var bigbanner=getClass("bigbanner")[0];
var banner=getClass("banner")[0];
var bannerbox=getClass("bannerbox")[0];
var img=bannerbox.getElementsByTagName("a");
var btn=getClass("btn")[0];
var btn_li=btn.getElementsByTagName("li");
var num=0;
var newarr11=["#E9E7EA","#246B4D","#FFEF38","#E8E8E8","#EA1A34","#FC4FA8"];
function change(){
    num++;
    if(num>=img.length){
    	num=0;
    }
    for(var i=0;i<img.length;i++){
    	img[i].style.opacity=0;
    	btn_li[i].id="";
    }
    animate(img[num],{opacity:1});
    //animate(bigbanner[0],{background:newarr11[0]},10);
    animate(bigbanner,{background:newarr11[num]},10);
    btn_li[num].id="btn_li";
}
var t=setInterval(change,2000);
var banner=getClass("banner")[0];
banner.onmouseover=function(){
	clearInterval(t);
}
banner.onmouseout=function(){
	t=setInterval(change,2000);
}
for(var i=0;i<btn_li.length;i++){
    btn_li[i].bb=i;
    btn_li[i].onclick=function(){
    	for(var j=0;j<img.length;j++){
    		img[j].style.opacity=0;
    		btn_li[j].id="";
    	}
    	animate(img[this.bb],{opacity:1});
        animate(bigbanner,{background:newarr11[this.bb]},10);
    	this.id="btn_li";
    	num=this.bb;
    }
}
/*闪现轮播*/



//louceng左边文字上下滚动
var innerbox1=$(".innerbox1")[0];
function Move(){
		var first=getFirst(innerbox1); //获取第一个inner盒子
		animate(first,{height:0},function(){ //第一个inner盒子的高变成0之后
			innerbox1.appendChild(first);  //把第一个inner盒子放到innerbox1最后
			getLast(innerbox1).style.height="100px";  //把盒子的高由0变回100
		})
	}
var t2=setInterval(Move,4000);
//louceng左边文字上下滚动


























//banner右边部分划过改变透明度
// var xianshi=$(".xianshi");
// var bnrright=$(".bnr-right")[0];
// bnrright.onmouseover=function(){
// 	bnrright.style.opacity=1;
// }
// bnrright.onmouseout=function(){
// 	bnrright.style.opacity=0.6;
// }
//banner右边部分划过改变透明度









//旗舰店划过出现边框
// var kuai=$(".kuai")
// var biankuang=$(".biankuang")
// for (var i = 0; i < kuai.length; i++) {
// 	kuai[i].tt=i
// 	kuai[i].onmouseover=function(){
// 	biankuang[this.tt].style.display="block"
// 	}
// 	kuai[i].onmouseout=function(){
// 	biankuang[this.tt].style.display="none"
// 	}
// };
//旗舰店划过出现边框









//图片轮播代码
// var bannerbox=$(".bannerbox")[0];
// var imgbox=getClass("imgbox")[0];
// var img=imgbox.getElementsByTagName('a');
// var btnbox=getClass("btn")[0];
// var btn=btnbox.getElementsByTagName('li');
// var num=0;
// var colorarr1=["#fabed8","#e8e8e8","#fcec37","#0ab9fc","#067d69","#ebebeb"];
// function change(){
// 	num++;
// 	if(num>=6){
// 		num=0;
// 	}
// 	for (var i = 0; i < img.length; i++) {
// 		animate(img[i],{opacity:0})
// 		// img[i].style.zIndex=0;
// 		btn[i].id="";
// 	};
// 	animate(img[num],{opacity:1});
// 		//animate(bannerbox,{background:colorarr1[num]},2000)
// 	bannerbox.style.backgroundColor=colorarr1[num];
// 	btn[num].id="active"
// }
// var t=setInterval(change,4000);

// var banner=getClass("banner")[0];
// banner.onmouseover=function(){
// 	clearInterval(t);
// }
// banner.onmouseout=function(){
// 	t=setInterval(change,4000);
// }
// for (var i = 0; i < btn.length; i++) {
// 	btn[i].aa=i;
// 	btn[i].onclick=function(){
// 		for (var j = 0; j < img.length; j++) {
// 			animate(img[j],{opacity:0});
// 			// img[i].style.zIndex=0;
// 			btn[j].id="";
// 		};
// 		animate(img[this.aa],{opacity:1});
// 		this.id="active";
// 		num=this.aa;
// 	}
// };
// //图片轮播代码
















//banner导航划过弹出二级菜单
// var con=$("li",$(".banner-left")[0])
// var bannerleftCon=$(".bannerleftCon")
// for (var i = 0; i < con.length; i++) {
// 	con[i].nn=i;
// 	con[i].onmouseover=function(){
// 		bannerleftCon[this.nn].style.display="block";
// 	}
// 	con[i].onmouseout=function(){
// 		bannerleftCon[this.nn].style.display="none";
// 	}
// };
//banner导航划过弹出二级菜单













// 楼层跳转代码
// var floor=$(".lou");
// 	//alert(floor.length);
// var btnli=$("li",$(".leftbtn")[0]);
// 	//alert(btnli.length);
// var now=0;
// var colorarr=["#f7a945","#19c8a9","#f15453","#64c333","#0999d6","#ea5f8d","#dd2727","#dd2727"];
// document.documentElement.scrollTop=1;
// if(document.documentElement.scrollTop){
// 	obj=document.documentElement;
// }else{
// 	obj=document.body;
// }
// 楼层跳转代码

// 隐藏导航代码
// var ycbigbox=$(".ycbigbox")[0];
// var flagdown=1;
// var flagup=1;
// document.documentElement.scrollTop=1;
// if(document.documentElement.scrollTop){
// 	obj=document.documentElement;
// }else{
// 	obj=document.body;
// }
// 隐藏导航代码

// window.onscroll=function(){
// 	// 隐藏导航代码		
// 	if(obj.scrollTop>=1100){
// 		if(flagdown==1){
// 			animate(ycbigbox,{top:0},400);
// 			flagdown=2;
// 			flagup=1;
// 		}
// 	}else{
// 		if(flagup==1){
// 		animate(ycbigbox,{top:-50},400);
// 		flagup=2;
// 		flagdown=1;
// 		}	
// 	}
// 隐藏导航代码

// 楼层跳转代码
// 	for(var i=0; i<floor.length; i++){
// 		if(floor[i].offsetTop<=obj.scrollTop+100){
// 			now=i;
// 			for (var j = 0; j < btnli.length; j++) {
// 				btnli[j].style.background="#626262";
// 			};
// 				btnli[i].style.background=colorarr[i];
// 		}
// 		if(floor[0].offsetTop>obj.scrollTop){
// 				btnli[i].style.background="#626262";
// 			}
// 	}

// 	for (var i = 0; i < btnli.length; i++) {
// 		btnli[i].index=i;
// 		btnli[i].onclick=function(){
// 		now=this.index;
// 		animate(obj,{scrollTop:floor[this.index].offsetTop-30},500)
// 		}
// 		btnli[i].onmouseover=function(){
// 			for (var j = 0; j < btnli.length; j++) {
// 				if(now!=j){
// 				btnli[j].style.background="#626262";
// 				}
// 			};
// 			this.style.background=colorarr[this.index];
// 		}
// 		btnli[i].onmouseout=function(){
// 			for (var j = 0; j < btnli.length; j++) {
// 				if(now!=j){
// 				btnli[j].style.background="#626262";
// 				}
// 			};
// 			this.style.background=colorarr[j];
// 		}
// 	}
// }
// 楼层跳转代码


















