import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Progress } from "@/components/ui/progress";
import { LayoutIcon } from 'lucide-react';
import { IconMoneybagMove } from '@tabler/icons-react';
import UploadFileDialog from './UploadPdf'; // ✅ Ensure correct import

function Sidebar() {
  return (
    <div className='shadow-sm h-screen p-8'>
      <Image src='/logoisum.svg' width={150} height={120} alt="Logo" />

      <div className='mt-10'>
        <UploadFileDialog>
          <Button className=' cursor-pointer'>+ Upload File</Button>
        </UploadFileDialog>

        <div className='flex gap-2 items-center p-2 mt-6 hover:bg-slate-200 rounded-lg cursor-pointer'>
          <LayoutIcon />
          <h2>Workspace</h2>
        </div>

        <div className='flex gap-2 items-center p-2 mt-2 hover:bg-slate-200 rounded-lg cursor-pointer'>
          <IconMoneybagMove />
          <h2>Subscription</h2>
        </div>
      </div>

      <div className='absolute bottom-24 w-[80%]'>
        <Progress value={35} />
        <p className='text-sm mt-1'>2 out of 5 PDFs Uploaded</p>
        <p className='text-sm mt-3 text-gray-400'>Upgrade to upload more PDFs</p>
      </div>
    </div>
  );
}

export default Sidebar;
