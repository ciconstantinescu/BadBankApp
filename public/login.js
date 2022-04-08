function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');    

  return (
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <LoginMsg setShow={setShow} setStatus={setStatus}/>}
    />
  ) 
}

// function firebase(){
//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//     // Signed in 
//   const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// }


function LoginMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button>
  </>);
}

function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [user,setUser] = React.useState('');
  // const ctx = React.useContext(UserContext);  

  function handle(){
    // const user = ctx.users.find((user) => user.email == email);
    console.log(user);
    console.log(email, password);
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(`user: ${user.email}`);
      props.setStatus("");
      props.setShow(false);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("one");
      console.log(`Error logging in ${errorCode}: ${errorMessage}`);
      props.setStatus("fail!");
    });


  //   if (!user) {
  //     console.log('one')      
  //     props.setStatus('fail!')      
  //     return;      
  //   }
  //   if (user.password == password) {
  //     console.log('two')            
  //     props.setStatus('');
  //     props.setShow(false);
  //     return;      
  //   }
  //   console.log('three')          
  //   props.setStatus('fail!');        
  }

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
    <button type="submit" className="btn btn-light" onClick={handleLogout}>handleLogout</button>
  </>);

}