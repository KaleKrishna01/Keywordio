import React, { useState } from "react";
import Layout from "../component/Layout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreateAd = () => {
  const [next, setNext] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    switch (next) {
      case "text":
        navigate("/text-ad-form");
        toast.success("Navigating to Text Ad");

        break;
      case "media":
        navigate("/media-ad-form");
        toast.success("Navigating to Text Ad");
        break;
      default:
        toast.error("Please choose one option");
        break;
    }
  };

  return (
    <Layout>
      <div className="w-full bg-white border-2">
        <h3 className="my-2 mx-4">Create Ads</h3>
        <div className="grid justify-center md:flex md:justify-center mt-15">
          <div className="w-[250px] sm:w-[300px] bg-white shadow-md m-6 border-2 rounded-md">
            <div>
              <input
                type="checkbox"
                className="h-[15px] w-[15px] ml-6 mt-4"
                checked={next === "text" ? true : false}
                value={"text"}
                onChange={(e) => setNext(e.target.value)}
              />
            </div>
            <div>
              <img src={require("../asset/textAd.png")} alt="text" />
            </div>
            <div className="w-full bg-[#fafafa] text-center py-4">
              <h4 className="text-sm font-light text-gray">Create</h4>
              <h2 className="text-lg font-bold">Text Ad</h2>
            </div>
          </div>
          <div className="w-[250px] sm:w-[300px] bg-white shadow-md m-6 border-2 rounded-md">
            <div>
              <input
                type="checkbox"
                className="h-[15px] w-[15px] ml-6 mt-4"
                checked={next === "media" ? true : false}
                value={"media"}
                onChange={(e) => setNext(e.target.value)}
              />
            </div>
            <div>
              <img src={require("../asset/mediaAd.png")} alt="media" />
            </div>
            <div className="w-full bg-[#fafafa] text-center py-4">
              <h4 className="text-sm font-light text-gray">Create</h4>
              <h2 className="text-lg font-bold">Media Ad</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-end m-10">
          <button
            className="focus:outline-none rounded-sm text-white bg-[#0096ff] hover:bg-[#0095ffd4] font-medium text-sm px-16 py-2.5 mb-2"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default CreateAd;
