"use client";

import { uploadFile } from "@/services/uploadService";
import { useState } from "react";

type Props = {
  label: string;
  accept: string;
  folder: string;
  onUpload: (url: string) => void;
};

export default function FileUpload({
  label,
  accept,
  folder,
  onUpload,
}: Props) {

  const [uploading, setUploading] =
    useState(false);

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = e.target.files?.[0];

    if (!file) return;

    try {

      setUploading(true);

      const url =
        await uploadFile(file, folder);

      onUpload(url);

      alert("Upload Successful");

    } catch (err) {

      console.error(err);

      alert("Upload Failed");

    } finally {

      setUploading(false);

    }

  }

  return (

    <div>

      <label className="mb-2 block text-sm text-white/60">
        {label}
      </label>

      <input
        type="file"
        accept={accept}
        onChange={handleUpload}
        className="w-full rounded-2xl border border-dashed border-white/20 bg-white/5 p-4"
      />

      {uploading && (

        <p className="mt-2 text-cyan-400">
          Uploading...
        </p>

      )}

    </div>

  );

}