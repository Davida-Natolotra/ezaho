import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "axios";

// ----------------------------------------------------------------------

import { url } from "../../utils/env";

const initialState = {
	isLoading: false,
	error: false,
	status: "",
};

const slice = createSlice({
	name: "UpdateFacebook",
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

		postFacebookSuccess(state, action) {
			state.status = action.payload;
		},
	},
});

// Reducer
export default slice.reducer;

// Actions
export const { addRecipients, onSendMessage, resetActiveConversation } =
	slice.actions;

// ----------------------------------------------------------------------

export function postFacebook({ file, programme, type }) {
	return async (dispatch) => {
		console.log("Uploading " + file);
		dispatch(slice.actions.startLoading());
		try {
			const response = await axios({
				method: "post",
				url: `${url}/fbupload/${programme}/${type}`,
				headers: {
					Authorization: "Bearer " + localStorage.getItem("accessToken"),
					"Content-Type": "multipart/form-data",
				},
				data: file,
			});
			dispatch(slice.actions.postFacebookSuccess(response.data));
		} catch (error) {
			dispatch(slice.actions.hasError(error));
		}
	};
}
