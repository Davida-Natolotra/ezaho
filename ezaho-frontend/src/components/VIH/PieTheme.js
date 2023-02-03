// const CHART_DATA = [4344, 5435, 1443, 4443];
import { useState, useEffect } from "react";
import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { useTheme, styled } from "@material-ui/core/styles";
import { Card, CardHeader, TextField, Box, Stack } from "@material-ui/core";
// utils
import { fNumber, fPercent } from "../../utils/formatNumber";
//
import { BaseOptionChart } from "../charts";
import { useSelector, useDispatch } from "react-redux";
import { PieDemande as FnPieDemande } from "../../redux/slices/collecteVIH";

// ----------------------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled("div")(({ theme }) => ({
	height: CHART_HEIGHT,
	marginTop: theme.spacing(5),
	"& .apexcharts-canvas svg": { height: CHART_HEIGHT },
	"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject": {
		overflow: "visible",
	},
	"& .apexcharts-legend": {
		height: LEGEND_HEIGHT,
		alignContent: "center",
		position: "relative !important",
		borderTop: `solid 1px ${theme.palette.divider}`,
		top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
	},
}));

// ----------------------------------------------------------------------

export default function PieTheme() {
	const theme = useTheme();
	const [seriesData, setSeriesData] = useState("Septembre");
	const [yearsData, setYearsData] = useState("2022");

	const { PieDemande } = useSelector((state) => state.VIHCollecte);
	const numCondom_M = PieDemande["Condom M"];
	const numCondom_F = PieDemande["Condom F"];
	const numAutotest = PieDemande["Autotest"];
	const numGel = PieDemande["Gel"];
	const numPrEP = PieDemande["PrEP"];

	const chartOptions = merge(BaseOptionChart(), {
		colors: [
			theme.palette.primary.main,
			theme.palette.chart.blue[0],
			theme.palette.chart.violet[0],
			theme.palette.warning.main,
		],
		labels: ["Condom M", "Condom F", "Gel", "Autotest", "PrEP"],
		stroke: { colors: [theme.palette.background.paper] },
		legend: { floating: true, horizontalAlign: "center" },
		dataLabels: { enabled: true, dropShadow: { enabled: false } },
		tooltip: {
			fillSeriesColor: false,
			y: {
				formatter: (seriesName) => fPercent(seriesName),
				title: {
					formatter: (seriesName) => `${seriesName}`,
				},
			},
		},
		plotOptions: {
			pie: { donut: { labels: { show: false } } },
		},
	});

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
		dispatch(FnPieDemande(mois, yearsData));
	}, [seriesData, yearsData]);

	const data = [numCondom_M, numCondom_F, numGel, numAutotest, numPrEP];
	const CHART_YEARS = ["2022", "2023", "2024"];
	const CHART_DATA = [
		{
			month: "Janvier",
			data,

			val: "01",
		},
		{
			month: "Fevrier",
			data,

			val: "02",
		},
		{
			month: "Mars",
			data,

			val: "03",
		},
		{
			month: "Avril",
			data,

			val: "04",
		},
		{
			month: "Mai",
			data,

			val: "05",
		},
		{
			month: "Juin",
			data,

			val: "05",
		},
		{
			month: "Juillet",
			data,

			val: "07",
		},
		{
			month: "Aout",
			data,

			val: "08",
		},
		{
			month: "Septembre",
			data,

			val: "09",
		},
		{
			month: "Octobre",
			data,

			val: "10",
		},
		{
			month: "Novembre",
			data,

			val: "11",
		},
		{
			month: "Decembre",
			data,

			val: "12",
		},
	];

	return (
		<Card>
			<CardHeader
				title="Répartition des thèmes"
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
						<ChartWrapperStyle dir="ltr">
							<ReactApexChart
								type="pie"
								series={item.data}
								options={chartOptions}
								height={280}
							/>
						</ChartWrapperStyle>
					)}
				</Box>
			))}
		</Card>
	);
}
