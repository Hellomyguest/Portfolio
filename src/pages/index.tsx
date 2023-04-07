import { Route } from "atomic-router-react";
import { routes } from "../shared/lib/atomic-router/routes";
import { HomePage } from "./home/page";
import { ResumePage } from "./resume/page";
import { PortfolioPage } from "./portfolio/page";
import { GrowthPage } from "./growth/page";
import { ContactsPage } from "./contacts/page";

export const Pages = () => (
  <>
    <Route route={routes.home} view={HomePage} />
    <Route route={routes.resume} view={ResumePage} />
    <Route route={routes.portfolio} view={PortfolioPage} />
    <Route route={routes.growth} view={GrowthPage} />
    <Route route={routes.contacts} view={ContactsPage} />
  </>
);

export const routesMap = [
  { path: "/", route: routes.home },
  { path: "/resume", route: routes.resume },
  { path: "/portfolio", route: routes.portfolio },
  { path: "/growth", route: routes.growth },
  { path: "/contacts", route: routes.contacts },
];
