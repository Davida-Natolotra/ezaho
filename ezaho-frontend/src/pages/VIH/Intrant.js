import { useEffect } from "react";
import { paramCase } from "change-case";
import { useParams, useLocation } from "react-router-dom";
// material
import { Container, Grid } from "@material-ui/core";
// redux
import { useDispatch, useSelector } from "../../redux/store";

// routes
import { PATH_DASHBOARD } from "../../routes/paths";
// hooks
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";
import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs";
import IntrantForm from "../../components/VIH/IntrantForm";

// ----------------------------------------------------------------------

export default function Intrant() {
	const { themeStretch } = useSettings();

	return (
		<Page title="Intrant | e-zaho VIH">
			<Container maxWidth={themeStretch ? false : "lg"}>
				<HeaderBreadcrumbs
					heading={"Enregistrement des intrants"}
					links={[
						{ name: "Dashboard", href: PATH_DASHBOARD.VIH.dashboard },
						{
							name: "Intrant",
							href: PATH_DASHBOARD.VIH.collecte,
						},
					]}
				/>

				<Grid container spacing={3}>
					<Grid item xs={4} md={4}>
						<IntrantForm />
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
}
