import { configureStore } from "@reduxjs/toolkit";

import reducer from "./slices";

export const store = configureStore({ reducer });

export type IStore = ReturnType<typeof store.getState>;
