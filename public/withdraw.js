function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  const [user, setUser] = React.useState('');


  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow}/>}
    />
  )
}

function WithdrawMsg(props){
  const [status, setStatus] = React.useState(''); 
  const [user, setUser] = React.useState('');
  
  if (!user) {
    props.setStatus('fail!')      
    return;      
  } 

  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Withdraw again
    </button>
  </>);
  
}

function WithdrawForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');  
  const [user, setUser] = React.useState('');

  function handle(){
    console.log(email,amount);
    const url = `http://localhost:3000/account/withdraw/${email}/${amount}`;
      (async () => {
        var res = await fetch(url);
        var data = await res.json();
        console.log(data); 
      })(); 
      props.setShow(false);
  
  };

  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Withdraw
    </button>

  </>);
  }
