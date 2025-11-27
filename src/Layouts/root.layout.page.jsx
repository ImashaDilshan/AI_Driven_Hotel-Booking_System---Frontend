
import Navigation from '../Navigation';
import { Outlet } from 'react-router';

function Rootlayoutpage() {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    );
}
export default Rootlayoutpage;