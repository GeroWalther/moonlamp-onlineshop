import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  ignoredRoutes: ['/((?!api|trpc))(_next|.+..+)(.*)'],
  publicRoutes: ['/api/create-payment-intent,', '/'],
});
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
