function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');   
  const [user, setUser]     = React.useState('');

  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus} setUser={setUser}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus} user={user}/>}
    />
  ) 
}

function LoginMsg(props){
  const currentUser = props.user.email;
  window.alert("You are logged in!");
  // window.location.href = "http://cnn.com";
  return(<>
    {/* <link src="/logout.js" defer type="text/babel"></link> */}
    <h5>{`Welcome ${currentUser}!`}</h5>
    {/* <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button> */}
    {/* <button type="submit" className="btn btn-light" onClick={handleLogout}>handleLogout</button>  */}
  </>);
}



function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');

  function handle(){
    // console.log(user);
    console.log(email, password);
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // const currentUser = user.email;
      console.log(`user: ${user.email}`);
      props.setUser(user);
      props.setStatus("");
      props.setShow(false);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("one");
      // console.log(`Error logging in ${errorCode}: ${errorMessage}`);
      props.setStatus("fail!");
    });  
  }

  // Function to display all accounts 

  function handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("User successfuly logs out");
      })
      .catch((error) => {
        console.log(`Error logging out ${errorCode}: ${errorMessage}`);
      });
  }


  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
    {/* <button type="submit" className="btn btn-light" onClick={handleLogout}>handleLogout</button> */}
  </>);

}