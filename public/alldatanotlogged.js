function AllDataNotLogged() {

  return (
    <>
   <Card
      bgcolor="warning"
      header="You are not logged in! Click below to access your account!"
  />
  <Link to="/login"><button style={{backgroundColor: "green", color: "white"}}>Login</button>
    </Link>
  </>
  )
};
