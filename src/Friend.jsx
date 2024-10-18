export default function Friend(friend){

 
return(
    <div className="box1">
       
        <h4>Name: {friend.friend.name} </h4>
        <p>Email: {friend.friend.email} </p>
        <p>Phone: {friend.friend.phone} </p>
        <p>Website: {friend.friend.website} </p>
    </div>
)
}