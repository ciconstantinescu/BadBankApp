function AllData(){
  const [data, setData] = React.useState('');
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');   
  const [user, setUser] = React.useState('');
  const [accountID, setAccountID] = React.useState('');
  const [balance, setBalance] = React.useState('');
  const ctx = React.useContext(UserContext);
  const [email, setEmail] = React.useState('');
  const currentUser = user.email;

  const date = new Date(Date.now());
  const mm = date.getMonth() + 1; 
  const dd = date.getDate();
  const year = date.getFullYear();
  const dateString = `${mm}/${dd}/${year}`;

  return (
    <>
        <p><b>Hello {currentUser}! Your Balance as of {dateString} is: {balance}</b></p>
            <br></br><br></br>
        <p><b>Your Account Number: {accountID}</b></p>
        <Card
          txtcolor="success"
          text="Search for Transaction"
          />
          <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Last 30 days:
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Giant Superstore</a>
            <a className="dropdown-item" href="#">Amazon</a>
            <a className="dropdown-item" href="#">Baltimore Gas and Electric</a>
          </div>
        </div>
      <br></br>
       
        <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
      </>
  );
}

    function handleLogout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("User successfuly logs out");
          window.location.replace("/#/login");
        })
        .catch((error) => {
          console.log(`Error logging out ${errorCode}: ${errorMessage}`);
        });

    React.useEffect(() => {
      fetch('/account/all')
        .then(response => response.json())
        .then(data => {
            // ctx.users.find(user => user.email ==='heling@mit.edu');
            console.log(data);
            setUser(ctx.user);
            setData(JSON.stringify(data));
        });
    }, []);
  
  return (
    <>
        {/* <p><b>Hello {user.email}! Your Account Overview as of {dateString} is {data}</b></p> */}
            <br></br><br></br>
        <p><b>Your Account Number is </b></p>
        <div>
        <Card
          txtcolor="success"
          header="Account Number: {accountID}"
          text="Click for Transaction History"
        />
        </div>
      <br></br>
       
        <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
      </>
  );
}
