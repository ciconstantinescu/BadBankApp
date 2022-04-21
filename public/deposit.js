function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  // const accessToken = localStorage.getItem('token');
  const [user, setUser] = React.useState('');
  const ctx = React.useContext(UserContext);
  const [balance, setBalance] = React.useState('');

  // const user = ctx.users.find(user => user.email ==='carmen@mit.edu');
 
  const date = new Date(Date.now());
  const mm = date.getMonth() + 1; 
  const dd = date.getDate();
  const year = date.getFullYear();
  const dateString = `${mm}/${dd}/${year}`;

  // const balance = user.balance;
  let currentBalance = `Current Account Balance: $ ${user.balance} `;



  return (
    <>
      <div>
      <h5>{dateString}: Your current account balance is {currentBalance}</h5>
      </div>
    <br></br><br></br>
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow}/>}
    />
    </>
  )
}

function DepositMsg(props){
  return (<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Deposit again
    </button>
  </>);
} 

function DepositForm(props){
  const [name, setName]     = React.useState('');
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');  

  function handle(){
    console.log(name,email,amount);
    const url = `http://localhost:3000/account/deposit/${name}/${email}/${amount}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('data' + data);
        }) 
  }

  return(<>
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