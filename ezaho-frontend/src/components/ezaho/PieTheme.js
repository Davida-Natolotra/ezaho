// const CHART_DATA = [4344, 5435, 1443, 4443];
import { useState, useEffect } from "react";
import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { useTheme, styled } from "@material-ui/core/styles";
import { Card, CardHeader, TextField, Box } from "@material-ui/core";
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
		dispatch(FnPieDemande(mois));
	}, [seriesData]);

	const CHART_DATA = [
		{
			year: "Juillet",
			data: [numCondom_M, numCondom_F, numGel, numAutotest, numPrEP],

			val: "07",
		},
		{
			year: "Aout",
			data: [numCondom_M, numCondom_F, numGel, numAutotest, numPrEP],

			val: "08",
		},
		{
			year: "Septembre",
			data: [numCondom_M, numCondom_F, numGel, numAutotest, numPrEP],

			val: "09",
		},
		{
			year: "Octobre",
			data: [numCondom_M, numCondom_F, numGel, numAutotest, numPrEP],

			val: "10",
		},
		{
			year: "Novembre",
			data: [numCondom_M, numCondom_F, numGel, numAutotest, numPrEP],

			val: "11",
		},
		{
			year: "Decembre",
			data: [numCondom_M, numCondom_F, numGel, numAutotest, numPrEP],

			val: "12",
		},
	];

	return (
		<Card>
			<CardHeader
				title="Répartition des thèmes"
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
