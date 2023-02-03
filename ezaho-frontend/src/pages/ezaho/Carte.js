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
import PAXSelect from "../../components/ezaho/PAXSelect";
import Cartes from "../../components/Ezaho-card/carte";
import NewPAX from "../../components/ezaho/NewPax";

// ----------------------------------------------------------------------

export default function Collecte() {
	const { themeStretch } = useSettings();
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const { name } = useParams();

	return (
		<Page title="Carte | e-zaho">
			<Container maxWidth={themeStretch ? false : "lg"}>
				<HeaderBreadcrumbs
					heading={"Carte E-zaho"}
					links={[
						{ name: "Dashboard", href: PATH_DASHBOARD.EZAHO.dashboard },
						{
							name: "Carte",
							href: PATH_DASHBOARD.EZAHO.collecte,
						},
					]}
				/>

				<Grid container spacing={3}>
					<Grid item xs={12} md={4}>
						<PAXSelect />
					</Grid>
					<Grid item xs={12} md={8}>
						<Cartes valueString={"M&E 3.0"} documentID="RAKOTO" />
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
}
