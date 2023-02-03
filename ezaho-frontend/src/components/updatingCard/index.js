import * as Yup from "yup";
import { useSnackbar } from "notistack5";
import { useState, useEffect } from "react";
import { Form, FormikProvider, useFormik } from "formik";
// material
import { LoadingButton } from "@material-ui/lab";
import { Stack, TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
// utils
import { postFacebook } from "../../redux/slices/updateFacebook";
import useAuth from "../../hooks/useAuth";
import { PropTypes } from "prop-types";

// ----------------------------------------------------------------------

export default function UpdateForm({ programme, fbType }) {
	const [valIntrant, setValIntrant] = useState("");
	const [valYear, setValYear] = useState("");
	const [valMois, setValMois] = useState(0);
	const dispatch = useDispatch();

	const { enqueueSnackbar } = useSnackbar();
	const { user } = useAuth();

	const Schema = Yup.object().shape({
		file: Yup.mixed().required("Entrer le fichier"),
	});
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			file: null,
		},
		validationSchema: Schema,
		onSubmit: async (values, { setSubmitting, setErrors }) => {
			const dataSubmit = {
				file: values.file,
			};
			try {
				await submit(dataSubmit);
				await resetAllForm();
			} catch (error) {
				console.error(error);
				setSubmitting(false);
				setErrors(error);
			}
		},
	});

	const submit = (values) => {
		const formData = new FormData();
		formData.append("file", values.file);
		dispatch(postFacebook({ file: formData.file, programme, type: fbType }));
		enqueueSnackbar("Enregistrement effectué", { variant: "success" });
	};

	const resetAllForm = () => {
		setValIntrant("");
		resetForm();
	};

	const {
		values,
		touched,
		errors,
		handleSubmit,
		resetForm,
		setFieldValue,
		isSubmitting,
		getFieldProps,
	} = formik;

	return (
		<FormikProvider value={formik}>
			<Form noValidate autoComplete="on" onSubmit={handleSubmit}>
				<Stack direction="column" spacing={3} sx={{ mt: 3 }}>
					<label for="file">
						<b>
							Facebook {fbType} - Programme {programme}
						</b>
					</label>
					<TextField
						variant="standard"
						name="file"
						type="file"
						id="file"
						{...getFieldProps("file")}
						error={Boolean(touched.nombre && errors.nombre)}
						helperText={touched.nombre && errors.nombre}
					/>

					<Stack direction="row" spacing={2}>
						<LoadingButton
							variant="contained"
							color="primary"
							type="submit"
							loading={isSubmitting}
							onClick={handleSubmit}
						>
							Upload
						</LoadingButton>
						<Button
							variant="outlined"
							type="button"
							onClick={() => resetAllForm()}
						>
							Annuler
						</Button>
					</Stack>
				</Stack>
			</Form>
		</FormikProvider>
	);
}
