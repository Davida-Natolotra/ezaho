import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "axios";

// ----------------------------------------------------------------------

import { url } from "../../utils/env";

const initialState = {
	isLoading: false,
	error: false,
	myCollectes: [],
	sexes: [],
	region: undefined,
	typeCibles: [],
	typeDemandes: [],
	referents: [],
	pSensibilisations: [],
	collection: {},
	csbs: [],
	PE: [],
	DICMeva: [],
	GraphDemande: {
		"Condom M": 0,
		"Condom F": 0,
		Autotest: 0,
		Gel: 0,
		PrEP: 0,
	},
	GraphDemandePrev: {
		"Condom M": 0,
		"Condom F": 0,
		Autotest: 0,
		Gel: 0,
		PrEP: 0,
	},
	PieDemande: {
		"Condom M": 0,
		"Condom F": 33,
		Gel: 0,
		Autotest: 56,
		PrEP: 11,
		total: 9,
	},
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
	intrants: {},
	intrantsName: {},
	listeDistrib: {},
	mois: [],
};

const slice = createSlice({
	name: "VIHCollecte",
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

		getMyCollectesSuccess(state, action) {
			state.myCollectes = action.payload;
		},
		getMyCollecteSuccess(state, action) {
			state.collection = action.payload;
		},
		getRegionSuccess(state, action) {
			state.region = action.payload;
		},
		getTypeCiblesSuccess(state, action) {
			state.typeCibles = action.payload.map(
				(item) =>
					item.name.toLowerCase() !== "all" &&
					new Object({ id: item.id, label: item.name })
			);
		},

		getTypeDemandesSuccess(state, action) {
			const data = action.payload.map(
				(item) => new Object({ id: item.id, label: item.name })
			);
			data.forEach((d) => {
				if (!state.typeDemandes.find((item) => item.id === d.id)) {
					state.typeDemandes.push(d);
				}
			});
		},

		// getReferentsSuccess(state, action) {
		//   state.referents = action.payload.map(
		//     (item) => new Object({ id: item, label: item.name })
		//   );
		// },
		getReferentsSuccess(state, action) {
			state.referents = action.payload.map(
				(item) => new Object({ id: item.id, label: item.name })
			);
		},
		getReferentsAllSuccess(state, action) {
			state.referents.push(
				...action.payload.map(
					(item) => new Object({ id: item, label: item.name })
				)
			);
		},
		resetReferents(state, action) {
			state.referents = [];
		},
		getpSensibilisationsSuccess(state, action) {
			state.pSensibilisations = action.payload.map(
				(item) => new Object({ id: item.id, label: item.name })
			);
		},
		getCSBSuccess(state, action) {
			state.csbs = action.payload;
		},
		getPESuccess(state, action) {
			state.PE = action.payload;
		},
		getDICMevaSuccess(state, action) {
			state.DICMeva = action.payload;
		},
		getSexesSuccess(state, action) {
			state.sexes = action.payload;
		},
		getGraphTDemandeSuccess(state, action) {
			state.GraphDemande = action.payload.data_demande;
			state.GraphDemandePrev = action.payload.data_precedent;
		},
		getPieDemandeSuccess(state, action) {
			state.PieDemande = action.payload;
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
			state.myCollectes = action.payload;
		},
		getIntrantsSuccess(state, action) {
			state.intrants = action.payload;
		},
		getIntrantsNameSuccess(state, action) {
			state.intrantsName = action.payload.map(
				(item) => new Object({ id: item.id, label: item.name })
			);
		},
		getListDistributionSuccess(state, action) {
			state.listeDistrib = action.payload;
		},
		getListMoisSuccess(state, action) {
			state.mois.label = action.payload.name;
		},
	},
});

// Reducer
export default slice.reducer;

// Actions
export const { addRecipients, onSendMessage, resetActiveConversation } =
	slice.actions;

// ----------------------------------------------------------------------

export function getMyCollectes() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/mycollecte/`,
				headers: {
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
			});
			dispatch(slice.actions.getMyCollectesSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getRegion() {
	console.log("getRegions");
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
			dispatch(slice.actions.getRegionSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}
export function getTypeCibles() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/cible`,
				headers: {
					"Content-Type": "application/json",
				},
			});
			dispatch(slice.actions.getTypeCiblesSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getTypeDemandes({ sexe, tCible }) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/TypeDemande/`,
				headers: {
					"Content-Type": "application/json",
				},
				params: {
					sexe: sexe,
					cible: tCible,
				},
			});
			dispatch(slice.actions.getTypeDemandesSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}
export function getTypeDemandesAll({ sexe, tCible }) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/TypeDemande`,
				headers: {
					"Content-Type": "application/json",
				},
				params: {
					sexe: sexe,
					cible: tCible,
				},
			});
			dispatch(slice.actions.getTypeDemandesSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getReferents({ tCible, region, type }) {
	let route = "";
	switch (type) {
		case "CSB":
			route = "CSB";
			break;
		case "PE":
			route = "PE";
			break;
		case "DIC":
			route = "DIC_Meva";
			break;
		default:
			route = "";
			break;
	}
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		dispatch(slice.actions.resetReferents());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/${route}/`,
				headers: {
					"Content-Type": "application/json",
				},
				params:
					route === "PE"
						? {
								cible: tCible,
								region: region,
						  }
						: { region: Number(region) },
			});
			dispatch(slice.actions.getReferentsSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getReferentsAllCible({ region, type }) {
	let route = "";
	switch (type) {
		case "CSB 2":
			route = "CSB";
			break;
		case "PE":
			route = "PE";
			break;
		case "DIC":
			route = "DIC_Meva";
			break;
		default:
			route = "";
			break;
	}

	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		dispatch(slice.actions.resetReferents());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/${route}/`,
				headers: {
					"Content-Type": "application/json",
				},
				params:
					route === "PE"
						? {
								cible: 3,
								region: region,
						  }
						: { region: Number(region) },
			});
			dispatch(slice.actions.getReferentsAllSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getpSensibilisations() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/PSensibilisation`,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
				},
			});
			dispatch(slice.actions.getpSensibilisationsSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getCSB() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/Csb`,
				headers: {
					Authorization: "Bearer " + sessionStorage.getItem("jwt"),
				},
			});
			dispatch(slice.actions.getCSBSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getPE() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/PE/`,
				headers: {
					Authorization: "Bearer " + sessionStorage.getItem("jwt"),
				},
			});
			dispatch(slice.actions.getPESuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getDICMeva() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/DIC_Meva`,
				headers: {
					Authorization: "Bearer " + sessionStorage.getItem("jwt"),
				},
			});
			dispatch(slice.actions.getDICMevaSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getSexes() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/Sexe/`,
			});
			dispatch(slice.actions.getSexesSuccess(response.data));
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
				url: `${url}/VIH/mycollecte/create`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
				data: collecte,
			});
			dispatch(slice.actions.getMyCollectesSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function GraphTDemande(mois, year) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/GraphTDemande/`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
				params: {
					mois_actuel: mois,
					year,
				},
			});
			dispatch(slice.actions.getGraphTDemandeSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function PieDemande(mois, year) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/PieDemande/`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
				params: {
					mois_actuel: mois,
					year,
				},
			});
			dispatch(slice.actions.getPieDemandeSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getFacebookLikes(month, year) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/fb/VIH/likes`,
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
				url: `${url}/fb/VIH/visit`,
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
				url: `${url}/fb/VIH/reach`,
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

export function getCollectesByDate(newDateDebut, newDateFin) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/collectes/`,
				responseType: "stream",
				params: {
					dateEntree: newDateDebut,
					dateFin: newDateFin,
				},
			});
			dispatch(slice.actions.getCollectesSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getIntrantName() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/Intrant_Liste`,
				responseType: "stream",
			});
			dispatch(slice.actions.getIntrantsNameSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getListDistribution(year) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/ListDistribByYear`,
				responseType: "stream",
				params: {
					year: year,
				},
			});
			dispatch(slice.actions.getListDistributionSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getListMois() {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/Liste_Mois`,
				responseType: "stream",
			});
			dispatch(slice.actions.getListMoisSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function createDistribution(data) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "post",
				url: `${url}/VIH/mycollecte/create`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
				data: data,
			});
			dispatch(slice.actions.getMyCollectesSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function getIntrantList(year) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "get",
				url: `${url}/VIH/ListDistribByYear`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
				params: {
					year: year,
				},
			});
			dispatch(slice.actions.getIntrantsSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}

export function createIntrant(intrant) {
	return async (dispatch) => {
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "post",
				url: `${url}/VIH/Distribution_Intrant_Create`,
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
				},
				data: intrant,
			});
			dispatch(slice.actions.getIntrantsSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}
