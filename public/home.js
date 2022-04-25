function Home(){
  return (
    <>
    <div className="card text-center" id="landing">
      <div className="card-header" id="title">
        <h5 className="card-title">Welcome to BadBank!</h5>
        {/* {JSON.stringify(ctx)} */}
      </div>
      <div className="card-body">
        <p className="card-text" id="bodytxt">BadBank is here to serve your financial needs. If you would prefer speaking with a live representative, call 1 (800) XXX - XXXX.</p>
        <p>Hours of Operation: Monday - Friday, 8AM - 5pm EST</p>
        {/* <img src={logo} style={{padding: '10px'}}></img> */}
        <Link to="/login" className="btn btn-primary"><b>Get Started!</b></Link>
      </div>
      </div>
      <div className="card-footer text-muted" style={{textAlign: 'center'}}>@2021 BadBank</div>
        </>
);
}