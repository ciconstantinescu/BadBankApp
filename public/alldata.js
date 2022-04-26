<<<<<<< HEAD
// function AllData() {
//   const [data, setData] = React.useState('');
//   const [show, setShow]     = React.useState(true);
//   const [status, setStatus] = React.useState('');   
//   const [accountID, setAccountID] = React.useState('');
//   const [balance, setBalance] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const ctx = React.useContext(UserContext);
//   const { user } = ctx;

//   const date = new Date(Date.now());
//   const mm = date.getMonth() + 1; 
//   const dd = date.getDate();
//   const year = date.getFullYear();
//   const dateString = `${mm}/${dd}/${year}`;

//   React.useEffect(() => {
//     // ctx.users.find(user => user.email ==='carmen@mit.edu');
//         fetch('/account/find/' + user.email)
//           .then(response => response.json())
//           .then(data => {
              
//               console.log(data);
//               ctx.user = data[0];
//               setBalance(data[0].balance);
//               setData(JSON.stringify(data));
//           });
//       }, []);

//   function LogoutMsg(props){
//     const currentUser = props.user.email;
//     window.alert("You are logged out!");
//     // window.location.replace("/#/");
//     return(<>
//       <h5>{`Hello ${currentUser}! Below is account summary as of ${dateString}:`}</h5>
//     </>);
//   }

//   function handleLogout() {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         console.log("User successfully logs out");
//         window.alert("You are logged out!");
//         window.location.replace("/#/");
//       })
//       .catch((error) => {
//         console.log(`Error logging out ${errorCode}: ${errorMessage}`);
//       });
    
//   }

//   return (
//     <>
//     <p>
//       As of {dateString} your balance is {ctx.user.balance}!
//     </p>
//     <div>
//       <Card
//           txtcolor="primary"
//           header="Checking Account"
//           text="Transaction History"
//           />
//         </div>
//         <div className="dropdown">
//           <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//             Last 30 days:
//           </button>
//           <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//             <a className="dropdown-item" href="#">Giant Superstore</a>
//             <a className="dropdown-item" href="#">Amazon</a>
//             <a className="dropdown-item" href="#">Baltimore Gas and Electric</a>
//           </div>
// </div>
//       <br></br>
      
//       <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
//     </>

//   )
// }


function AllData(){
  const [data, setData] = React.useState('');
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');   
  const [user, setUser] = React.useState('');
=======
function AllData() {
  const [data, setData] = React.useState('');
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');   
>>>>>>> ed5a85e98a824cfc3d56b098dd4b51d0adf0ceeb
  const [accountID, setAccountID] = React.useState('');
  const [balance, setBalance] = React.useState('');
  const [email, setEmail] = React.useState('');
  const ctx = React.useContext(UserContext);
<<<<<<< HEAD

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
=======
  const { user } = ctx; 

  React.useEffect(() => {
    console.log(user);
        fetch(`/account/find` + user.email)
          .then(response => response.json())
          .then(data => {
              
              console.log(data);
              ctx.user = data[0];
              // setName(user.name);
              setBalance(data[0].balance);
              setData(JSON.stringify(data));
          });
      }, []);

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
    <div style={{textAlign: "right"}}>
    <p>
      Hello <strong>{user.name}</strong>! As of {dateString} your balance is {ctx.user.balance}!
    </p>
    </div>
    <div>
    <table style={{textAlign: "right"}}>
      <td><a href="/#/deposit"><button>Deposit</button></a></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      <td><a href="/#/withdraw"><button>Withdraw</button></a></td>
    </table>
    </div>
    <div>
      
      {/* <button type="submit" className="btn btn-light">Deposit</button><br></br><button type="submit" className="btn btn-light">Withdraw</button> */}
    </div><br></br><br></br><br></br><br></br>
    <div>
      <Card
          txtcolor="primary"
          header="Transaction History"
          text="Click on transaction below for more details:"
          />
        </div>
        <div className="dropdown">
>>>>>>> ed5a85e98a824cfc3d56b098dd4b51d0adf0ceeb
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Last 30 days:
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Giant Superstore</a>
            <a className="dropdown-item" href="#">Amazon</a>
            <a className="dropdown-item" href="#">Baltimore Gas and Electric</a>
          </div>
<<<<<<< HEAD
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

=======
</div>
      <br></br>
      
      <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
    </>

  )
}

>>>>>>> ed5a85e98a824cfc3d56b098dd4b51d0adf0ceeb
