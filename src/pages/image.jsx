import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
    setResponse(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file); // "image" matches the backend field name

    try {
      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setResponse(res.data);
      console.log("data", res.data);
      setFile(null);
    } catch (err) {
      setError(err.response?.data || "Upload failed");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }} className=" mt-40">
      <h2>Upload Image or PDF</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={handleFileChange}
        />
        <button type="submit" style={{ marginTop: "10px" }}>
          Upload
        </button>
      </form>

      {response && (
        <div style={{ marginTop: "20px" }}>
          <p>{response.message}</p>
          {response.fileType === "image" ? (
            <img
              src={response.fileUrl}
              alt="Uploaded"
              style={{ width: "100%" }}
            />
          ) : (
            <a
              href={response.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF
            </a>
          )}
        </div>
      )}

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default FileUpload;
