function Spa() {

    return (
      <HashRouter>
        <div>
          <NavBar/>        
          <UserContext.Provider value={{users:[{name:null, email:null,password:null, balance:0}]}}>
            <div className="container" style={{padding: "20px"}}>
              <Route path="/" exact component={Home} />
              <Route path="/CreateAccount/" component={CreateAccount} />
              <Route path="/login/" component={Login} />
              <Route path="/deposit/" component={Deposit} />
              <Route path="/withdraw/" component={Withdraw} />
              <Route path="/logout/" component={Logout} />
              {/* <Route path="/balance/" component={Balance}/> */}
              <Route path="/alldata/" component={AllData} />
              <Route path="/alldatanotlogged/" component={AllDataNotLogged} />
            </div>
          </UserContext.Provider>
        </div>
      </HashRouter>
    );
  }
  
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );