import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    Manha: 4000,
    Tarde: 2400,
    Noite: 2300,
  },
  {
    name: 'Page B',
    Manha: 3000,
    Tarde: 1398,
    Noite: 2210,
  },
  {
    name: 'Page C',
    Manha: 2000,
    Tarde: 9800,
    Noite: 2290,
  },
  {
    name: 'Page D',
    Manha: 2780,
    Tarde: 3908,
    Noite: 2000,
  },
  {
    name: 'Page E',
    Manha: 1890,
    Tarde: 4800,
    Noite: 2181,
  },
  {
    name: 'Page F',
    Manha: 2390,
    Tarde: 3800,
    Noite: 2500,
  },
  {
    name: 'Page G',
    Manha: 3490,
    Tarde: 4300,
    Noite: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-v3w7s9';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Manha" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Tarde" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Noite" stroke="#0000ff" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
