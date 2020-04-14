/**
 * 功能：菜单滑动门、
 *       弹出层、
 *		 区域隐藏或显示、
 *		 文本框输入时设默认文字提示、
 *		 图片动画移动
 * Copyright Software
 * 
 * 
 */

(function(window,jQuery,undefined){
	var __this__,$=jQuery;
	function Tools(Browser){
		__this__=this;
		if(window.System && window.System.Basis) {
			window.System.Basis.call(this);
			if((typeof Browser  !='undefined') && Browser) this.setBrowser(Browser);
		}
		
		 
		 

		/**
		 * 功能：多菜单切换
		 * 参数： {	(jquery Object no null) 'list' :$('a'),
		 *			(String no null) 		'event':'click',
		 *			(jquery Object no null) 'temp' :$('#first'),
		 *			(String no null) 		'class':'name',
		 *			(function null)			'fn'   :function(){}
		 *			}
		 */

		this.toggle_menu=function(cur){
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

		
		 /**
		 * 功能：隐藏或显示指定区域
		 * 参数： {	(Object) 'hide':{[]},
		 *			(Object) 'show':{[]}
		 *			}
		 */
		this.hide_or_show_area=function(menu){
			if(!menu) return false;
			if(arguments.length>1){
				var arr=arguments;
				this.each(arr,function(i){
					if(0==i){
						this.style.display="";
					}else{
						this.style.display="none";
					}
					
				});
				
			}else{
				if(menu.hide){
					this.each(menu.hide,function(){
						
							if(this[0]){
								this.hide();
							}else{
								if(typeof this.style !== 'undefined')
									this.style.display="none";	
							}
						
					});

				}
				if(menu.show){
					this.each(menu.show,function(){
						if(this[0]){
							this.show();
						}else{
							if(typeof this.style !== 'undefined')
								this.style.display="";	
						}
					});
				}
			}
		};


		
		 /**
		 * 功能：到页面顶端
		 * 参数： (jqery Object) $('.div'),
		 *		  (String) 'hover'//鼠标经过变化的样式
		 *			
		 */
		this.gotoTop=function($dom,css){
			$dom.hide();
			if(window.ActiveXObject && !window.XMLHttpRequest){//this is IE6
				$dom.parent().css('position', 'relative');
				
			}
			$(window).scroll(function(){  
		        var vtop=$(document).scrollTop();
		        if(vtop>0){
					$dom.show().hover(function(){
			         	if(css){
			         		$dom.addClass(css);
			         	}
			         	
			         },function(){
			         	if(css){
			         		$dom.removeClass(css);
			         	}
			         	
			         }).click(function(){
			         	$(document).scrollTop(0);
			         });

			        if(window.ActiveXObject && !window.XMLHttpRequest){//this is IE6
						__this__.Browser.fixed($dom[0]);
					}
		        }else{
		         	$dom.hide();
		        }
		    }); 
		};	
		
		

		 /**
		 * 功能：菜单随滚条改为以定位方式(固定要浏览器顶部)
		 * 参数： {
		 *			$dom(no null) :对应的元素
		 *			css(null) :固定定位的样式
		 *			fn1(null) :到达浏览器顶部要做的事
		 *			fn2(null):低于浏览器顶部要做的事
		 *			height(null):被别的元素挡着的高度
		 *			}
		 *			
		 */
		this.menu_of_auto_fixed=function(A){
			//{$dom:'',css:'',fn1:function(){},fn2:function(){},height:''}
			//获取要定位元素距离浏览器顶部的距离
			var height=A.height || 0;
			var navH =parseInt( A.$dom.offset().top);
			navH-=height;
			//滚动条事件
			$(window).scroll(function(){
				//获取滚动条的滑动距离
				var scroH = $(this).scrollTop();
				//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
				if(scroH > navH){
					if (A.css) A.$dom.addClass(A.css);
					if(__this__.isF(A.fn1)) A.fn1();
				}else{
					if(A.css) A.$dom.removeClass(A.css);
					if(__this__.isF(A.fn2)) A.fn2();
				}

			});

		};


		 /**
		 * 功能：漂浮广告
		 * 参数： {
		 *			'div' : 			漂浮的容器
		 *			'xPos': 			
		 *			'yPos':
		 *			'time':
		 *			'fn'  :
		 *			}
		 *			
		 */
		this.floating_ads=function(A){
			var D={
				'iSpeedX':A.xPos || 1,
				'iSpeedY':A.yPos || 1,
				'div':A.div,
				'time':A.time || 30,
				'body_w':A.wrap ? A.wrap.outerWidth(true)  : $(window).width(),
				'body_h':A.wrap ? A.wrap.outerHeight(true) : $(window).height(),
				'timer':null
			};

			var div =D.div.get(0);

			function float(){
				var l=div.offsetLeft+D.iSpeedX;
				var t=div.offsetTop +D.iSpeedY;
				D.body_w=A.wrap ? A.wrap.outerWidth(true)  : document.documentElement.clientWidth;
				D.body_h=A.wrap ? A.wrap.outerHeight(true) : document.documentElement.clientHeight;

				if(t >= D.body_h - div.offsetHeight){
					D.iSpeedY*=-1;
					t = D.body_h - div.offsetHeight;
				}
				
				if(t <= 0){
					D.iSpeedY*=-1;
					t=0;
				}

				if(l >= D.body_w - div.offsetWidth){
					D.iSpeedX*=-1;
					l = D.body_w - div.offsetWidth;
				}

				if(l <= 0){
					D.iSpeedX*=-1;
					l=0;
				}



				div.style.left=l+'px';
				div.style.top =t+'px';

			
			}

			function jump(){
				var l=div.offsetLeft+D.iSpeedX;
				var t=div.offsetTop +D.iSpeedY;
				D.body_w=A.wrap ? A.wrap.outerWidth(true)  : $(window).width();
				D.body_h=A.wrap ? A.wrap.outerHeight(true) : $(window).height();
				if(t >= D.body_h - div.offsetHeight){
					D.iSpeedY*=-1;
					t = D.body_h - div.offsetHeight;
				}
				
				if(t <= 0){
					D.iSpeedY*=-1;
					t=0;
				}

				if(l >= D.body_w - div.offsetWidth){
					D.iSpeedX*=-1;
					l = D.body_w - div.offsetWidth;
				}

				if(l <= 0){
					D.iSpeedX*=-1;
					l=0;
				}



				div.style.left=l+'px';
				div.style.top =t+'px';

			
			}

			function start(fn){
				D.timer=setInterval(function(){fn();},D.time)
			}
			function stop (){
				clearInterval(D.timer);
			}

			

			if(__this__.isF(A['fn'])){
				A['fn'].call(A,{
								'f_start':start,
								'f_stop':stop,
								'f_jump':jump,
								'f_float':float

						});
			}
		};


		/**
		 * 功能：把一个区域内容copy到另一个区域中
		 * 参数：vido info_to_info({ 
		 							'$big'  :,
		 *							'$small':,
		 *							'src'   :'b_src',
		 *							'text'  :'.sectionMask-A1'
		 *						});
		 * 
		 *
		 *
		 */
		
		this.info_to_info=function (obj){
			obj.src=obj.src ? obj.src : 'src';
			obj.$big.find('img').attr('src',obj.$small.find('img').attr(obj.src));
			if(obj.text){//copy遮罩标题
				obj.$big.find(obj.text).html(obj.$small.find(obj.text).html());
			}
			if(this.isF(obj.fn)){
				obj.fn.call(obj);
			}
			
		};
		

		/**
		 * 功能：输入框是否为空如为空就显示默认字符，触发事件时若是默认文字就清空
		 * 参数：node obj
		 */
		
		this.input_text=function(obj){
			var text=$(obj).attr('default'),value;
			if(!text) return;
			obj.onclick=function(){
				value=obj.value.replace(/\s/g,"");
				if(value==text)
					obj.value='';
			};
			obj.onblur=function(){
				value=obj.value.replace(/\s/g,"");
				if(value=='')
					obj.value=text;
			};	
			
		};

		
		
		/**
		 * 名称：图片移动
		 * 功能：移动到下一图片
		 * 
		 */
		this.slide=function(){
			return {
				'NextPosition':function(init){
					/**
					{
					'$pre':$('#slidePre'),
					'$next':$('#slideNext'),
					'$elem':$('#imgList'),//
					'len':1800,//移动图片的宽度
					'number':6,//显示多少个
					'flag':0,
					'position':'left',
					'$autoHandler':$(""),
					'sport':Sport,
					'fn':function(){}
					}
					*/
					
					var jump_start=function(){
						init.flag=0;
						self.move(0);
					},
					jump_behind=function(){
							if(init.imglen < init.number) return;
							init.flag=init.imglen-init.number;
							self.move(-(init.len)*(init.flag));
					};
					var self={
						'move':function(len,position){
							var elem=init.$elem[0];
							var position=position||init.position;
							
							/*
							var s=init.len;
							clearInterval(self.slide);
							self.slide=setInterval(function(){
								var s= parseInt(s*init.imglen/timer);
								if(init.len<=s){
									clearInterval(self.slide);
								}else{
									elem.style[position]=s+"px";
								}
							},timer);
							*/
							
							switch(position){
								case "left":
									if(init.sport){
										init.sport.doMove(elem,{'left':len},null);
									}else{
										elem.style.left=len+"px";
									}
								  break;
								case "right":
									if(init.sport){
										init.sport.doMove(elem,{'right':len},null);
									}else{
										elem.style.right=len+"px";
									}
									break;
								case "top":
								  	if(init.sport){
										init.sport.doMove(elem,{'top':len},null);
									}else{
										elem.style.top=len+"px";
									}
									break;

								case "bottom":
									if(init.sport){
										init.sport.doMove(elem,{'bottom':len},null);
									}else{
										elem.style.bottom=len+"px";
									}
									break;   
								default:
								  alert("错误!只能传('left' | 'right' | 'top' | 'bottom') 其中之一");
							}
						},
						'click':function(eve){
							var $pre=init.$pre,
								$next=init.$next;
							if($next){
								$next[eve](function(){
									if((init.imglen-init.number)>init.flag){
										self.move(-(init.len)*(++init.flag));
										
									}else{
										jump_start();
									}
									if(init.fn) init.fn(init);
								});
							}
							if($pre){
								$pre[eve](function(){
									if(init.flag>0){
										self.move(-(init.len)*(--init.flag));
										if(init.fn) init.fn(init);
									}else{
										jump_behind();
									}
								});
							}
						},
						
						'auto':function($elem){
							if($elem){
								$elem.hover(function(){
									self.clearAuto();
								},function(){
									self.auto(null);
								});				
							}
							self.slide=setInterval(function(){
								if((init.imglen-init.number)>init.flag){
									self.move(-(init.len)*(++init.flag));
								}else{
									jump_start();
								}
							},5000);
						},
						'clearAuto':function(){
							clearInterval(self.slide);
						}
					};
					self.init=init;
					self.slide;
					if(init.event){
						self.click(init.event);	
					}
					if(init.$autoHandler){
						self.auto(init.$autoHandler);
					}
					return self;
				}
			};
		}();
		this.addFavorite=function(name,url){
			var ctrl=(navigator.userAgent.toLowerCase()).indexOf('mac')!=-1?'Command/Cmd': 'CTRL';
			if(document.all){
				window.external.addFavorite(url,name);
			}else if(window.sidebar){
				window.sidebar.addPanel(name,url, "");
			}else{ 
				alert('您可以通过快捷键' + ctrl + ' + D 加入到收藏夹');
			}
		};
		

		
		/**
		 * 功能：查找文章中所有图片如果图片宽度大于规定的图片就限制负责不处理,并且在图片外层加一个容器好让图片居中，这个容器可以自定义。
		 * 参数： {	(jquery object) 'cms':$dom,
		 *			(String) 		'img':'',
		 *			(int)    		'width':500,
		 *			(String) 		'div':'<div class="img-parDiv mb10"></div>'
		 *			}
		 */
		this.control_cms_img=function(C){
			//找出文章中所有的图片
			var control_img=function($div,img,div,width){
				var imgs,i=0;
				if(imgs=$div.find(img)){
					for(i=0;i<imgs.length;i++){
						var $curImg=$(imgs[i]);
						$div=$(div);
						if($curImg.width()>width){
							$curImg.width(width)
						}
						if($div){
							$curImg.before($div);
							$curImg.appendTo($div);
						}
						
						
					}
					return true;
				}
				return false;
			};
			
			control_img(C.cms,C.img || 'img',C.div,C.width);
			
		};


		/**
		 * 功能：滚动文字可设定字符，可设定对象，可设定对象的属性，可设定事件
		 * 参数： 	(String) 	text,
		 *			(Number) 	time,
		 *			(function)  fn
		 *			
		 */
		this.textMarquee=function(text,time,fn){
			if(!text || !time || !__this__.isF(fn)){
				alert('出错了！');
				return false;
			}
			text=text.split('');
			setInterval(function(){
				text.push(text.shift());
				fn.call(text.join(''));
			},time);
		};


	}
	window['Tools']=Tools;
})(window,jQuery);


/**
*幻灯片
*
*/
(function(window,$){
	if(!window.YkLib) window.YkLib={};
	function Slide(imgLen,imgWSize){
		this.scroll=500;
		this.stop=3000;
		this.imgLen=imgLen;
		this.size=imgWSize;
		var _this=this;
		this.run=function(){
			if(parseInt($("#pnl_scroll").css("left"))>-(_this.size*(_this.imgLen-1))){
				Slide.index++;
				$("#pnl_scroll").animate({left : '-='+_this.size+'px'}, _this.scroll,function(){
					$("#pnl_btn li.on").removeClass("on");
					$("#pnl_btn li").eq(Slide.index).addClass("on");
					_this.start_auto();
				});
			}else{
				Slide.index=0;
				$("#pnl_scroll").animate({left : '0px'}, _this.scroll,function(){
					$("#pnl_btn li.on").removeClass("on");
					$("#pnl_btn li").eq(Slide.index).addClass("on");
					_this.start_auto();
				});
			}
		};
		
		this.go_to=function(index){
			Slide.index=index;
			var left=_this.size*Slide.index;
			$("#pnl_scroll").animate({left: '-'+left+'px'}, _this.scroll,function(){
				$("#pnl_btn li.on").removeClass("on");
				$("#pnl_btn li").eq(Slide.index).addClass("on");
			});
		};
		this.start_auto=function(){
			_this.stop_auto();
			Slide.time=setTimeout(_this.run,_this.stop);
		};
		this.stop_auto=function(){
			clearTimeout(Slide.time);
		};
		this.init=function(){
			_this.start_auto();
			$("#pnl_btn").hover(function(){
				_this.stop_auto();
			},function(){
				_this.start_auto();
			});
			$("#pnl_btn li").each(function(i,j){
				$(this).click(function(){
					_this.go_to(i);
				});
			});
		};
		this.init();
	}
	
	Slide.index=Slide.time=0;
	
	window.YkLib.Slide=Slide;
	window.Yk=window.YkLib;
})(window,jQuery);


