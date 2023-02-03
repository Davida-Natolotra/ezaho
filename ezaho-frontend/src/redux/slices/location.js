import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "axios";

import { url } from "../../utils/env";

const initialState = {
	isLoading: false,
	error: false,
	regions: [],
	district: [],
	commune: [],
	ville: [],
	region: null,
};

const slice = createSlice({
	name: "location",
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
		getRegionsSuccess(state, action) {
			state.regions = action.payload.map(
				(item) => new Object({ id: item.id, label: item.name })
			);
		},
		getDistrictSuccess(state, action) {
			state.district = action.payload.map(
				(item) => new Object({ id: item.id, label: item.name })
			);
		},
		getCommuneSuccess(state, action) {
			state.commune = action.payload.map(
				(item) => new Object({ id: item.id, label: item.name })
			);
		},
		getVilleSuccess(state, action) {
			state.ville = action.payload.map(
				(item) => new Object({ id: item.id, label: item.name })
			);
		},
		getRegionNameSuccess(state, action) {
			state.region = action.payload;
		},
	},
});

// Reducer
export default slice.reducer;

// Actions
// export const {} = slice.actions;

export function getRegions() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "GET",
				url: `${url}/region/`,
				headers: {
					"Content-Type": "application/json",
				},
			});
			dispatch(slice.actions.getRegionsSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getDistrict(region) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "GET",
				url: `${url}/district/`,
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				params: {
					region: region,
				},
			});
			dispatch(slice.actions.getDistrictSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}
export function getCommune(region, district) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				url: `${url}/commune`,
				params: {
					region: region,
					district: district,
				},
			});
			dispatch(slice.actions.getCommuneSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getVille({ region, district, commune }) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				url: `${url}/ville`,
				params: {
					region: region,
					district: district,
					commune: commune,
				},
			});
			dispatch(slice.actions.getVilleSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getRegionName(id) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				url: `${url}/region/get_region/${id}`,
			});
			dispatch(slice.actions.getRegionNameSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}
