import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// slices

import userReducer from "./slices/user";
import collecteVIH from "./slices/collecteVIH";
import locationReducer from "./slices/location";
import PAXReducer from "./slices/pax";
import ezahoReducer from "./slices/ezaho";
import updateFacebook from "./slices/updateFacebook";
// ----------------------------------------------------------------------

const rootPersistConfig = {
	key: "root",
	storage,
	keyPrefix: "redux-",
	whitelist: [],
};

const productPersistConfig = {
	key: "product",
	storage,
	keyPrefix: "redux-",
	whitelist: ["sortBy", "checkout"],
};

const rootReducer = combineReducers({
	user: userReducer,
	VIHCollecte: collecteVIH,
	location: locationReducer,
	PAX: PAXReducer,
	ezaho: ezahoReducer,
	updateFacebook: updateFacebook,
});

export { rootPersistConfig, rootReducer };
