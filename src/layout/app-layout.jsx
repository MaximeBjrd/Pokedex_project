import { Header } from '../components/Header/Header'
import { Outlet } from 'react-router'

export const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}