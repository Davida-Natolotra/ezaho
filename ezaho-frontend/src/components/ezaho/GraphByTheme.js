import { merge } from "lodash";
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box, TextField } from "@material-ui/core";
//
import { useSelector, useDispatch } from "react-redux";
import { BaseOptionChart } from "../charts";
import { GraphTDemande } from "../../redux/slices/collecteVIH";

// ----------------------------------------------------------------------

export default function GraphByTheme() {
	const [seriesData, setSeriesData] = useState("Septembre");
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
	const dispatch = useDispatch();

	useEffect(() => {
		console.log(seriesData);
		let mois;
		switch (seriesData) {
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
		dispatch(GraphTDemande(mois));
	}, [seriesData]);

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

	const CHART_DATA = [
		{
			year: "Juillet",
			data: [
				{
					name: "Juillet",
					data: [numCondom_M, numCondom_F, numAutotest, numGel, numPrEP],
				},
				{
					name: "Juin",
					data: [
						numCondom_M_prev,
						numCondom_F_prev,
						numAutotest_prev,
						numGel_prev,
						numPrEP_prev,
					],
				},
			],
			val: "07",
		},
		{
			year: "Aout",
			data: [
				{
					name: "Aout",
					data: [numCondom_M, numCondom_F, numAutotest, numGel, numPrEP],
				},
				{
					name: "Juillet",
					data: [
						numCondom_M_prev,
						numCondom_F_prev,
						numAutotest_prev,
						numGel_prev,
						numPrEP_prev,
					],
				},
			],
			val: "08",
		},
		{
			year: "Septembre",
			data: [
				{
					name: "Septembre",
					data: [numCondom_M, numCondom_F, numAutotest, numGel, numPrEP],
				},
				{
					name: "Aout",
					data: [
						numCondom_M_prev,
						numCondom_F_prev,
						numAutotest_prev,
						numGel_prev,
						numPrEP_prev,
					],
				},
			],
			val: "09",
		},
		{
			year: "Octobre",
			data: [
				{
					name: "Octobre",
					data: [numCondom_M, numCondom_F, numAutotest, numGel, numPrEP],
				},
				{
					name: "Septembre",
					data: [
						numCondom_M_prev,
						numCondom_F_prev,
						numAutotest_prev,
						numGel_prev,
						numPrEP_prev,
					],
				},
			],
			val: "10",
		},
		{
			year: "Novembre",
			data: [
				{
					name: "Novembre",
					data: [numCondom_M, numCondom_F, numAutotest, numGel, numPrEP],
				},
				{
					name: "Octobre",
					data: [
						numCondom_M_prev,
						numCondom_F_prev,
						numAutotest_prev,
						numGel_prev,
						numPrEP_prev,
					],
				},
			],
			val: "11",
		},
		{
			year: "Decembre",
			data: [
				{
					name: "Decembre",
					data: [numCondom_M, numCondom_F, numAutotest, numGel, numPrEP],
				},
				{
					name: "Novembre",
					data: [
						numCondom_M_prev,
						numCondom_F_prev,
						numAutotest_prev,
						numGel_prev,
						numPrEP_prev,
					],
				},
			],
			val: "12",
		},
	];

	return (
		<Card>
			<CardHeader
				title="Thème de discussion"
				subheader="2022"
				action={
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
							<option key={option.year} value={option.year}>
								{option.year}
							</option>
						))}
					</TextField>
				}
			/>

			{CHART_DATA.map((item) => (
				<Box key={item.year} sx={{ mt: 3, mx: 3 }} dir="ltr">
					{item.year === seriesData && (
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
