export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Breaking", href: "/" },
  { label: "Politics", href: "/politics" },
  { label: "Investigations", href: "/investigations" },
  { label: "Opinion", href: "/opinion" },
  { label: "Cheese Report", href: "/cheese-report" },
];
