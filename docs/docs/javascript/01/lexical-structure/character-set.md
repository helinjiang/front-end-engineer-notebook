# 字符集

JavaScript程序是用 `Unicode` 字符集编写的。`Unicode` 是 `ASCII` 和 `Latin-1` 的超集，并支持地球上几乎所有的语言。【更多…】

## 1. JavaScript 区分大小写

JavaScript 是区分大小写的语言，也即关键字、变量、函数名和所有的标识符（identifier）都必须严格区分大小写。

比如，关键字 `while` 必须写成 `while` ，而不能写成 `While` 或者 `WHILE` 。同样， `online` 、 `Online` 、 `OnLine` 和 `ONLINE` 是 4 个不同的变量。

> 但需要注意的是，HTML 并不区分大小写（尽管 xHTML 区分大小写，但由于浏览器有着非常强大的纠错能力，即使文档中包含很多不严格的大小写，浏览器还是比较“宽容”地正确解析渲染）。由于它和客户端 JavaScript 联系紧密，因此这点区别很容易混淆。许多客户端 JavaScript 对象和属性与它们所表示的 HTML 标签和属性同名。在 HTML 中，这些标签和属性名可以使用大写也可以是小写，而在 JavaScript 中则必须是小写。例如，在 HTML 中设置事件处理程序时，`onclick` 属性可以写成 `onClick`，但在 JavaScript 代码（或者 xHTML 文档）中，必须使用小写的 `onclick`。【TODO：补充例子】

## 2. 空格、换行符

JavaScript 会忽略程序中 [标识（token）](http://en.wikipedia.org/wiki/Token) 之间的空格（Whitespace）。多数情况下，JavaScript 同样会忽略换行符（Line Break）（[可选的分号](optional-semicolons.md) 章节中提到了一种意外情形）。

由于可以在代码中随意使用空格和换行，因此可以采用整齐、一致的缩进来形成统一的编码风格，从而提高代码的可读性。【TODO：编程风格】

JavaScript还可以识别这些表示空格的字符：

- `\u0020`：普通的空格符
- `\u0009`：转义序列为 `\t`，Tab 水平制表符
- `\u000B`：转义序列为 `\v`，垂直制表符
- `\u000C`：转义序列为 `\f`，换页符
- `\u00A0`：不间断空格
- `\uFEFF`：字节顺序标记

## 3. Unicode转义序列

Unicode 转义序列（Unicode Escape Sequences）均以

| Unicode 字符值 | 转义序列 | 含义 | 类别 |
| --- | --- | --- | --- |
| \u0008 | \b | Backspace | |
| \u0009 | \t | Tab | 空白 |
| \u000A | \n | 换行符（换行） | 行结束符 |
| \u000B | \v | 垂直制表符 | 空白 |
| \u000C | \f | 换页 | 空白 |
| \u000D | \r | 回车 | 行结束符 |
| \u0020 |    | 空格 | 空白 |
| \u0022 | \" | 双引号 (") | |
| \u0027 | \' | 单引号 (') | |
| \u005C | \\ | 反斜杠 (\) | |
| \u00A0 |    | 不间断空格 | 空白 |
| \u2028 |    | 行分隔符 | 行结束符 |
| \u2029 |    | 段落分隔符 | 行结束符 |
| \uFEFF |    | 字节顺序标记 | 空白 |


[特殊字符\u2028导致的Javascript脚本异常](http://www.cnblogs.com/rrooyy/p/5349978.html)
