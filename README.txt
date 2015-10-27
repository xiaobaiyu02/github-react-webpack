React：
  （1）虚拟DOM：
	就是React通过自己的方式模拟一套DOM API，然后通过自己的逻辑转换为真正的DOM，这个逻辑就是每当数据变化时，React都会重新render自己的DOM树，然后和上次的树进行对比，将变化的部分更新到浏览器DOM树上。
	例如：当一条新数据传过来时，传统的开发思路是需要确定哪条数据过来后，还要将新的DOM Append到当前DOM树上，而React则会重新更新整个虚拟DOM树，意味着开发者只需要关心数据整体，两次数据之间的UI如何变化，则完全交给框架去做，而且虚拟DOM是内存数据，性能很高，还解决了跨浏览器问题。
  （2）组件化的开发思路：
	就是UI功能模块之间的分离。拿作业空间学生评论界面来说，以MVC的开发模式，如Angular,开发者需从技术的角度对UI进行拆分，通过Angular的模板引擎将界面和数据展现出来，再通过Controller进行逻辑控制，对于React来说，开发者只需从功能角度出发，将UI分成不同的组件，每个组件都独立封装，意味着这个CommentBox是由Comments，CommentList,CommentForm这三个小组件组成，而这个CommentBox也可以成为其他组件的子组件。
  （3）使用JSX直观定义界面：
	JSX实质上就是用JS去写HTML标记和自定义标记，例如Angular中的repeat可以用一个简单的数组方法map来替代，开发者不需要学习复杂的模板语言，只需要用熟悉的JS去构建界面。其实，使用React不一定要用JSX，可以直接用原生JS，但是使用原生的会很麻烦，要创建元素就要一直React.createElement()下去，用JSX只需React.render()XML树形结构即可。
  （4）单向数据流：
	不同于Angular，Facebook用Flux来管理组件之间，以及组件和数据模型之间的通信。如下图：（many different Actions -> Dispatcher -> Store -> View）全局Dispatcher接收所有的Action，然后Store做出相应的操作后发出change event，View监听到change event后更新整个虚拟DOM tree。
  （5）React衍生：
	React Native可以通过JS来开发iOS和Android原生应用，React Native就是利用虚拟DOM，使UI层脱离浏览器DOM，独立出来，将其换成了iOS或者Android的原生控件，而将UI层换成Canvas就是React Canvas了，使其所有界面元素都通过Canvas来绘制。

Webpack：
    Webpack就是前端模块管理和打包工具。
    （1）可以通过同步或异步的方式对项目本身模块或第三方模块进行加载；
    （2）可以通过webpack-dev-server去开启一个开发服务器；
    （3）可以通过Loaders对所有静态资源JS，CSS, LESS, JSX, 图片等进行统一管理，如将LESS转换成CSS，对特定大小的图片进行base64转换等；
    （4）可以通过react-hot-loader将实时打包的代码推送到页面进行替换，无需刷新浏览器；

npm start 后监听localhost:3000


	




