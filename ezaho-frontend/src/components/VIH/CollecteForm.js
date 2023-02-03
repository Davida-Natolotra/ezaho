import * as Yup from "yup";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack5";
import { useState, useEffect, useRef } from "react";
import { Form, FormikProvider, useFormik } from "formik";
// material
import { LoadingButton } from "@material-ui/lab";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import frLocale from "date-fns/locale/fr";
import { frFR as calFR } from "@mui/x-date-pickers";
import moment from "moment";
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
import { getRegions, getDistrict } from "../../redux/slices/location";
import {
	getTypeCibles,
	getTypeDemandes,
	getTypeDemandesAll,
	getpSensibilisations,
	getReferents,
	getSexes,
	getReferentsAllCible,
	createCollecte,
} from "../../redux/slices/collecteVIH";
import {
	setShow,
	getMyPAX,
	getSexe,
	resetPAX,
	resetSexe,
	getMyPAXPhone,
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
	const [valTypeDemande, setValTypeDemande] = useState("");
	const [valTypeReference, setValTypeReference] = useState("");
	const [valReference, setValReference] = useState("");
	const [valPageSensibilisation, setValPageSensibilisation] = useState("");
	const [valAutreDemande, setValAutreDemande] = useState("");

	const PAXs = useSelector((state) => state.PAX.PAXs);
	const prenoms = useSelector((state) =>
		state.PAX.PAXs.map((p) => ({ label: p.prenom, value: p.id }))
	);
	const typeCibles = useSelector((state) => state.VIHCollecte.typeCibles);
	const regions = useSelector((state) => state.location.regions);
	const districts = useSelector((state) => state.location.district);
	const typeDemandes = useSelector((state) => state.VIHCollecte.typeDemandes);
	const pSensibilisations = useSelector(
		(state) => state.VIHCollecte.pSensibilisations
	);
	const listeReferents = useSelector((state) => state.VIHCollecte.referents);
	const sexeName = useSelector((state) => state.PAX.sexe);
	const [valRegion, setValRegion] = useState("");
	const [valDistrict, setValDistrict] = useState("");

	const dispatch = useDispatch();
	const [id, setId] = useState(0);
	const { enqueueSnackbar } = useSnackbar();
	const { user } = useAuth();

	const Schema = Yup.object().shape({
		date: Yup.date().required("Entrer date de saisie"),
		region: Yup.string().required("Entrer la région du PAX"),
		sexe: Yup.number().required("Entrer le sexe du PAX"),
		cible: Yup.string().required("Entrer le type cible du PAX"),
		referent: Yup.string().required("Entrer le référent du PAX"),
		pSensibilisation: Yup.string().required(
			"Entrer la page de sensibilisation du PAX"
		),
		typeReferent: Yup.string().required("Entrer le type de referent "),
		demande: Yup.string().required("Entrer le type de demande du PAX"),
	});
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			PAX: "",
			CIU: "",
			date: null,
			region: "",
			cible: "",
			referent: "",
			pSensibilisation: "",
			typeReferent: "",
			demande: "",
			sexe: "",
			ciu: "",
		},
		validationSchema: Schema,
		onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
			const dataSubmit = {
				pax: valPAX.id,
				date_collecte: moment(values.date).format("YYYY-MM-DD"),
				region: Number(valRegion.id),
				type_cible: values.cible,
				referent: values.referent,
				page_sensibilisation: values.pSensibilisation,
				type_referent: values.typeReferent,
				type_demande:
					values.demande === "Autre" ? valAutreDemande : values.demande,
				responsable: user.id,
			};
			try {
				await submit(dataSubmit);
				await resetAllForm();
				await dispatch(resetPAX());
				setValPAX(null);
				await dispatch(resetSexe());
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
		setValTypeCible("");
		setValRegion("");
		setValTypeDemande("");
		setValTypeReference("");
		setValReference("");
		setValPageSensibilisation("");
		resetForm();
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
	const typeReferents = [{ label: "CSB" }, { label: "PE" }, { label: "DIC" }];

	useEffect(() => {
		dispatch(getRegions());
		dispatch(getTypeCibles());
		dispatch(getpSensibilisations());
		dispatch(getSexes());
		dispatch(getMyPAX());
	}, []);

	useEffect(() => {
		if (isInit.current) {
			isInit.current = false;
		} else if (values.sexe && values.cible) {
			dispatch(getTypeDemandes({ sexe: values.sexe, tCible: valTypeCible.id }));
			dispatch(getTypeDemandesAll({ sexe: 3, tCible: 4 }));
		}
	}, [values.sexe, values.cible]);

	useEffect(() => {
		if (isInit.current) {
			isInit.current = false;
		} else if (values.cible && values.region && values.typeReferent) {
			dispatch(
				getReferents({
					tCible: valTypeCible.id,
					region: valRegion.id,
					type: valTypeReference.label,
				})
			);
			if (valTypeReference.label === "PE") {
				dispatch(
					getReferentsAllCible({
						region: valRegion.id,
						type: valTypeReference.label,
					})
				);
			}
		}
	}, [values.cible, values.region, values.typeReferent]);

	useEffect(() => {
		dispatch(getSexe(valPAX?.sexe));
		if (user.role === "call") {
			dispatch(getMyPAXPhone(values.phone));
		}
		values.sexe = valPAX?.sexe;
		console.log(prenoms);
		setValRegion(regions.filter((item) => item.id === valPAX?.region)[0]);
	}, [valPAX]);

	useEffect(() => {
		if (isInit.current) {
			isInit.current = false;
		} else if (values.region) {
			dispatch(getDistrict(valRegion.id));
		}
	}, [values.region]);

	return (
		<FormikProvider value={formik}>
			<Form noValidate autoComplete="on" onSubmit={handleSubmit}>
				<Stack direction="column" spacing={3} sx={{ mt: 3 }}>
					<Autocomplete
						disablePortal
						id="pSensibilisation"
						name="pSensibilisation"
						options={pSensibilisations}
						value={valPageSensibilisation}
						onChange={(e, newValue) => setValPageSensibilisation(newValue)}
						inputValue={values.pSensibilisation}
						onInputChange={(event, newInputValue) =>
							setFieldValue("pSensibilisation", newInputValue)
						}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Page de sensibilisation"
								variant="standard"
							/>
						)}
					/>
					<Box>
						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
							spacing={2}
						>
							<Typography variant="subtitle1">Client</Typography>
							<Button
								variant="outlined"
								color="primary"
								onClick={handleNew}
								sx={{ textTransform: "none" }}
							>
								Ajouter nouveau client
							</Button>
						</Stack>
					</Box>
					{user.role === "web" ? (
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
									label="Nom Facebook du client"
									variant="standard"
								/>
							)}
						/>
					) : (
						<Autocomplete
							disablePortal
							name="phone"
							options={PAXs}
							getOptionLabel={(option) => option?.phone || ""}
							value={valPAX}
							onChange={(event, newValue) => {
								setValPAX(newValue);
							}}
							inputValue={values.phone}
							onInputChange={(event, newInputValue) => {
								setFieldValue("phone", newInputValue);
							}}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Phone du client"
									variant="standard"
								/>
							)}
						/>
					)}
					{user.role === "web" ? (
						<Typography variant="body1">
							Prénom du client: {valPAX?.prenom}
						</Typography>
					) : (
						<Autocomplete
							disablePortal
							name="prenom"
							options={prenoms}
							getOptionLabel={(option) => option?.label || ""}
							value={valPAX}
							onChange={(event, newValue) => {
								setValPAX(newValue);
							}}
							inputValue={values.nomFb}
							onInputChange={(event, newInputValue) => {
								setFieldValue("prenom", newInputValue);
							}}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Prénom du client"
									variant="standard"
								/>
							)}
						/>
					)}
					{user.role === "web" ? (
						<Typography variant="body1">
							Nom facebook: {valPAX?.nom_fb}
						</Typography>
					) : (
						<Typography variant="body1">Num phone: {valPAX?.phone}</Typography>
					)}
					<Typography variant="body1">Sexe: {sexeName}</Typography>
					<Typography variant="body1">Code Ezaho: {valPAX?.code}</Typography>
					<Typography variant="body1">CIU: {valPAX?.ciu}</Typography>
					<LocalizationProvider
						dateAdapter={AdapterDateFns}
						adapterLocale={frLocale}
						localeText={
							calFR.components.MuiLocalizationProvider.defaultProps.localeText
						}
					>
						<MobileDatePicker
							label="Date de collecte"
							value={values.date}
							onChange={(newValue) => {
								setFieldValue("date", newValue);
							}}
							renderInput={(params) => (
								<TextField
									{...params}
									name="date"
									variant="standard"
									error={Boolean(touched.date && errors.date)}
									helperText={touched.date && errors.date}
								/>
							)}
							disableFuture
							variant="standard"
						/>
					</LocalizationProvider>
					<Autocomplete
						disablePortal
						name="cible"
						options={typeCibles}
						getOptionLabel={(option) => option.label || ""}
						value={valTypeCible}
						onChange={(event, newValue) => {
							setValTypeCible(newValue);
						}}
						inputValue={values.cible}
						onInputChange={(event, newInputValue) => {
							setFieldValue("cible", newInputValue);
						}}
						renderInput={(params) => (
							<TextField {...params} label="Type de cible" variant="standard" />
						)}
					/>
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
					<Autocomplete
						disablePortal
						id="district"
						options={districts}
						value={valDistrict}
						onChange={(event, newValue) => {
							setValDistrict(newValue);
						}}
						inputValue={values.district}
						onInputChange={(event, newInputValue) => {
							setFieldValue("district", newInputValue);
						}}
						renderInput={(params) => (
							<TextField {...params} label="District" variant="standard" />
						)}
					/>
					<Autocomplete
						disablePortal
						id="demande"
						options={typeDemandes}
						value={valTypeDemande}
						onChange={(event, newValue) => {
							setValTypeDemande(newValue);
						}}
						inputValue={values.demande}
						onInputChange={(event, newInputValue) => {
							setFieldValue("demande", newInputValue);
						}}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Type de demande"
								variant="standard"
							/>
						)}
					/>
					{values.demande === "Autre" && (
						<TextField
							label="Autre type de demande"
							variant="standard"
							value={valAutreDemande}
							onChange={(e, val) => setValAutreDemande(val)}
						/>
					)}
					<Typography variant="subtitle1">Référé à</Typography>
					<Autocomplete
						disablePortal
						id="typeReferent"
						options={typeReferents}
						value={valTypeReference}
						onChange={(e, newVal) => setValTypeReference(newVal)}
						inputValue={values.typeReferent}
						onInputChange={(event, newInputValue) => {
							setFieldValue("typeReferent", newInputValue);
						}}
						renderInput={(params) => (
							<TextField
								{...params}
								label="Type de référence"
								variant="standard"
							/>
						)}
					/>
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
