//  This layout component is used to protect routes that require authentication. It checks if the user is authenticated and either renders the child components or redirects to the login page.
import { Navigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { Outlet } from "react-router";

const ProtectLayout = () => {
    const { isLoaded, isSignedIn,user } = useUser();

    if (!isLoaded) {
        return null;
    }
    if (!isLoaded || !isSignedIn) {
        return <Navigate to="/login" />;
    }
    //console.log("User Infomations :", user);
    return <Outlet />;
};


export default ProtectLayout;