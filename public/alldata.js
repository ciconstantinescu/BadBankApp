function AllData(){
  const [data, setData] = React.useState('');
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');   
  const [user, setUser] = React.useState('');
  const [accountID, setAccountID] = React.useState('');
  const [balance, setBalance] = React.useState('');
  const [email, setEmail] = React.useState('');
  const ctx = React.useContext(UserContext);

  const date = new Date(Date.now());
  const mm = date.getMonth() + 1; 
  const dd = date.getDate();
  const year = date.getFullYear();
  const dateString = `${mm}/${dd}/${year}`;

  React.useEffect(() => {
    fetch('/account/find/' + user.email)
      .then(response => response.json())
      .then(data => {
          
          console.log(data);
          ctx.user = data[0];
          // setBalance(ctx.user.balance);
          setData(JSON.stringify(data));
      });
  }, []);

  return (
    <>
        <p><b>Welcome {user.email}! Your Balance as of {dateString} is: {user.balance}</b></p>
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

function LogoutMsg(props){
  const currentUser = props.user.email;
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
      console.log("User successfuly logs out");
      setShow(false);
      window.location.replace("/#/login");
    })
    .catch((error) => {
      console.log(`Error logging out ${errorCode}: ${errorMessage}`);
    });
  

  return (
    <Card
      bgcolor="primary"
      header="Logout"
      body={
        show ? (
          <button
            type="button"
            id="logout"
            className="btn btn-light text-black-100"
            onClick={updatelogout}
          >
            Logout
          </button>
        ) : (
          <>You have successfully logged out</>
        )
      }
    />
  );
}

  // const Balance = () => {
  //   const ctx = React.useContext(UserContext); 
  //   const user = ctx.users.find(user => user.email ==='carmen@mit.edu');
  //   const [totalState, setTotalState] = React.useState('');
  //   const [newTotal, setNewTotal] = React.useState('');
  
  // return (
  //     <div>
  //         <p>Your account balance is ${user.balance}</p>
  //     </div>
  //     );
  //   }

  // return (
  //   <>
  //       <p><b>Welcome {user.email}! Your Balance as of {dateString} is: {user.balance}</b></p>
  //           <br></br><br></br>
  //       <p><b>Your Account Number: {accountID}</b></p>
  //       <Card
  //         txtcolor="success"
  //         text="Search for Transaction"
  //         />
  //         <div className="dropdown">
  //         <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //           Last 30 days:
  //         </button>
  //         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  //           <a className="dropdown-item" href="#">Giant Superstore</a>
  //           <a className="dropdown-item" href="#">Amazon</a>
  //           <a className="dropdown-item" href="#">Baltimore Gas and Electric</a>
  //         </div>
  //       </div>
  //     <br></br>
       
  //       <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
  //     </>
  // );

   

   

    // const Balance = () => {
    //   const ctx = React.useContext(UserContext); 
    //   const user = ctx.users.find(user => user.email ==='carmen@mit.edu');
    //   const [totalState, setTotalState] = React.useState('');
    //   const [newTotal, setNewTotal] = React.useState('');
    
    // return (
    //     <div>
    //         <p>Your account balance is ${user.balance}</p>
    //     </div>
    //     );
    //   }
      
    // return (
    //   <>
    //       <p><b>Welcome {user.email}! Your Balance as of {dateString} is: {user.balance}</b></p>
    //           <br></br><br></br>
    //       <p><b>Your Account Number: {accountID}</b></p>
    //       <Card
    //         txtcolor="success"
    //         text="Search for Transaction"
    //         />
    //         <div className="dropdown">
    //         <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //           Last 30 days:
    //         </button>
    //         <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //           <a className="dropdown-item" href="#">Giant Superstore</a>
    //           <a className="dropdown-item" href="#">Amazon</a>
    //           <a className="dropdown-item" href="#">Baltimore Gas and Electric</a>
    //         </div>
    //       </div>
    //     <br></br>
         
    //       <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
    //     </>
    // );

