import * as Yup from "yup";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack5";
import { useState, useEffect, useRef } from "react";
import { Form, FormikProvider, useFormik } from "formik";
// material
import { LoadingButton } from "@material-ui/lab";
import {
	Stack,
	TextField,
	Typography,
	Autocomplete,
	Button,
	Box,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
// utils
import { getRegions } from "../../redux/slices/location";
import { getSexes } from "../../redux/slices/collecteVIH";
import { createCollecte } from "../../redux/slices/ezaho";
import {
	setShow,
	getPAXFB,
	getSexe,
	resetPAX,
	resetSexe,
} from "../../redux/slices/pax";
import useAuth from "../../hooks/useAuth";

// ----------------------------------------------------------------------

CollecteForm.propTypes = {
	isEdit: PropTypes.bool,
	currentProduct: PropTypes.object,
};

export default function CollecteForm() {
	const [allCollectes, setAllCollectes] = useState([]);
	const [valTypeCible, setValTypeCible] = useState(
		useSelector((state) => state.PAX.PAX) | ""
	);
	const [valPAX, setValPAX] = useState("");
	const [valReference, setValReference] = useState("");

	const PAXs = useSelector((state) => state.PAX.PAXs);

	const regions = useSelector((state) => state.location.regions);

	const listeReferents = [
		{ label: "VIH" },
		{ label: "WHP" },
		{ label: "PF" },
		{ label: "COVID" },
	];
	const sexeName = useSelector((state) => state.PAX.sexe);
	const [valRegion, setValRegion] = useState("");

	const dispatch = useDispatch();
	const [id, setId] = useState(0);
	const { enqueueSnackbar } = useSnackbar();
	const { user } = useAuth();

	const Schema = Yup.object().shape({
		region: Yup.string().required("Entrer la région du PAX"),
		sexe: Yup.number().required("Entrer le sexe du PAX"),
		referent: Yup.string().required("Entrer le référent du PAX"),
	});
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			PAX: "",
			CIU: "",
			region: "",
			referent: "",
			sexe: "",
		},
		validationSchema: Schema,
		onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
			const dataSubmit = {
				pax: valPAX.id,
				referent: values.referent,
				responsable: user.id,
			};
			try {
				await submit(dataSubmit);
				await resetAllForm();
				await dispatch(resetPAX());
				setValPAX(null);
				await dispatch(resetSexe());
				enqueueSnackbar("Enregistrée avec succès", { variant: "success" });
				await dispatch(getPAXFB());
			} catch (error) {
				console.error(error);
				setSubmitting(false);
				setErrors(error);
			}
		},
	});

	const submit = (values) => {
		setAllCollectes([...allCollectes, { id, ...values }]);
		setId(id + 1);
		console.log(values);
		dispatch(createCollecte(values));
	};
	const handleNew = () => {
		dispatch(setShow(true));
	};

	const resetAllForm = () => {
		resetForm();
		setValReference("");
	};

	const {
		handleChange,
		values,
		handleSubmit,
		touched,
		handleBlur,
		errors,
		resetForm,
		setFieldValue,
		isSubmitting,
	} = formik;

	// Data
	const isInit = useRef(true);

	useEffect(() => {
		dispatch(getRegions());
		dispatch(getSexes());
		dispatch(getPAXFB());
	}, []);

	useEffect(() => {
		dispatch(getSexe(valPAX?.sexe));
		values.sexe = valPAX?.sexe;
		console.log(`sexe: ${sexeName}`);
		setValRegion(regions.filter((item) => item.id === valPAX?.region)[0]);
	}, [valPAX]);

	return (
		<FormikProvider value={formik}>
			<Form noValidate autoComplete="on" onSubmit={handleSubmit}>
				<Stack direction="column" spacing={3} sx={{ mt: 3 }}>
					<Box>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							spacing={2}
						>
							<Typography variant="subtitle1">PAX</Typography>
							<Button
								variant="outlined"
								color="primary"
								onClick={handleNew}
								sx={{ textTransform: "none" }}
							>
								Ajouter nouveau PAX
							</Button>
						</Stack>
					</Box>

					<Autocomplete
						disablePortal
						name="nomFb"
						options={PAXs}
						getOptionLabel={(option) => option?.nom_fb || ""}
						value={valPAX}
						onChange={(event, newValue) => {
							setValPAX(newValue);
						}}
						inputValue={values.nomFb}
						onInputChange={(event, newInputValue) => {
							setFieldValue("nomFb", newInputValue);
						}}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Nom Facebook du PAX"
								variant="standard"
							/>
						)}
					/>

					<Typography variant="body1">Prenom PAX: {valPAX?.prenom} </Typography>

					<Typography variant="body1">
						Nom facebook: {valPAX?.nom_fb}
					</Typography>

					<Typography variant="body1">Sexe: {sexeName}</Typography>
					<Typography variant="body1">CIU: {valPAX?.code}</Typography>

					<Autocomplete
						disablePortal
						id="region"
						options={regions}
						value={valRegion}
						onChange={(event, newValue) => {
							setValRegion(newValue);
						}}
						inputValue={values.region}
						onInputChange={(event, newInputValue) => {
							setFieldValue("region", newInputValue);
						}}
						renderInput={(params) => (
							<TextField {...params} label="Région" variant="standard" />
						)}
					/>

					<Typography variant="subtitle1">Référé à</Typography>

					<Autocomplete
						disablePortal
						id="referent"
						options={listeReferents}
						value={valReference}
						onChange={(event, newValue) => {
							setValReference(newValue);
						}}
						inputValue={values.referent}
						onInputChange={(event, newInputValue) => {
							setFieldValue("referent", newInputValue);
						}}
						renderInput={(params) => (
							<TextField {...params} label="Référé à" variant="standard" />
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
