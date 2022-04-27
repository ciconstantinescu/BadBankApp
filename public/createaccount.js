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
          <CreateMsg setShow={setShow}/>}
      />
    )
  }
  
  function direct () {
    window.location.replace("/#/alldata")
  }
  
  function CreateMsg(props){
    const accountID = Math.random().toString().slice(2,11);
    return(<>
      <h5>Success! Your account number is {accountID}</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => props.setShow(true)}>Add another account</button><br></br><br></br>
       <button type="submit" className="btn btn-light" onClick={direct}>Go to Account Summary</button>
    </>);
  }
  
  function CreateForm(props){
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');  
    const ctx = React.useContext(UserContext);
  
    function handle(){
      console.log(email,password);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(`User successfuly created: ${user}`);
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
      ctx.user = { name: name, email: email };
      props.setShow(false);
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