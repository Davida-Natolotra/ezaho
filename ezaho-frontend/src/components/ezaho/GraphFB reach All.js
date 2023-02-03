import { useState, useEffect } from "react";
import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box, TextField, Stack } from "@material-ui/core";
//
import { BaseOptionChart } from "../charts";
import { useSelector, useDispatch } from "react-redux";
import { getFacebookReachAll } from "../../redux/slices/ezaho";

// ----------------------------------------------------------------------

export default function GraphFB() {
	const [seriesData, setSeriesData] = useState("Septembre");
	const [yearsData, setYearsData] = useState("2022");
	const dispatch = useDispatch();

	const graphReachVIH = useSelector(
		(state) => state.ezaho.reachAll.val_current_VIH
	);

	const graphReachWHP = useSelector(
		(state) => state.ezaho.reachAll.val_current_WHP
	);

	const graphReachPF = useSelector(
		(state) => state.ezaho.reachAll.val_current_PF
	);

	const graphReachPALU = useSelector(
		(state) => state.ezaho.reachAll.val_current_PALU
	);

	const data = [
		{
			name: "VIH",
			data: [...graphReachVIH],
			type: "area",
		},
		{
			name: "WHP",
			data: [...graphReachWHP],
			type: "area",
		},
		{
			name: "PF",
			data: [...graphReachPF],
			type: "area",
		},
		{
			name: "PALU",
			data: [...graphReachPALU],
			type: "area",
		},
	];

	const CHART_DATA = [
		{
			month: "Janvier",
			data: data,
			val: "01",
		},
		{
			month: "Fevrier",
			data: data,
			val: "02",
		},
		{
			month: "Mars",
			data: data,
			val: "03",
		},
		{
			month: "Avril",
			data: data,
			val: "04",
		},
		{
			month: "Mai",
			data: data,
			val: "05",
		},
		{
			month: "Juin",
			data: data,
			val: "06",
		},
		{
			month: "Juillet",
			data: data,
			val: "07",
		},
		{
			month: "Aout",
			data: data,
			val: "08",
		},
		{
			month: "Septembre",
			data: data,
			val: "09",
		},
		{
			month: "Octobre",
			data: data,
			val: "10",
		},
		{
			month: "Novembre",
			data: data,
			val: "11",
		},
		{
			month: "Decembre",
			data: data,
			val: "12",
		},
	];

	const CHART_YEARS = ["2022", "2023", "2024"];

	const chartOptions = merge(BaseOptionChart(), {
		stroke: { width: [0, 2, 3] },
		plotOptions: { bar: { columnWidth: "14%" } },
		fill: { type: ["solid", "gradient", "solid"] },
		labels: [
			"21",
			"22",
			"23",
			"24",
			"25",
			"26",
			"27",
			"28",
			"29",
			"30",
			"31",
			"01",
			"02",
			"03",
			"04",
			"05",
			"06",
			"07",
			"08",
			"09",
			"10",
			"11",
			"12",
			"13",
			"14",
			"15",
			"16",
			"17",
			"18",
			"19",
			"20",
		],
		xaxis: { type: "string" },
		tooltip: {
			shared: true,
			intersect: false,
			y: {
				formatter: (y) => {
					if (typeof y !== "undefined") {
						return `${y.toFixed(0)} personnes touchées`;
					}
					return y;
				},
			},
		},
	});

	const handleChangeSeriesData = (event) => {
		setSeriesData(event.target.value);
	};
	const handleChangeYearsData = (event) => {
		setYearsData(event.target.value);
	};

	useEffect(() => {
		let mois;
		switch (seriesData) {
			case "Janvier":
				mois = "01";
				break;
			case "Fevrier":
				mois = "02";
				break;
			case "Mars":
				mois = "03";
				break;
			case "Avril":
				mois = "04";
				break;
			case "Mai":
				mois = "05";
				break;
			case "Juin":
				mois = "06";
				break;
			case "Juillet":
				mois = "07";
				break;
			case "Aout":
				mois = "08";
				break;
			case "Septembre":
				mois = "09";
				break;
			case "Octobre":
				mois = "10";
				break;
			case "Novembre":
				mois = "11";
				break;
			case "Decembre":
				mois = "12";
				break;
			default:
				mois = new Date().getMonth();
				break;
		}
		dispatch(getFacebookReachAll(mois, yearsData));
	}, [seriesData, yearsData]);

	return (
		<Card>
			<CardHeader
				title="Couverture de toutes les pages Facebook"
				action={
					<>
						<Stack direction="row" spacing={2} sx={{ mb: 0, pb: 0 }}>
							<TextField
								select
								fullWidth
								value={yearsData}
								SelectProps={{ native: true }}
								onChange={handleChangeYearsData}
								sx={{
									"& fieldset": { border: "0 !important" },
									"& select": {
										pl: 1,
										py: 0.5,
										pr: "24px !important",
										typography: "subtitle2",
									},
									"& .MuiOutlinedInput-root": {
										borderRadius: 0.75,
										bgcolor: "background.neutral",
									},
									"& .MuiNativeSelect-icon": {
										top: 4,
										right: 0,
										width: 20,
										height: 20,
									},
								}}
							>
								{CHART_YEARS.map((option) => (
									<option key={option.id} value={option}>
										{option}
									</option>
								))}
							</TextField>
							<TextField
								select
								fullWidth
								value={seriesData}
								SelectProps={{ native: true }}
								onChange={handleChangeSeriesData}
								sx={{
									"& fieldset": { border: "0 !important" },
									"& select": {
										pl: 1,
										py: 0.5,
										pr: "24px !important",
										typography: "subtitle2",
									},
									"& .MuiOutlinedInput-root": {
										borderRadius: 0.75,
										bgcolor: "background.neutral",
									},
									"& .MuiNativeSelect-icon": {
										top: 4,
										right: 0,
										width: 20,
										height: 20,
									},
								}}
							>
								{CHART_DATA.map((option) => (
									<option key={option.month} value={option.month}>
										{option.month}
									</option>
								))}
							</TextField>
						</Stack>
					</>
				}
			/>
			{CHART_DATA.map((item) => (
				<Box key={item.month} sx={{ pb: 1 }} dir="ltr">
					{item.month === seriesData && (
						<ReactApexChart
							type="line"
							series={item.data}
							options={chartOptions}
							height={364}
						/>
					)}
				</Box>
			))}
		</Card>
	);
}
