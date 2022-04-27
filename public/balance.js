function Balance(props){
  const [user, setUser]     = React.useState('');
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  // const [balance, setBalance] = React.useState(ctx.user.balance);

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


  function BalanceForm(props) {
    const ctx = React.useContext(UserContext);  
    const email = ctx.user.email;
    const [balance, setBalance] = React.useState(0);  
  
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            setBalance(data.balance);
        } catch(err) {
            console.log('err:', text);
        }
    });
  
    return (<>
      <h5>Your current balance is ${parseFloat(balance).toFixed(2)}</h5>

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