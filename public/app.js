var React = require('react');
var ReactDOM = require('react-dom');

var Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render: function(){
    return(
      <div className="overlay"
        <div className="box">
          <h2>{this.props.title}</h2>
          {this.props.children}
        </div>
        <footer>By signing up, you agree to our agreement. </footer>
      </div>
    )
  }
})


var Email = React.createClass({
  render:function(){

  }
})

var Register = React.createClass({
  render:function(){
    <form method="post" accept charset="utf-8" action="/u/register">
      <Email />
      <Password twice="1"
        <span className="col info"</span>
        <button type="submit">Submit</button>
    </form>;
  }
});


ReactDOM.render(
  <Layout title="Login">
    <Register/>
  </Layout>
)
