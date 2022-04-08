function Balance(){
  const [user, setUser]     = React.useState('');
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow}/>}
    />
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  
  const [user, setUser] = React.useState('');
  
  function handle(){
      console.log(email,balance);
      const url = `http://localhost:3000/account/balance/${email}/${balance}`;
      (async () => {
        var res = await fetch(url);
        var data = await res.json();
        console.log(data); 
      })(); 
      props.setShow(false);
  
    if (!user) {
      props.setStatus('fail!')      
      return;      
    }

    setBalance(newBalance);
    console.log(user);
    props.setStatus('Your balance is: ' + newBalance);      
    props.setShow(false);
  }

  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}