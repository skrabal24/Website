const ADMIN_SESSION_KEY = 'cyberpunk-admin-preview'

// Placeholder session pouze pro frontend flow, nejde o realnou autentizaci.
export function hasAdminSession() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.sessionStorage.getItem(ADMIN_SESSION_KEY) === 'active'
}

export function createAdminSession() {
  if (typeof window === 'undefined') {
    return
  }

  window.sessionStorage.setItem(ADMIN_SESSION_KEY, 'active')
}

export function clearAdminSession() {
  if (typeof window === 'undefined') {
    return
  }

  window.sessionStorage.removeItem(ADMIN_SESSION_KEY)
}
