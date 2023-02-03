import * as Yup from "yup";
import { useSnackbar } from "notistack5";
import { useState, useEffect } from "react";
import { Form, FormikProvider, useFormik } from "formik";
// material
import { LoadingButton } from "@material-ui/lab";
import { Stack, TextField, Autocomplete, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
// utils
import { getIntrantName, createIntrant } from "../../redux/slices/collecteVIH";
import useAuth from "../../hooks/useAuth";

// ----------------------------------------------------------------------

export default function IntrantForm() {
	const intrantsName = useSelector((state) => state.VIHCollecte.intrantsName);

	const [valIntrant, setValIntrant] = useState("");
	const [valYear, setValYear] = useState("");
	const [valMois, setValMois] = useState(0);
	const dispatch = useDispatch();

	const { enqueueSnackbar } = useSnackbar();
	const { user } = useAuth();

	const Schema = Yup.object().shape({
		mois: Yup.string().required("Entrer le mois de saisie"),
		intrant: Yup.string().required("Nom de l'intrant"),
		nombre: Yup.number().required("Nombre d'intrant requis"),
		year: Yup.number().required("Année requis"),
	});
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			mois: "",
			intrant: "",
			nombre: "",
			year: null,
		},
		validationSchema: Schema,
		onSubmit: async (values, { setSubmitting, setErrors }) => {
			const dataSubmit = {
				intrant: valIntrant.id,
				nombre: values.nombre,
				mois: valMois,
				year: values.year,
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
		dispatch(createIntrant(values));
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

	// Data
	const mois = [
		{ label: "Janvier", value: 1 },
		{ label: "Fevrier", value: 2 },
		{ label: "Mars", value: 3 },
		{
			label: "Avril",
			value: 4,
		},
		{ label: "Mai", value: 5 },
		{ label: "Juin", value: 6 },
		{ label: "Juillet", value: 7 },
		{ label: "Aout", value: 8 },
		{ label: "Septembre", value: 9 },
		{ label: "Octobre", value: 10 },
		{ label: "Novembre  ", value: 11 },
		{ label: "Decembre", value: 12 },
	];
	const years = [{ label: "2022" }, { label: "2023" }, { label: "2024" }];

	useEffect(() => {
		dispatch(getIntrantName());
	}, []);

	return (
		<FormikProvider value={formik}>
			<Form noValidate autoComplete="on" onSubmit={handleSubmit}>
				<Stack direction="column" spacing={3} sx={{ mt: 3 }}>
					<Autocomplete
						disablePortal
						id="intrant"
						name="intrant"
						options={intrantsName}
						value={valIntrant}
						onChange={(e, newValue) => setValIntrant(newValue)}
						inputValue={values.valIntrant}
						onInputChange={(event, newInputValue) =>
							setFieldValue("intrant", newInputValue)
						}
						renderInput={(params) => (
							<TextField {...params} label="Intrant" variant="standard" />
						)}
					/>
					<TextField
						label="Nombre"
						variant="standard"
						name="nombre"
						type="number"
						{...getFieldProps("nombre")}
						error={Boolean(touched.nombre && errors.nombre)}
						helperText={touched.nombre && errors.nombre}
					/>
					<Autocomplete
						disablePortal
						id="mois"
						name="mois"
						options={mois}
						value={values.mois}
						onChange={(e, newValue) => setValMois(newValue.value)}
						inputValue={values.mois}
						onInputChange={(event, newInputValue) =>
							setFieldValue("mois", newInputValue)
						}
						renderInput={(params) => (
							<TextField {...params} label="Mois" variant="standard" />
						)}
					/>
					<Autocomplete
						disablePortal
						id="year"
						name="year"
						options={years}
						value={values.year}
						onChange={(e, newValue) => setValYear(newValue)}
						inputValue={values.year}
						onInputChange={(event, newInputValue) =>
							setFieldValue("year", newInputValue)
						}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Année"
								variant="standard"
								type="number"
							/>
						)}
					/>
					<Stack direction="row" spacing={2}>
						<LoadingButton
							variant="contained"
							color="primary"
							type="submit"
							loading={isSubmitting}
							onClick={handleSubmit}
						>
							Enregistrer
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
