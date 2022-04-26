function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [accountID, setAccountID] = React.useState(null);
  
  function generateAccountID() {
    const accountID = function () {
      return '_' + Math.random().toString().slice(2,11);
    };
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow} setAccountID={setAccountID}/>}
    />
  )
}

<<<<<<< HEAD
function direct () {
  window.location.replace("/#/alldata")
=======
function redirect () {
  window.location.replace("/#/login")
>>>>>>> ed5a85e98a824cfc3d56b098dd4b51d0adf0ceeb
}

function CreateMsg(props){
  const accountID = Math.random().toString().slice(2,11);
  return(<>
    <h5>Success! Your account number is {accountID}</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>Add another account</button><br></br><br></br>
<<<<<<< HEAD
     <button type="submit" className="btn btn-light" onClick={direct}>Go to Account Summary</button>
=======
     <button type="submit" className="btn btn-light" style={{backgroundColor: 'green'}} onClick={redirect}>Click to Login</button>
>>>>>>> ed5a85e98a824cfc3d56b098dd4b51d0adf0ceeb
  </>);
}

function CreateForm(props){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');  
  const ctx = React.useContext(UserContext);
<<<<<<< HEAD
  
=======

>>>>>>> ed5a85e98a824cfc3d56b098dd4b51d0adf0ceeb
  function handle(){
    console.log(email,password);
    // ctx.users.push({firstName,lastName,email,password,balance:0});
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
<<<<<<< HEAD
        console.log('User successfuly created:', user);
        // window.location.replace('/#/deposit');
=======
        console.log(`User successfuly created: ${user}`);
        // window.location.replace('/#/alldata');
>>>>>>> ed5a85e98a824cfc3d56b098dd4b51d0adf0ceeb
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`Error ${errorCode}: ${errorMessage}`);
      });

    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      console.log(data); 
    })(); 
<<<<<<< HEAD
    // Save the user in context
    ctx.setUser({ name: name, email: email });
    props.setShow(false);
=======
      // ctx.user({ name: name, email: email });
      props.setShow(false);
>>>>>>> ed5a85e98a824cfc3d56b098dd4b51d0adf0ceeb
  }    

  return (<>

    Name<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/>

    Email address<br/>
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

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Create Account</button>

  </>);
}