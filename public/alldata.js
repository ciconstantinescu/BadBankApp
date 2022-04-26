function AllData(props) {
  const [data, setData] = React.useState('');
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');   
  const [accountID, setAccountID] = React.useState('');
  const [balance, setBalance] = React.useState('');
  const [email, setEmail] = React.useState('');
  const ctx = React.useContext(UserContext);
  const [currentUser, setCurrentUser] = React.useState('');
  const { user } = ctx;

  const date = new Date(Date.now());
  const mm = date.getMonth() + 1; 
  const dd = date.getDate();
  const year = date.getFullYear();
  const dateString = `${mm}/${dd}/${year}`;

  React.useEffect((props) => {
    // ctx.users.find(user => user.email ==='carmen@mit.edu');
        fetch('/account/find/' + user.email)
          .then(response => response.json())
          .then(data => {
              
              console.log(data);
              ctx.user = data[0];
              setBalance(data[0].balance);
              setData(JSON.stringify(data));
          });
      }, []);

  function LogoutMsg(props){
    // const currentUser = props.user.email;
    window.alert("You are logged out!");
    // window.location.replace("/#/");
    return(<>
      <h5>{`Hello ${currentUser}! Below is account summary as of ${dateString}:`}</h5>
    </>);
  }

  function handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("User successfully logs out");
        window.alert("You are logged out!");
        window.location.replace("/#/");
      })
      .catch((error) => {
        console.log(`Error logging out ${errorCode}: ${errorMessage}`);
      });
    
  }

  return (
    <>
    <p>
    Hello ${currentUser}! As of {dateString} your balance is {ctx.user.balance}!
    </p>
    <div>
      <Card
          txtcolor="primary"
          header="Checking Account"
          text="Transaction History"
          />
        </div>
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

  )
}