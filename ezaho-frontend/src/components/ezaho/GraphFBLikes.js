import { useState, useEffect } from "react";
import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box, TextField, Stack } from "@material-ui/core";
//
import { BaseOptionChart } from "../charts";
import { useSelector, useDispatch } from "react-redux";
import { getFacebookLikes } from "../../redux/slices/ezaho";

// ----------------------------------------------------------------------

export default function GraphFB() {
	const [seriesData, setSeriesData] = useState("Septembre");
	const [yearsData, setYearsData] = useState("2022");
	const dispatch = useDispatch();

	const graphLikesNow = useSelector((state) => state.ezaho.likes.val_current);
	const graphLikesPrev = useSelector((state) => state.ezaho.likes.val_prev);
	const CHART_YEARS = ["2022", "2023", "2024"];
	const CHART_DATA = [
		{
			month: "Janvier",
			data: [
				{
					name: "Janvier",
					data: [...graphLikesNow],
					type: "area",
				},
				{
					name: "Janvier",
					data: [...graphLikesPrev],
					type: "area",
				},
			],
			val: "01",
		},
		{
			month: "Fevrier",
			data: [
				{
					name: "Fevrier",
					data: [...graphLikesNow],
					type: "area",
				},
				{
					name: "Janvier",
					data: [...graphLikesPrev],
					type: "area",
				},
			],
			val: "02",
		},
		{
			month: "Mars",
			data: [
				{
					name: "Mars",
					data: [...graphLikesNow],
					type: "area",
				},
				{
					name: "Fevrier",
					data: [...graphLikesPrev],
					type: "area",
				},
			],
			val: "03",
		},
		{
			month: "Avril",
			data: [
				{
					name: "Avril",
					data: [...graphLikesNow],
					type: "area",
				},
				{
					name: "Mars",
					data: [...graphLikesPrev],
					type: "area",
				},
			],
			val: "04",
		},
		{
			month: "Mai",
			data: [
				{
					name: "Mai",
					data: [...graphLikesNow],
					type: "area",
				},
				{
					name: "Avril",
					data: [...graphLikesPrev],
					type: "area",
				},
			],
			val: "05",
		},
		{
			month: "Juin",
			data: [
				{
					name: "Juin",
					data: [...graphLikesNow],
					type: "area",
				},
				{
					name: "Mai",
					data: [...graphLikesPrev],
					type: "area",
				},
			],
			val: "06",
		},
		{
			month: "Juillet",
			data: [
				{
					name: "Juillet",
					data: [...graphLikesNow],
					type: "area",
				},
				{
					name: "Juin",
					data: [...graphLikesPrev],
					type: "area",
				},
			],
			val: "07",
		},
		{
			month: "Aout",
			data: [
				{
					name: "Aout",
					data: [...graphLikesNow],
					type: "area",
				},
				{
					name: "Juillet",
					data: [...graphLikesPrev],
					type: "area",
				},
			],
			val: "08",
		},
		{
			month: "Septembre",
			data: [
				{
					name: "Septembre",
					data: [...graphLikesNow],
					type: "area",
				},
				{
					name: "Aout",
					data: [...graphLikesPrev],
					type: "area",
				},
			],
			val: "09",
		},
		{
			month: "Octobre",
			data: [
				{
					name: "Octobre",
					data: [...graphLikesNow],
					type: "area",
				},
				{
					name: "Septembre",
					data: [...graphLikesPrev],
					type: "area",
				},
			],
			val: "10",
		},
		{
			month: "Novembre",
			data: [
				{
					name: "Novembre",
					data: [...graphLikesNow],
					type: "area",
				},
				{
					name: "Octobre",
					data: [...graphLikesPrev],
					type: "area",
				},
			],
			val: "11",
		},
		{
			month: "Decembre",
			data: [
				{
					name: "Decembre",
					data: [...graphLikesNow],
					type: "area",
				},
				{
					name: "Novembre",
					data: [...graphLikesPrev],
					type: "area",
				},
			],
			val: "12",
		},
	];

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
						return `${y.toFixed(0)} mentions "j'aime"`;
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
				mois = "09";
				break;
		}
		dispatch(getFacebookLikes(mois, yearsData));
	}, [seriesData, yearsData]);

	return (
		<Card>
			<CardHeader
				title="Nombre nouveau j'aime de la page Facebook E-zaho"
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
				<Box key={item.month} sx={{ pb: 0.5 }} dir="ltr">
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
