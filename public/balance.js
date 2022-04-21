function Balance(props){
  const [user, setUser]     = React.useState('');
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  const [balance, setBalance] = React.useState('')

  return (
    <Card
      bgcolor='info'
      header='Balance'
      status={status}
      body={
        show ? (
          <>
            <BalanceForm
              user={props.user}
              setShow={setShow}
              setStatus={setStatus}
              setBalance={setBalance}
            />
          </>
        ) : (
          <>
            {' '}
            <BalanceMsg setShow={setShow} setStatus={setStatus} />
            <h5>Your Current Balance is ${balance}</h5>
          </>
        )
      }
    />
  )
}
  // return (
  // //   <Card
  // //     bgcolor="info"
  // //     header="Balance"
  // //     status={status}
  // //     body={show ?
  // //       <BalanceForm setShow={setShow} setStatus={setStatus}/> :
  // //       <BalanceMsg setShow={setShow}/>}
  // //   />
  // )



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
  
  // function handle(){
  //     console.log(email,balance);
  //     const url = `http://localhost:3000/account/balance/${email}/${balance}`;
  //   //   (async () => {
  //   //     var res = await fetch(url);
  //   //     var data = await res.json();
  //   //     console.log(data); 
  //   //   })(); 
  //   //   props.setShow(false);
  
  //   // if (!user) {
  //   //   props.setStatus('fail!')      
  //   //   return;     
    
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('data' + data);
  //   }) 
    

  //   // setBalance(newBalance);
  //   // console.log(user);
  //   // props.setStatus('Your balance is: ' + newBalance);      
  //   // props.setShow(false);
  // }
   function handle(props) {
    fetch(`/account/updateBalance/${props.user.email}`)
      .then(response => response.text())
      .then(text => {
        try {
          const data = JSON.parse(text)
          props.setStatus(data.balance)
          props.setShow(false)
          props.setBalance(data.balance)
          console.log('JSON:', data)
        } catch (err) {
          props.setStatus(text)
          console.log('err:', text)
        }
      })
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