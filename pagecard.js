(function($, $$) {
    var pageCard = K.pageCard = function(args) {
        return new _pageCard(args)
    }
   	
	_pageCard = function(args){
		var _this = this, _cur = 0;
		this.btn = $$(args.btn);
		this.con = $$(args.con);
		this.child = $$(args.child);
		this.hover = args.hover;
		this.Time = args.Time || 500;
		
		
		this.con.item(0).parent(1).css('height', this.con.item(0).height() + 'px');
		//this.con.item(0).append(_this.con.item(0).html());

		var arr1 = this.setArrHeight(this.child), arr2 = this.setArrDistance(this.child);
	

		this.btn.each(function(o, i){
			o.click(function(){
		//	alert(arr2);
				if(_cur != i) _this.btn.item(_cur).removeClass('at');
				else return;
				this.addClass('at');
				
				_this.con.item(0).go({
					marginTop : -arr2[i] + 'px'
				}, 'defaults', 'easeIn', function(){
					_this.insertItem(_this.con.item(0), 6, i);
					arr2 = _this.setArrDistance(_this.child);
					_this.con.css('marginTop', 0);
				});
				_cur = i;
			});
		});
	}
})(K, KK);

_pageCard.prototype = {
	setArrHeight : function(args){
		var arr = [];
		for(var i = 0, len = args.length; i < len; i++){
			arr.push(args.item(i).node.offsetHeight);	//子元素高度
		}
		return arr;
	},
	setArrDistance : function(args){
		var arr = [];
		for(var i = 0, len = args.length; i < len; i++){
			arr.push(args.item(i).parentY());  //子元素距离父元素距离
		}
		return arr;
	},
	insertItem : function(obj, len, index){
		
		for(var i = 0; i < len; i++){
			var id = obj.child(0).attr('id');
			if(id != index){
				obj.append(obj.child(0));
			}else {
				return;
			}
		}
	}
};
//页卡js结束
//页卡调用开始
var arg = {
	btn : '.tags div',
	con : '.cons',
	hover : 'at',
	child : '.con'
}
K.pageCard(arg);
//页卡调用结束