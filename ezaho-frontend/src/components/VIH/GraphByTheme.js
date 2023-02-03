import { merge } from "lodash";
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box, TextField, Stack } from "@material-ui/core";
//
import { useSelector, useDispatch } from "react-redux";
import { BaseOptionChart } from "../charts";
import { GraphTDemande } from "../../redux/slices/collecteVIH";

// ----------------------------------------------------------------------

export default function GraphByTheme() {
	const [seriesData, setSeriesData] = useState("Septembre");
	const [yearsData, setYearsData] = useState("2022");
	const graphDemande = useSelector((state) => state.VIHCollecte.GraphDemande);
	const GraphDemandePrev = useSelector(
		(state) => state.VIHCollecte.GraphDemandePrev
	);
	const numCondom_M = graphDemande["Condom M"];
	const numCondom_F = graphDemande["Condom F"];
	const numAutotest = graphDemande["Autotest"];
	const numGel = graphDemande["Gel"];
	const numPrEP = graphDemande["PrEP"];
	const numCondom_M_prev = GraphDemandePrev["Condom M"];
	const numCondom_F_prev = GraphDemandePrev["Condom F"];
	const numAutotest_prev = GraphDemandePrev["Autotest"];
	const numGel_prev = GraphDemandePrev["Gel"];
	const numPrEP_prev = GraphDemandePrev["PrEP"];

	const handleChangeSeriesData = (event) => {
		setSeriesData(event.target.value);
	};
	const handleChangeYearsData = (event) => {
		setYearsData(event.target.value);
	};
	const dispatch = useDispatch();

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
				mois = "09";
				break;
		}
		dispatch(GraphTDemande(mois, yearsData));
	}, [seriesData, yearsData]);

	const chartOptions = merge(BaseOptionChart(), {
		stroke: {
			show: true,
			width: 2,
			colors: ["transparent"],
		},
		xaxis: {
			categories: ["Condom M", "Condom F", "Autotest", "Gel", "PrEP"],
		},
		tooltip: {
			y: {
				formatter: (val) => `${val}`,
			},
		},
	});
	const dataNow = [numCondom_M, numCondom_F, numAutotest, numGel, numPrEP];
	const dataPrev = [
		numCondom_M_prev,
		numCondom_F_prev,
		numAutotest_prev,
		numGel_prev,
		numPrEP_prev,
	];
	const CHART_YEARS = ["2022", "2023", "2024"];
	const CHART_DATA = [
		{
			month: "Janvier",
			data: [
				{
					name: "Janvier",
					data: dataNow,
				},
				{
					name: "Janvier",
					data: dataPrev,
				},
			],
			val: "01",
		},
		{
			month: "Fevrier",
			data: [
				{
					name: "Fevrier",
					data: dataNow,
				},
				{
					name: "Janvier",
					data: dataPrev,
				},
			],
			val: "02",
		},
		{
			month: "Mars",
			data: [
				{
					name: "Mars",
					data: dataNow,
				},
				{
					name: "Fevrier",
					data: dataPrev,
				},
			],
			val: "03",
		},
		{
			month: "Avril",
			data: [
				{
					name: "Avril",
					data: dataNow,
				},
				{
					name: "Mars",
					data: dataPrev,
				},
			],
			val: "04",
		},
		{
			month: "Mai",
			data: [
				{
					name: "Mai",
					data: dataNow,
				},
				{
					name: "Avril",
					data: dataPrev,
				},
			],
			val: "05",
		},
		{
			month: "Juin",
			data: [
				{
					name: "Juin",
					data: dataNow,
				},
				{
					name: "Mai",
					data: dataPrev,
				},
			],
			val: "06",
		},
		{
			month: "Juillet",
			data: [
				{
					name: "Juillet",
					data: dataNow,
				},
				{
					name: "Juin",
					data: dataPrev,
				},
			],
			val: "07",
		},
		{
			month: "Aout",
			data: [
				{
					name: "Aout",
					data: dataNow,
				},
				{
					name: "Juillet",
					data: dataPrev,
				},
			],
			val: "08",
		},
		{
			month: "Septembre",
			data: [
				{
					name: "Septembre",
					data: dataNow,
				},
				{
					name: "Aout",
					data: dataPrev,
				},
			],
			val: "09",
		},
		{
			month: "Octobre",
			data: [
				{
					name: "Octobre",
					data: dataNow,
				},
				{
					name: "Septembre",
					data: dataPrev,
				},
			],
			val: "10",
		},
		{
			month: "Novembre",
			data: [
				{
					name: "Novembre",
					data: dataNow,
				},
				{
					name: "Octobre",
					data: dataPrev,
				},
			],
			val: "11",
		},
		{
			month: "Decembre",
			data: [
				{
					name: "Decembre",
					data: dataNow,
				},
				{
					name: "Novembre",
					data: dataPrev,
				},
			],
			val: "12",
		},
	];

	return (
		<Card>
			<CardHeader
				title="Thème de discussion"
				subheader={yearsData}
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
				<Box key={item.month} sx={{ mt: 3, mx: 3 }} dir="ltr">
					{item.month === seriesData && (
						<ReactApexChart
							type="bar"
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
