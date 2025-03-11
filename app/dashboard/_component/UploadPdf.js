"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { Loader2Icon } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';

import { useUser } from "@clerk/nextjs";

const UploadFileDialog = ({ children }) => {
  const [fileName, setFileName] = useState("");
  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl);
  const addFileEntry = useMutation(api.fileStorage.AddFileEntryToDb); // change
  const [file, setFile] = useState();

  const {user} = useUser()

  const [loading, setLoading] = useState(false);

  // Move OnFileSelect outside
  const OnFileSelect = (event) => {
    setFile(event.target.files[0]);
  };

  // Define OnUpload function in the component scope
  const OnUpload = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }
    setLoading(true);
      // Step 1: Get a short-lived upload URL
      const postUrl = await generateUploadUrl();
      // Step 2: POST the file to the URL
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": file?.type },
        body: file,
      });
      const { storageId } = await result.json();
      console.log( "storege id " , storageId);
      const fileId = uuidv4()
      // Step 3: Save the newly allocated storage id to the database
      const resp = await addFileEntry({
        fileId:fileId,
        storageId:storageId, 
        createdBy: user?.primaryEmailAddress?.emailAddress ,
        fileName:fileName??"untitled file"
        });

        console.log(resp);
        
      setLoading(false)
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{children}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload File</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input type="file" accept="application/pdf" onChange={OnFileSelect} />
          <Input type="text" placeholder="Enter file name" value={fileName} onChange={(e) => setFileName(e.target.value)} />
        </div>
        <div className="flex justify-end space-x-2">
          <DialogClose asChild>
            <Button variant="secondary">Close</Button>
          </DialogClose>
          <Button onClick={OnUpload} disabled={loading}>
            {loading ? <Loader2Icon className="animate-spin" /> : "Upload"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadFileDialog;
