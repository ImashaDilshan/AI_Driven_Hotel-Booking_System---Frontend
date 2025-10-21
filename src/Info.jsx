
function info(Props) {
    return (
        <div>
            <h1 class="text-blue-800 text-3xl">{Props.name}{Props.age}</h1>
            <p Class="text-amber-800">Work AS : {Props.role ?? "Pending"}</p>
           
        </div>
    )
}
export default info