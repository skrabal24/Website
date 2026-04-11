import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { hasAdminSession } from '../lib/adminSession'

export function ProtectedRoute() {
  const location = useLocation()

  if (!hasAdminSession()) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}
