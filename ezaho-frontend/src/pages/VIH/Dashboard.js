import { useEffect } from "react";
import { paramCase } from "change-case";
import { useParams, useLocation } from "react-router-dom";
// material
import { Container, Grid, Stack } from "@material-ui/core";
// redux
import { useDispatch, useSelector } from "../../redux/store";
import { getProducts } from "../../redux/slices/product";
// routes
import { PATH_DASHBOARD } from "../../routes/paths";
// hooks
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";
import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs";

import GraphByTheme from "../../components/VIH/GraphByTheme";
import GraphCollectionsBySex from "../../components/VIH/GraphCollectionsBySex";
import GraphPercentMAW from "../../components/VIH/GraphPercentMAW";
import GraphPercentMAC from "../../components/VIH/GraphPercentMAC";
import CardVIHFB from "../../components/VIH/CardFBVIH";
import PieTheme from "../../components/VIH/PieTheme";
import GraphFB from "../../components/VIH/GraphFBVisites";
import GraphLikes from "../../components/VIH/GraphFBLikes.js";
import GraphReach from "../../components/VIH/GraphFB reach.js";
import GraphIntrants from "../../components/VIH/GraphIntrants";
// ----------------------------------------------------------------------

export default function EcommerceProductCreate() {
	const { themeStretch } = useSettings();
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const { name } = useParams();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<Page title="Dashboard | e-zaho VIH">
			<Container maxWidth={themeStretch ? false : "lg"}>
				<h1>Dashboard VIH</h1>
				<Grid container spacing={themeStretch ? 3 : 12}>
					<Grid item xs={12} md={8}>
						<GraphByTheme />
					</Grid>
					<Grid item xs={12} md={4}>
						<PieTheme />
					</Grid>
					<Grid item xs={12}>
						<GraphFB />
					</Grid>
					<Grid item xs={12}>
						<GraphLikes />
					</Grid>
					<Grid item xs={12}>
						<GraphReach />
					</Grid>
					<Grid item xs={12} md={4}>
						<GraphCollectionsBySex />
					</Grid>
					<Grid item xs={12} md={8}>
						<GraphIntrants />
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
}
