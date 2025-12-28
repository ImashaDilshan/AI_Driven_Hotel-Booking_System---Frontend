
function LocationsTab(props) {

    const handleClick = () => {
        //console.log("when the tab click:",key);
        props.onClick(props.Location);
        const key = props.Location.name;
     console.log("when the tab click:",key);
        
    }

    
    return (
        <div className="text-base border-b-blue-100 border rounded-full px-2 py-1 cursor-pointer " 
        onClick={handleClick}
        >
            {props.Location.name}
            
        </div>
         
    );
}
export default LocationsTab;
//text-base boder rounded-full px-2 py-1 cursor-pointer