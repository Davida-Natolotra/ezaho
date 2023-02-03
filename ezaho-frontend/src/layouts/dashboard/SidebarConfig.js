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
		subheader: "VIH",
		items: [
			{
				title: "Collecte VIH",
				path: PATH_DASHBOARD.VIH.collecte,
				icon: ICONS.chat,
			},
		],
	},
];

export default sidebarConfig;
