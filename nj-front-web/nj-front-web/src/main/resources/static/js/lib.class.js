/**
 * 名称：基类
 * 功能：服务于调用类
 *			
 * Copyright Software
 * 
 * 
 */


String.prototype.trim=function(){//替换所有空格！
	return this.replace(/^\s+|\s+$/g,""); 
};

/**
 * 返回一个数组元素的下标，返回下标
 * @param val
 * @returns {Number}
 */
Array.prototype.indexOf = function(val) { 
    for (var i = 0; i < this.length; i++) 
    	if (this[i] == val) 
    		return i;  
	return -1;   
};   
/**
 * 根据内容删除一个元素，返回数组
 * @param val
 */
Array.prototype.remove = function(val) {    
	var index = this.indexOf(val);      
	if (index > -1)          
		this.splice(index, 1);    
}; 
/**
 * 数组根据下标删除一个元素，返回一个删除后的数组
 * @param n
 * @returns
 */
Array.prototype.del=function(n) {  //n表示第几项，从0开始算起。
    //prototype为对象原型，注意这里为对象增加自定义方法的方法。
      if(n<0)  //如果n<0，则不进行任何操作。
        return this;
      else
        return this.slice(0,n).concat(this.slice(n+1,this.length));
        /*
          concat方法：返回一个新数组，这个新数组是由两个或更多数组组合而成的。
          　　　　　　这里就是返回this.slice(0,n)/this.slice(n+1,this.length)
         　　　　　　组成的新数组，这中间，刚好少了第n项。
          slice方法： 返回一个数组的一段，两个参数，分别指定开始和结束的位置。
        */
}
 
//添加一个数组包含的方法
Array.prototype.contains = function(obj) {
        var i = this.length;
        while(i--)
			if (this[i] === obj)
				return true;
		return false;
} ;

if(!window.System) System={};

(function(window, undefined){
	
	var __this__;
	function Basis(){
		__this__=this;
		this._super={};
		this.Browser=null;
		this.setBrowser=function(Browser){
			if(Browser){
				this.Browser=Browser;
			}
		};

		// if(!this.Browser){
		// 	alert("you need put an argument to setBrowser method!");
		// }

		this.each=function(a,fun){
			if(!a || !this.isF(fun)) 
				return;
			for(var i=0;i<a.length;i++)
				fun.call(a[i],i);
		};
		
		/**
		 * 如果对象的属性的值还是一个对象的话就递归搜索，直到对象下的属性不是对象位置
		 * @ Obj : 对象
		 * @ fn : 回调的方法
		 */
		this.list=function(Obj,fn){
			var k,v;
			if(!this.isO(Obj)) 
				return Obj;
			for(k in Obj){
				this.list(Obj[k],fn);
				if(this.isF(fn)){v=Obj[k];fn.call(Obj,k,v);}
			}
		};

		this.$=function(id){return document.getElementById(id);};
		this.toString=function(){};
		this.isS=function(s){return ('string'===typeof s);};
		this.isF=function(fn){return ('function'===typeof fn);};
		this.isO=function(obj){
			if(obj instanceof Object) return true;
			var flag=false;
			if('object'===typeof obj){
				for(var i in obj)
					return true;
			}else{
				flag=false;
			}
			return flag;
		};
		this.isEmptyObject=function(obj){
		    for(var n in obj){return false} 
		    return true; 
		};
		this.isUndef=function(obj){return ("undefined"==typeof obj);};
		this.isNum=function(n){return ("number"==typeof n);};
		this.isArray=function(a){
			return (a instanceof Array) || (Object.prototype.toString.call(a) === '[object Array]');
		};
		

		
		this.findClass=function(node,attName){
			var i,
				len=node.attributes.length,
				att=attributes;
			for(i=0;i<len;i++){
				if(node.att[i].nodeName==attName)
					return true;
			}
		};

		
		this.getStyle=function(obj,attr){
			if(obj.currentStyle)
				return obj.currentStyle[attr];
			else
				return getComputedStyle(obj,false)[attr];
		};

		
		this.addClass=function(obj,className){//给指定元素添加类名
			obj.className+=" "+className;
			return obj;
		};
		this.delClass=function(obj,className){
			var s=obj.className.split(/\s+/);
			for(var i=0;i<s.length;i++)
				if(s[i]==className) 
					delete s[i];
			obj.className=s.join(" ");
			return obj;
		};
		this.hasClass=function(node,classNames){//测试一个元素是否有多个类名
			var names=node.className.split(/\s+/);
			for(var i=0;i<names.length;i++){
				if(names[i]==classNames) {
					return true;
				}
			}
			return false;
		};
		this.getClass=function(className,context,tag){//获取类名集合
			var context=context || document,
				tag=tag||"*";
			if(context.getElementsByClassName)
				return context.getElementsByClassName(className);
			var tags=context.getElementsByTagName(tag);
			var ret=[];
			for(var i=0;i<tags.length;i++){
				if(this.hasClass(tags[i],className))
					ret.push(tags[i]);
			}
			return ret;
		};
		this.css=function(obj,attr,value){//多个同名元素设置用同一样式
			if(undefined==obj.length){
				obj.style[attr]=value;
			}else{
				for(var i=0;i<obj.length;i++)
					obj[i].style[attr]=value;
			}
		};
		
		
		this.getCookie=function(name){//获取Cookie
			var cookies=document.cookie.split("; ");
			for(var i=0,c;i<cookies.length;i++){
				c=cookies[i].split('=');
				if(c[0]==name) 
					return decodeURIComponent(c[1]);
			}
			return '';
		};
		
		
		
		
		/*----------------------------------
		filter all string return number of them
		过滤所有字符串返回数字
		Number filter_char(String s);
		---------------------------------*/
		this.filter_char=function(s){return String(s).replace(/[^\d]*/ig,"");};
		

		this.find_str=function(s){
			if(""===s) 
				return;
			return String(s).match(/[^\d]*/i);
		};
		
		this.compare_two_str=function(s1,s2){
			if(s1=="" || s2=="") 
				return false;
			s1=String(s1).match(/[^\d]*/i);
			s2=String(s2).match(/[^\d]*/i);
			if(s1==s2)
				return true;
			else
				return false;
		};
		this.swap=function(A,B){
			var C;
			C=A;
			A=B;
			B=C;
			return [A,B];
		};
		
		
		this.sort=function(fn_info,a,key){
			if(!a) return;
			a.sort(function(x,y){
				var flag=0,n1,n2;
				if(__this__.isO(x) && __this__.isO(y) && __this__.isS(x[key]) && __this__.isS(y[key])){
					n1=__this__.filter_char(x[key]);
					n2=__this__.filter_char(y[key]);
				}else{
					n1=__this__.filter_char(x);
					n2=__this__.filter_char(y);
				}
				if(n1>n2){
					flag=1;
				}else if(n1<n2){
					flag=-1;
				}else{
					x.flag=y.flag=1;
					if(__this__.isF(fn_info)){
						fn_info.call(this,x[key]);
					}
					
				}
				return flag;
			});
		};

		this.addEvent=function(obj,evt,fn){//给某个对象添加多个事件监听函数
			if(obj.addEventListener){//对象检测
				if("[object Opera]"==String(window.opera)){
					obj.addEventListener(evt,function(evt){
						evt.layerX=evt.offsetX;
						evt.layerY=evt.offsetY;
						fn.call(this,evt);
					},false);	
				}else{
					obj.addEventListener(evt,fn,false);	
				}
				return obj;
			}
			
			if(!obj.functions) obj.functions={};
			if(!obj.functions[evt]) obj.functions[evt]=[];
			var functions=obj.functions[evt];
			for(var i=0;i<functions.length;i++){
				if(functions[i]===fn) return obj;//如果已经存在就返回
			}
			functions.push(fn);//把函数保存到数组中
			//fn.index=functions.length-1;
			if(typeof obj["on"+evt]=="function"){//检测是否已经注册过事件监听函数
				if(obj["on"+evt]!=Basis.handler) 
					functions.push(obj["on"+evt]);//
			}
			obj["on"+evt]=function(){
				Basis.handler();	
			};
			return obj;
			
		};
		this.handler=function(e){//哪个事件发生了？
			var evt=this.Browser.fixEvt(e);
			var evtype=evt.type;
			var functions=Basis.addEvent.obj.functions[evt];//这里有问题需要重新检查一下
			for(var i=0;i<functions.length;i++){
				if(functions[i]) 
					functions[i].call(Basis,evt);//call的方法起到一个对象冒充的作用（把指向window对象变成指向当前对象）
			}
		};
		this.delEvent=function(obj,evt,fn){//删除事件监听
			if(obj.functions){
				var fns=obj.functions;
				if(fns!=null) {
					fns=fns[evt];
					if(fns!=null){
						for(var i=0;i<fns.length;i++)
							if(fns[i]==fn)
								delete fns[i];
					}
				}
			}
			return obj;
		};

		
		
		
		
	}



	/*-------------------------------------------------------------------
	static 
	---------------------------------------------------------------------------*/
	Basis.jQuery=function(url){
		!window.jQuery && document.write('<script src="'+url+'" type="text/javascript"><\/script>');
	};

	Basis.addFavorite=function(address,name){//添加到收藏夹（地址，关键字）
		if(window.external && ("addFavorite" in window.external)){//IE
			window.external.addFavorite(address,name);
		}else if(window.sidebar && window.sidebar.addPanel){//FF
			window.sidebar.addPanel(name,address,name);
		}
	};
	Basis.getElementsByClassName=function(node, classname){
	    if(node.getElementsByClassName){
	        return node.getElementsByClassName(classname);
	    }else{
	        var results = [];
	        var elems = node.getElementsByTagName("*");
	        for(var i=0; i<elems.length; i++){
	            if(elems[i].className.indexOf(classname) != -1)
	                results[results.length] = elems[i];
	        }
	        return results;
	    }
	};

	
	Basis.changeBgColor=function(dom_table,color){//(节点对象)表格每行鼠标移上去变色，移出恢复
		var table=dom_table;
		var tr=table.rows;
		for(var i=0;i<tr.length;i++){
			tr[i].onmouseover=function(){
				this.style.backgroundColor=color;
			};
			tr[i].onmouseout=function(){
				this.style.backgroundColor="";
			};
		}
	};

	
	Basis.fixEvt=function(e){//解决事件兼容问题
		e = e || window.event;
		if("mouseover" == e.type){
			 e.relatedTarget = e.fromElement;
		}else if("mouseout" == e.type){
			e.relatedTarget = e.toElement;
		}
		if(!e.target){
			e.target=e.srcElement;
			e.layerX=e.offsetX;
			e.layerY=e.offsetY;
			e.pageX=e.clientX+document.documentElement.scrollLeft;
			e.pageY=e.clientY+document.documentElement.scrollTop;
			e.stopPropagation=function(){//停止事件冒泡方法
				e.cancelBubble=true;
			};
			e.preventDefault=function(){
				e.returnValue=false;
			};
		}
		return e;
	};
	Basis.getRealStyle=function(obj,s){//（对象，属性名）获取当前的style元素里的css属性值
		var style;
		if(window.getComputedStyle){//W3C
			Style=window.getComputedStyle(obj,null);
		}else if(obj.currentStyle){//IE
			Style=obj.currentStyle;
		}
		return sytle[s];
	};
	Basis.addRule=function(sheet,selector,cssText,i){//向指定样式表中添加一个CSS规则
		if(sheet.insertRule){//W3c
			sheet.insertRule(selector+"{"+cssText+"}",i);
		}else if(sheet.addRule){//IE
			sheet.addRule(selector,cssText,i);
		}
	};
	Basis.delRule=function(sheet,index){
		if(sheet.deleteRule){
			sheet.deleteRule(index);
		}else if(sheet.removeRule){
			sheet.removeRule(index);
		}
	};
	Basis.setLinkStyle=function(arg){//动态切换样式表
		/**
		{
			csslink:
			url:"skin/style/css/"
			color:
			...
		}
		*/
		for(i in arg){
			if(i=="csslink" || i=="url") {continue;}
			(function(i){
				arg[i].onclick=function(){
					arg["csslink"].setAttribute("href",arg["url"]+i+".css");
				};
			})(i);
		}
	};
	
	window.System.Basis=Basis;
})(window);


window.System.main=function(fn,obj){
	if(!fn) return;
	var obj=obj||this;
	if(fn){
		fn.call(obj);
	}
};
window.System.length=function(obj){
	obj=obj||this;
	var n=0,i;
	for(i in obj) 
		n++;
	return n;
};
/**
 * 子类继承父类对象
 * @
 * @
 */
window.System.extends_o=function(obj_sub,obj_super,type){
	type=type || false;
	if('p'==type){
		for(var i in obj_super)
			obj_sub[i].prototype=obj_super[i];
	}else{
		obj_super.call(obj_sub);
	}
	
};
/**
 * 在对象中扩充指定的方法
 * @
 * @
 */
window.System.extends_f=function(obj,name,fn){
	obj.prototype.name=fn;
};


(function(window, undefined){
	function Dom(){
		var __this__=this;
		/**
		 * 节点元素属性的获取或设置操作
		 * tagName :节点元素标签名
		 * Obj :{'key':value}
		 * return : 返回节点元素
		 */
		this.createTag=function(tagName,Obj){
			var node=document.createElement(tagName);
			for(var key in Obj){
				if(key!=null && Obj[key] != null)
					node.setAttribute(key,Obj[key]);
			}
			return node;
		};
		
		this.cloneNode=function(node,logic){
			 if(logic)
			 	return node.cloneNode(true);
			 else
			 	return node.cloneNode(false);
		};

		this.removeAttr=function(node,attrName){
			node.removeAttribute(attrName);
		};

		this.append=function(oldNode,newNode){
			oldNode.appendChild(newNode);
		};

		this.getNodeName=function(node){
			return node.nodeName;
		};

	　　this.delNode=function(node){//在它的父节点调用removeChild 然后把它自身移除
			this.getParent(node).removeChild(node);
		};
		
		this.getParent=function(node){//获取当前节点的父节点
			return node.parentNode;
		};

		this.replaceNode=function(newNode,current){//替换节点
			this.getParent(current).replaceChild(newNode , current);
		};

		this.insertBefore=function(newNode , current){//在oldNode的父节点上调用insertBefore燃后把新节点插入它自身前面
			this.getParent(current).insertBefore(newNode , current);
			
		};

		this.insertAfter=function(node,newNode){
			if(node.nextSibling){//如果node有下一个节点的话
				this.insertBefore(newNode,node.nextSibling);
			}else{
				this.append(this.getParent(node),newNode);
			}
			return newNode;
		};

		this.delNodeMore=function(){//删除多个节点
			for(var i=0;i<arguments.length;i++){
				this.delNode(auguments[i]);
			}
		};
　  	

　　
		/**
		 * 节点元素属性的获取或设置操作
		 * 
		 */
		this.attr=function(){
			var node,key,itme,
				len=arguments.length;
			switch (len){
				case 3:
					node=arguments[0];
					name=arguments[1];
					item=arguments[2];
					try{
						node.setAttribute(name,item);
					}catch(e){
						alert("sorry without the method of setAttribute "+e.name);
					}
				break;
				case 2:
					node=arguments[0];
					name=arguments[1];
					try{
						return node.getAttribute(name);
					}catch(e){
						alert("sorry without the method of setAttribute "+e.name);
					}
					
				break;
				default:
			}
			
		};

		this.firstChild=function(node){//查找下面的元素是不是节点元素
			if(node.firstChild){//有子节点的话
				var n=node.firstChild;
				if(n.nodeType==1) return n;
				return this.nextSibling(n);
			}
			return null;
		};
		this.lastChild=function(node){//查找元素最后节点是不是节点元素
			if(node.lastChild){//有子节点的话
				var n=node.lastChild;
				if(n.nodeType==1) return n;
				return this.previousSibling(n);
			}
			return null;
		};
		this.previousSibling=function(node){//查找前一个节点是否是元素节点排除所有非元素节点
			if(node.previousSibling){
				var n=node.previousSibling;
				if(n.nodeType==1) return n;
				while(n=n.previousSibling){//查找上一个节点----->上一个节点------->上一个节点.........直到没有节点为止
					if(n.nodeType==1) return n;
				}
			}
			return null;
		};
		this.nextSibling=function(node){
			if(node.nextSibling){
				var n=node.nextSibling;
				if(n.nodeType==1) return n;
				while(n=n.nextSibling){//查找下一个节点----->下一个节点------->下一个节点.........直到没有节点为止
					if(n.nodeType==1) return n;
				}
			}
			return null;
		};
		this.filterSpaceNode=function(nodes){//过滤元素中包含的所有空白节点
			var ret=[];
			for(var i=0;i<nodes.length;i++){
				if(nodes[i].nodeType===3 && /^\s+$/.test(nodes[i].nodeValue)) continue;//查找是否是文本节点且有空格
				ret.push(nodes[i]);
			}
			return ret;
		};




	}


	window.System.Dom=Dom;
})(window);
/*------------------------------------------------------------------

--------------------------------------------------------------------*/


(function(window, undefined){
	
	var __this__;
	function linklist(){
		__this__=this;
		this.firstChild=function(node){//查找下面的元素是不是节点元素
			if(node.firstChild){//有子节点的话
				var n=node.firstChild;
				if(n.nodeType==1) return n;
				return this.nextSibling(n);
			}
			return null;
		};
		this.lastChild=function(node){//查找元素最后节点是不是节点元素
			if(node.lastChild){//有子节点的话
				var n=node.lastChild;
				if(n.nodeType==1) return n;
				return this.previousSibling(n);
			}
			return null;
		};
		this.previousSibling=function(node){//查找前一个节点是否是元素节点排除所有非元素节点
			if(node.previousSibling){
				var n=node.previousSibling;
				if(n.nodeType==1) return n;
				while(n=n.previousSibling){//查找上一个节点----->上一个节点------->上一个节点.........直到没有节点为止
					if(n.nodeType==1) return n;
				}
			}
			return null;
		};
		this.nextSibling=function(node){
			if(node.nextSibling){
				var n=node.nextSibling;
				if(n.nodeType==1) return n;
				while(n=n.nextSibling){//查找下一个节点----->下一个节点------->下一个节点.........直到没有节点为止
					if(n.nodeType==1) return n;
				}
			}
			return null;
		};
		this.filterSpaceNode=function(nodes){//过滤元素中包含的所有空白节点
			var ret=[];
			for(var i=0;i<nodes.length;i++){
				if(nodes[i].nodeType===3 && /^\s+$/.test(nodes[i].nodeValue)) continue;//查找是否是文本节点且有空格
				ret.push(nodes[i]);
			}
			return ret;
		};
	}


	window.System.linklist=linklist;
})(window);
//==============================================================================================



(function(window, undefined){
	
	function Fsc(file){
		if(window.System && window.System.Basis) {
			window.System.Basis.call(this);
			this.setBrowser(Browser);
		}
		var fso=null,
			__this__=this;
		this.file=file;
		this.getFso=function(){return fso;};
		this.cFile=function(file){
			if(ActiveXObject){//IE
				var fso = new ActiveXObject("Scripting.FileSystemObject"); 
				var f= fso.CreateTextFile(file, true); 
				f.WriteLine("Hello");
				f.WriteBlankLines(1); //换行
				f.Close();
			}else{
				
			}
		};
	}
	window.System.Fsc=Fsc;
})(window);



(function(window,undefined){
	
	var __this__;
	function Browser(){
		if(window.System && window.System.Basis) {
			window.System.Basis.call(this);
		}
		__this__=this;
		this.where=function(){};
		this.isIE=function(){
			return /MSIE/.test(navigator.userAgent);
		};
		this.isIE6=function(){
			if(!-[1,] && !window.XMLHttpRequest){//IE6
				return true;
			}else{
				return false;
			}
		};
		
		this.innerSize=function(){//获取浏览器窗口视口宽度和高度
			return{
				width:window.innerWidth || document.documentElement.clientWidth,
				height:window.innerHeight || document.documentElement.clientHeight
			};
		};
		this.fixEvt=function(e){//解决事件兼容问题
			return System.Basis.fixEvt(e);
		};

		this.fixed=function(elem){//IE实现 css fixed
			var style = elem.style,
				dom = document.documentElement || document.body,
				top = parseInt(style.top);
			if(dom.scrollTop > 0 || old < dom.scrollTop){
				top=top+dom.scrollTop;
				style.top=top+"px";
				old=dom.scrollTop;
			}else if(dom.scrollTop < 0 || old > dom.scrollTop){
				top=top-dom.scrollTop;
				style.top=top+"px";
				old=dom.scrollTop;
			}
		};

		this.auto_center=function(pad,elem){
			var pad=pad||0,
				style=elem.style,
				top=parseInt(elem.offsetHeight),
				left=parseInt(elem.offsetWidth),
				h=parseInt(this.innerSize().height),
				w=parseInt(this.innerSize().width);
			style.top=(h-top-pad)/2+'px';
			style.left=(w-left-pad)/2+'px';
			if(this.isIE6()){
				this.fixed(elem);
			}else{
				style.position="fixed";
			}
		};
		
		this.showDialog=function(url){
			if(document.all){//IE   
			   feature="dialogWidth:300px;dialogHeight:200px;status:no;help:no";  
			   window.showModalDialog(url,null,feature);  
		   }else{  
			 //modelessDialog可以将modal换成dialog=yes  
			   feature ="width=300,height=200,menubar=no,toolbar=no,location=no,";  
			   feature+="scrollbars=no,status=no,modal=yes";    
			   window.open(url,null,feature);  
		   }  
		};


	}
	window.System.Browser=Browser;
})(window);


(function(window,undefined){
	
	function Less(){
		if(window.System && window.System.Basis) {
			window.System.Basis.call(this);
			this.setBrowser(Browser);
		}
		var __this__=this;
		var symbol=[];
		this.var_arr={'var':/^@[a-zA-Z0-9_\-]+/gi};
		this.fined=function(){};
		this.check=function(){};
		this.init=function(){};
		this.display=function(){};
		this.read=function(){};
		this.replace=function(){};
		this.add_symbol=function(s){
			symbol.push(s);
		};
	}
	window.System.Less=Less;
})(window);


//运动框架
(function(window,jQuery,undefined){
	var $=jQuery,__this__;
	function Sport(Browser){
		__this__=this;
		if(window.System && window.System.Basis) {
			window.System.Basis.call(this);
			this.setBrowser(Browser);
		}
		function Move(obj,oTarget,fn){
			var iCur=0;
			var arr="";
			var bStop=true;
			for(arr in oTarget){
				if(arr=="opacity"){
					iCur=parseInt(parseFloat(__this__.getStyle(obj, 'opacity'))*100);
				}else{
					iCur=parseInt(__this__.getStyle(obj,arr));
				}
				if(isNaN(iCur)){iCur=0;}
				var speed=(oTarget[arr]-iCur)/5;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if(oTarget[arr]!=iCur){bStop=false;}
				if(arr=="opacity"){
					obj.style.filter="alpha(opacity:"+(iCur+speed)+")";
					obj.style.opacity=(iCur+speed)/100;
				}else{
					obj.style[arr]=iCur+speed+"px";
				}
			}
			if(bStop){
				clearInterval(obj.timer);
				obj.timer=null;
			}
			if(fn){fn();}
		}

		this.doMove=function (obj,oTarget,time,fn){
			var time=time||30;
			if(obj.timer){clearInterval(obj.timer);}
			obj.timer=setInterval(function(){Move(obj,oTarget,fn)},time)
		};

		/**
		 * 动画（对象，增量用对象方式传经来，开始值用对象方式传经来，时间）
		 * 
		 * 
		 */
	　　this.animation=function(obj,start,alter,dur){
			var linear=this.linear;
			var curTime=0;
			var t=setInterval(function(){
				if(curTime>=dur) clearInterval(t);
				for(var i in start){
					obj.style[i]=linear(start[i],alter[i],curTime,dur)+"px";
				}
				curTime+=50;
			},50);	
		};


		/**
		 * 动画（对象，{增量用对象方式传经来}，{开始值用对象方式传经来}，时间,函数）
		 * 
		 * 
		 */
		this.animation_A=function(obj,start,alter,dur,fx){
			/**
			参数说明：
			curTime:当前时间，即动画已经进行了多长时间，开始时间为0
			start:开始值
			dur:动画持续多长时间
			alter:总的变化量
			*/
			var curTime=0;
			var t=setInterval(function(){
				if(curTime>=dur) clearInterval(t);
				for(var i in start){
					obj.style[i]=fx(start[i],alter[i],curTime,dur)+"px";
				}
				curTime+=50;
			},50);	
			return t;
		};
		this.opacity=function(obj,opacity){//透明度（对象，透明度值）
			//var linear=this.linear;
			var setOpacity=this.setOpacity;
			var curTime=0;
			var t=setInterval(function(){
				if(curTime>=dur) clearInterval(t);
					obj.style=__this__.linear(start,alter,curTime,dur)+"px";
				curTime+=50;
			},50);	
		};
		this.setOpacity=function(obj,opacity){
			if(typeof obj.style.opacity=="string"){//FF
					obj.style.opacity=opacity/100;
			}else {//IE
				obj.style.filter="alpha(opacity="+opacity+")";
			}	
		};
		this.linear=function(start,alter,curTime,dur){//最简单的线性变化，即匀速运动
			return start+curTime/dur*alter;
		};
		this.quad=function(start,alter,curTime,dur){//加速变化
			return start+Math.pow(curTime/dur,2)*alter;
		};
		/**
		 * 动画（对象，样式属性，增量，开始值，结束值，时间）
		 * 
		 * 
		 */
		this.animation_B=function(obj,arrt,add,start,end,t){
			var saved=start;
			setInterval(function(){
				if(saved>=end) return;
				saved+=add
				obj.style[arrt]=saved+"px";					 
			},t);	
		};

	}
	window.System.Sport=Sport;
})(window,jQuery);




(function(window, undefined){
	
	function Error(sMessage, sUrl, sLine){
		//注意：onerror事件必需在此网页中其它Javascript程序之前！
        this.reportError=function(){            
			var str = "";            
			str += " 错误信息:" + sMessage + "\n";            
			str += " 错误地址:" + sUrl + "\n";            
			str += " 错误行数:" + sLine + "\n";            
			str += "<=========调用堆栈=========>\n";            
			var func = window.onerror.caller;            
			var index = 0;            
			while (func != null) {                
				str += "第" + index + "个函数：" + func + "\n";
				str += "第" + index + "个函数：参数表：";                
				for(var i=0;i<func.arguments.count;i++){                
					str += func.arguments[i] + ",";                
				}                
				str += func;                
				str += "\n===================\n";                
				func = func.caller;                
				index++;            
			}            
			return true;        
		};             
	}
	window.System.Error= Error;
})(window);



(function(window,undefined){
	
	function Drag(dom,Browser){//实现鼠标拖动元素
		
		if(!dom) return this;
		if(window.System && window.System.Basis) {
			window.System.Basis.call(this);
			this.setBrowser(Browser);
		}
		var __this__=this;
		this.disX=0;
		this.disY=0;
		this.dom=dom;
		this.Browser=Browser;
		this.dom.onmousedown=function(e){
			__this__.fnDown(e);
			return false;
		};

		this.fnDown=function(e){
			e = this.Browser.fixEvt(e);
			this.disX = e.clientX - this.dom.offsetLeft;
			this.disY = e.clientY - this.dom.offsetTop;

			document.onmousemove=function(e){
				__this__.fnMove(e);
			};
			document.onmouseup=function(){
				__this__.fnUp();
			};
		};

		this.fnMove=function(e){
			e = this.Browser.fixEvt(e);
			var l=e.clientX-this.disX;
			var t=e.clientY-this.disY;
			if(l<0){
				l=0;
			}else if(l>document.documentElement.clientWidth-this.dom.offsetWidth){
				l=document.documentElement.clientWidth-this.dom.offsetWidth;
			}

			if(t<0){
				t=0;
			}else if(t>document.documentElement.clientHeight-this.dom.offsetHeight){
				t=document.documentElement.clientHeight-this.dom.offsetHeight;
			}

			this.dom.style.left = l+'px';
			this.dom.style.top  = t+'px';
		};

		this.fnUp=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		};
		
	}


	function Drag_A(obj){//实现鼠标拖动元素
		
		window.System.Basis.call(this);
		var __this__=this;

		this.flag=null;
		this.savedMousePos=null;
		
		window.System.Basis.addEvent(obj,'mousedown',function(evt){
			__this__.flag=true;
			__this__.savedMousePos={
				x:evt.layerX,
				y:evt.layerY
			};
		});
		window.System.Basis.addEvent(obj,'mousemove',function(evt){
			evt.preventDefault();
			if(!this.flag)
				return;
			this.style.left=evt.clientX-this.savedMousePos.x+"px";
			this.style.top=evt.clientY-this.savedMousePos.y+"px";
		});
		window.System.Basis.addEvent(document,'mouseup',function(evt){
			obj.flag=false;
		});
	}
	window.System.Drag=Drag;
	window.System.Drag_A=Drag_A;
})(window);

if(!window.js)
	js={};
if(!js.awt)
	js.awt={};

js.awt.Event = function(Browser,e){
   	
    var _e = Browser.fixEvt(e);
    var ie = (_e.stopPropagation == undefined);
    this.event = _e;
    this.type  = _e.type;
    this.timeStamp = new Date();

    this.altKey    = _e.altKey   || false;
    this.ctrlKey   = _e.ctrlKey  || false;
    this.shiftKey  = _e.shiftKey || false;
    this.metaKey   = _e.metaKey  || false;

    this.keyCode   = ie ? _e.keyCode : _e.which;
    
    // left:1, right:2, middle:4
    switch(_e.button){
    case 0:
        this.button = 1;
        break;
    case 1:
        this.button = ie ? 1 : 4;
        break;
    default:
        this.button = _e.button;
        break;
    }

    this.clientX 	= ie ? (_e.clientX + document.documentElement.scrollLeft - document.body.clientLeft) : _e.pageX;
    this.clientY 	= ie ? (_e.clientY + document.documentElement.scrollTop  - document.body.clientTop ) : _e.pageY;
    this.offsetX 	= ie ? _e.offsetX : _e.layerX;
    this.offsetY 	= ie ? _e.offsetY : _e.layerY;
    this.srcElement = ie ? _e.srcElement : _e.target;

    this.fromElement= ie ? _e.fromElement :  ((this.type == "mouseover")? _e.relatedTarget : (this.type == "mouseout"  ? _e.target : undefined));

    this.toElement  = ie  ? _e.toElement   : ((this.type == "mouseout")  ? _e.relatedTarget : (this.type == "mouseover" ? _e.target : undefined));

    this.cancelBubble = function(){
        if(_e.stopPropagation)
            _e.stopPropagation();
        else
            _e.cancelBubble = true;
    };

    this.getEventXY = function(){
        return {x:this.clientX, y:this.clientY};
    };

};



/**
 * 名称：弹出层
 * 功能：可自动居中且兼容IE6
 * 
 */
(function(window,$){
	function PopupLayer(popLayout,mask,padding,Browser){
		//example:("#popupLayer","#mask",40)
		//if(window.System && window.System.Basis) {window.System.Basis.call(this);}
		var old=0;
		this.padding=padding||40;
		this.popLayout=popLayout;
		this.mask=mask;
		if(window.System && window.System.Basis) {
			window.System.Basis.call(this);
			this.setBrowser(Browser);
		}
		
		var self=__this__=this;
		this.setCenter=function(){
			var h=$(window).height();
			var w=$(window).width();
			var pop=$(self.popLayout);
			pop.css({'top':parseInt((h-pop.height()-self.padding)/2)+'px',
					'left':parseInt((w-pop.width()-self.padding)/2)+'px'
					});
			return this;
		};
		this.isIE=function(){
			if(window.ActiveXObject){//IE
				if(window.ActiveXObject&&!window.XMLHttpRequest){//this is IE6
					var pop=$(self.popLayout);
					pop.css('position','absolute');
					$(self.mask).css({'position':'absolute',
									'top':0,
									'bottom':0,
									'height':'auto'
									});
					window.onscroll=function(){
						self.setCenter();
						self.fixed(pop[0]);
					};
				}
			}
			return this;
		};
		this.getDocument_body=function(){
			return document.documentElement || document.body;
		};

		this.fixed=function(elem){
			var style = elem.style,
				dom = this.getDocument_body(),
				top=parseInt(style.top);
			if(dom.scrollTop>0 || old<dom.scrollTop){
				top=top+dom.scrollTop;
				style.top=top+"px";
				old=dom.scrollTop;
			}else if(dom.scrollTop<0 || old>dom.scrollTop){
				top=top-dom.scrollTop;
				style.top=top+"px";
				old=dom.scrollTop;
			}
		};
		this.resize=function(){
			$(window).resize(function(){self.setCenter();});
			return this;
		};
		this.popLayer_text=function(obj){
			/**
				{
					'div_class_pop_wrap_name':'section sectionPopupLayer-A1',
					'div_class_colose_name':'close',
					'div_title_name':'标题类名称',
					'div_content_name':'content',
					'more':'更多>>',
					'title':'标题',
					'content':'内容',
					'select':0

				}

			*/
			var container='';
			switch(obj['select']){
				case 0:
				  	container +='<div class="'+obj["div_class_PopupLayer_wrap_name"]+'">';
					container +=	'<div class="'+obj["div_class_colose_name"]+'"></div>';
					container +=	'<div class="p10">';
					container +=		'<div class="content">';
					container +=			'<div class="'+obj["div_title_name"]+'"><h2>'+obj["title"]+'</h2></div>';
					container +=			'<div class="'+obj["div_content_name"]+'"><div class="p15">'+obj["content"]+'</div></div>';
					container +=		'</div>';
					container +=	'</div>';
					container +='</div>';
				  break;
				case 1:
				  	container +='<div class="'+obj["div_class_PopupLayer_wrap_name"]+'">';
					container +=	'<div class="'+obj["div_class_colose_name"]+'"></div>';
					container +=	'<div class="p10">';
					container +=		'<div class="content">';
					container +=			'<div class="'+obj["div_title_name"]+'"><h2>'+obj["title"]+'</h2><div class="more">'+obj["more"]+'</div></div>';
					container +=			'<div class="'+obj["div_content_name"]+'"><div class="p15">'+obj["content"]+'</div></div>';
					container +=		'</div>';
					container +=	'</div>';
					container +='</div>';
				  break;
				default:
				 
			}
			
			
			return container;
		};
		this.closed=function(obj,fn){
			obj.click(function(){
				fn.call(this);
			});
		};

		this.append=function(obj,nodes){
			obj.append(nodes);
		};
		this.empty=function(){
			$(this.popLayout).empty();
		};


	}

	window.System.PopupLayer=PopupLayer;
	
})(window,jQuery);




(function(window,document, undefined){//cookie
			
        function Cookie(){
			window.System.Basis.call(this);
		}
		Cookie.prototype={
			/**
			* 使用setCookie()函数来保存cookie项的值，
			* 其中第一、二两个参数分别为cookie项的名称和值。
			* 如果想为其设置一个过期时间，那么就需要设置第三个参数，
			* 这里需要通过getExpDate()获得一个正确格式的参数。
			*/
			setCookie:function(name, value, expires, path, domain, secure){
				document.cookie = name + "=" + escape(value) +
					((expires) ? "; expires=" + expires : "") +
					((path) ? "; path=" + path : "") +
					((domain) ? "; domain=" + domain : "") +
					((secure) ? "; secure" : "");
					
			},
			getCookie:function(name){
				var arg = name + "=";
				var alen = arg.length;
				var clen = document.cookie.length;
				var i = 0;
				if(i<clen){
					while(i < clen){
						var j = i + alen;
						if (document.cookie.substring(i, j) == arg)
						{
							return this.getCookieVal(j);
						}
						i = document.cookie.indexOf(" ", i) + 1;
						if(i == 0) return false;
					}
				}else{
					return false;
				}
				return;
			},
			getCookieVal:function(offset){
				var endstr = document.cookie.indexOf(";", offset);
				if(endstr == -1)
				{
					endstr = document.cookie.length;
				}
				return unescape(document.cookie.substring(offset, endstr));
			},
			getExpDate:function(days, hours, minutes){
				var expDate = new Date();
				if(typeof(days) == "number" && typeof(hours) == "number" && typeof(hours) == "number")
				{
					expDate.setDate(expDate.getDate() + parseInt(days));
					expDate.setHours(expDate.getHours() + parseInt(hours));
					expDate.setMinutes(expDate.getMinutes() + parseInt(minutes));
					return expDate.toGMTString();
				}
			}
		};
		
		window.System.Cookie=Cookie;
})(window,document);



(function(window,$,undefined){//


		/**
		 * 创建日期：
		 * 修改日期：2014-4-36
		 * 名称：(Object) toggle_menu
		 * 功能：多菜单切换
		 * 参数： {	(jquery Object no null) 'list' :$('a'),
		 *			(String no null) 		'event':'click',
		 *			(jquery Object no null) 'temp' :$('#first'),
		 *			(String no null) 		'class':'name',
		 *			(function null)			'fn'   :function(){}
		 *			}
		 */	
        function Toggle(){
			__this__=this;
			if(window.System && window.System.Basis) {
				window.System.Basis.call(this);
				//this.setBrowser(Browser);
			}else{
				alter('error');
			}
			var doClass=function(cur){
				if(__this__.isS(cur['class'])){
					cur['temp'].removeClass(cur['class']);
					$(this).addClass(cur['class']);

				}else if(__this__.isArray(cur['class'])){
					var arr=cur['class'];
					for(var i=0;i<arr.length;i++){
						cur['temp'].removeClass(arr[i]);
						$(this).addClass(arr[i]);
					}
				}else if(__this__.isO(cur['class'])){
					if(cur['class']['remove']){
						var arr=cur['class']['remove'];
						for(var i=0;i<arr.length;i++){
							$(this).removeClass(arr[i]);
						}
					}else if(cur['class']['add']){
						var arr=cur['class']['add'];
						for(var i=0;i<arr.length;i++){
							$(this).addClass(arr[i]);
						}
					}

				}
				
			},

			doit=function(cur){
				var temp=cur['temp'];
				if(cur['class']){
					doClass.call(this,cur);
				}
				cur['temp']=$(this);
				if(__this__.isF(cur['fn'])){
					cur['fn'].call(this,{'temp':temp,'current':cur,'num':$(this).index()});
				}
			};
			this.toggle_menu=function(cur){
				cur['temp']=cur['temp'] ? cur['temp'] : $(cur['list'][0]);
				if(cur['list'] && cur['event'] ){
					cur['list'][cur['event']](function(){
						//cur['or'] 为 true 时当前选中的按钮点击后仍触发事件。默认是如果在当前选中的按钮上再次单击不触发任何事件
						var doif=cur['or'] ? (cur['temp'] || $(this)[0]!=cur['temp'][0]) : (cur['temp'] && $(this)[0]!=cur['temp'][0]);
						if(doif) doit.call(this,cur);
					},cur['event']=='hover' && !cur['hover']?function(){cur['temp'].removeClass(cur['class'])}:null);//当鼠标事件为hover 同时 hover 没有设定 ture 时 鼠标离开时除去移入添加的样式
				}
				
				return cur;
			};
			
		}
		
		window.System.Toggle=Toggle;
})(window,jQuery);





		

