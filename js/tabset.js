let { Component } = React;
let { render } = ReactDOM;

let tabs = [
	{
		title: "Tab1",
		subtab: [
					{
						title: "Tab1-subTab2",
						subtab: [
									{
										title: "Tab1-subTab2-Apple",
										subtab: [
													{
														title: "Tab1-subTab2-Apple-01",
														desp: "This is an Tab1-subTab2-Apple-01"
													}
												]
									},
									{
										title: "Tab1-subTab2-Dog",
										desp: "This is a Tab1-subTab2-Dog",
									},
									{
										title: "Tab1-subTab2-Cat",
										desp: "This is a Tab1-subTab2-Cat",
									}
								]
					},
					{
						title: "Tab1-subTab1",
						desp: "This is Tab1-subTab1"
					}
				]
	},
	{
		title: "Tab2",
		desp: "This is Tab2",
	},
	{
		title: "Tab3",
		subtab: [
					{
						title: "Tab3-subTab1",
						desp: "This is Tab3-subTab1",
					},
					{
						title: "Tab3-subTab2",
						desp: "This is Tab3-subTab2",
					},
					{
						title: "Tab3-subTab3",
						desp: "This is Tab3-subTab3",
					}
				]
	}

]


let SelectActive = {
	SelectActive: function SelectActive(Arry,Active){
					let key;
					function addKey(array, index, active){
						for(var n of array){
							if(n.subtab){
								n.key = index+"-"+array.indexOf(n);
								addKey(n.subtab, n.key, active);
							}
							else{
								n.key = index+"-"+array.indexOf(n);
								if(n.desp === active)
									key = n.key;
							}
						}
					}
					function addNumber(tabs, active){
						for(var n of tabs){
							if(n.subtab){
								n.key = tabs.indexOf(n).toString();
								addKey(n.subtab, n.key, active);
							}
							else{
								n.key = tabs.indexOf(n).toString();
								if(n.desp === active)
									key = n.key.toString();
							}
						}
					}
					function activeKey(key){
						let keys = [];
						for(var i=1; i<=key.length; i+=2){
							keys.push(key.slice(0,i));
						}
						return keys;
					}
					function addActive(tabs){
						for(var n of tabs){
							if(n.subtab){
								if(keys.some( item => item===n.key))
									n._active=true;
								else
									n._active=false;
								addActive(n.subtab)
							}
							else{
								if(keys.some( item => item===n.key))
									n._active=true;
								else
									n._active=false;
							}
						}
					}
					
					addNumber(Arry,Active);
					let keys = activeKey(key);
					addActive(Arry);
					return Arry;
				}
}

let SelectDesp = {
	SelectDesp: function SelectDesp(Arry){
					let navs = [];let desps = [];
					function pushNav(array){
						navs.push(array);
						for(var n of array){
							if(n._active && n.subtab)
								pushNav(n.subtab)
						}
					}
					pushNav(Arry);
					function selectDesp(array){
						if(array[0].subtab){
							if(array[0].subtab[0].subtab)
								selectDesp(array[0].subtab[0].subtab)
							else
								desps.push({key: array[0].subtab[0].key, desp: array[0].subtab[0].desp});
						}
						else{
							desps.push({key: array[0].key, desp: array[0].desp})
						}
					}
					function Desps(array){
						for(var n of array){
							if(n.subtab){
								if(n.subtab[0].subtab)
									selectDesp(n.subtab[0].subtab)
								else
									desps.push({key: n.subtab[0].key, desp: n.subtab[0].desp});
							}
							else
								desps.push({key: n.key, desp: n.desp});
						}	
					}
					Desps(Arry);
					function Adesps(array){
						let Adesps = [];
						for(var n of desps){
							for(var i=1; i<=n.key.length-2; i+=2){
								Adesps.push({key: n.key.slice(0,i), desp: n.desp});
							}
						};
						return Adesps;
					}
					for(var n of Adesps(desps).concat(desps)){
						addDesp(n, Arry);
					}
					function addDesp(data, array){
						for(var n of array){
							if(n.subtab){
								if(n.key === data.key){
									n._desp = data.desp;
									break;
								}
								else
									addDesp(data, n.subtab)
							}
						}
					}
					return navs;
				}
}
let Navs = React.createClass({
	mixins: [SelectDesp],
	handleClick: function(e){
		this.props.changeDesp(e.target.dataset.value)
	},
	render: function(){
		let navs = this.SelectDesp(this.props.titles);
		// console.log(999,navs)
		return(
			<div>
				{
					navs.map( (item,key) => 
						<ul className="header" key={key}>
							{
								item.map( (item1, key1) =>
									<a key={ key1 }
										className={ item1._active===true ? "active":"" }
										onClick={ this.handleClick }
										data-value={ item1.desp?item1.desp:item1._desp }>{ item1.title }</a> )
							}
						</ul>
					)
				}
			</div>
		)
	}
});

let Tabset = React.createClass({
	mixins: [SelectActive],
	getInitialState: function(){
		return { desp: this.props.desp, last_desp: "" };
	},
	handleChange: function(newVal){
		this.setState({desp: newVal});
	},
	componentDidMount: function(){
		console.log(1111111);
		// this.setState({last_desp: this.state.desp});
	},
	render: function(){
		let Arrays = this.SelectActive(this.props.subtabs,this.state.desp);
		return(
			<div className="tabset">
				<Navs titles={ Arrays }
					  active={ this.state.desp }
					  changeDesp={ this.handleChange }/>
				<div className="content">{ this.state.desp }</div>
			</div>
		)
	}
});


ReactDOM.render(<Tabset subtabs={ tabs } desp="This is an Tab1-subTab2-Apple-01"/>, document.getElementById("tabset"))