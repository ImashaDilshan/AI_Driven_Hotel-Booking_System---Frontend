function Notfoundpage() {
  return (
    <div className="text-center mt-20"> 
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
export default Notfoundpage;
// import { useUser } from "@clerk/clerk-react";

// const AdminProtect_layout = () => {


//     const { user } = useUser();
//     console.log("Admin User Infomations :", user);


//     return (
//         <div>
//             <h1>Admin Protect Layout</h1>
//         </div>
//     );
// }
// export default AdminProtect_layout;