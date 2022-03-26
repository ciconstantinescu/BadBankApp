function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All Data Component</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}
