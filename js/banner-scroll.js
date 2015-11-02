var LeftRightContainer = React.createClass({
	changeImgLeft: function(){
		var imgArry = this.props.imgs;
		var selected = this.props.selected;
		function getTranslate(){
			for(var i=0; i<imgArry.length; i++){
				if(imgArry[i].name===selected){
					if(i-1>=0)
						return imgArry[i-1].name;
					else
						return imgArry[i].name;
				}
			}
		};
		this.props.onChangeImg(getTranslate());
	},
	changeImgRight: function(){
		var imgArry = this.props.imgs;
		var selected = this.props.selected;
		function getTranslate(){
			for(var i=0; i<imgArry.length; i++){
				if(imgArry[i].name===selected){
					if(i+1<imgArry.length)
						return imgArry[i+1].name;
					else
						return imgArry[i].name;
				}
			}
		};
		this.props.onChangeImg(getTranslate());
	},
	render: function(){
		return(
			<div className="hander">
				<span className="left" onClick={ this.changeImgLeft }></span>
				<span className="right" onClick={ this.changeImgRight }></span>
			</div>
		);
	}
});

var  QuickLookContainer= React.createClass({
	changeImg: function(e){
		console.log(e.target.attributes.name.value);
		var name = this.props.imgs.filter(function(item){ return item.name=== e.target.attributes.name.value})[0].name
		this.props.onQuicklook(name);
	},
	render: function(){
		var getName = this.props.selected;
		var quickLooks = this.props.imgs.map(function(data){
			return(
				<li key={data.name} name={ data.name } className={ data.name===getName ? "selected": ""} onClick={ this.changeImg }></li>
			);
		}, this);
		return(
			<ul className="quick-look">
				{ quickLooks }
			</ul>
		);
	}
});

var ImgContainer = React.createClass({
	render: function(){
		var imgArry = this.props.imgs;
		var selected = this.props.selected;
		function getTranslate(){
			for(var i=0; i<imgArry.length; i++){
				if(imgArry[i].name===selected){
					return 1/imgArry.length*i*100;
				}
			}
		};
		var translate = "translateX(-"+ getTranslate() +"%)";
		var imgs = this.props.imgs.map(function(data){
			var url = "./img/"+ data.name +".jpg";
			return(
				<li key={data.name}><img src={ url } /></li>
			);
		});
		return(
			<div className="img-container">
				<ul style={{ transform: translate }}>
					{ imgs }
				</ul>
			</div>
		)
	}
});

var BannerScrollContainer = React.createClass({
	getInitialState: function() {
		return {selected: this.props.selected};
	},
	handleChange1: function(value){
		this.setState({ selected: value });
	},
	handleChange2: function(value){
		this.setState({ selected: value });
	},
	render: function(){
		return(
			<div className="banner-scroll">
				<QuickLookContainer imgs={ this.props.imgs } selected={ this.state.selected } onQuicklook={ this.handleChange2 } />
				<ImgContainer imgs={ this.props.imgs } selected={ this.state.selected }/>
				<LeftRightContainer onChangeImg={ this.handleChange1 } imgs={ this.props.imgs } selected={ this.state.selected }/>
			</div>
		)
	}
});


var IMGS = [
	{
		"name": "dog1",
		"title": "This is a my little dog",
		"desp": "ha ha ha, ver good, la la la111..."
	},
	{
		"name": "dog2",
		"title": "This is a my little cat",
		"desp": "ha ha ha, ver good, la la la222..."
	},
	{
		"name": "dog3",
		"title": "This is a my little duck",
		"desp": "ha ha ha, ver good, la la la333..."
	}
];

ReactDOM.render(
	<BannerScrollContainer imgs={ IMGS } selected="dog1"/>,
	document.getElementById("banner-scroll")
);