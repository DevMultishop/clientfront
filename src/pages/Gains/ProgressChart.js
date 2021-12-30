import React from 'react';
import ShimmerEffect from '../../components/Shimmer';
import { useGetMyProgressChartQuery } from '../../graphql/generated/graphql';
import {
  create,
  setTheme,
  ValueAxis,
  animatedTheme,
  darkTheme,
  CategoryAxis,
  percent,
  Label,
  RadarChart,
  RadarColumnSeries,
} from '../../plugins/amcharts4';

export default function ProgressChart() {
  const { data, loading } = useGetMyProgressChartQuery();
  const [chartData, setChartData] = React.useState({ progress: 0, limit: 0 });

  React.useEffect(() => {
    if (data) setChartData(JSON.parse(data.getMyProgressChart));
  }, [data]);

  React.useEffect(() => {
    function createGraph() {
      // Themes begin
      setTheme(animatedTheme);
      setTheme(darkTheme);
      // Themes end

      // Create chart instance
      const chart = create('progress-chart', RadarChart);

      chart.data = [
        {
          category: 'Progress',
          value: chartData.progress,
          full: chartData.limit,
        },
      ];

      const label = chart.radarContainer.createChild(Label);
      label.isMeasured = false;
      label.fontSize = 30;
      label.x = percent(50);
      label.y = percent(200);
      label.horizontalCenter = 'middle';
      label.verticalCenter = 'middle';
      label.text = `${chartData.progress.toFixed(2) || 0}%`;

      // Make chart not full circle
      chart.startAngle = -90;
      chart.endAngle = 180;
      chart.innerRadius = percent(85);

      // Set number format
      chart.numberFormatter.numberFormat = "#.#'%'";

      // Create axes
      const categoryAxis = chart.yAxes.push(new CategoryAxis());
      categoryAxis.dataFields.category = 'category';
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.grid.template.strokeOpacity = 0;
      categoryAxis.renderer.labels.template.horizontalCenter = 'right';
      categoryAxis.renderer.labels.template.fontWeight = 500;
      categoryAxis.renderer.minGridDistance = 10;

      const valueAxis = chart.xAxes.push(new ValueAxis());
      valueAxis.renderer.grid.template.strokeOpacity = 0;
      valueAxis.min = 0;
      valueAxis.max = chartData.limit || 300;
      valueAxis.strictMinMax = true;

      // Create series
      const series1 = chart.series.push(new RadarColumnSeries());
      series1.dataFields.valueX = 'full';
      series1.dataFields.categoryY = 'category';
      series1.clustered = false;
      series1.columns.template.fillOpacity = 0.08;
      series1.columns.template.cornerRadiusTopLeft = 20;
      series1.columns.template.strokeWidth = 0;
      series1.columns.template.radarColumn.cornerRadius = 20;

      const series2 = chart.series.push(new RadarColumnSeries());
      series2.dataFields.valueX = 'value';
      series2.dataFields.categoryY = 'category';
      series2.clustered = false;
      series2.columns.template.strokeWidth = 0;
      series2.columns.template.tooltipText = '{category}: [bold]{value}[/]';
      series2.columns.template.radarColumn.cornerRadius = 20;

      return () => chart && chart.dispose();
    }
    if (!loading) createGraph();
  }, [chartData, loading]);

  if (loading) return <ShimmerEffect height={360} />;
  return <div style={{ height: 360, width: '100%' }} id="progress-chart" />;
}
