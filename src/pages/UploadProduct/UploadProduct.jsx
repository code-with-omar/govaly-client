import React, { useState, useRef } from "react";
import Papa from "papaparse";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UploadProduct = () => {
  const [csvData, setCsvData] = useState([]);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef();
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Ensure only .csv files are accepted
    const fileExtension = file.name.split(".").pop().toLowerCase();
    if (fileExtension !== "csv") {
      Swal.fire({
        title: "Invalid File Type",
        text: "Please upload a .csv file.",
        icon: "error",
        confirmButtonText: "OK",
      });
      fileInputRef.current.value = null;
      setFileName("");
      setCsvData([]);
      return;
    }

    setFileName(file.name);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.data.length === 0) {
          Swal.fire({
            title: "Empty CSV",
            text: "The selected CSV file has no data.",
            icon: "warning",
            confirmButtonText: "OK",
          });
          setCsvData([]);
          return;
        }

        setCsvData(results.data);
        console.log("Parsed CSV Data:", results.data);
      },
      error: (error) => {
        console.error("Error parsing CSV:", error);
        Swal.fire({
          title: "Parse Error",
          text: "Failed to parse the CSV file.",
          icon: "error",
          confirmButtonText: "OK",
        });
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
    if (!fileInputRef.current.files.length) {
      Swal.fire({
        title: "No File Selected",
        text: "Please select a CSV file before uploading.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    if (!csvData.length) {
      Swal.fire({
        title: "No Data Found",
        text: "CSV file appears empty or malformed.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      await axios.post(
        "https://govaly.vercel.app/products",
        csvData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      Swal.fire({
        title: "Success!",
        text: "Products uploaded successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      setCsvData([]);
      setFileName("");
      navigate("/");
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } catch (error) {
      console.error("Upload failed:", error);
      Swal.fire({
        title: "Upload Failed",
        text: "Something went wrong during upload.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="h-screen bg-gray-100 p-6 rounded-xl shadow-md">
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
