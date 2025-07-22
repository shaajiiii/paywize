import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface BarChartProps {
  data: { label: string; value: number }[];
  width?: number;
  height?: number;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  width = 600,
  height = 400,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear previous render

    const margin = { top: 20, right: 30, bottom: 40, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const x = d3
      .scaleBand<string>()
      .domain(data.map((d) => d.label))
      .range([0, innerWidth])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) ?? 0])
      .nice()
      .range([innerHeight, 0]);

    const chart = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // X Axis
    chart
      .append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'rotate(-40)')
      .style('text-anchor', 'end');

    // Y Axis
    chart.append('g').call(d3.axisLeft(y));

    // Bars
    chart
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.label) ?? 0)
      .attr('y', (d) => y(d.value))
      .attr('width', x.bandwidth())
      .attr('height', (d) => innerHeight - y(d.value))
      .attr('fill', '#60A5FA'); // Tailwind blue-400

  }, [data, width, height]);

  return <svg ref={svgRef} width={width} height={height} />;
};
