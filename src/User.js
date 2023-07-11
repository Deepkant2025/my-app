function User(props) {
    return (
    <>
        <div className="box">HELLO {props.name}</div>

        <div>
            Your mail ID :- {props.email}
        </div>
      
    </>
      
    );
}
  
export default User;