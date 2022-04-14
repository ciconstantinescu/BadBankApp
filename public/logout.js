function Logout() {
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

  return (
    <>
    <div>
      <Card
          txtcolor="primary"
          header="Checking Account"
          title="As of DATE, your balance is XXX"
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
