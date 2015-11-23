let { Component } = React;
let { render } = ReactDOM;

let INPUT_TYPES = "color|data|datetime|datetime-local|file|month|number|password|range|search|tel|text|time|url|week".split("|");

class FormComponent extends Component{
	constructor(...x){
		super(...x);
		this.state = {};
	}
	handleChange(e){
		let el = e.target;
		let name = el.name;
		let type = el.type;
		let stateChange = {};

		if (type == 'checkbox') {
			let objType = Object.prototype.toString.call(el.form.elements[name]);
			if (objType == '[object RadioNodeList]' || objType == '[object NodeList]' || objType == '[object HTMLCollection]') {
				
				let checkedBoxes = (Array.isArray(this.state[name]) ? this.state[name].slice() : [])
				console.log(checkedBoxes)
				if (el.checked) {
					checkedBoxes.push(el.value)
				}
				else {
					checkedBoxes.splice(checkedBoxes.indexOf(el.value), 1)
				}
				stateChange[name] = checkedBoxes
			}
			else {
				stateChange[name] = el.checked
			}
		}
		else if(type =="select-multiple"){
			let selectMultiples = [];
			for(let i=0; i<el.selectedOptions.length; i++){
				selectMultiples.push(el.selectedOptions[i].value)
			}
			stateChange[name] = selectMultiples;
		}
		else{
			stateChange[name] = el.value;
		}
		this.setState(stateChange)
	}
	render(){
		return(
			<form name="reactFrom" onChange={ this.handleChange.bind(this) }>
				<section>
					{
						INPUT_TYPES.map( (item,key) => {
							let name = 'input[' + item + ']';
							return <section key={ key } ><input type={ item } name={ name } placeholder={ name }/></section>
						})
					}
				</section>
				<section>
					<label><input type="radio" name="input[radio]" value="girl" />girl</label>
					<label><input type="radio" name="input[radio]" value="boy" />boy</label>
				</section>
				<section>
					<label><input type="checkbox" name="input[checkbox]" value="food" />food</label>
					<label><input type="checkbox" name="input[checkbox]" value="sleep" />sleep</label>
					<label><input type="checkbox" name="input[checkbox]" value="book" />book</label>
				</section>
				<section>
					<select name="select[single]" defaultValue="song2">
						<option value="song1">my heart will go on</option>
						<option value="song2">hale</option>
						<option value="song3">Goodbye</option>
					</select>
				</section>
				<section>
					<select name="select[multiple]" defaultValue={["papa","mama"]} multiple>
						<option value="sister">sister</option>
						<option value="brother">brother</option>
						<option value="papa">papa</option>
						<option value="mama">mama</option>
						<option value="grandpa">grandpa</option>
						<option value="grandma">grandma</option>
					</select>
				</section>
				<pre>this.state: {JSON.stringify(this.state, null, 2)}</pre>			
			</form>
		)
	}
}

render(<FormComponent/>, document.getElementById('form'))
