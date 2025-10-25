
function LocationsTab(props) {

    const handleClick = () => {
        //console.log("when the tab click:",props.Location);
        props.onClick(props.Location);
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