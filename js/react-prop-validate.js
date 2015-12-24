let { Component } = React;
let { render } = ReactDOM;
let { PropTypes } = React;

class Validate extends Component{
	constructor(...x){
		super(...x);
	}
	render(){
		return(
			<div className="validate">
				<h1 ref="title" className="validate_title">{ this.props.title }</h1>
				<p ref="content" className="validate_content">{ this.props.content }</p>
				<div ref="desp" className="validate_desp">{ this.props.desp }</div>
			</div>
		)
	}

}
//error = propTypes[propName](props, propName, componentName, location);  
function limitLength(props, propName, componentName, location){
	console.log(props, propName, componentName, location);
	let value = props[propName];
	if(value){
		if(typeof value === "string"){
			return value.length<=10 ? null : new Error(propName + " in " + componentName + " is longer than 10 characters!") 
		}
	}
	return null;
}

Validate.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	desp: limitLength
}

render(
	<Validate title="validate title" content="validate content" desp="validate desp"/>, 
	document.getElementById("react-prop-validate")
)


// function createChainableTypeChecker(validate) {  
//   function checkType(isRequired, props, propName, componentName, location) {
//     componentName = componentName || ANONYMOUS;
//     if (props[propName] == null) {
//       var locationName = ReactPropTypeLocationNames[location];
//       if (isRequired) {
//         return new Error(
//           ("Required " + locationName + " `" + propName + "` was not specified in ") +
//           ("`" + componentName + "`.")
//         );
//       }
//       return null;
//     } else {
//       return validate(props, propName, componentName, location);
//     }
//   }

//   var chainedCheckType = checkType.bind(null, false);
//   chainedCheckType.isRequired = checkType.bind(null, true);

//   return chainedCheckType;
// }