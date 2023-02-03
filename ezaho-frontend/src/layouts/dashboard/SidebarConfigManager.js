// routes
import { PATH_DASHBOARD } from "../../routes/paths";
// components
import Label from "../../components/Label";
import SvgIconStyle from "../../components/SvgIconStyle";
import useAuth from "../../hooks/useAuth";
// ----------------------------------------------------------------------

const getIcon = (name) => (
	<SvgIconStyle
		src={`/static/icons/navbar/${name}.svg`}
		sx={{ width: "100%", height: "100%" }}
	/>
);

const ICONS = {
	blog: getIcon("ic_blog"),
	cart: getIcon("ic_cart"),
	chat: getIcon("ic_chat"),
	mail: getIcon("ic_mail"),
	user: getIcon("ic_user"),
	kanban: getIcon("ic_kanban"),
	banking: getIcon("ic_banking"),
	calendar: getIcon("ic_calendar"),
	ecommerce: getIcon("ic_ecommerce"),
	analytics: getIcon("ic_analytics"),
	dashboard: getIcon("ic_dashboard"),
	booking: getIcon("ic_booking"),
};

const sidebarConfig = [
	// GENERAL
	// ----------------------------------------------------------------------
	{
		subheader: "EZAHO",
		items: [
			{
				title: "Dashboard",
				path: PATH_DASHBOARD.EZAHO.dashboard,
				icon: ICONS.dashboard,
			},
			{
				title: "Collecte EZAHO",
				path: PATH_DASHBOARD.EZAHO.collecte,
				icon: ICONS.chat,
			},
			{
				title: "Carte EZAHO",
				path: PATH_DASHBOARD.EZAHO.carte,
				icon: ICONS.user,
			},
			
		],
	},
	{
		subheader: "VIH",
		items: [
			{
				title: "Dashboard",
				path: PATH_DASHBOARD.VIH.dashboard,
				icon: ICONS.dashboard,
			},
			{
				title: "Intrant",
				path: PATH_DASHBOARD.VIH.intrant,
				icon: ICONS.analytics,
			},
		],
	},
];

export default sidebarConfig;
