// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $api_users_id_ from "./routes/api/users/[id].ts";
import * as $api_users_index from "./routes/api/users/index.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $hackathons_2 from "./routes/hackathons/2.tsx";
import * as $hackathons_3 from "./routes/hackathons/3.tsx";
import * as $hackathons_id_ from "./routes/hackathons/[id].tsx";
import * as $hackathons_index from "./routes/hackathons/index.tsx";
import * as $hackathons_new_index from "./routes/hackathons/new/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $login_index from "./routes/login/index.tsx";
import * as $signin_index from "./routes/signin/index.tsx";
import * as $thanks_index from "./routes/thanks/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/api/users/[id].ts": $api_users_id_,
    "./routes/api/users/index.ts": $api_users_index,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/hackathons/2.tsx": $hackathons_2,
    "./routes/hackathons/3.tsx": $hackathons_3,
    "./routes/hackathons/[id].tsx": $hackathons_id_,
    "./routes/hackathons/index.tsx": $hackathons_index,
    "./routes/hackathons/new/index.tsx": $hackathons_new_index,
    "./routes/index.tsx": $index,
    "./routes/login/index.tsx": $login_index,
    "./routes/signin/index.tsx": $signin_index,
    "./routes/thanks/index.tsx": $thanks_index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
