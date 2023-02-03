import { useEffect } from "react";

import { merge } from "lodash";
import { Icon } from "@iconify/react";
import ReactApexChart from "react-apexcharts";
import personFill from "@iconify/icons-eva/person-fill";
// material
import { useTheme, styled } from "@material-ui/core/styles";
import { Card, Typography, Box } from "@material-ui/core";
// utils
import { fNumber } from "../../utils/formatNumber";
import { BaseOptionChart } from "../charts";
import { useSelector, useDispatch } from "react-redux";
import { getPaxByUser } from "../../redux/slices/pax";
import useAuth from "../../hooks/useAuth";
// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
	display: "flex",
	position: "relative",
	alignItems: "center",
	padding: theme.spacing(3),
	backgroundColor: theme.palette.primary.darker,
}));

const IconStyle = styled(Icon)(({ theme }) => ({
	width: 120,
	height: 120,
	opacity: 0.12,
	position: "absolute",
	right: theme.spacing(-3),
	color: theme.palette.common.white,
}));

// ----------------------------------------------------------------------

export default function GraphPercent() {
	const theme = useTheme();
	const dispatch = useDispatch();

	const TOTAL = [useSelector((state) => state.PAX.paxByUser.MyPAXCount)];
	const OBJECTIF = [useSelector((state) => state.PAX.paxByUser.MyObjectives)];
	const CHART_DATA = [useSelector((state) => state.PAX.paxByUser.MyPercentage)];
	const chartOptions = merge(BaseOptionChart(), {
		chart: { sparkline: { enabled: true } },
		legend: { show: false },
		plotOptions: {
			radialBar: {
				hollow: { size: "78%" },
				track: { margin: 0 },
				dataLabels: {
					name: { show: false },
					value: {
						offsetY: 6,
						color: theme.palette.common.white,
						fontSize: theme.typography.subtitle2.fontSize,
					},
				},
			},
		},
	});

	useEffect(() => {
		dispatch(getPaxByUser());
	}, []);

	return (
		<RootStyle>
			<ReactApexChart
				type="radialBar"
				series={CHART_DATA}
				options={chartOptions}
				width={86}
				height={86}
			/>
			<Box sx={{ ml: 3, color: "common.white" }}>
				<Typography variant="h4">
					{fNumber(TOTAL)} / {fNumber(OBJECTIF)}
				</Typography>
				<Typography variant="body2" sx={{ opacity: 0.72 }}>
					PAX MAW
				</Typography>
			</Box>
			<IconStyle icon={personFill} />
		</RootStyle>
	);
}
