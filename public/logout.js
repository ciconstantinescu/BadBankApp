const Route = ReactRouterDOM.Route;
// const useHistory = ReactRouterDOM.useHistory;

const date = new Date(Date.now());
  const mm = date.getMonth() + 1; 
    const dd = date.getDate();
    const year = date.getFullYear();

    const dateString = `${mm}/${dd}/${year}`;

function Logout() {

  function LogoutMsg(props){
    const useHistory          = ReactRouterDOM.useHistory;
    const currentUser = props.user.email;
    window.alert("You are logged out!");
    let history = useHistory();
    history.push('/logout');
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
      })
      .catch((error) => {
        console.log(`Error logging out ${errorCode}: ${errorMessage}`);
      });
     
      async function handleSubmit(event) {
        event.preventDefault();
      
        try {
          await Auth.signIn(email, password);
          userHasAuthenticated(true);
          history.push("/login");
        } catch (e) {
          alert(e.message);
        }
      }
  }

  return (
    <>
    <div>
      <Card
          txtcolor="primary"
          header="Checking Account"
          title="As of + {dateString} + your balance is XXX"
          text="Click for Transaction History"
      />
      </div><br></br>
      <div>
      <Card
        txtcolor="success"
        header="Savings Account"
        title="As of DATE, your balance is XXX"
        text="Click for Transaction History"
      />
      </div>
      <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
    </>

  )
}