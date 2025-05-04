import React, { useState, useRef } from "react";
import Papa from "papaparse";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadProduct = () => {
  const [csvData, setCsvData] = useState([]);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef();
  const navigate = useNavigate();
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setFileName(file.name);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setCsvData(results.data);
        console.log("Parsed CSV Data:", results.data);
      },
      error: (error) => {
        console.error("Error parsing CSV:", error);
      },
    });
  };

  const handleClear = () => {
    setCsvData([]);
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleUpload = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/products",
        csvData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Upload successful!");

      // Clear form after successful upload
      setCsvData([]);
      setFileName("");
      navigate("/");
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. See console for details.");
    }
  };

  return (
    <div className="h-screen lg:h-screen bg-gray-100 mx-auto  p-6  rounded-xl shadow-md">
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Upload Product
        </h1>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="block w-full sm:w-auto border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 cursor-pointer"
            />
            {fileName && (
              <span className="text-sm text-green-700 font-medium">
                Selected: {fileName}
              </span>
            )}
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={handleUpload}
              disabled={!csvData.length}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Upload
            </button>
            <button
              onClick={handleClear}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>

        {csvData.length > 0 && (
          <div className="max-h-96 overflow-auto border border-gray-200 rounded p-4 bg-gray-50">
            <pre className="text-xs text-gray-800">
              {JSON.stringify(csvData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadProduct;
