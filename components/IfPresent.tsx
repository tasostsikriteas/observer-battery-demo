
export function IfPresent({ children, active }: { children: React.ReactNode, active: boolean }) {
  return active ? <>{children}</> : null;
}
