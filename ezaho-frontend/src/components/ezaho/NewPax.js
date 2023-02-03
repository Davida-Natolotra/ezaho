import * as Yup from "yup";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack5";
import moment from "moment";
import { useState, useEffect, useRef } from "react";
import { Form, FormikProvider, useFormik } from "formik";
// material
import { LoadingButton } from "@material-ui/lab";
import {
	Card,
	CardContent,
	Chip,
	Grid,
	Stack,
	Radio,
	Switch,
	Select,
	TextField,
	InputLabel,
	Typography,
	RadioGroup,
	FormControl,
	Autocomplete,
	InputAdornment,
	FormHelperText,
	FormControlLabel,
	Button,
	FormLabel,
	Dialog,
	DialogTitle,
	DialogContent,
	Tooltip,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import IconButton from "@mui/material/IconButton";
import frLocale from "date-fns/locale/fr";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { frFR as calFR } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";
import {
	createPAX,
	resetPAX,
	setEdit,
	setShow,
	updatePAX,
	generateCIU,
	saveCIU,
	getMyPAX,
	getLastSerialNumber,
} from "../../redux/slices/pax";
import useAuth from "../../hooks/useAuth";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

PAXNewForm.propTypes = {
	isEdit: PropTypes.bool,
	currentPAX: PropTypes.object,
};

function PAXNewForm() {
	const currentPAX = useSelector((state) => state.PAX.PAX);
	const { isEdit } = useSelector((state) => state.PAX);
	const CIU = useSelector((state) => state.PAX.CIU.ciu);
	const lastSerialNumber = useSelector((state) => state.PAX.lastSerialNo);
	const [valRegion, setValRegion] = useState("");
	const regions = useSelector((state) => state.location.regions);
	const sexes = useSelector((state) => state.VIHCollecte.sexes);
	const [isChanged, setIsChanged] = useState(false);

	const { enqueueSnackbar } = useSnackbar();
	const dispatch = useDispatch();

	const { user } = useAuth();
	const isInit = useRef();

	const PAXSchema = Yup.object().shape({
		prenom: Yup.string().required("Prénom requis"),
		code: Yup.string().required("code requis"),
		nom_fb: Yup.string().nullable().notRequired(),
		phone: Yup.string().nullable().notRequired(),
		sexe: Yup.string().required("Sexe requis"),
		region: Yup.string().required("Région requise"),
		ciu: Yup.string().required("CIU requis"),
	});

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			prenom: isEdit ? currentPAX.prenom : "",
			code: isEdit ? currentPAX.code : "",
			nom_fb: isEdit ? currentPAX.nom_fb : "",
			phone: isEdit ? currentPAX.phone : "",
			sexe: isEdit ? currentPAX.sexe : "",
			region: isEdit ? currentPAX.region : "",
			serial_no: isEdit ? currentPAX.serial_no : "",
		},
		validationSchema: PAXSchema,
		onSubmit: async (values, { setSubmitting, setErrors }) => {
			const dataSubmit = new FormData();
			dataSubmit.append("prenom", values.prenom);
			dataSubmit.append("code", CIU);
			dataSubmit.append("nom_fb", values.nom_fb);
			dataSubmit.append("phone", values.phone);
			dataSubmit.append("sexe", values.sexe);
			dataSubmit.append("region", valRegion.id);
			dataSubmit.append("serial_no", Number(lastSerialNumber) + 1);
			if (isEdit) {
				dataSubmit.id = currentPAX.id;
			}
			try {
				console.log(dataSubmit);
				if (isEdit) {
					await dispatch(updatePAX(dataSubmit, currentPAX.id));
				} else {
					await dispatch(createPAX(dataSubmit));
				}
				await dispatch(saveCIU(CIU));
				resetFormInit();
				enqueueSnackbar(
					!isEdit
						? "Nouvelle entrée enregistrée avec succès"
						: "Update success",
					{ variant: "success" }
				);

				setIsChanged(false);
				await dispatch(getMyPAX());
				dispatch(setShow(false));
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
		setIsChanged(false);
		dispatch(setEdit(false));
		dispatch(resetPAX());
		setSubmitting(false);
		resetForm();
	};

	useEffect(() => {
		if (!isEdit) {
			resetFormInit();
		}
	}, [isEdit]);

	useEffect(() => {
		if (isInit.current) {
			isInit.current = false;
		} else {
			if (values.region && values.sexe) {
				dispatch(generateCIU({ sexe: values.sexe, region: valRegion.id }));
			}
		}
	}, [values.region, values.sexe]);

	useEffect(() => {
		values.code = CIU;
	}, [CIU]);

	useEffect(() => {
		dispatch(getLastSerialNumber());
	}, []);

	return (
		<FormikProvider value={formik}>
			<Form autoComplete="off" onSubmit={handleSubmit}>
				<Grid container spacing={3} justifyContent="center">
					<Grid item xs={12}>
						<Card>
							<CardContent>
								<Stack spacing={3} direction="column">
									{user.role === "call" ? (
										<TextField
											label="Télephone"
											value={values.phone}
											onChange={handleChange}
											onBlur={handleBlur}
											name="phone"
											variant="standard"
											required
											error={Boolean(touched.phone && errors.phone)}
											helperText={touched.phone && errors.phone}
										/>
									) : (
										<TextField
											label="Nom Facebook"
											value={values.nom_fb}
											onChange={handleChange}
											onBlur={handleBlur}
											name="nom_fb"
											variant="standard"
											required
											error={Boolean(touched.nom_fb && errors.nom_fb)}
											helperText={touched.nom_fb && errors.nom_fb}
										/>
									)}

									<TextField
										fullWidth
										label="Prénom"
										name="prenom"
										onChange={handleChange}
										onBlur={handleBlur}
										{...getFieldProps("prenom")}
										error={Boolean(touched.prenom && errors.prenom)}
										helperText={touched.prenom && errors.prenom}
									/>
									<FormControl error={Boolean(touched.sexe && errors.sexe)}>
										<FormLabel id="demo-row-radio-buttons-group-label">
											Sexe
										</FormLabel>
										<RadioGroup
											row
											aria-labelledby="demo-row-radio-buttons-group-label"
											name="sexe"
											value={values.sexe}
											onChange={handleChange}
										>
											{sexes.map(
												(sexe) =>
													sexe.name.toLowerCase() !== "all" && (
														<FormControlLabel
															value={sexe.id}
															control={<Radio />}
															label={sexe.name}
														/>
													)
											)}
										</RadioGroup>
										<FormHelperText>
											{touched.sexe && errors.sexe}
										</FormHelperText>
									</FormControl>
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
											<TextField
												{...params}
												label="Région"
												variant="standard"
											/>
										)}
									/>

									<Typography variant="body1">Code: {CIU}</Typography>

									<Stack spacing={1} direction="row">
										<LoadingButton
											type="submit"
											fullWidth
											variant="contained"
											size="large"
											loading={isSubmitting}
											// disabled={!isChanged}
										>
											Enregistrer
										</LoadingButton>

										<Button
											type="button"
											fullWidth
											variant="outlined"
											onClick={() => resetFormInit()}
										>
											Nouveau
										</Button>
									</Stack>
								</Stack>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Form>
		</FormikProvider>
	);
}
export default function NewPAX() {
	const openDialog = useSelector((state) => state.PAX.show);
	const { isEdit } = useSelector((state) => state.PAX);
	const dispatch = useDispatch();
	const handleCloseDialog = () => dispatch(setShow(false));
	return (
		<Dialog
			open={openDialog}
			onClose={handleCloseDialog}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle sx={{ p: 3 }}>
				{isEdit ? "Edition" : "Nouveau PAX"}
				{openDialog ? (
					<Tooltip title="Fermer">
						<IconButton
							aria-label="close"
							onClick={handleCloseDialog}
							sx={{
								position: "absolute",
								right: 8,
								top: 8,
								color: (theme) => theme.palette.grey[500],
							}}
						>
							<CloseIcon />
						</IconButton>
					</Tooltip>
				) : null}
			</DialogTitle>
			<DialogContent>
				<PAXNewForm />
			</DialogContent>
		</Dialog>
	);
}
