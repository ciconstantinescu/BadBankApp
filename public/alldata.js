function AllData(){
  const [data, setData] = React.useState('');
  const [user, setUser] = React.useState('');
  
  const date = new Date(Date.now());
  const mm = date.getMonth() + 1; 
    const dd = date.getDate();
    const year = date.getFullYear();

    const dateString = `${mm}/${dd}/${year}`;

    function handleLogout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("User successfuly logs out");
        })
        .catch((error) => {
          console.log(`Error logging out ${errorCode}: ${errorMessage}`);
        });
    }

    React.useEffect(() => {
      fetch('/account/all')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(JSON.stringify(data));
        });
    }, []);
  
  return (
    <>
        <p><b>Your Account Overview as of {dateString}</b></p>
            <br></br><br></br>
        <div>
        <Card
          txtcolor="success"
          header="Savings Account"
          text="Click for Transaction History"
        />
        </div>
      <div>
        <Card
            txtcolor="primary"
            header="Checking Account"
            text="Click for Transaction History"
        />
        </div><br></br>
       
        <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>
      </>
  );
}
