/**
 * 页签滚动选择工具 pagecard
 * 
 * @Dependence
 * 		jquery.js
 * 		jquery.easing.js
 * 
 * @DOM
 * 		<div class='tags'>      <- 选择页签部分
 * 			<div>页签1</div>		<- 具体的每个页签
 * 			<div>页签2</div>
 * 			......
 * 			<div>页签N</div>
 * 		</div>
 * 		<div class='wrapper'>   <- 正文包裹Div
 * 			<div class='cons'>  <- 正文的外侧
 * 				<div class='con'> 正文1 </div>
 * 				<div class='con'> 正文2 </div>
 * 				......
 * 				<div class='con'> 正文N </div>
 * 			</div>
 * 		</div>
 * 		
 * @Usage
 * 		$(".tags div").pagecard(options) 选择器选中页签元素
 * 
 * @Options
 * 		con       : 必选，正文外层的DIV的选择器，如上述DOM中的'.cons'
 * 		child     : 必选，正文元素组的选择器，如上述DOM中的'.con'
 * 		hover     : 选填，页签选中后添加的class，请为此class设置特殊样式
 * 		time 	  ：选填，页面滚动的时间，单位ms
 */
(function($, undefined){
	$.fn.pagecard = function(options){
		var options = $.extend({},{
			btn: $(this),
			hover: 'at',
			time: 750
		}, options);
		return new _pagecard(options);
	};
	
	function _pagecard(options){
		var self = this;
		self.con = $(options.con);
		self.child = $(options.child);
		self.btn = options.btn;
		
		self.con.parent().css("height", self.con.height + 'px');
		self.child.each(function(index){
			$(this).attr("id", index);
		});
		var distances = self.setDistances(self.child), cur = 0;
		
		self.btn.each(function(index){
			$(this).click(function(){
				if(index == cur) return;
				$(self.btn.get(cur)).removeClass(options.hover);
				$(this).addClass(options.hover);
				
				self.con.animate({marginTop: -distances[index]}, options.time, 'easeInExpo', function(){
					self.insertItem(self.con, index);
					self.con.css("marginTop", 0);
					distances = self.setDistances(self.child);
				});
				cur = index;
			});
		});
	}
	
	_pagecard.prototype = {
		setDistances: function (obj){
			var arr = [];
			for(var i=0; i<obj.length; i++){
				arr.push($(obj.get(i)).position().top);
			}
			return arr;
		},
		insertItem: function (obj, index){
			obj.children().each(function(i){
				var id = $(this).attr("id");
				if(id != index){
					obj.append(this);
				}else{
					return false;
				}
			});
		}
	}
})(jQuery);