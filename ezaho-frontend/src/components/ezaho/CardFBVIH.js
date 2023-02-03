import { Icon } from "@iconify/react";
import ReactApexChart from "react-apexcharts";
import trendingUpFill from "@iconify/icons-eva/trending-up-fill";
import trendingDownFill from "@iconify/icons-eva/trending-down-fill";
import like from "@iconify/icons-ant-design/like";
import share from "@iconify/icons-eva/share-outline";
import people from "@iconify/icons-eva/people-outline";
import facebook from "@iconify/icons-eva/facebook-fill";
// material
import { alpha, useTheme, styled } from "@material-ui/core/styles";
import { Box, Card, Typography, Stack } from "@material-ui/core";
// utils
import { fNumber, fPercent } from "../../utils/formatNumber";

// ----------------------------------------------------------------------

const IconWrapperStyle = styled("div")(({ theme }) => ({
  width: 24,
  height: 24,
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.success.main,
  backgroundColor: alpha(theme.palette.success.main, 0.16),
}));

const IconStyle = styled(Icon)(({ theme }) => ({
  width: 120,
  height: 120,
  opacity: 0.12,
  position: "absolute",
  right: theme.spacing(-3),
  color: theme.palette.primary.main,
}));

// ----------------------------------------------------------------------

const PERCENT = 2.6;
const TOTAL_USER = 18765;
const CHART_DATA = [{ data: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26] }];

export default function AppTotalActiveUsers() {
  const theme = useTheme();

  const chartOptions = {
    colors: [theme.palette.primary.main],
    chart: { sparkline: { enabled: true } },
    plotOptions: { bar: { columnWidth: "68%", borderRadius: 2 } },
    labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
    tooltip: {
      x: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: () => "",
        },
      },
      marker: { show: false },
    },
  };

  return (
    <Card sx={{ display: "flex", alignItems: "center", p: 3 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">Page Facebook VIH</Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ mt: 2, mb: 1 }}
        >
          <IconWrapperStyle
            sx={{
              ...(PERCENT < 0 && {
                color: "error.main",
                bgcolor: alpha(theme.palette.error.main, 0.16),
              }),
            }}
          >
            <Icon width={16} height={16} icon={like} />
          </IconWrapperStyle>
          <Typography component="span" variant="subtitle2">
            Réaction J'aime: {fNumber(PERCENT)}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ mt: 2, mb: 1 }}
        >
          <IconWrapperStyle
            sx={{
              ...(PERCENT < 0 && {
                color: "error.main",
                bgcolor: alpha(theme.palette.error.main, 0.16),
              }),
            }}
          >
            <Icon width={16} height={16} icon={share} />
          </IconWrapperStyle>
          <Typography component="span" variant="subtitle2">
            Partage: {fNumber(PERCENT)}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ mt: 2, mb: 1 }}
        >
          <IconWrapperStyle
            sx={{
              ...(PERCENT < 0 && {
                color: "error.main",
                bgcolor: alpha(theme.palette.error.main, 0.16),
              }),
            }}
          >
            <Icon width={16} height={16} icon={people} />
          </IconWrapperStyle>
          <Typography component="span" variant="subtitle2">
            Personnes touchées: {fNumber(PERCENT)}
          </Typography>
        </Stack>
      </Box>
      <IconStyle icon={facebook} />
    </Card>
  );
}
