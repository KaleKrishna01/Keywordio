import React, { useEffect, useState } from "react";
import Layout from "../component/Layout";
import {
  AiOutlineInsertRowAbove,
  AiOutlinePieChart,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import TableComponent from "../component/TableComponent";
import { campaigns, genderData } from "../DummyData/Dummy";
import PieComponent from "../component/PieComponent";
import { Select } from "antd";

const { Option } = Select;

const Dashboard = () => {
  const [toggle, setToggle] = useState("pie");

  const [data, setData] = useState("clicks");

  useEffect(() => {
    return () => {
      const selectedClicks = genderData.map((item) => item.clicks);
      setData(selectedClicks);
    };
  }, []);

  return (
    <Layout>
      <div className="lg:flex justify-between">
        <div className="w-full lg:w-[49%] bg-white border-2 shadow-md">
          <div className="flex justify-between pt-3 pb-1 px-4 border">
            <h3>Ad Insights</h3>
            <AiOutlineQuestionCircle />
          </div>
          <div>
            <TableComponent data={campaigns} title={"Campaign"} />
          </div>
        </div>
        <div className="w-full lg:w-[49%] bg-white border-2 shadow-md">
          <div className="flex justify-between pt-3 pb-1 px-4 border">
            <h3>Ad Insights</h3>

            {toggle === "pie" ? (
              <Select
                bordered={false}
                placeholder="Clicks"
                size="large"
                showSearch
                className="form-select border-2 rounded-sm"
                onChange={(val) => {
                  switch (val) {
                    case "clicks":
                      const selectedClicks = genderData.map(
                        (item) => item.clicks
                      );
                      setData(selectedClicks);
                      break;
                    case "cost":
                      const selectedCost = genderData.map((item) => item.cost);
                      setData(selectedCost);
                      break;
                    case "conversion":
                      const selectedConversion = genderData.map(
                        (item) => item.conversion
                      );
                      setData(selectedConversion);
                      break;
                    case "revenue":
                      const selectedRevenue = genderData.map(
                        (item) => item.revenue
                      );
                      setData(selectedRevenue);
                      break;
                    default:
                      break;
                  }
                }}
                value={data?.name}
              >
                <Option value={"clicks"}>Clicks</Option>
                <Option value={"cost"}>Cost</Option>
                <Option value={"conversion"}>Conversion</Option>
                <Option value={"revenue"}>Revenue</Option>
              </Select>
            ) : (
              <AiOutlineQuestionCircle />
            )}
          </div>

          {toggle === "pie" ? (
            <div className="grid md:flex justify-evenly items-center pt-5">
              <div className="w-[200px] md:w-[300px] md:h-[225px]">
                <PieComponent data={data} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-[15px] w-[30px] bg-[#ff823c]"></div>
                  <h2>Male</h2>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-[15px] w-[30px] bg-[#0096ff]"></div>
                  <h2>Female</h2>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-[15px] w-[30px] bg-[#323c46]"></div>
                  <h2>Unknown</h2>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <TableComponent data={genderData} title={"Groups"} />
            </div>
          )}

          <div className="flex justify-end p-10">
            <div className="flex bg-[#eeeeee] rounded-3xl">
              <div
                className={
                  toggle === "pie" ? "p-2 rounded-full bg-[#0096ff]" : "p-2"
                }
              >
                <AiOutlinePieChart
                  size={20}
                  color={toggle === "pie" ? "white" : "gray"}
                  onClick={() => {
                    setToggle("pie");
                  }}
                />
              </div>
              <div
                className={
                  toggle === "table" ? "p-2 rounded-full bg-[#0096ff]" : "p-2"
                }
              >
                <AiOutlineInsertRowAbove
                  size={20}
                  color={toggle === "table" ? "white" : "gray"}
                  onClick={() => {
                    setToggle("table");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
