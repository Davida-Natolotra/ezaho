// ----------------------------------------------------------------------

function path(root, sublink) {
	return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
	root: ROOTS_AUTH,
	login: path(ROOTS_AUTH, "/login"),
	loginUnprotected: path(ROOTS_AUTH, "/login-unprotected"),
	register: path(ROOTS_AUTH, "/register"),
	registerUnprotected: path(ROOTS_AUTH, "/register-unprotected"),
	resetPassword: path(ROOTS_AUTH, "/reset-password"),
	verify: path(ROOTS_AUTH, "/verify"),
};

export const PATH_PAGE = {
	comingSoon: "/coming-soon",
	maintenance: "/maintenance",
	pricing: "/pricing",
	payment: "/payment",
	about: "/about-us",
	contact: "/contact-us",
	faqs: "/faqs",
	page404: "/404",
	page500: "/500",
	components: "/components",
};

export const PATH_DASHBOARD = {
	root: ROOTS_DASHBOARD,
	VIH: {
		dashboard: path(ROOTS_DASHBOARD, "/VIH/dashboard"),
		collecte: path(ROOTS_DASHBOARD, "/VIH/collecte"),
		intrant: path(ROOTS_DASHBOARD, "/VIH/intrant"),
	},
	EZAHO: {
		dashboard: path(ROOTS_DASHBOARD, "/ezaho/dashboard"),
		collecte: path(ROOTS_DASHBOARD, "/ezaho/collecte"),
		carte: path(ROOTS_DASHBOARD, "/ezaho/carte"),
		contenu: path(ROOTS_DASHBOARD, "/ezaho/contenu"),
	},
	user: {
		root: path(ROOTS_DASHBOARD, "/user"),
		profile: path(ROOTS_DASHBOARD, "/user/profile"),
		cards: path(ROOTS_DASHBOARD, "/user/cards"),
		list: path(ROOTS_DASHBOARD, "/user/list"),
		newUser: path(ROOTS_DASHBOARD, "/user/new"),
		editById: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
		account: path(ROOTS_DASHBOARD, "/user/account"),
	},
};

export const PATH_DOCS = "https://docs-minimals.vercel.app/introduction";
