import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "axios";

// ----------------------------------------------------------------------

import { url } from "../../utils/env";

const initialState = {
	isLoading: false,
	isError: false,
	PAXs: [],
	PAX: null,
	isEdit: false,
	show: false,
	CIU: "",
	sexe: "",
	paxByUser: {
		MyPAXCount: 0,
		MyObjectives: 0,
		MyPercentage: 0,
	},
	paxBySexe: {
		total: 0,
		masculin: 0,
		masculin_percentage: 0,
		feminin: 0,
		feminin_percentage: 0,
	},
	isPrenomUnique: true,
	lastSerialNo: null,
};

const slice = createSlice({
	name: "PAX",
	initialState: initialState,
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

		// GET PAX SUCCESS
		getPAXSuccess(state, action) {
			state.PAX = action.payload;
		},
		getPAXsSuccess(state, action) {
			state.PAXs = action.payload;
		},
		setShow(state, action) {
			state.show = action.payload;
		},
		resetPAX(state, action) {
			state.PAX = null;
		},
		setEdit(state, action) {
			state.isEdit = action.payload;
		},
		getCIUSuccess(state, action) {
			state.CIU = action.payload;
		},
		getSexeSuccess(state, action) {
			state.sexe = action.payload;
		},
		resetSexe(state, action) {
			state.sexe = "";
		},
		getPaxByUserSuccess(state, action) {
			state.paxByUser = action.payload;
		},
		getPaxBySexeSuccess(state, action) {
			state.paxBySexe = action.payload;
		},
		checkPrenomUniqueSuccess(state, action) {
			state.isPrenomUnique = action.payload;
		},
		getLastSerialNumberSuccess(state, action) {
			state.lastSerialNo = action.payload;
		},
	},
});

// Reducer
export default slice.reducer;
export const { setShow, resetPAX, setEdit, resetSexe } = slice.actions;

export function createPAX(PAX) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "post",
				url: `${url}/PAX/`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
				data: PAX,
			});
			dispatch(slice.actions.getPAXSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getAllPAX() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/PAX/`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
			});
			dispatch(slice.actions.getPAXsSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}
export function checkPrenomUnique(prenom) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/PAX/check_prenom_unique/${prenom}`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
			});
			dispatch(slice.actions.checkPrenomUniqueSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}
export function getPAXFB() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/PAX/fb`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
			});
			dispatch(slice.actions.getPAXsSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getPAX({ nom_fb, phone, prenom }) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/PAX/`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
				params: {
					nom_fb: nom_fb,
					phone: phone,
					prenom: prenom,
				},
			});
			dispatch(slice.actions.getPAXSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}
export function getMyPAX() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/PAX/MyPAXList`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
			});
			dispatch(slice.actions.getPAXsSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}
export function getMyPAXPhone(phone) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/PAX/MyPAXList`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
				params: {
					phone,
				},
			});
			dispatch(slice.actions.getPAXsSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getMyLastPAX() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/PAX/MyLastPax/`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
			});
			dispatch(slice.actions.getPAXSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function updatePAX(id, PAX) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "put",
				url: `${url}/PAX/${id}`,
				headers: {
					"Content-Type": "application/json",
				},
				data: PAX,
			});
			dispatch(slice.actions.getPAXSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function generateCIU({ sexe, region }) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/CIU/generate`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
				params: {
					sexe: sexe,
					region: region,
				},
			});
			dispatch(slice.actions.getCIUSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function saveCIU(ciu) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			await axios({
				method: "post",
				url: `${url}/CIU/create/${ciu}/`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
			});
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getSexe(sexeId) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/PAX/sexe/${sexeId}/`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
			});
			dispatch(slice.actions.getSexeSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getPaxByUser() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/PAX/ByUser`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
			});
			dispatch(slice.actions.getPaxByUserSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getPaxBySexe() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/PAX/BySexe/`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
			});
			dispatch(slice.actions.getPaxBySexeSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function setPax(data) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			dispatch(slice.actions.getPAXSuccess(data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getLastSerialNumber() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/PAX/check_last_serial_no`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
			});

			dispatch(slice.actions.getLastSerialNumberSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}
