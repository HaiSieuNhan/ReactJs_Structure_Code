import config from '../configs';
import UserPage from '../views/User';

// Public routes
const publicRoutes = [{ path: config.routes.home, component: UserPage }];
const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
