import { Suspense, lazy } from "react";
import { Skeleton, Spin } from "antd";
import { Route } from "atomic-router-react";
import { routes } from "../shared/lib/atomic-router/routes";

const HomePage = lazy(() =>
  import("./home/page").then((module) => ({ default: module.HomePage }))
);
const ResumePage = lazy(() =>
  import("./resume/page").then((module) => ({ default: module.ResumePage }))
);
const PortfolioPage = lazy(() =>
  import("./portfolio/page").then((module) => ({
    default: module.PortfolioPage,
  }))
);
const GrowthPage = lazy(() =>
  import("./growth/page").then((module) => ({ default: module.GrowthPage }))
);
const ContactsPage = lazy(() =>
  import("./contacts/page").then((module) => ({ default: module.ContactsPage }))
);

export const Pages = () => (
  <Suspense
    fallback={
      <Spin size="large">
        <Skeleton paragraph={{ rows: 11 }} />
      </Spin>
    }
  >
    <Route route={routes.home} view={HomePage} />
    <Route route={routes.resume} view={ResumePage} />
    <Route route={routes.portfolio} view={PortfolioPage} />
    <Route route={routes.growth} view={GrowthPage} />
    <Route route={routes.contacts} view={ContactsPage} />
  </Suspense>
);

export const routesMap = [
  { path: "/", route: routes.home },
  { path: "/resume", route: routes.resume },
  { path: "/portfolio", route: routes.portfolio },
  { path: "/growth", route: routes.growth },
  { path: "/contacts", route: routes.contacts },
];
