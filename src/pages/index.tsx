import { Route } from "atomic-router-react";
import { routes } from "../shared/lib/atomic-router/routes";
import { HomePage } from "./home/page";

export const Pages = () => <Route route={routes.home} view={HomePage} />;

export const routesMap = [{ path: "/", route: routes.home }];
