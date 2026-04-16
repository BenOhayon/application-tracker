import { useLocation } from "react-router-dom"

export function useCurrentRoute() {
  const { pathname } = useLocation();
  const segments = pathname.split('/');
  return `/${segments[segments.length - 1]}`;
}