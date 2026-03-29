import { useUser } from "@clerk/clerk-react";
import { Hotel } from "lucide-react";
import { Outlet } from "react-router";


const AdminProtect_layout = () => {

    const { user } = useUser();
    //console.log("Admin User Infomations :", user);

    if(user.publicMetadata.role !== "admin"){
        return (
            <div className="text-center mt-20">
                <h1 className="text-2xl font-bold">Access Denied</h1>
                <p>You do not have permission to access this page.</p>
            </div>
        );
    }
    return (
        <Outlet />
    );
}
export default AdminProtect_layout;