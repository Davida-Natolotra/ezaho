import { useEffect } from "react";
import { paramCase } from "change-case";
import { useParams, useLocation } from "react-router-dom";
// material
import { Container, Grid } from "@material-ui/core";
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

// ----------------------------------------------------------------------

export default function EcommerceProductCreate() {
	const { themeStretch } = useSettings();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<Page title="Contenu | e-zaho VIH">
			<Container maxWidth={themeStretch ? false : "lg"}>
				<HeaderBreadcrumbs
					heading={"Contenu"}
					links={[
						{ name: "Dashboard", href: PATH_DASHBOARD.VIH.dashboard },
						{
							name: "Contenu",
							href: PATH_DASHBOARD.VIH.contenu,
						},
					]}
				/>

				<h1>Contenu</h1>
			</Container>
		</Page>
	);
}
