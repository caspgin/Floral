import { Outlet } from 'react-router-dom';
import { Footer } from '../components/footer';

export function Layout() {
    return (
        <div>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
