function Deposit(props){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  const [user, setUser]     = React.useState('');
  const [amount, setAmount] = React.useState('');
  const ctx = React.useContext(UserContext);
  const [balance, setBalance] = React.useState(ctx.user.balance);

  const handleSetBalance = (amount) => {
    setBalance(amount)
  }
 
  const date = new Date(Date.now());
  const mm = date.getMonth() + 1; 
  const dd = date.getDate();
  const year = date.getFullYear();
  const dateString = `${mm}/${dd}/${year}`;


  return (
    <>
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm  setBalance={handleSetBalance}  setShow={setShow} setStatus={setStatus} setAmount={setAmount}/> :
        <DepositMsg setShow={setShow} setStatus={setStatus}/>}
    />
    </>
  )
}


function DepositForm(props){
  const [name, setName]     = React.useState('');
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [user, setUser]     = React.useState('');
  const ctx = React.useContext(UserContext);  
  const [balance, setBalance] = React.useState('');
  const [newTotal, setNewTotal] = React.useState('');

  function DepositMsg(props){
    // const currentBalance = ctx.user.balance + amount;
    return (<>
      <h5>Success! As of {dateString}, your new balance is $ {ctx.user.balance}</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => {
          props.setShow(true);
          props.setStatus('');
        }}>
          Deposit again
      </button>
    </>);
  } 

  function handle(){
      // let newTotal = ctx.user.balance + amount; 
      alert ('Transaction Successful! You deposited $' + amount + '!');
    
    console.log(name,email,amount);
    const url = `/account/deposit/${name}/${email}/${amount}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          ctx.user.balance += amount;
          console.log('data' + data);
          props.setBalance(ctx.user.balance + amount);
          window.location.replace('/#/alldata');
          // alert ('Transaction Successful! Your balance is now $' + newTotal + '!');
        }) 
  }

  return(<>
    <h5>Your account balance is ${ctx.user.balance}</h5>

    Name<br/>
        <input type="input" 
          className="form-control" 
          placeholder="Enter name" 
          value={name} onChange={e => setName(e.currentTarget.value)}/><br/>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
      
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Deposit</button>

  </>);
}