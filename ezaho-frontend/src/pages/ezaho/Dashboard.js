import { useEffect } from "react";
// material
import { Container, Grid } from "@material-ui/core";
// redux
import { useDispatch } from "../../redux/store";
import { getProducts } from "../../redux/slices/product";
// routes
// hooks
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";

import GraphFB from "../../components/ezaho/GraphFBVisites";
import GraphLikes from "../../components/ezaho/GraphFBLikes.js";
import GraphReach from "../../components/ezaho/GraphFB reach.js";
import GraphReachAll from "../../components/ezaho/GraphFB reach All";

// ----------------------------------------------------------------------

export default function EcommerceProductCreate() {
	const { themeStretch } = useSettings();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<Page title="Dashboard | e-zaho VIH">
			<Container maxWidth={themeStretch ? false : "lg"}>
				<h1>Dashboard EZAHO</h1>
				<Grid container spacing={themeStretch ? 3 : 12}>
					<Grid item xs={12}>
						<GraphReachAll />
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
				</Grid>
			</Container>
		</Page>
	);
}
