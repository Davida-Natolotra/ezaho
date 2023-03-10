import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import MainLayout from "../layouts/main";
import DashboardLayout from "../layouts/dashboard";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
// guards
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// components
import LoadingScreen from "../components/LoadingScreen";
import useAuth from "../hooks/useAuth";
// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { pathname } = useLocation();
	const isDashboard = pathname.includes("/dashboard");

	return (
		<Suspense
			fallback={
				<LoadingScreen
					sx={{
						...(!isDashboard && {
							top: 0,
							left: 0,
							width: 1,
							zIndex: 9999,
							position: "fixed",
						}),
					}}
				/>
			}
		>
			<Component {...props} />
		</Suspense>
	);
};

export default function Router() {
	const { user } = useAuth();
	return useRoutes([
		{
			path: "auth",
			children: [
				{
					path: "login",
					element: (
						<GuestGuard>
							<Login />
						</GuestGuard>
					),
				},
				{
					path: "register",
					element: (
						<GuestGuard>
							<Register />
						</GuestGuard>
					),
				},
				{ path: "login-unprotected", element: <Login /> },
				{ path: "register-unprotected", element: <Register /> },
				{ path: "reset-password", element: <ResetPassword /> },
				{ path: "verify", element: <VerifyCode /> },
			],
		},

		// Dashboard Routes
		{
			path: "dashboard",
			element: (
				<AuthGuard>
					<DashboardLayout />
				</AuthGuard>
			),
			children: [
				{
					path: "/",
					element: <Navigate to="/dashboard/ezaho/dashboard" replace />,
				},
				{ path: "app", element: <GeneralApp /> },

				{
					path: "VIH",
					children: [
						{
							path: "/",
							element: <Navigate to="/dashboard/VIH/dashboard" replace />,
						},
						{ path: "dashboard", element: <VIHDashboard /> },

						{ path: "collecte", element: <VIHCollecte /> },
						{ path: "intrant", element: <VIHIntrant /> },
					],
				},
				{
					path: "EZAHO",
					children: [
						{
							path: "/",
							element: <Navigate to="/dashboard/ezaho/dashboard" replace />,
						},
						{ path: "dashboard", element: <EZAHODashboard /> },
						{ path: "collecte", element: <EZAHOCollecte /> },
						{ path: "carte", element: <EZAHOCard /> },
						{ path: "contenu", element: <EZAHOContenu /> },
					],
				},
				{
					path: "user",
					children: [
						{
							path: "/",
							element: <Navigate to="/dashboard/user/profile" replace />,
						},
						{ path: "profile", element: <UserProfile /> },
						{ path: "cards", element: <UserCards /> },
						{ path: "list", element: <UserList /> },
						{ path: "new", element: <UserCreate /> },
						{ path: "/:name/edit", element: <UserCreate /> },
						{ path: "account", element: <UserAccount /> },
					],
				},
			],
		},

		// Main Routes
		{
			path: "*",
			element: <LogoOnlyLayout />,
			children: [
				{ path: "coming-soon", element: <ComingSoon /> },
				{ path: "maintenance", element: <Maintenance /> },

				{ path: "500", element: <Page500 /> },
				{ path: "404", element: <NotFound /> },
				{ path: "*", element: <Navigate to="/404" replace /> },
			],
		},
		{
			path: "/",
			element: <MainLayout />,
			children: [
				{ path: "/", element: <LandingPage /> },

				{
					path: "components",
					children: [
						{ path: "/", element: <ComponentsOverview /> },
						// FOUNDATIONS
					],
				},
			],
		},
		{ path: "*", element: <Navigate to="/404" replace /> },
	]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import("../pages/authentication/Login")));
const Register = Loadable(
	lazy(() => import("../pages/authentication/Register"))
);
const ResetPassword = Loadable(
	lazy(() => import("../pages/authentication/ResetPassword"))
);
const VerifyCode = Loadable(
	lazy(() => import("../pages/authentication/VerifyCode"))
);
// Dashboard
const GeneralApp = Loadable(
	lazy(() => import("../pages/dashboard/GeneralApp"))
);

const EZAHODashboard = Loadable(lazy(() => import("../pages/ezaho/Dashboard")));
const EZAHOCollecte = Loadable(lazy(() => import("../pages/ezaho/Collecte")));
const EZAHOCard = Loadable(lazy(() => import("../pages/ezaho/Carte")));
const EZAHOContenu = Loadable(lazy(() => import("../pages/ezaho/Contenu")));
const VIHDashboard = Loadable(lazy(() => import("../pages/VIH/Dashboard")));
const VIHCollecte = Loadable(lazy(() => import("../pages/VIH/Collecte")));
const VIHIntrant = Loadable(lazy(() => import("../pages/VIH/Intrant")));
// Main
const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
const ComingSoon = Loadable(lazy(() => import("../pages/ComingSoon")));
const Maintenance = Loadable(lazy(() => import("../pages/Maintenance")));
const Page500 = Loadable(lazy(() => import("../pages/Page500")));
const NotFound = Loadable(lazy(() => import("../pages/Page404")));
// Components
const ComponentsOverview = Loadable(
	lazy(() => import("../pages/ComponentsOverview"))
);
const UserProfile = Loadable(
	lazy(() => import("../pages/dashboard/UserProfile"))
);
const UserCards = Loadable(lazy(() => import("../pages/dashboard/UserCards")));
const UserList = Loadable(lazy(() => import("../pages/dashboard/UserList")));
const UserAccount = Loadable(
	lazy(() => import("../pages/dashboard/UserAccount"))
);
const UserCreate = Loadable(
	lazy(() => import("../pages/dashboard/UserCreate"))
);
//
