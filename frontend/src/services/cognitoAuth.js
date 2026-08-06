import { UserManager, WebStorageStateStore } from "oidc-client-ts";

// -----------------------------------------------------------------
// Configuração do Cognito
// Preencha essas variáveis no seu arquivo .env (não commitado):
//   VITE_COGNITO_AUTHORITY=https://cognito-idp.us-east-2.amazonaws.com/us-east-2_o0kViDY6X
//   VITE_COGNITO_CLIENT_ID=26ern22j6427iulen10es46tdm
//   VITE_COGNITO_REDIRECT_URI=https://www.aprovacaoadm.com.br/admin
//   VITE_COGNITO_DOMAIN=<seu-prefixo>.auth.us-east-2.amazoncognito.com
// -----------------------------------------------------------------

const cognitoAuthConfig = {
  authority: import.meta.env.VITE_COGNITO_AUTHORITY,
  client_id: import.meta.env.VITE_COGNITO_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_COGNITO_REDIRECT_URI,
  response_type: "code",
  scope: "phone openid email",
  // Guarda a sessão no localStorage, para sobreviver a refresh de página
  userStore: new WebStorageStateStore({ store: window.localStorage }),
};

export const userManager = new UserManager(cognitoAuthConfig);

/**
 * Retorna o usuário logado (ou null se não houver sessão válida).
 */
export async function getUser() {
  try {
    const user = await userManager.getUser();
    if (user && !user.expired) {
      return user;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Verifica se há uma sessão administrativa válida.
 */
export async function isAuthenticated() {
  const user = await getUser();
  return !!user;
}

/**
 * Redireciona para a tela de login hospedada do Cognito.
 */
export async function signIn() {
  await userManager.signinRedirect();
}

/**
 * Processa o retorno do Cognito após login (deve ser chamado na
 * rota configurada como redirect_uri, ex: /admin).
 * Retorna o usuário se este acesso for um callback de login válido,
 * ou null se a página foi carregada normalmente (sem parâmetros de retorno).
 */
export async function handleSignInCallback() {
  const params = new URLSearchParams(window.location.search);
  if (!params.has("code") || !params.has("state")) {
    return null;
  }
  const user = await userManager.signinCallback();
  return user;
}

/**
 * Encerra a sessão local e redireciona para o endpoint de logout do Cognito.
 */
export async function signOut() {
  const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
  const logoutUri = import.meta.env.VITE_COGNITO_REDIRECT_URI;
  const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN;

  await userManager.removeUser();
  window.location.href =
    `https://${cognitoDomain}/logout?client_id=${clientId}` +
    `&logout_uri=${encodeURIComponent(logoutUri)}`;
}