import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const TableComponent = (props) => {
  const [data, setData] = useState(props.data);

  const sortedClicks = props.data.slice().sort((a, b) => a.clicks - b.clicks);
  const sortedCost = props.data.slice().sort((a, b) => a.cost - b.cost);
  const sortedConversation = props.data
    .slice()
    .sort((a, b) => a.conversion - b.conversion);
  const sortedRevenue = props.data
    .slice()
    .sort((a, b) => a.revenue - b.revenue);

  let totalClicks = 0;
  props.data.forEach((item) => (totalClicks += item.clicks));
  let totalCost = 0;
  props.data.forEach((item) => (totalCost += item.cost));
  let totalConversation = 0;
  props.data.forEach((item) => (totalConversation += item.conversion));
  let totalRevenue = 0;
  props.data.forEach((item) => (totalRevenue += item.revenue));
  return (
    <>
      <Table className="table-auto w-full">
        <Thead>
          <Tr className="border-b leading-normal">
            <Th className="px-4 text-left">
              <div className="flex justify-between items-center">
                <p className="uppercase text-sm">{props.title}</p>
                <div>
                  <AiFillCaretUp size={10} onClick={() => {}} />
                  <AiFillCaretDown size={10} onClick={() => {}} />
                </div>
              </div>
            </Th>
            <Th className="py-3 px-4 text-left">
              <div className="flex justify-between items-center">
                <p className="uppercase text-sm">Clicks</p>
                <div>
                  <AiFillCaretUp
                    size={10}
                    onClick={() => {
                      setData(sortedClicks.reverse());
                    }}
                  />
                  <AiFillCaretDown
                    size={10}
                    onClick={() => {
                      setData(sortedClicks);
                    }}
                  />
                </div>
              </div>
            </Th>
            <Th className="py-3 px-4 text-left">
              <div className="flex justify-between items-center">
                <p className="uppercase text-sm">Cost</p>
                <div>
                  <AiFillCaretUp
                    size={10}
                    onClick={() => {
                      setData(sortedCost.reverse());
                    }}
                  />
                  <AiFillCaretDown
                    size={10}
                    onClick={() => {
                      setData(sortedCost);
                    }}
                  />
                </div>
              </div>
            </Th>
            <Th className="py-3 px-4 text-left">
              <div className="flex justify-between items-center">
                <p className="uppercase text-sm">Conversion</p>
                <div>
                  <AiFillCaretUp
                    size={10}
                    onClick={() => {
                      setData(sortedConversation.reverse());
                    }}
                  />
                  <AiFillCaretDown
                    size={10}
                    onClick={() => {
                      setData(sortedConversation);
                    }}
                  />
                </div>
              </div>
            </Th>
            <Th className="py-3 px-4 text-left">
              <div className="flex justify-between items-center">
                <p className="uppercase text-sm">Revenue</p>
                <div>
                  <AiFillCaretUp
                    size={10}
                    onClick={() => {
                      setData(sortedRevenue.reverse());
                    }}
                  />
                  <AiFillCaretDown
                    size={10}
                    onClick={() => {
                      setData(sortedRevenue);
                    }}
                  />
                </div>
              </div>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr
              key={item.campaign}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <Td className="py-3 px-4 text-left text-sm">
                {item.campaign}
                {item.gender}
              </Td>
              <Td className="py-3 px-4 text-left text-sm">{item.clicks}</Td>
              <Td className="py-3 px-4 text-left text-sm">USD : {item.cost}</Td>
              <Td className="py-3 px-4 text-left text-sm">{item.conversion}</Td>
              <Td className="py-3 px-4 text-left text-sm">
                USD : {item.revenue}
              </Td>
            </Tr>
          ))}
          <Tr className="border-b border-gray-200 hover:bg-gray-100">
            <Td className="py-3 px-4 text-left text-sm">Total</Td>
            <Td className="py-3 px-4 text-left text-sm">{totalClicks}</Td>
            <Td className="py-3 px-4 text-left text-sm">USD : {totalCost}</Td>
            <Td className="py-3 px-4 text-left text-sm">{totalConversation}</Td>
            <Td className="py-3 px-4 text-left text-sm">
              USD : {totalRevenue}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
};

export default TableComponent;
