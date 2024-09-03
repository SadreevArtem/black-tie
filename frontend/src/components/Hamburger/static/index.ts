export type HeaderMenuItem = {
    value: string;
    href: string;
  };

export const HEADER_MENU: HeaderMenuItem[] = [
  {
    value: "Программы",
    href: "/programs",
  },
  {
    value: "Мастера",
    href: "/masters",
  },
  {
    value: "Вакансии",
    href: "/vacancies",
  }
];