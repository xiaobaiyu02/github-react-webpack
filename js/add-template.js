let { Component } = React;
let { render } = ReactDOM;

class Navs extends Component{
	constructor(...x){
		super(...x);
	}
	handleClick(e){
		this.props.changeSelect(e.target.attributes.title.value);
	}
	render(){
		let activeItem = this.props.navs.filter( (item) => this.props.active===item.props.title )[0];
		return(
			<ul className="navs">
				{
					this.props.navs.map( (item,key) =>
						<li key={key} className={ this.props.navs.indexOf(item)<=this.props.navs.indexOf(activeItem) ? "active":"" } >
							{
								this.props.navs.indexOf(item)!== this.props.navs.length-1 ?
								<a onClick={ this.handleClick.bind(this) } title={ item.props.title } >{ item.props.title + "→" }</a>:
								<a onClick={ this.handleClick.bind(this) } title={ item.props.title } >{ item.props.title }</a>
							}
						</li>
					)
				}
			</ul>
		)
	}
}

class Buttons extends Component{
	constructor(...x){
		super(...x);
	}
	handleClick(e){
		this.props.clickButton(e.target.attributes.title.value);
	}
	render(){
		return(
			<footer>
				<button onClick={ this.handleClick.bind(this) } title="Previous">←Previous</button>
				<button onClick={ this.handleClick.bind(this) } title="Next">Next→</button>
			</footer>
		)
	}
}

class AddBox extends Component{
	constructor(...x){
		super(...x);
		this.state={ active: this.props.active, data: {} }
	}
	handleChange(newVal){
		if(!this.state.invalid)
			this.setState({ active: newVal })
	}
	handleClickButton(newVal){
		let _this = this;
		let element = this.refs["child"];
		let userName = "";

		if(element){
			switch(element.attributes.name.value){
				case "step1":
				console.log(777,element.user.value)
					let step1_valid = /^\w{0,20}$/.test(element.user.value) && /^\w{6,20}$/.test(element.password.value);
					changeState(_this, newVal, step1_valid);
					
						if(!this.state.data.user && !this.state.data.password){
							if(step1_valid){
								this.state.data.user = element.user.value;
								this.state.data.password = element.password.value;
							}						
						}
						else{
							element.user.value = this.state.data.user;
							element.password.value = this.state.data.password;
						}
					break;
				case "step2":
					let step2_valid = /^[0-9]{11}$/.test(element.tel.value) && /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(element.email.value);
					changeState(_this, newVal, step2_valid);
					if(!this.state.data.tel && !this.state.data.email){
							if(step2_valid){
								this.state.data.tel = element.tel.value;
								this.state.data.email = element.email.value;
							}
						}
						else{
							element.tel.value = this.state.data.tel;
							element.email.value = this.state.data.email;
						}
					break;
				case "step3":
					changeState(_this, newVal, true);
					this.state.data.sex = element.sex.checked;
					this.state.data.hobie = element.hobie.value;
					break;
				case "step4":
					console.log(element)
					element.userName.value = this.state.data.user;
					changeState(_this, newVal, true);
					break;
			}			
		};
		function changeState(_this, newVal, valid){
			let activeItem = _this.props.children.filter( (item) => _this.state.active===item.props.title )[0];
			let index = _this.props.children.indexOf(activeItem);
			let data;
			if(newVal === "Previous"){
				if(index-1>0)
					data = _this.props.children[index-1];
				else
					data = _this.props.children[0];
				if(!_this.state.invalid)
					_this.setState({ active: data.props.title })
			}
			else{
				if(valid){
					if(index+1<_this.props.children.length-1)
						data = _this.props.children[index+1];
					else
						data = _this.props.children[_this.props.children.length-1];
					if(!_this.state.invalid)
						_this.setState({ active: data.props.title })					
				}
			}
		}

	}
	renderChildren(){
		console.log()
		return React.Children.map( this.props.children, (child) => {
			if(this.state.active===child.props.title && child.type==="form"){
				return React.cloneElement(child,{ ref: 'child' });
			}
		}.bind(this))
	}
	render(){
		
		return(
			<div className="addBox">
				<Navs navs={ this.props.children } active={ this.state.active } changeSelect={ this.handleChange.bind(this) } />
				<div className="children">
					{ this.renderChildren() }
				</div>
				<Buttons clickButton={ this.handleClickButton.bind(this) } />
			</div>
		)
	}
}

render(<AddBox active="Basic Info">
			<form name="step1" title="Basic Info">
				<label>user name <input type="text" name="user" placeholder="0-20位字符"/></label><br/>
				<label>password <input type="password" name="password" placeholder="6-20位字符"/></label>
			</form>
			<form name="step2" title="Configure hardware">
				<label>tel <input type="number" name="tel"/></label><br/>
				<label>email <input type="email" name="email"/></label>
			</form>
			<form name="step3" title="Install">
				sex: <label>boy <input type="radio" name="sex" checked/></label>&nbsp;&nbsp;<label>girl <input type="radio" name="sex"/></label><br/>
				hobie: <label><select name="hobie"><option>read</option><option>cook</option><option>sing</option></select></label>
			</form>
			<form name="step4" title="Finish">
				<p>Dear <input type="text" name="userName"/>, Congratulations for finishing this part!</p>
			</form>
		</AddBox>,
	document.getElementById("add-template"))


