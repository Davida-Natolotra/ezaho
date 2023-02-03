import { useState, useEffect } from "react";
import { DataGrid, GridToolbar, frFR } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "@material-ui/core";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import {
	Typography,
	Box,
	TextField,
	Button,
	Stack,
	Grid,
	ButtonGroup,
} from "@material-ui/core";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import frLocale from "date-fns/locale/fr";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { frFR as calFR } from "@mui/x-date-pickers";
import { useTheme } from "@material-ui/core/styles";
import {
	getMyCollectes,
	getCollectesByDate,
} from "../../redux/slices/collecteVIH";
import GraphPercentMAC from "./GraphPercentMAC";
import GraphPercentMAW from "./GraphPercentMAW";
import useAuth from "../../hooks/useAuth";

function CollecteTable() {
	const theme = useTheme();
	const { myCollectes } = useSelector((state) => state.VIHCollecte);
	const [pageSize, setPageSize] = useState(10);
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const dispatch = useDispatch();
	const { user } = useAuth();
	const loading = false;
	useEffect(() => {
		dispatch(getMyCollectes());
	}, []);

	const columns = [
		{
			field: "pax",
			headerName: "Client",
			minWidth: 50,
			flex: 2,
		},

		{
			field: "date_collecte",
			headerName: "Date de collecte",
			minWidth: 100,
			flex: 2,
			sortable: true,
			hide: isMobile,
			valueFormatter: (params) =>
				new Date(params?.value).toLocaleDateString("fr-fr", {
					year: "numeric",
					month: "numeric",
					day: "numeric",
				}),
		},
		{
			field: "type_demande",
			headerName: "Type de demande",
			minWidth: 150,
			flex: 2,
			sortable: true,
			hide: isMobile,
		},
		{
			field: "region",
			headerName: "Region",
			minWidth: 150,
			flex: 2,
			sortable: true,
			hide: isMobile,
		},
	];

	return (
		<>
			<Box
				sx={{
					p: 3,
				}}
			>
				<FiltreDate />
			</Box>
			<DataGrid
				checkboxSelection
				disableSelectionOnClick
				loading={loading}
				pageSize={pageSize}
				onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
				rowsPerPageOptions={[5, 10, 50]}
				pagination
				autoHeight
				localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
				columns={columns}
				rows={myCollectes}
				componentsProps={{
					toolbar: {
						printOptions: { disableToolbarButton: true },
						showQuickFilter: true,
						quickFilterProps: { debounceMs: 500 },
					},
				}}
				components={{
					Toolbar: GridToolbar,
				}}
			/>
			<Box
				sx={{
					p: 3,
				}}
			>
				{user.role === "web" ? <GraphPercentMAW /> : <GraphPercentMAC />}
			</Box>
		</>
	);
}

export default CollecteTable;

const FiltreDate = () => {
	const [dateDebut, setDateDebut] = useState(new Date());
	const [dateFin, setDateFin] = useState(new Date());
	const dispatch = useDispatch();

	function formatDate(date) {
		let today = new Date(date);
		const dd = String(today.getDate()).padStart(2, "0");
		const mm = String(today.getMonth() + 1).padStart(2, "0");
		const yyyy = String(today.getFullYear());
		today = `${yyyy}-${mm}-${dd}`;
		return today;
	}

	function Filter(dateDebut, dateFin) {
		const newDateDebut = formatDate(dateDebut);
		const newDateFin = formatDate(dateFin);
		dispatch(getCollectesByDate(newDateDebut, newDateFin));
	}

	function CancelFilter() {
		setDateDebut(new Date());
		setDateFin(new Date());
	}

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={6}>
				<Stack direction="column" alignItems="left" spacing={2}>
					<Box>
						<Typography variant="overline">
							Filtre par date de collecte
						</Typography>
						<hr />
					</Box>
					<Stack direction="row" spacing={2} alignItems="center">
						<LocalizationProvider
							dateAdapter={AdapterDateFns}
							adapterLocale={frLocale}
							localeText={
								calFR.components.MuiLocalizationProvider.defaultProps.localeText
							}
						>
							<MobileDatePicker
								label="Date début"
								inputFormat="dd/MM/yyyy"
								openTo="month"
								views={["year", "month", "day"]}
								disableFuture
								value={dateDebut}
								onChange={(newValue) => {
									setDateDebut(newValue);
								}}
								renderInput={(params) => <TextField {...params} />}
							/>
							<MobileDatePicker
								label="Date fin"
								inputFormat="dd/MM/yyyy"
								openTo="month"
								views={["year", "month", "day"]}
								disableFuture
								value={dateFin}
								onChange={(newValue) => {
									setDateFin(newValue);
								}}
								renderInput={(params) => <TextField {...params} />}
							/>
						</LocalizationProvider>
					</Stack>
					<ButtonGroup>
						<Button
							variant="outlined"
							color="primary"
							onClick={() => Filter(dateDebut, dateFin)}
							startIcon={<FilterAltIcon />}
							size="small"
						>
							Filtrer
						</Button>
						<Button
							variant="outlined"
							color="primary"
							onClick={() => {
								CancelFilter();
								dispatch(getMyCollectes());
							}}
							sx={{ textTransform: "none" }}
							startIcon={<CancelIcon />}
							size="small"
						>
							Annuler le filtre
						</Button>
					</ButtonGroup>
				</Stack>
			</Grid>
		</Grid>
	);
};
