import React from 'react';
import Empty from '../../components/Empty';
import ShimmerEffect from '../../components/Shimmer';

import { useGetMyGainsChartQuery } from '../../graphql/generated/graphql';

import {
  create,
  setTheme,
  XYChart,
  ValueAxis,
  ColumnSeries,
  animatedTheme,
  darkTheme,
  CategoryAxis,
  Legend,
} from '../../plugins/amcharts4';

interface IChartData {
  [key: string]: string;
}
interface IParams {
  month: number;
  year: number;
}
export default function GainsChart({ month, year }: IParams): JSX.Element {
  const [chartData, setChartData] = React.useState<IChartData[]>([]);
  const { data, loading } = useGetMyGainsChartQuery({
    variables: {
      month,
      year,
    },
  });

  React.useEffect(() => {
    let mounted = true;

    if (data && mounted) setChartData(JSON.parse(data.getMyGainsChart));

    return () => {
      mounted = false;
    };
  }, [data]);

  const createSeries = React.useCallback((chart, field, name) => {
    const series = chart.series.push(new ColumnSeries());
    series.fillOpacity = 0.8;
    series.paddingRight = 0;
    series.paddingLeft = 0;
    series.paddingBottom = 0;
    series.stacked = true;
    series.dataFields.valueY = field;
    series.dataFields.categoryX = 'date';
    series.name = name;
    series.columns.template.tooltipText =
      // eslint-disable-next-line no-template-curly-in-string
      "{name}: [bold]${valueY.formatNumber('##.00')}[/]";
    return series;
  }, []);

  React.useEffect(() => {
    let mounted = true;
    function Graphh() {
      // Themes begin
      setTheme(animatedTheme);
      setTheme(darkTheme);
      // Themes end

      // Create chart instance
      const chart = create('gains-chart', XYChart);

      chart.data = chartData;
      // Create axes
      const categoryAxis = chart.xAxes.push(new CategoryAxis());
      categoryAxis.dataFields.category = 'date';
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 20;
      categoryAxis.renderer.cellStartLocation = 0.1;
      categoryAxis.renderer.cellEndLocation = 0.9;
      categoryAxis.renderer.labels.template.horizontalCenter = 'right';
      // categoryAxis.renderer.labels.template.verticalCenter = 'right';
      categoryAxis.renderer.labels.template.rotation = -45;
      const valueAxis = chart.yAxes.push(new ValueAxis());
      valueAxis.min = 0;
      valueAxis.renderer.labels.template.disabled = false;

      const uniqueSeries = chartData.reduce((acc, curr) => {
        Object.keys(curr).forEach((key: string) => {
          if (!acc.includes(key) && key !== 'date') acc.push(key);
        });
        return acc;
      }, [] as any);

      uniqueSeries.forEach((serie: any) => createSeries(chart, serie, serie));

      // Add legend
      chart.legend = new Legend();
      chart.legend.position = 'bottom';

      return () => chart && chart.dispose();
    }

    if (!loading && mounted) {
      Graphh();
    }

    return () => {
      mounted = false;
    };
  }, [createSeries, loading, chartData]);

  if (loading) return <ShimmerEffect height={400} />;

  return (
    <>
      {chartData.length === 0 && <Empty>No data</Empty>}
      {chartData.length > 0 && (
        <div style={{ height: 400, width: '100%' }} id="gains-chart" />
      )}
    </>
  );
}
