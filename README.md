PageCard
========
仿腾讯的页签滚动选择工具，具体效果可见demo页面。
用法：
/*
 * @Dependence
 *   	jquery.js
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
