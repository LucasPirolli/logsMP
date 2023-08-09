import React, { useState } from "react";
import { TopBar } from "./TopBar";
import { SideBar } from "./SideBar";
import { LineChart } from "./charts/LineChart";
import { BarMultiple } from "./charts/BarMultiple";
import { PieChart } from "./charts/PieChart";
import "./logs.scss";
import { Tab, Statistic } from "semantic-ui-react";

export const Logs = () => {
  const panes = [
    {
      menuItem: "Tab 1",
      render: () => (
        <Tab.Pane attached={false}>
          <div className="first-charts">
            <LineChart />
            <LineChart />
            <Statistic size="large" label="Status = 200" value="92%" />
          </div>
          <div className="secondary-charts">
            <div className="response-time">
              <div className="infos">
                <h2 className="response-title">Response-Time</h2>
                <Statistic.Group size="tiny">
                  <Statistic>
                    <Statistic.Value>290 ms</Statistic.Value>
                    <Statistic.Label>Média</Statistic.Label>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>270 ms</Statistic.Value>
                    <Statistic.Label>Mediana</Statistic.Label>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>35 ms</Statistic.Value>
                    <Statistic.Label>Desvio Padrão</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
              </div>

              <div className="response-chart-first">
                <BarMultiple />
                <PieChart />
              </div>
              <div className="response-chart-secondary">
                <LineChart />
              </div>
            </div>
            <div className="content-lenght">
              <div className="infos">
                <h2 className="content-title">Content Lenght</h2>
                <Statistic.Group size="tiny">
                  <Statistic>
                    <Statistic.Value>0.5 mb</Statistic.Value>
                    <Statistic.Label>Média</Statistic.Label>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>0.45 mb</Statistic.Value>
                    <Statistic.Label>Mediana</Statistic.Label>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>0.03 mb</Statistic.Value>
                    <Statistic.Label>Desvio Padrão</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
              </div>
              <div className="content-chart-first">
                <PieChart />
                <BarMultiple />
              </div>
              <div className="content-chart-secondary">
                <LineChart />
              </div>
            </div>
          </div>
        </Tab.Pane>
      ),
    },
    // {
    //   menuItem: "Tab 2",
    //   render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    // },
  ];

  return (
    <>
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="chart-container">
          <Tab
            panes={panes}
            menu={{ borderless: true, attached: false, tabular: false }}
          />
        </div>
      </div>
    </>
  );
};
