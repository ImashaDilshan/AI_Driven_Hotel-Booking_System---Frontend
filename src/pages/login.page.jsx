import Navigation from "../Navigation";

function Loginpage() {
    return (
        <>
        <Navigation />
        <div>
            <h1>Login page </h1>
        </div>
        <div>
            <form>
                <label>
                    Username:   
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    </>
    )

}
export default Loginpage;