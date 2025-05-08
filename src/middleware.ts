import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';

//Todo lo que este adentro de esa array son rutas protegidas.
//(.*) Esto le dice que todas las paginas que comiencen con /retos estan protegidas.
const isProtectedRouter = createRouteMatcher(['/retos(.*)', '/private']);

export const onRequest = clerkMiddleware((auth, context) => {
  const { userId, redirectToSignIn } = auth();
  if (isProtectedRouter(context.request) && !userId) {
    //Si el usuario que intenga registrarse no tiene una session, entonces lo redirecciono al SignIn
    return redirectToSignIn();
  }
});
