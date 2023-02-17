const Posting = (props) => {
    return (
        <div className="posting">
            <img src={props.data.imageURL} alt={props.data.title}/>
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
            <p>{props.data.price}</p>
        </div>
    )
}
export default Posting