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
import CollecteForm from "../../components/VIH/CollecteForm";
import CollecteTable from "../../components/VIH/CollecteTable";
import NewPAX from "../../components/VIH/NewPax";

// ----------------------------------------------------------------------

export default function Collecte() {
	const { themeStretch } = useSettings();
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const { name } = useParams();

	const isEdit = pathname.includes("edit");

	return (
		<Page title="Collecte | e-zaho VIH">
			<Container maxWidth={themeStretch ? false : "lg"}>
				<HeaderBreadcrumbs
					heading={"Collecte des données messenger"}
					links={[
						{ name: "Dashboard", href: PATH_DASHBOARD.VIH.dashboard },
						{
							name: "Collecte",
							href: PATH_DASHBOARD.VIH.collecte,
						},
					]}
				/>

				<Grid container spacing={3}>
					<Grid item xs={12}>
						<NewPAX />
					</Grid>
					<Grid item xs={12} md={4}>
						<CollecteForm />
					</Grid>
					<Grid item xs={12} md={8}>
						<CollecteTable />
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
}
