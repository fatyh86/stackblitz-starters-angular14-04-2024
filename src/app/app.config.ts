import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideState, provideStore } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";

import { HTTP_INTERCEPTORS, provideHttpClient } from "@angular/common/http";
import { crudKey } from "./shared/CRUDStore/selector";
import { crudReducer } from "./shared/CRUDStore/reducers";
import { crudEffects } from "./shared/CRUDStore/effects";
import { adminKey } from "./admin/AdminStore/selector";
import { adminReducer } from "./admin/AdminStore/reducers";
import { adminEffects } from "./admin/AdminStore/effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore(),
    provideState(crudKey, crudReducer),
    provideEffects(crudEffects),
    provideState(adminKey, adminReducer),
    provideEffects(adminEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
