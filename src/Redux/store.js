import { allSeraReducer, createSeraReducer } from "./Reducer/SeraReducer";
import { SearchSeraReducer, seraMisyMitady } from "./Reducer/HitadyReducer";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore(
  {
    reducer: {
      sera: createSeraReducer,
      allSera: allSeraReducer,
      seraMisyMitady: seraMisyMitady,
      hitadySera: SearchSeraReducer,
    },
    devTools : true,
  }
  // composeWithDevTools(applyMiddleware(...middleware))
);
