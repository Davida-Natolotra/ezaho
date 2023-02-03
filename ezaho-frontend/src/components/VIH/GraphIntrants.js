import { merge } from "lodash";
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box, TextField, Stack } from "@material-ui/core";
//
import { useSelector, useDispatch } from "react-redux";
import { BaseOptionChart } from "../charts";
import { getIntrantList } from "../../redux/slices/collecteVIH";

// ----------------------------------------------------------------------

export default function GraphByTheme() {
	const [yearsData, setYearsData] = useState(2022);
	useEffect(() => {
		dispatch(getIntrantList(yearsData));
	}, [yearsData]);
	const intrants = useSelector((state) => state.VIHCollecte.intrants);
	const dataGel = intrants["Gel"];
	const dataCondomM = intrants["Condom M"];
	const dataCondomF = intrants["Condom F"];

	const handleChangeYearsData = (event) => {
		setYearsData(event.target.value);
	};
	const dispatch = useDispatch();

	const chartOptions = merge(BaseOptionChart(), {
		stroke: {
			show: true,
			width: 2,
			colors: ["transparent"],
		},
		xaxis: {
			categories: [
				"Janvier",
				"Fevrier",
				"Mars",
				"Avril",
				"Mai",
				"Juin",
				"Juillet",
				"Aout",
				"Septembre",
				"Octobre",
				"Novembre",
				"Decembre",
			],
		},
		tooltip: {
			y: {
				formatter: (val) => `${val}`,
			},
		},
	});

	const CHART_YEARS = ["2022", "2023", "2024"];
	const CHART_DATA = [
		{ name: "Gel", data: dataGel },
		{ name: "Condom M", data: dataCondomM },
		{ name: "Condom F", data: dataCondomF },
	];

	return (
		<Card>
			<CardHeader
				title="Intrants distribués"
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
						</Stack>
					</>
				}
			/>
			<ReactApexChart
				type="bar"
				series={CHART_DATA}
				options={chartOptions}
				height={320}
			/>
			;
		</Card>
	);
}
