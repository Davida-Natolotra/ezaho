import { useState, useEffect } from "react";
import { DataGrid, GridToolbar, frFR } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { getCollectes } from "../../redux/slices/ezaho";

function CollecteTable() {
	const theme = useTheme();
	const { collectes } = useSelector((state) => state.ezaho);
	// const loading = useSelector((state) => state.VIH.isLoading);
	const [pageSize, setPageSize] = useState(10);
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	const dispatch = useDispatch();

	// const myCollectes = [];
	const loading = false;
	useEffect(() => {
		dispatch(getCollectes());
	}, []);

	const columns = [
		{
			field: "pax",
			headerName: "PAX",
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
			field: "referent",
			headerName: "Référé à",
			minWidth: 150,
			flex: 2,
			sortable: true,
			hide: isMobile,
		},
	];

	return (
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
			rows={collectes}
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
	);
}

export default CollecteTable;
