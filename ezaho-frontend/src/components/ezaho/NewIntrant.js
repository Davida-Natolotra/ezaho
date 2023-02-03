import * as Yup from "yup";
import { useSnackbar } from "notistack5";
import { useState, useEffect } from "react";
import { Form, FormikProvider, useFormik } from "formik";
// material
import {
	Card,
	CardContent,
	Grid,
	Stack,
	TextField,
	Autocomplete,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
	getIntrantName,
	createDistribution,
} from "../../redux/slices/collecteVIH";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function NewIntrant() {
	const intrants = useSelector((state) => state.VIHCollecte.intrants);
	const mois = useSelector((state) => state.VIHCollecte.mois);
	const { isEdit } = useSelector((state) => state.PAX);
	const [valIntrant, setValIntrant] = useState("");
	const [valMois, setValMois] = useState("");

	const { enqueueSnackbar } = useSnackbar();
	const dispatch = useDispatch();

	const DistribSchema = Yup.object().shape({
		intrant: Yup.SortingSelectingHead().required("Intrant requis"),
		nombre: Yup.number().required("nombre requis"),
		mois: Yup.string().required("Mois requis"),
	});

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			intrant: "",
			nombre: 0,
			mois: "",
		},
		validationSchema: DistribSchema,
		onSubmit: async (values, { setSubmitting, setErrors }) => {
			const dataSubmit = new FormData();
			dataSubmit.append("intrant", values.intrant);
			dataSubmit.append("nombre", values.nombre);
			dataSubmit.append("mois", values.mois);

			try {
				console.log(dataSubmit);

				await dispatch(createDistribution(dataSubmit));
				resetFormInit();
				enqueueSnackbar(
					!isEdit
						? "Nouvelle entrée enregistrée avec succès"
						: "Update success",
					{ variant: "success" }
				);
			} catch (error) {
				console.error(error);
				setSubmitting(false);
				setErrors(error);
			}
		},
	});

	const {
		handleChange,
		getFieldProps,
		values,
		handleSubmit,
		touched,
		handleBlur,
		errors,
		setSubmitting,
		setFieldValue,
		isSubmitting,
		resetForm,
	} = formik;

	const resetFormInit = () => {
		setSubmitting(false);
		resetForm();
	};

	useEffect(() => {
		dispatch(getIntrantName());
	}, []);

	return (
		<FormikProvider value={formik}>
			<Form autoComplete="off" onSubmit={handleSubmit}>
				<Grid container spacing={3} justifyContent="center">
					<Grid item xs={12}>
						<Card>
							<CardContent>
								<Stack spacing={3} direction="column">
									<Autocomplete
										disablePortal
										id="intrant"
										options={intrants}
										value={valIntrant}
										onChange={(event, newValue) => {
											setValIntrant(newValue);
										}}
										inputValue={values.intrant}
										onInputChange={(event, newInputValue) => {
											setFieldValue("intrant", newInputValue);
										}}
										renderInput={(params) => (
											<TextField
												{...params}
												label="Intrant"
												variant="standard"
											/>
										)}
									/>
									<TextField
										fullWidth
										label="Nombre"
										name="nombre"
										onChange={handleChange}
										onBlur={handleBlur}
										{...getFieldProps("nombre")}
										error={Boolean(touched.nombre && errors.nombre)}
										helperText={touched.nombre && errors.nombre}
									/>
									<Autocomplete
										disablePortal
										id="mois"
										options={mois}
										value={valMois}
										onChange={(event, newValue) => {
											setValMois(newValue);
										}}
										inputValue={values.mois}
										onInputChange={(event, newInputValue) => {
											setFieldValue("mois", newInputValue);
										}}
										renderInput={(params) => (
											<TextField {...params} label="Mois" variant="standard" />
										)}
									/>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Form>
		</FormikProvider>
	);
}
