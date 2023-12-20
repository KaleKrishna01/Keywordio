import React, { useState } from "react";
import Layout from "../component/Layout";
import { useNavigate } from "react-router-dom";

const TextAdForm = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
      navigate("/create-ad");
    }, 600);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <div className="w-full bg-white border-2">
        <div className="p-2">
          <h4>Create Text & Media</h4>
        </div>
        <div className="md:flex w-full">
          <div className="w-full md:w-[50%]">
            <div className="px-4 py-1">
              <h4 className="my-2">Heading 1</h4>
              <input
                type="text"
                className="w-full border-2 pl-4 py-1"
                placeholder="Add a heading that would make users intrested"
              />
            </div>
            <div className="px-4 py-1">
              <h4 className="my-2">Heading 2</h4>
              <input
                type="text"
                className="w-full border-2 pl-4 py-1"
                placeholder="Add a heading that would make users intrested"
              />
            </div>
          </div>
          <div className="w-full md:w-[50%] px-4 py-1">
            <h4 className="my-2">Description</h4>
            <textarea
              type="text"
              draggable={false}
              className="w-full border-2 pl-4 py-1 h-[118px] resize-none"
              placeholder="Add primary text to help users understand more about your products , services or offers"
            />
          </div>
        </div>
        <div className="md:flex w-full">
          <div className="w-full md:w-[33.33%] px-4 py-1">
            <h4 className="my-2">Landscape Marketing Image (1.9:1)</h4>
            <input
              type="text"
              className="w-full border-2 pl-4 py-1"
              placeholder="Add the URL of the image you want to use for the add"
            />
          </div>
          <div className="w-full md:w-[33.33%] px-4 py-1">
            <h4 className="my-2">Portrait Marketing Image (4.5)</h4>
            <input
              type="text"
              className="w-full border-2 pl-4 py-1"
              placeholder="Add the URL of the image you want to use for the add"
            />
          </div>
          <div className="w-full md:w-[33.33%] px-4 py-1">
            <h4 className="my-2">Square Marketing Image (1:1)</h4>
            <input
              type="text"
              className="w-full border-2 pl-4 py-1"
              placeholder="Add the URL of the image you want to use for the add"
            />
          </div>
        </div>
        <div className="w-full px-4 py-1">
          <h4 className="my-2">Video URL</h4>
          <input
            type="text"
            className="w-full border-2 pl-4 py-1"
            placeholder="Add the URL of the video you want to use for the add"
          />
        </div>
        <div className="md:flex w-full">
          <div className="w-full md:w-[50%] px-4 py-1">
            <h4 className="my-2">Buisness Name</h4>
            <input
              type="text"
              className="w-full border-2 pl-4 py-1"
              placeholder="Add your buisness name"
            />
          </div>
          <div className="w-full md:w-[50%] px-4 py-1">
            <h4 className="my-2">Button Label</h4>
            <input
              type="text"
              className="w-full border-2 pl-4 py-1"
              placeholder="Select a label that best suits your ad"
            />
          </div>
        </div>
        <div className="w-full px-4 py-1">
          <h4 className="my-2">Website URL</h4>
          <input
            type="text"
            className="w-full border-2 pl-4 py-1"
            placeholder="Add the URL of landing page you want to redirect user to"
          />
        </div>
        <div className="grid sm:flex justify-end m-5 gap-2">
          <button
            className="focus:outline-none rounded-sm border-2 font-medium text-sm px-16 py-2.5 mb-2"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="focus:outline-none rounded-sm text-white bg-[#0096ff] hover:bg-[#0095ffd4] font-medium text-sm px-16 py-2.5 mb-2"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 z-50 w-full h-screen bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="m-5">
              <div className="flex justify-center items-center">
                <img
                  src={require("../asset/correct.png")}
                  alt="Sucsess"
                  className="flex self-center h-[40px] w-[40px]"
                />
              </div>
              <h3 className="text-xl font-semibold">Submitted</h3>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default TextAdForm;
