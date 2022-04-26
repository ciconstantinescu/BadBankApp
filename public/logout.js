const Route = ReactRouterDOM.Route;


const date = new Date(Date.now());
const mm = date.getMonth() + 1; 
const dd = date.getDate();
const year = date.getFullYear();
const dateString = `${mm}/${dd}/${year}`;

function Logout() {

  function LogoutMsg(props){
    // const useHistory          = ReactRouterDOM.useHistory;
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
      As of {dateString} your balance is XXX!
    </p>
    <div>
      <Card
          txtcolor="primary"
          header="Checking Account"
          text="Transaction History"
          />
        </div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Last 30 days:
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Giant Superstore</a>
            <a class="dropdown-item" href="#">Amazon</a>
            <a class="dropdown-item" href="#">Baltimore Gas and Electric</a>
          </div>
</div>
      <br></br>
      
      <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
    </>

  )
}