import { useEffect } from "react";
import { paramCase } from "change-case";
import { useParams, useLocation } from "react-router-dom";
// material
import {
	Container,
	Grid,
	Card,
	CardHeader,
	CardContent,
} from "@material-ui/core";
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
import UpdatingCard from "../../components/updatingCard";
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
						{ name: "Dashboard", href: PATH_DASHBOARD.EZAHO.dashboard },
						{
							name: "Contenu",
							href: PATH_DASHBOARD.VIH.contenu,
						},
					]}
				/>

				<h1>Mise à jour des données facebook</h1>
				<hr />
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Card>
							<CardHeader title="E-zaho" />
							<CardContent>
								<UpdatingCard fbType="reach" programme="E-zaho" />
								<br />
								<UpdatingCard fbType="likes" programme="E-zaho" />
								<br />
								<UpdatingCard fbType="visit" programme="E-zaho" />
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card>
							<CardHeader title="VIH" />
							<CardContent>
								<UpdatingCard fbType="Reach" programme="VIH" />
								<br />
								<UpdatingCard fbType="Likes" programme="VIH" />
								<br />
								<UpdatingCard fbType="Visits" programme="VIH" />
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card>
							<CardHeader title="PALU" />
							<CardContent>
								<UpdatingCard fbType="Reach" programme="PALU" />
								<br />
								<UpdatingCard fbType="Likes" programme="PALU" />
								<br />
								<UpdatingCard fbType="Visits" programme="PALU" />
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card>
							<CardHeader title="WHP" />
							<CardContent>
								<UpdatingCard fbType="Reach" programme="WHP" />
								<br />
								<UpdatingCard fbType="Likes" programme="WHP" />
								<br />
								<UpdatingCard fbType="Visits" programme="WHP" />
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Card>
							<CardHeader title="PF" />
							<CardContent>
								<UpdatingCard fbType="Reach" programme="PF" />
								<br />
								<UpdatingCard fbType="Likes" programme="PF" />
								<br />
								<UpdatingCard fbType="Visits" programme="PF" />
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Page>
	);
}
