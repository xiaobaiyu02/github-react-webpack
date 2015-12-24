let { Component } = React;
let { render } = ReactDOM;

let tabs = [
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
	},
	{
		title: "Tab2",
		desp: "This is Tab2",
	},
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
	}


]
function SelectActive(Arry,Active){
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
	
	addNumber(Arry,Active);
	return Arry;
}

let Tabs = SelectActive(tabs);
console.log(Tabs)

class Navs extends Component{
	constructor(...x){
		super(...x);
	}
	handleSelectActive(newVal){
		this.props.selectActive(newVal);
	}
	render(){
		return(
			<div className="Navs">
				{
					this.props.actives.map( (item,key) => 
						<Nav key={key} 
							selectActive={ this.handleSelectActive.bind(this) }
							titles={item.subtab ? item.subtab : []}
							activeTitles={ this.props.activeTitles } />
					)
				}
			</div>
		)
	}
}
class Nav extends Component{
	constructor(...x){
		super(...x);
	}
	handleClick(e){
		this.props.selectActive(e.target.attributes.title.value);
	}
	render(){
		return(
			<ul className="navs">
				{
					this.props.titles.map( (item,key) =>
						<li key={key} className={this.props.activeTitles.some( (data) => data===item.key )?"active":""} >
							<a title={item.title} onClick={ this.handleClick.bind(this) }>{ item.title }</a>
						</li>
					)
				}
			</ul>
		)
	}
}

class Tabset extends Component{
	constructor(...x){
		super(...x);
		this.state = { title: this.props.title };
	}
	changeActive(newVal){
		this.setState({ title: newVal });
	}
	render(){
		function findActive(array, title){
			let Item, Key;
			function findItem(arr, t){
				for(var n of arr){
					if(n.subtab){
						if(n.title === t)
							Item = n;
						else 
							findItem(n.subtab, t)
					}
					else{
						if(n.title === t)
							Item = n;
					}
				}
			}
			function findKey(data){
				if(data.desp){
					Key = data
				}
				else{
					console.log(data)
					findKey(data.subtab[0])
				}
					
			}
			findItem(array, title);
			findKey(Item);
			return Key;
		};
		function activeKey(key){
			let keys = [];
			for(var i=1; i<=key.length; i+=2){
				keys.push(key.slice(0,i));
			}
			return keys;
		};
		function addActive(tabs, keys){
			for(var n of tabs){
				if(n.subtab){
					if(keys.some( item => item===n.key))
						Actives.push(n)
					addActive(n.subtab, keys)
				}
				else{
					if(keys.some( item => item===n.key))
						Actives.push(n)
				}
			}
		};
		let Actives = [];
		let Active = findActive(this.props.tabs, this.state.title);
		let keys = activeKey(Active.key);
		addActive(this.props.tabs, keys);

		return(
			<div className="tabset">
				<Nav titles={ this.props.tabs } activeTitles={ keys } selectActive={ this.changeActive.bind(this) }/>
				<Navs actives={ Actives } activeTitles={ keys } selectActive={ this.changeActive.bind(this) }/>
				<p className="content">{ Active.desp }</p>
			</div>
		)
	}
}

render(<Tabset tabs={ Tabs } title="Tab1-subTab2-Dog" />,document.getElementById("tabset2") )