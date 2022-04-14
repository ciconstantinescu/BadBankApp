function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  const accessToken = localStorage.getItem('token');

  // const ATMDeposit = ({ onChange, isDeposit, isValid }) => { 
  //   const choice = ['Deposit'];
  //   console.log(`ATM isDeposit: ${isDeposit}`);
  //   return (
  //     <label className="label huge">
  //       <h3> {choice[Number(!isDeposit)]}</h3>
  //       <input id="number-input" type="text" width="200" onChange={onChange}></input>
  //       <input type="submit" disabled={!isValid} width="200" value="Submit" id="submit-input"></input>
  //     </label>
  //   );
  // };

  return (
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow}/>}
    />
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
  const [mode, setMode]     = React.useState('');

  function handle(){
    console.log(name,email,amount);
    const url = `http://localhost:3000/account/deposit/${name}/${email}/${amount}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('data' + data);
        }) 
  }

  const handleModeSelect = (event) => {
    setMode(event.target.value);
    setValidTransaction(false);
    if (event.target.value === 'Deposit') {
      setIsDeposit(true);
    } else {
      setIsDeposit(false);
    }
  };

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

    <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
          <option id="no-selection" value="">Select</option>
          <option id="deposit-selection" value="Deposit">Deposit</option>
          <option id="deposit-selection" value="Deposit">withdraw</option>
    </select>
     
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