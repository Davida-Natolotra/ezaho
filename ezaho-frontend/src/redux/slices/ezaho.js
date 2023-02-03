import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { url } from "../../utils/env";

const initialState = {
	isLoading: false,
	error: false,
	likes: {
		val_current: [],
		val_prev: [],
	},
	visites: {
		val_current: [],
		val_prev: [],
	},
	reach: {
		val_current: [],
		val_prev: [],
	},
	reachAll: {
		val_current_VIH: [],
		val_current_WHP: [],
		val_current_PF: [],
		val_current_PALU: [],
	},
	collectes: [],
};

const slice = createSlice({
	name: "ezaho",
	initialState,
	reducers: {
		// START LOADING
		startLoading(state) {
			state.isLoading = true;
		},

		// HAS ERROR
		hasError(state, action) {
			state.isLoading = false;
			state.error = action.payload;
		},

		getFacebookLikesSuccess(state, action) {
			state.likes = action.payload;
		},
		getFacebookVisitesSuccess(state, action) {
			state.visites = action.payload;
		},
		getFacebookReachSuccess(state, action) {
			state.reach = action.payload;
		},
		getCollectesSuccess(state, action) {
			state.collectes = action.payload;
		},
		getFacebookReachSuccessAll(state, action) {
			state.reachAll = action.payload;
		},
	},
});

// Reducer
export default slice.reducer;

// Actions
// export const {  } =
//     slice.actions;

export function getFacebookLikes(month, year) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/fb/E-zaho/likes`,
				headers: {
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
				params: {
					month,
					year,
				},
			});
			dispatch(slice.actions.getFacebookLikesSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getFacebookVisites(month, year) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/fb/E-zaho/visit`,
				headers: {
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
				params: {
					month,
					year,
				},
			});
			dispatch(slice.actions.getFacebookVisitesSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getFacebookReach(month, year) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/fb/E-zaho/reach`,
				headers: {
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
				params: {
					month,
					year,
				},
			});
			dispatch(slice.actions.getFacebookReachSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}
export function getFacebookReachAll(month, year) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/fb/reach_all`,
				headers: {
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
				params: {
					month,
					year,
				},
			});
			dispatch(slice.actions.getFacebookReachSuccessAll(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getCollectes() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/ezaho/collecte`,
				headers: {
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
			});
			dispatch(slice.actions.getCollectesSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function createCollecte(collecte) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "post",
				url: `${url}/ezaho/collecte/new`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
				data: collecte,
			});
			dispatch(slice.actions.getCollectesSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}
