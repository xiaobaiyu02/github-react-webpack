// var RadioOption = React.createClass({
//   render: function () {
//     return (
//       <label>
//         <input type="radio" value={this.props.value} name={this.props.name} />
//         {this.props.label}
//       </label>
//     )
//   }
// })

// var RadioGroup = React.createClass({
//   renderChildren: function () {
//     return React.Children.map(this.props.children, function (child) {
//         console.log(RadioOption)
//        if (child.type === RadioOption){
//         return React.cloneElement(child, {
//           name: this.props.name
//         })
//        }

//        else
//         return child
        
//     }.bind(this))
//   },
//   render: function () {
//     return (
//       <div className="radio-group">
//         {this.renderChildren()}
//       </div>
//     )
//   }
// })

// var WhereImUsingRadioGroups = React.createClass({
//   render: function () {
//     return (
//       <RadioGroup name="blizzard-games">
//         <RadioOption label="Warcraft 2" value="wc2" />
//         <span>hahhha</span>
//         <RadioOption label="Warcraft 3" value="wc3" />
//         <RadioOption label="Starcraft 1" value="sc1" />
//         <RadioOption label="Starcraft 2" value="sc2" />
//       </RadioGroup>
//     )
//   }
// })

// ReactDOM.render(
//  <WhereImUsingRadioGroups />,
//  document.getElementById("react-children"));



// var ShowOnlySpansOrMyComponent = React.createClass({
//     render: function() {
//         var onlySpans = React.Children.map(this.props.children, function(child) {
//             console.log(child,child.type)
//             if (child.type === 'span' || child.type === MyComponent.type) {
//                 return child;
//             }
//         });
//         return <div>{ onlySpans }</div>;
//     }
// });
// var MyComponent = React.createClass({
//     render: function(){
//         return <h1>MyComponent</h1>
//     }
// });
// ReactDOM.render(<ShowOnlySpansOrMyComponent>
//                  you have to <span>work</span>
//                  <div>AB</div> <MyComponent /> <span>now</span>
//              </ShowOnlySpansOrMyComponent>,
//              document.getElementById('react-children'));




var App = React.createClass({
  render: function () {
    return (
      <div>
        <FormField label="Toppings">
          <RadioGroup>
            <label><input type="checkbox"/> Pepperoni</label>
            <label><input type="checkbox"/> Olives</label>
            <label><input type="checkbox"/> Mushrooms</label>
            <label><input type="checkbox"/> Extra Cheese</label>
          </RadioGroup>
        </FormField>
      </div>
    );
  }
});

var FormField = React.createClass({
  propTypes: {
    error: React.PropTypes.bool,
    label: React.PropTypes.string.isRequired,
    children: function (props, propName, componentName) {
      var prop = props[propName];
      var types = ['input', 'select', 'textarea'];
      
      // Only accept a single child, of the appropriate type
      if (React.Children.count(prop) !== 1 || (
            types.indexOf(prop.type) === -1 &&
            prop.type !== RadioGroup
          )
        ) {
        return new Error(
          '`' + componentName + '` ' +
          'should have a single child of the following types: `' +
          types.join('`, `') + '`, `RadioGroup`.'
        );
      }
    }
  },
  
  render: function () {
    var className = this.props.error ? 'error' : null;
    
    return (
      <div className={className}>
        <div>{this.props.label}:</div>
        {this.props.children}
      </div>
    );
  }
});

var RadioGroup = React.createClass({
  propTypes: {
    children: function (props, propName, componentName) {
      var prop = props[propName];
      var types = ['radio', 'checkbox'];
      var error;
      
      React.Children.forEach(prop, function (el) {
        if (error) return;
        
        // Make sure child is a label
        if (el.type !== 'label') {
          error = new Error(
            '`' + componentName + '` only accepts `labels`.'
          );
        }
          
        // If child is a label, validate it's children
        if (!error) {
          var foundInput = 0;
          React.Children.forEach(el.props.children, function (e) {
            if (error) return;

            // The label contains a single input, of appropriate type
            if (e.type === 'input' &&
                types.indexOf(e.props.type) > -1) {
              foundInput++;
            }
          });

          // If a single input wasn't found issue warning
          if (foundInput !== 1) {
            error = new Error(
              '`' + componentName + '` ' +
              'only accepts inputs of the following types: `' +
              types.join('`, `') + '`.'
            );
          }
        }
      });
      
      return error;
    },
  },
  
  render: function () {
    return (
      <ul>
        {this.props.children.map(function (item, i) {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('react-children'));
