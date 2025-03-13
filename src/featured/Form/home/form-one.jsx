"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { extractFormData } from "../../../../lib/form.utils";
import { FormField, FormTextBox } from "@/components/Form/form-partials";

const FormOne = ({ formData = null }) => {
  const router = useRouter();

  const handleCreate = async (data) => {
    try {
      const response = await axios.post("/api/home-title", data);
      alert("Data created successfully.");
      router.replace("/admin/home");
    } catch (error) {
      console.error("Failed to create data:", error);
      alert("Failed to create data.");
    }
  };

  const handleUpdate = async (data) => {
    try {
      await axios.put(`/api/home-title/${formData?.id}`, data);
      alert("Data updated successfully.");
      router.push("/admin/home");
    } catch (error) {
      console.error("Failed to update data:", error);
      alert("Failed to update data.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = extractFormData(e);
    formData ? await handleUpdate(data) : await handleCreate(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#ECE3D7]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mt-10 mb-10 p-8 rounded"
      >
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          Home Tagline
        </h2>

        <div className="mb-4">
          <FormField
            label="Title"
            type="text"
            name="tagline"
            placeholder="Enter blog title"
            defaultValue={formData?.tagline}
            required
          />
        </div>

        <div className="mb-4">
          <FormTextBox
            label="Discription"
            type="text"
            name="subTagline"
            placeholder="Enter blog title"
            defaultValue={formData?.subTagline}
            required
          />
        </div>

        <div className="mt-8 flex gap-4 justify-end">
          <button
            type="submit"
            className="w-1/4 bg-green-600 text-white py-3 px-3 text-lg rounded hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500"
          >
            {formData ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormOne;
