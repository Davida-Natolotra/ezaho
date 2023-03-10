import { Icon } from "@iconify/react";
import { useSnackbar } from "notistack5";
import { useRef, useState } from "react";
import homeFill from "@iconify/icons-eva/home-fill";
import personFill from "@iconify/icons-eva/person-fill";
import settings2Fill from "@iconify/icons-eva/settings-2-fill";
import { Link as RouterLink, useNavigate } from "react-router-dom";
// material
import { alpha } from "@material-ui/core/styles";
import { Button, Box, Divider, MenuItem, Typography } from "@material-ui/core";
// routes
import { PATH_DASHBOARD } from "../../routes/paths";
// hooks
import useAuth from "../../hooks/useAuth";
import useIsMountedRef from "../../hooks/useIsMountedRef";
// components
import { MIconButton } from "../../components/@material-extend";
import MyAvatar from "../../components/MyAvatar";
import MenuPopover from "../../components/MenuPopover";

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
	{
		label: "Home",
		icon: homeFill,
		linkTo: "/",
	},
	{
		label: "Profile",
		icon: personFill,
		linkTo: PATH_DASHBOARD.user.profile,
	},
	{
		label: "Settings",
		icon: settings2Fill,
		linkTo: PATH_DASHBOARD.user.account,
	},
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
	const anchorRef = useRef(null);
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();
	const isMountedRef = useIsMountedRef();
	const { user, logout } = useAuth();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const handleLogout = async () => {
		try {
			await logout();
			navigate("/");
			if (isMountedRef.current) {
				handleClose();
			}
		} catch (error) {
			console.error(error);
			enqueueSnackbar("Unable to logout", { variant: "error" });
		}
	};

	return (
		<>
			<MIconButton
				ref={anchorRef}
				onClick={handleOpen}
				sx={{
					padding: 0,
					width: 44,
					height: 44,
					...(open && {
						"&:before": {
							zIndex: 1,
							content: "''",
							width: "100%",
							height: "100%",
							borderRadius: "50%",
							position: "absolute",
							bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
						},
					}),
				}}
			>
				<MyAvatar />
			</MIconButton>

			<MenuPopover
				open={open}
				onClose={handleClose}
				anchorEl={anchorRef.current}
				sx={{ width: 220 }}
			>
				<Box sx={{ my: 1.5, px: 2.5 }}>
					<Typography variant="subtitle1" noWrap>
						{user.displayName}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
						{user.email}
					</Typography>
				</Box>

				<Divider sx={{ my: 1 }} />

				<Box sx={{ p: 2, pt: 1.5 }}>
					<Button
						fullWidth
						color="inherit"
						variant="outlined"
						onClick={handleLogout}
					>
						D??connecter
					</Button>
				</Box>
			</MenuPopover>
		</>
	);
}
