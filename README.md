PageCard
========
仿腾讯的页签滚动选择工具，具体效果可见demo页面。
用法：

@Dependence
   	jquery.js
 		jquery.easing.js
     
@DOM
 		&lt;div class='tags'&gt;      <- 选择页签部分<br/>
 			&lt;div&gt;页签1&lt;/div&gt;		<- 具体的每个页签<br/>
 			&lt;div&gt;页签2&lt;/div&gt;<br/>
 			......<br/>
 			&lt;div&gt;页签N&lt;/div&gt;<br/>
 		&lt;/div&gt;<br/>
 		&lt;div class='wrapper'&gt;   <- 正文包裹Div<br/>
 			&lt;div class='cons'&gt;  <- 正文的外侧<br/>
 				&lt;div class='con'&gt; 正文1 &lt;/div&gt;<br/>
 				&lt;div class='con'&gt; 正文2 &lt;/div&gt;<br/>
 				......<br/>
 				&lt;div class='con'&gt; 正文N &lt;/div&gt;<br/>
 			&lt;/div&gt;<br/>
 		&lt;/div&gt;<br/>
 		
 @Usage
 		$(".tags div").pagecard(options) 选择器选中页签元素
 
 @Options
 		con       : 必选，正文外层的DIV的选择器，如上述DOM中的'.cons'<br/>
 		child     : 必选，正文元素组的选择器，如上述DOM中的'.con'<br/>
 		hover     : 选填，页签选中后添加的class，请为此class设置特殊样式<br/>
		time 	  ：选填，页面滚动的时间，单位ms<br/>

