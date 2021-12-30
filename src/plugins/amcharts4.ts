/**
 * Here we import and export only the parts that are necessary throughout the app
 * main reason here is to reduce the bundle size
 */

import am4themesAnimated from '@amcharts/amcharts4/themes/animated';
import am4themesDark from '@amcharts/amcharts4/themes/dark';

export const animatedTheme = am4themesAnimated;
export const darkTheme = am4themesDark;

// rename so lint won't think it is a react hook (use prefix)
export { useTheme as setTheme } from '@amcharts/amcharts4/core';

export {
  AxisRendererY,
  Chart,
  Legend,
  XYChart,
  XYCursor,
  XYChartScrollbar,
  ValueAxis,
  DateAxis,
  ColumnSeries,
  CategoryAxis,
  LineSeries,
  PieChart,
  PieSeries,
  Bullet,
  RadarChart,
  RadarColumnSeries,
} from '@amcharts/amcharts4/charts';

export {
  Container,
  color,
  percent,
  NumberFormatter,
  create,
  ExportMenu,
  Circle,
  Label,
} from '@amcharts/amcharts4/core';
