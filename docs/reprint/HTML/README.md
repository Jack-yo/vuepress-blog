
# HTML标签详细讲解说明[HTML语法]

**标签和属性**

在HTML中，通常标签都是由开始标签和结束标签组成的，开始标签用“&lt;标签名&gt;”表示，结束标签用“&lt;/标签名&gt;”表示。 

元素指的是包含标签在内的整体，除去标签的部分叫做内容。 

属性要在开始标签中指定，用来表示该标签的性质和特性。通常都是以“属性名=”值””的形式来表示，用空格隔开后，还可以指定多个属性。指定多个属性时不用区分顺序

**颜色的指定方法** 

用HTML指定颜色有两种方法 

1、用16进制数值来指定：在#号的后面，把RGB的各个选项用十六进制的数值来表示，数值保持两位数。 

2、指定颜色的名称：可以对基本的16色用名称来指定其颜色

**指定文件的位置** 

在对某部分设置链接的时候，需要指定链接端HTML文件的位置；同样，如果想在该处显示图像也需要指定图像的位置。在HTML中，这个位置用URL来表示，有以下两种表示方法：

1、绝对URL：绝对URL就是用Web浏览器查看网页时，地址栏中显示的以http://开头的路径 

2、相对URL：相对URL是在同一站点内进行设置，类似于在同一磁盘上管理文件的形式。这种方法是以当前文件的位置为基准。使用相对URL时，如果要指定的文件在当前文件的下级，就从目录名开始一直写到要指定的文件名，中间用“/”符号隔开。如果在当前文件的上级，每上一级就加一个“../”符号

**显示HTML的版本** 

&lt;!DOCTYPE~&gt; 

HTML的版本表明HTML文件是按照哪个版本进行编写的（标明该HTML文件遵循的DTD文件），不同的版本和种类都有固定的书写格式，要按照固定的格式输入文件开头，然后在文件开头处写明版本，按照这种版本的规定格式进行编写

必须使用的标签 

&lt;html&gt;~&lt;/html&gt; 

&lt;head&gt;~&lt;/head&gt; 

&lt;title&gt;~&lt;/title&gt; 

&lt;body&gt;~&lt;/body&gt; 

HTML文件的开头写有&lt;!DOCTYPE~&gt;的部分，代表HTML的版本，其后是必须存在的四种标签 

首先，&lt;!DOCTYPE~&gt;后面的整个都要用html标签(&lt;html&gt;~&lt;/html&gt;)括起来，其中要按照head标签(&lt;head&gt;~&lt;/head)和body标签的顺序(&lt;body&gt;~&lt;/body&gt;)的顺序进行排列。

在head标签中填写与该文件相关的信息，body标签中填写世纪要在浏览器上显示的内容。另外，在head标签中，只能有一个代表文件标题的title标签

**设置页面的文字颜色** 

&lt;body text=”颜色指定”&gt;~&lt;/body&gt; 
**设置页面的背景颜色** 

&lt;body bgcolor=”颜色指定”&gt;~&lt;/body&gt; 
**设置页面的背景图像** 

&lt;body background=”图像的URL”&gt;~&lt;/body&gt;

**按照目的设定范围** 

&lt;div&gt;~&lt;/div&gt; 

&lt;span&gt;~&lt;/span&gt;

**插入注释** 

&lt;!—注释语句--&gt; 

**添加标题** 

&lt;title&gt;~&lt;/title&gt; 

title标签用来给HTML文件添加标题 

这个标签一定要位于&lt;head&gt;~&lt;/head&gt;圈定的范围内。在这里指定的标题除了可以在通常的浏览器窗口的标题栏中显示以外，还可以作为加入收藏夹时的标题

**显示文件编码** 

&lt;meta http-equiv="Content-Type" content="text/html; charset=文字编码" /&gt; 

meta标签的charset属性表示该HTML文件是用什么文字编码编写的 

注意，该标签一定要位于&lt;head&gt;~&lt;/head&gt;范围内 

添加关键字、内容介绍及作者姓名 

&lt;meta name="keywords" content="关键字1，关键字2，…" /&gt; 

&lt;meta name="description" content="内容介绍" /&gt; 

&lt;meta name="author" content="作者姓名" /&gt; 

这些信息都不会在画面上显示出来，但是搜索引擎在收集信息时要用到 

注意，该标签一定要位于&lt;head&gt;~&lt;/head&gt;范围内 

设置样式表和脚本语言的种类 

&lt;meta http-equiv="Content-Style-Type" content="样式表的种类" /&gt; 

&lt;meta http-equiv="Content-Script-Type" content="脚本的种类" /&gt; 

在HTML文件内可以设置样式表和脚本的默认语言 

注意，该标签一定要位于&lt;head&gt;~&lt;/head&gt;范围内

**设置进入网页** 

&lt;link rel=”关系” href=”URL”&gt; 

&lt;link rev=”关系” href=”URL”&gt; 

rel：在本页看到的，与URL标明的网页之间的关系 

rev：在URL标明的网页中看到的，与本页之间的关系 

link标签表示的是该文件和与其相关的其他文件之间的关系 

注意，该标签一定要位于&lt;head&gt;~&lt;/head&gt;范围内

**设置标准URL** 

&lt;base href=”绝对URL”&gt; 

&lt;base href=”绝对URL” target=”目标名”&gt; 

base标签用来设置将该页中使用的相对URL的标准指向成绝对URL，指定了这个标签之后，在该页指定的相对URL就会全部认定为已在这里指定的绝对URL。如果不进行这项设置，就以当前页的位置为标准，如果指定了Target属性，就可以指定打开链接地址网页的默认框架和窗口

注意，该标签一定要位于&lt;head&gt;~&lt;/head&gt;范围内

**设置自动倒入网页功能** 

&lt;meta http-equiv="refresh" content="秒数" /&gt; 

&lt;meta http-equiv="refresh" content="秒数"；URL=要移动到的URL /&gt; 

在经过数秒后，自动开始导入网页。如果指定了要移动到的URL，就会导入URL指定的网页。如果没有指定，就会再次导入相同的页 

注意，该标签一定要位于&lt;head&gt;~&lt;/head&gt;范围内

**设置各级标题** 

&lt;h1&gt;~&lt;h1&gt; 

**设置段落 
**&lt;p&gt;~&lt;/p&gt; 

p标签表示的是该部分为一个段落

**设置联系地址** 

&lt;address&gt;~&lt;/address&gt; 

address标签表示的内容是该网页制作者的联系地址和有关网页内容的咨询地址等信息

**设置强调内容** 

&lt;em&gt;~&lt;/em&gt; 

&lt;strong&gt;~&lt;/strong&gt; 

这两个标签所圈内容表示该部分是强调的内容

**设置较短的引用文字** 

&lt;q&gt;~&lt;/q&gt; 

&lt;q cite=”引用页的URL”&gt;~&lt;/q&gt; 

q标签代表的意思是该部分为较短的引用文，在引用段落的某一部分的时候使用，如果使用cite属性，还能够把引用页的URL显示出来

**设置较长的引用文章** 

&lt;blockquote&gt;~&lt;/blockquote&gt; 

&lt;blockquote cite=”引用页的URL”&gt;~&lt;/blockquote&gt;

**设置文字内容的出处** 

&lt;cite&gt;~&lt;/cite&gt; 
**设置缩略语** 

&lt;abbr title=”字符串”&gt;~&lt;/abbr&gt; 

&lt;acronym title=”字符串”&gt;~&lt;/acronym&gt; 

title：不处于省略状态下的词汇（字符串） 
**设置添加的内容** 

&lt;ins cite=”URL” datetime=”添加日期时间”&gt;~&lt;/ins&gt; 
**设置需要删除的内容** 

&lt;de cite=”URL” datetime=”删除日期时间”&gt;~&lt;/del&gt;

**突出显示段落中的术语** 

&lt;dfn&gt;~&lt;/dfn&gt; 
**表示与程序关联的文本** 

&lt;kbd&gt;~&lt;/kbd&gt;：输入文本 

&lt;samp&gt;~&lt;/samp&gt;：输出样本 

&lt;code&gt;~&lt;/code&gt;：源代码 

&lt;var&gt;~&lt;/var&gt;：变量

**显示特殊符号** 

&amp;lt：&lt; 

&amp;gt：&gt; 

&amp;quot：” 

&amp;amp：&amp;

**设置文字的换行** 

&lt;br&gt; 

添加了br标签之后，文本就会再该处换行。即使在HTML代码中已经换行了，在浏览器上显示的时候却反映不出来，因此如果想在浏览器上换行的话，就要使用br标签

**添加不同横线效果** 

&lt;hr&gt; 

&lt;hr size=”粗细” width=”长度” align=”对齐方式” noshade&gt; 

加入了hr标签后，就可以在其标注的地方显示横线

**设置文本格式** 

&lt;b&gt;~&lt;/b&gt;：黑体字 

&lt;i&gt;~&lt;/i&gt;：斜体字 

&lt;tt&gt;~&lt;/tt&gt;：等大字体 

&lt;sup&gt;~&lt;/sup&gt;：上标 

&lt;sub&gt;~&lt;/sub&gt;：下标 

&lt;u&gt;~&lt;/u&gt;：下划线 

&lt;s&gt;~&lt;/s&gt;：删除线

**设置空格和换行** 

&lt;pre&gt;~&lt;/pre&gt; 

&lt;pre&gt;标签可以保留文字在源代码中的格式，使得页面中显示的内容和源代中的格式完全一致 
**设置居中效果** 

&lt;center&gt;~&lt;/center&gt; 

center标签用于将指定范围内的内容设置为居中 
**设置行对齐方式** 

&lt;h1 align=”行对齐方式”&gt;~&lt;h1&gt; 

&lt;p align=”行对齐方式”&gt;~&lt;p&gt; 

&lt;div align=”行对齐方式”&gt;~&lt;div&gt; 

使用align属性可以设置标题、段落以及指定范围内的行对齐方式

**设置文字颜色** 

&lt;font color=”设置颜色”&gt;~&lt;/font&gt; 
**设置字体类型** 

&lt;font&gt;字体名”&gt;~&lt;/font&gt; 
**设置字体字号** 

&lt;font size=”字号”&gt;~&lt;/font&gt; 
**相对改变字体大小** 

&lt;big&gt;~&lt;/big&gt;：增大 

&lt;small&gt;~&lt;/small&gt;：减小 

&lt;font size=”+n”&gt;：增大n号 

&lt;font size=”-n”&gt;：减小n号

**设置字号的基本大小** 

&lt;basefont size=”字号”&gt; 

size：1~7&nbsp;

**链接到其他页面** 

&lt;a href=”链接目标URL”&gt;~&lt;/a&gt; 

a标签的href属性能把指定的范围链接到其他页面上，链接部分的词语要设置得让人看到这个部分就能联想到链接网页上的具体内容 

另外，在链接图像的时候，一定要插入替代的文字（alt=”~”）使用户能够很明确的了解到链接的目标

**链接到当前页的特定位置** 

&lt;a href=”#位置名”&gt;~&lt;/a&gt;：指定链接文件（从什么位置开始链接） 

&lt;a name=”位置名”&gt;~&lt;/a&gt;：指定链接的地址（要链接的位置） 

如果一页上的内容非常多，可以在一个网页中给特定的位置命名，然后再链接到该位置（跳转）。在给链接对象位置命名的时候要使用name属性。然后，在链接的时候，要用href属性在链接地址名称的前面加上#号

**设置链接到其他页面的特定位置** 

&lt;a href=”URL#位置名”&gt;~&lt;/a&gt;：指定链接源（从什么位置开始链接） 

&lt;a name=”位置名”&gt;~&lt;/a&gt;：指定链接的地址（要链接的位置） 

在链接到其他网页上的时候，可以先给那一页上特定的位置命名，然后链接到该位置。在给链接对象位置命名的时候要使用name属性。然后，在链接的时候，要用href属性设置成”URL+#+位置名”这样一种格式

**设置链接文字的颜色** 

&lt;body link=”指定颜色” vlink=”指定颜色” alink=”指定颜色”&gt;~&lt;body&gt; 

link：还没有看见的链接部分的文字颜色 

vlink：已经看见的链接部分的文字颜色 

alink：鼠标单击链接部分的文字颜色 

body标签用于设置网页整体链接部分的文字颜色 
**在新窗口中打开链接网页** 

&lt;a href=” URL” target=”窗口名”&gt;~&lt;/a&gt; 

利用target属性可以设置打开链接窗口的方式 
**通过设置链接来启动邮箱** 

&lt;a href=”mailto：邮箱地址”&gt;~&lt;/a&gt;

**为列表添加不同类型的标记** 

&lt;ul&gt;&lt;li&gt;列表项目1&lt;/li&gt;&lt;&gt;&lt;li&gt;列表项目2&lt;/li&gt;…&lt;ul&gt; 

ul标签的作用是将列表（条款形式）加上圆点或方括号的标记。列表的整体要在&lt;ul&gt;~&lt;/ul&gt;标签范围内，在这之间的各个项目要在&lt;li&gt;~&lt;/li&gt;标签之内 
**更改列表标记** 

&lt;ul type=”标记种类”&gt;~&lt;/ul&gt; 

&lt;li type=”标记种类”&gt;~&lt;/li&gt; 

标记的种类包括disc、cicle和square

**制作带序号的列表** 

&lt;ol&gt;&lt;li&gt;列表项目1&lt;/li&gt;&lt;&gt;&lt;li&gt;列表项目2&lt;/li&gt;…&lt;ol&gt; 
**改变序号的样式** 

&lt;ol type=”序号样式”&gt;~&lt;/ol&gt; 

&lt;li type=”序号样式”&gt;~&lt;/li&gt; 
**改变序号的顺序** 

&lt;ol start=”开始序号”&gt;~&lt;/ol&gt; 

&lt;li value=”开始序号”&gt;~&lt;/li&gt;

**制作包含专用语和解释的列表** 

&lt;dl&gt;&lt;dt&gt;专用语&lt;dt&gt;&lt;dd&gt;对其解释&lt;/dd&gt;…&lt;dl&gt; 

**表格的基本形式** 

&lt;table border=”边框的粗度”&gt;~&lt;/table&gt;：整个表格 

&lt;tr&gt;~&lt;/tr&gt;：单独一行 

&lt;th&gt;~&lt;/th&gt;：单元格：标题用 

&lt;td&gt;~&lt;/td&gt;：单元格：数据用 

表格的整体要圈在&lt;table&gt;~&lt;/table&gt;之间显示，表格当中某一个单元格用&lt;th&gt;~&lt;/th&gt;表示或者&lt;td&gt;~&lt;/td&gt;表示。每个单元格都在表的单独以行，放置在&lt;tr&gt;~&lt;/tr&gt;中。也就是说，table标签的内容是由tr标签构成的。各个tr标签的内容是由表示单元格的th或者td标签构成的。th标签代表这个单元格的内容是标题。td标签代表这个单元格的内容是数据

**为表格添加标题** 

&lt;caption&gt;~&lt;/caption&gt; 

&lt;caption align=”对齐方式”&gt;~&lt;/caption&gt; 

caption标签用来给表格添加标题 

该标签一定要放在table标签的紧后面。标题的显示位置（即对齐方式）可以指定在表格的上部，或者表格的下部

**指定表格的大小** 

&lt;table width=”宽度”&gt;~&lt;/table&gt; 

宽度：针对像素或者窗口的百分比 
**指定单元格大小** 

&lt;th width=”宽度” height=”高度”&gt;~&lt;/th&gt; 

&lt;td width=”宽度” height=”高度”&gt;~&lt;/td&gt; 
**合并单元格** 

&lt;th rowspan=”垂直方向的合并数”&gt;~&lt;/th&gt; 

&lt;th colspan=”水平方向的合并数”&gt;~&lt;/th&gt; 

&lt;td rowspan=”垂直方向的合并数”&gt;~&lt;/td&gt; 

&lt;td colspan=”水平方向的合并数”&gt;~&lt;/td&gt; 

垂直方向的合并数：从当前单元格开始向下合并的单元格数 

水平方向的合并数：从当前单元格开始向右合并的单元格数 
**设置单元格之间的距离** 

&lt;table cellspacing=”单元格的距离”&gt;~&lt;/table&gt; 
**设置单元格边框与内容之间的距离** 

&lt;table cellpadding=”单元格边框与内容之间的距离”&gt;~&lt;/table&gt; 
**设置单元格中的行对齐方式和列对齐方式** 

align属性用于设置单元格内的行对齐方式，valign属性用来设置单元格内的列对齐方式 
**禁止在单元格内换行** 

&lt;th nowrap&gt;~&lt;/th&gt; 

&lt;td nowrap&gt;~&lt;/td&gt;

**设置表格和单元格的背景颜色** 

bgcolor属性用于指定表格和单元格中的背景颜色 
**设置表格和单元格的背景图像** 

background属性用于指定表格和单元格中的背景图像 
**设置表格外框的宽度** 

&lt;table border=”外框的宽度”&gt;~&lt;/table&gt; 
**设置表格外框的显示形式** 

&lt;table frame=”外框的显示形式”&gt;~&lt;/table&gt; 
**设置表格内补边框线的显示形式** 

&lt;table rules=”内部边框线的显示形式”&gt;~&lt;/table&gt; 
**定义表格中的横行** 

&lt;thead&gt;~&lt;/thead&gt;：表头部分 

&lt;tbody&gt;~&lt;/tbody&gt;：表体部分 

&lt;tfoot&gt;~&lt;/tfoot&gt;：表底部分 

thead标签、tbody标签和tfoot标签都是用来定义表格的横行（tr标签）的 

这样组合之后，就可以针对该组合的整体来应用属性和样式表。 

使用这些标签的时候，一定要以thead标签、tfoot标签和tbody标签的顺序进行排列。在一个表格里，只能放置一个thead标签和一个tfoot标签，而tbody标签可以根据需要放置多个

**利用纵列设置表格属性和样式表** 

&lt;col span=”纵列数”&gt; 

&lt;col span=”纵列数” width=”宽度”&gt; 

col标签不仅可以用来改变表格的纵列结构，还可以用来根据纵列，来综合指定宽和行对齐方式等属性以及样式表 

该标签放置的位置要在caption标签的紧后面（如果没有caption标签，就放在table标签的开始标签的紧后面），以及thead标签和tr标签的前面

**表格居中 
**&lt;table align=”center”&gt;~&lt;/table&gt; 
**将表格嵌入到文本中** 

&lt;table align=”对齐方式”&gt;~&lt;/table&gt; 

位置：left,right 

将table标签的align属性指定为left或者right后，就可以将表格以居左或居右的方式嵌入到文字中间 

如果想要解除嵌入状态，可以使用&lt;br&gt;标签的clear属性

**解除表格的嵌套** 

&lt;br clear=”解除表格那一侧的嵌套”&gt; 

left：解除左侧表格的嵌套 

right：解除右侧表格的嵌套 

all：解除两侧表格的嵌套 
**设置表格与嵌套文字之间的距离** 

&lt;table vspace=”垂直距离” hspace=”水平距离”&gt;~&lt;/table&gt; 

垂直距离：表格的上下框与文字间的距离 

水平距离：表格的左右框与文字间的距离

**插入图像** 

&lt;img src=”URL” width=”宽度” hignt=”高度” alt=”替代文字”&gt; 

使用img标签，可以把图像插入到HTML文件中 

图像的格式一般可以使用GIF格式、JPEG格式和PNG格式 

不管图像实际的大小如何，都会按照在这里所指定的宽度和高度来显示 

alt属性是在不能显示图像的情况下，指定替代图像所使用的文字

**设置图像的边框** 

&lt;img src=”URL” alt=”替代文字” border=”边框的粗度”&gt; 
**设置图像与文字的垂直位置关系** 

&lt;img src=”URL” alt=”替代文字” align=”对齐方式”&gt; 

在同一行中，如果有图像和文字，那么就可以用align属性来设置图像和文字的垂直位置关系 
**制作图像热区** 

&lt;img src=”URL” alt=”替代文字” usemap=”#map名”&gt;

&lt;map name=”map名”&gt;~&lt;/map&gt; 

&lt;area shape=”形状” cords=”坐标” href=”URL” alt=”替代文字”&gt; 

在map标签中，用来设置实际单击的区域和链接地址的是area标签 

在area标签中，一定要指定表示链接地址的替代文字，之后要用image标签的usemap属性指定定义后的image map的名称（名称前面要加#），这样图像就可以作为image map产生相应的效果

**将图像嵌套在文本中** 

&lt;img src=”URL” alt=”替代文字” align=”对齐方式”&gt; 

位置：left,right 
**解除图像的嵌套** 

&lt;br clear=”解除哪一侧图像的嵌套”&gt; 
**设置图像与周围文字之间的距离** 

&lt;img src=”URL” alt=”替代文字” vspace=”垂直距离” hspace=”水平距离”&gt;

**放置Java小程序** 

&lt;applet code=”类文件名” width=”宽度” height=”高度” &gt;~&lt;/applet&gt; 

&lt;param name=”参数名” value=”参数值”&gt; 

applet标签是嵌入Java小程序时要使用的标签 

如果使用param标签，在执行java小程序时，需事先指定一些必要值。这时，param标签要位于&lt;applet&gt;~&lt;/applet&gt;范围的最开始部分&nbsp;

&nbsp;**制作填写表单** 

&lt;form action=”URL” method=”发送形式” enctype=”MIME类型” target=”窗口名称”&gt;~&lt;/form&gt;

URL：用来处理发送后表格的程序的URL 

发送形式：get,post 

MIME类型：以post方式发送内容时的MIME类型 

窗口名称：先是发送结果的窗口或框架名 

form标签表示在表单中填写的内容是可以发送的

**制作发送按钮** 

&lt;input type=”submit” value=”标签” name=”名称”&gt; 

标签：在按钮上显示的文字 

名称：按钮的名称 

将input标签的type属性设置为submit，再根据form标签的设置，可以制作发送填写在表单中数据的按钮

**制作重置按钮** 

&lt;input type=”reset” value=”标签”&gt; 
**制作通用按钮** 

&lt;input type=”button” name=”名称” value=”标签”&gt; 

通用按钮通常与JavaScript等脚本语言组合使用

**利用图像来制作发送按钮** 

&lt;input type=”image” src=”URL” name=”名称” alt=”替代文字” align=”对齐方式”&gt; 

通常，发送按钮都使用input type=”submit”代码，不过图像也可以作为发送按钮，具有发送功能。这时，图像被单击的位置将和表单的内容一起被发送 
**制作不同功能的发送按钮** 

&lt;button type=”类型” name=”名称” value=”发送值”&gt;~&lt;/button&gt; 

类型：submit,reset,button 
**button标签是用来制作按钮专用的** 

通过指定type属性值，就可以产生具有不同功能的按钮，包括发送按钮、重置按钮和通用按钮。另外，在&lt;button&gt;~&lt;/button&gt;中放置相应的内容，可以作为按钮的标签显示出来。在需要进行其他处理并设置多个发送按钮的情况下，根据name属性和value属性所显示的值，接受方就可以分辨出单击的是哪一个发送按钮

**制作单行文本框** 

&lt;input type=”text” name=”名称” value=”默认文字” size=”宽度” maxlength=”字符的最大输入数量”&gt; 
**制作多行文本框** 

&lt;textarea name=”名称” rows=”行数” cols=”宽度”&gt;~&lt;/textarea&gt; 
**制作输入密码的文本框** 

&lt;input type=”password” name=”名称” value=”默认文字” size=”宽度” maxlength=”字符的最大输入数量”&gt; 
**插入隐藏域** 

&lt;input type=”hidden” name=”名称” value=”发送值” &gt;

**制作单选按钮** 

&lt;input type=”radio” name=”名称” value=”发送文字” &gt; 

&lt;input type=”radio” name=”名称” value=”发送文字” checked&gt; 

将input标签的type属性设置为radio，可以用来制作单选按钮。单选按钮是多个选项当中只能选择其一的按钮。作为公共项目的选项而使用的单选按钮，要把它们都指定为同一名称。另外，发送数据的时候，为了识别所选的是哪一项，要用value属性来指定相应的值

**制作复选框** 

&lt;input type=”checkbox” name=”名称” value=”发送文字” &gt; 

&lt;input type=” checkbox” name=”名称” value=”发送文字” checked&gt; 

将input标签的type属性设置为checkbox，可以用来制作复选框。复选框可以在多个选项当中进行多项选择。作为公共项目的选项而使用的复选框，要把它们都指定为同一名称。另外，发送数据的时候，为了识别所选的是哪一项，要用value属性来指定相应的值

**制作菜单** 

&lt;select name=”名称”&gt;~&lt;/select&gt;：菜单整体 

&lt;option value=”发送值”&gt;~&lt;/option&gt;：菜单项 

&lt;option selected&gt;~&lt;/option&gt;：菜单项 
**select标签用来制作菜单** 

菜单的整体要在&lt;select&gt;~&lt;/select&gt;范围之内显示，然后按需要的数量在其中放置表示选项的&lt;option&gt;~&lt;/option&gt;。&lt;option&gt;~&lt;/option&gt;范围之内要写上实际菜单要显示的选项的名称。另外，如果省略了value属性，在这里记录的文字本身就会作为所选值发送

**组合菜单选项** 

&lt;optgroup lable=”组合名称”&gt;~&lt;/optgroup&gt;：制作组合菜单 

&lt;option lable=”次选项”&gt;~&lt;/option&gt;：组合内的选项 

组合名称：第一级显示的组合标题 

次选项：对应组合名称下面的在第二级显示出来的选项 

制作的菜单选项可以利用&lt;select&gt;~&lt;/select&gt;标签组合起来

**制作下拉列表** 

&lt;select size=”行数” name=”名称” multiple&gt;~&lt;/select&gt;：下拉列表框 

&lt;option value=”发送值”&gt;~&lt;/option&gt;：菜单项 

&lt;option selected&gt;~&lt;/option&gt;：菜单项 

在用于制作菜单的select标签中指定了size属性后，就可以显示下拉列表框 
**添加选择文件的功能** 

&lt;input type=”file” name=”名称”accept=”MIME”类型&gt; 

将input标签的type属性设置为file，可以自动做成能够选择发送表单数据的文件按钮和文本框 
**综合利用菜单选项** 

&lt;fieldset&gt;~&lt;/fieldset&gt;：组合 

&lt;legend align=”对齐方式”&gt;~&lt;/legend&gt;：组合的标题 

field标签用来把填写在表单中需要包含的输入内容和选项组合起来 

在&lt;fieldset&gt;~&lt;/fieldset&gt;的最开始部分放置legend标签，并且给该组合加上标题 

将标签文字与项目一体化 

&lt;label for=”参照ID”&gt;~&lt;/lable&gt; 

参照ID：添加了标签的对象的id属性值 

lable标签的作用是在输入项和选项及其标签文字之间建立起明确的关联，并使其一体化

**设置框架整体结构** 

&lt;frameset rows=”高度”&gt;~&lt;/frameset&gt; 

&lt;frameset cols=”宽度”&gt;~&lt;/frameset&gt; 

&lt;frame src=”URL” name=”框架名称”&gt; 

高度：在垂直方向上分布的多个框架的高度，按从上到下的顺序依次用逗号隔开来指定 

宽度：在水平方向上分布的多个框架的宽度，按从左到右的顺序依次用逗号隔开来指定 

URL：作为框架内容显示的HTML文件的URL 

框架名称：在指定链接等显示目标的时候使用的名称 

使用框架功能可以把窗口横竖切割开，然后在不同的块区域中显示其他的HTML文件。在指定了框架的文件中，原来body标签所在的位置，要放置frameset标签，这主要是由于在框架页面中不能使用body标签

在&lt;frameset&gt;~&lt;/frameset&gt;的范围中要按照顺序填入分割后框架内要填写的内容。如果不需要再分割，就用frame标签指定要导入的HTML文件，如果还要继续分割的话，就需要放置frameset标签（作为嵌套放置在里面，并且指定盖框架如何分割）

**设置框架的显示方法** 

&lt;frame scrolling=”滚动控制” noresize&gt; 

&lt;frame marginwidth=”左右缩进” marginheight=”上下缩进”&gt; 
**设置是否显示边框** 

&lt;frame frameborder=”显示指定框架的边框”&gt; 

frameborder属性用来设置分割开相邻框架的边框是否显示 
**去除分割框架的边框** 

&lt;frameset frameborder=”0” framespacing=”0” border=”0”&gt; 
**在不支持框架的环境中显示所需内容** 

&lt;noframes&gt;~&lt;/noframes&gt; 

这个标签要在&lt;frameset&gt;~&lt;/frameset&gt;范围的最开始或者最后处放置一个。在&lt;noframes&gt;~&lt;/noframes&gt;范围内要首先放置body标签，并在其中填写所要显示的内容。

**指定链接目标在哪一个框架内显示** 

&lt;a href=”URL” target=”框架名”&gt;~&lt;/a&gt; 

如果对框架内的文件中指定的链接不进行设置的话，就会在原来的相同框架中显示链接目标，如果想使这个链接目标在其他框架中显示的话，就需要指定target属性值，用想要显示（frame标签）的那个框架的name属性来指定框架名称

**插入内嵌框架** 

&lt;iframe src=”内容的URL” name=”框架名”&gt;~&lt;/iframe&gt; 

iframe标签不仅可以放置分割窗口形式的框架，还可以在窗口中放置独立显示的内嵌框架。在框架内还可以显示src属性所指定的内容 

如果浏览器不支持这种框架，要在&lt;iframe&gt;~&lt;/iframe&gt;之间指定要显示的内容

**在HTML中插入脚本** 

&lt;script type=”MME类型”&gt;~&lt;/script&gt; 

&lt;script type=”MME类型” language=”语言名称” src=”URL”&gt;~&lt;/script&gt; 

在HTML文件中编写脚本的时候要用到script标签，脚本语言要写在这个标签的范围内 

这时，在不支持这个标签的浏览器上会在画面上显示出脚本的部分，为了避免这种现象，通常把脚本整体作为HTML的注释。这个标签可以放在&lt;head&gt;~&lt;/head&gt;和&lt;body&gt;~&lt;/body&gt;范围内的任意位置上

**在不能执行脚本的环境中添加所需的内容** 

&lt;noscript&gt;~&lt;/noscript&gt; 

在脚本不能运行的时候，可以使用noscript标签来指定替代显示的内容 

这个标签要放置在&lt;body&gt;~&lt;/body&gt;的范围内



