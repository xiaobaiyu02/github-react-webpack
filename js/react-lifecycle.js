var ReactLifeCycle = {
  getInitialState: function(){
    console.log('getInitialState');
    return null;
  },

  getDefaultProps: function(){
    console.log('getDefaultProps');
  },

  componentWillMount: function(){
    console.log('componentWillMount');
  },

  componentDidMount: function(){
    console.log('componentDidMount');
  },

  componentWillReceiveProps: function(){
    console.log('componentWillReceiveProps');
  },

  shouldComponentUpdate: function(){
    console.log('shouldComponentUpdate');
    return true;
  },

  componentWillUpdate: function(){
    console.log('componentWillUpdate');
  },

  componentDidUpdate: function(){
    console.log('componentDidUpdate');
  },

  componentWillUnmount: function(){
    console.log('componentWillUnmount');
  }
};

var MyComponent = React.createClass({
  mixins: [ReactLifeCycle],
  render: function(){
    console.log('render: '+ this.props.times);
    return null;
  }
});

ReactDOM.render(<MyComponent times="首次装载组件"/>, document.getElementById("react-lifecycle"));
console.log("............................")
console.log("卸载组件")
ReactDOM.unmountComponentAtNode(document.getElementById("react-lifecycle"));
console.log("............................")
ReactDOM.render(<MyComponent times="重新装载组件"/>, document.getElementById("react-lifecycle"));
console.log("............................")
ReactDOM.render(<MyComponent times="再次渲染组件"/>, document.getElementById("react-lifecycle"));