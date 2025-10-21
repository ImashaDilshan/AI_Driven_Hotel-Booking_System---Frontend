function Button(props) {
    return (
        <button 
            
            onClick={() => alert('Button Clicked!')}
        >
            {props.name}
        </button>
        
    )
}
export default Button