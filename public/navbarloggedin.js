function NavBarLoggedIn(){
    return(
        <div>
        <button type="submit" className="btn btn-light" onClick={window.location='/#/deposit'}>Deposit</button><br></br><br></br>
        <button type="submit" className="btn btn-light" onClick={window.location='/#/withdraw'}>Withdraw</button><br></br><br></br>
        <button type="submit" className="btn btn-light" onClick={window.location='/#/alldata'}>Account Summary</button><br></br><br></br>
        </div>

    //     <button onclick="window.location='http://www.example.com';">Visit Page Now</button>

    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <a className="navbar-brand" href="#">BadBank</a>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link" href="#/CreateAccount/">Create New Account</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#/login/">Login</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#/deposit/">Deposit</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#/withdraw/">Withdraw</a>
    //         </li>
    //         {/* <li className="nav-item">
    //           <a className="nav-link" href="#/balance/">Balance</a>
    //         </li> */}
    //         <li className="nav-item">
    //           <a className="nav-link" href="#/alldata/">Account Overview</a>
    //         </li>          
    //       </ul>
    //     </div>
    //   </nav>
  
    );
  }