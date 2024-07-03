// import { OAuth2Client } from "https://deno.land/x/oauth2_client@v1.0.0/mod.ts";
import { OAuth2Client } from "oauth2_client/mod.ts";
import { env } from "../config.ts";


export const oauth2Client = new OAuth2Client({
  clientId: env["GITHUB_CLIENT_ID"] || Deno.env.get("GITHUB_CLIENT_ID")!,
  clientSecret: env["GITHUB_CLIENT_SECRET"] || Deno.env.get("GITHUB_CLIENT_SECRET")!,
  authorizationEndpointUri: "https://github.com/login/oauth/authorize",
  tokenUri: "https://github.com/login/oauth/access_token",
  defaults: {
    scope: "read:user",
  },
});
