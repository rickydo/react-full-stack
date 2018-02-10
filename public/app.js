var React = require('react');
var ReactDOM = require('react-dom');

var Layout = React.createClass({
  // expect to get a child
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
        <footer>By signing up, you agree to our
          <a href="/terms">Terms of Service</a> and
          <a href="/privacy">Privacy Policy</a>.
        </footer>
      </div>
    )
  }
})

var Login = React.createClass({
  getInitialState: function(){
    return {
      remember: true;
    }
  },
  onChangeRemember: function(e){

  }


  render: function(){
    return
    <form action="/u/login" method="post" accept-charset="utf-8">
        <Email />
        <Pssword />
          <label htmlFor="remember-me">
            <input type="checkbox" name="remember_me" value="1" checked="checked"
              id="remember-me" defaultChecked/>
              Remember Me
          </label>
        <p>
          <a href="register.html" className='inlink'>Register</a> |
          <a href="#request-reset-password" className="inlink"> Reset Password</a>
        </p>
        <button type="submit">Login</button>
    </form>
  }
})


var Email = React.createClass({
  render:function(){
    return
    <input type="email" name="email" data-info="An active email account is needed to gain access."
      placeholder="Your email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      required title="You need to have a working email to gain access." required="required" id="email"/>
  }
})

var Pssword = React.createClass({
  getInitialState: function(){
    return: {
      password1: '',
      password2: ''}
  },
  onChange: function(e){
    this.setState({
      e.target.name
      password1
    })
  },
  render:function(){
    var ch = [<input type="password" name="password1" required="required" placeholder="Password"
              key="password" onChange={this.onChange}/>];
    if(this.props.twice){
      ch[1] = [<input type="password" name="password2" required="required" placeholder="Repeat Password"
                key="password2" onChange={this.onChange}/>]
    }
    return
      <div>{ch}</div>
  }
})

var Register = React.createClass({
  render:function(){
    return
    <form method="post" accept charset="utf-8" action="/u/register">
      <Email />
      <Password twice="1"/>
        <span className="col-p100 info"</span>
        <button type="submit">Submit</button>
    </form>;
  }
});


ReactDOM.render(
  <Layout title="Login">
    <Login />
    {/* <Register/> */}
  </Layout>
)
