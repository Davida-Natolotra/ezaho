import { useEffect } from "react";
import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { useTheme, styled } from "@material-ui/core/styles";
import { Card, CardHeader } from "@material-ui/core";
// utils
import { fNumber, fPercent } from "../../utils/formatNumber";
//
import { BaseOptionChart } from "../charts";
import { useSelector, useDispatch } from "react-redux";
import { getPaxBySexe } from "../../redux/slices/pax";
// ----------------------------------------------------------------------

const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled("div")(({ theme }) => ({
	height: CHART_HEIGHT,
	marginTop: theme.spacing(2),
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

export default function GraphCollectionsBySex() {
	const theme = useTheme();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPaxBySexe());
	}, []);

	const TOTAL = useSelector((state) => state.PAX.paxBySexe.total);
	const masculin_percentage = useSelector(
		(state) => state.PAX.paxBySexe.masculin_percentage
	);
	const feminin_percentage = useSelector(
		(state) => state.PAX.paxBySexe.feminin_percentage
	);

	const CHART_DATA = [Number(masculin_percentage), Number(feminin_percentage)];

	const chartOptions = merge(BaseOptionChart(), {
		labels: ["Masculin", "Féminin"],
		legend: { floating: true, horizontalAlign: "center" },
		fill: {
			type: "gradient",
			gradient: {
				colorStops: [
					[
						{
							offset: 0,
							color: theme.palette.primary.light,
						},
						{
							offset: 100,
							color: theme.palette.primary.main,
						},
					],
					[
						{
							offset: 0,
							color: theme.palette.warning.light,
						},
						{
							offset: 100,
							color: theme.palette.warning.main,
						},
					],
				],
			},
		},
		plotOptions: {
			radialBar: {
				hollow: { size: "68%" },
				dataLabels: {
					value: { offsetY: 16 },
					total: {
						formatter: () => fNumber(TOTAL),
					},
				},
			},
		},
	});

	return (
		<Card>
			<CardHeader title="PAX par sexe" />
			<ChartWrapperStyle dir="ltr">
				<ReactApexChart
					type="radialBar"
					series={CHART_DATA}
					options={chartOptions}
					height={310}
				/>
			</ChartWrapperStyle>
		</Card>
	);
}
