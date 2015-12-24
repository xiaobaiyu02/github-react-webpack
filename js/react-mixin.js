var DefaultNameMixin = {
    getDefaultProps: function () {
        return {name: "Skippy"};
    }
};

var OuterComponent = React.createClass({
    render: function () {
        return (
            <div>
                <ComponentOne />
                <ComponentTwo />
            </div>
        );
    }
});

var ComponentOne = React.createClass({
    mixins: [DefaultNameMixin],
    render: function() {
        return <h2>Hello {this.props.name}</h2>;
    }
});

var ComponentTwo = React.createClass({
    mixins: [DefaultNameMixin],
    getDefaultProps: function () {
        return {food: "Pancakes"};
    },
    render: function () {
        return (
            <div>
                <h4>{this.props.name}</h4>
                <p>Favorite food: {this.props.food}</p>
            </div>
        );
    }
});

React.renderComponent(<OuterComponent />, document.body);

var UselessMixin = {
    componentDidMount: function () {
      console.log("asdas");
    }
};

var LolMixin = {
   mixins: [UselessMixin]
};

var PantsOpinion = React.createClass({
   mixins: [LolMixin],
   render: function () {
       return (

<p>I dislike pants</p>

);
   }
});

React.renderComponent(<PantsOpinion />, document.body);