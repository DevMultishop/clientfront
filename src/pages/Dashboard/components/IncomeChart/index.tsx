import React from 'react';
import ShimmerEffect from '../../../../components/Shimmer';
import Panel from '../../../../components/Panel';
import { Container, Row, Col } from '../../../../components/Grid';
import { useGetIncomeChartQuery } from '../../../../graphql/generated/graphql';

import {
  create,
  setTheme,
  XYChart,
  DateAxis,
  ValueAxis,
  ColumnSeries,
  XYCursor,
  XYChartScrollbar,
  ExportMenu,
  animatedTheme,
  // darkTheme,
  NumberFormatter,
  LineSeries,
} from '../../../../plugins/amcharts4';

export default function IncomeChart(): JSX.Element {
  const { data, loading } = useGetIncomeChartQuery();
  const [chartData, setChartData] = React.useState([]);
  React.useEffect(() => {
    if (data) setChartData(JSON.parse(data.getIncomeChart));
  }, [data]);

  React.useEffect(() => {
    function createGraph() {
      // Themes begin
      setTheme(animatedTheme);
      // setTheme(darkTheme);
      // Themes end

      // Create chart instance
      const chart = create('income-chart', XYChart);

      chart.responsive.enabled = true;
      chart.responsive.useDefault = true;

      // Add data
      chart.data = chartData;

      chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd';

      chart.exporting.menu = new ExportMenu();

      /**
       * começa
       */
      const acummulatedAxis = chart.yAxes.push(new ValueAxis());
      acummulatedAxis.numberFormatter = new NumberFormatter();
      acummulatedAxis.numberFormatter.numberFormat = '#.0 %';
      acummulatedAxis.renderer.grid.template.disabled = true;
      acummulatedAxis.renderer.opposite = true;

      const percentageAxis = chart.yAxes.push(new ValueAxis());
      percentageAxis.numberFormatter = new NumberFormatter();
      percentageAxis.numberFormatter.numberFormat = '0  %';
      percentageAxis.renderer.grid.template.disabled = true;
      percentageAxis.min = 0;

      chart.data = chartData;

      const dateAxis = chart.xAxes.push(new DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      const accumulatedSeries = chart.series.push(new LineSeries());
      accumulatedSeries.dataFields.dateX = 'date';
      accumulatedSeries.name = 'Acumulado';
      accumulatedSeries.yAxis = acummulatedAxis;
      accumulatedSeries.dataFields.valueY = 'accumulated';
      accumulatedSeries.tooltipText =
        // eslint-disable-next-line no-useless-concat
        'Acumulado' + `: {valueY.value.formatNumber("#.00 %")}`;
      accumulatedSeries.strokeWidth = 3;
      accumulatedSeries.tensionX = 0.9;
      accumulatedSeries.tensionY = 0.9;

      // accumulatedSeries.propertyFields.stroke = color('#236E52');

      const blockCountSeries = chart.series.push(new ColumnSeries());
      blockCountSeries.dataFields.dateX = 'date';
      blockCountSeries.name = 'Diário';
      blockCountSeries.yAxis = percentageAxis;
      blockCountSeries.dataFields.valueY = 'value';
      blockCountSeries.tooltipText = `Rendimento {valueY.value.formatNumber("#")} %`;
      // blockCountSeries.columns.template.fill = color('#23B43B');

      chart.cursor = new XYCursor();

      const scrollbarX = new XYChartScrollbar();
      scrollbarX.series.push(accumulatedSeries);
      scrollbarX.strokeWidth = 0;
      scrollbarX.marginBottom = 40;

      chart.scrollbarX = scrollbarX;

      chart.zoomOutButton.disabled = true;
      /**
       * termina
       */

      chart.cursor = new XYCursor();

      return () => chart && chart.dispose();
    }
    if (!loading) createGraph();
  });

  return (
    <Container>
      <h2>Daily income Chart</h2>
      <Row>
        <Col>
          <Panel>
            {loading && <ShimmerEffect height={400} />}
            {!loading && (
              <div style={{ height: 400, width: '100%' }} id="income-chart" />
            )}
          </Panel>
        </Col>
      </Row>
    </Container>
  );
}
