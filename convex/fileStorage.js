import { mutation } from "./_generated/server";

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const AddFileEntryToDb=mutation({
    
    args:{
        fileId:v.string(),
        storageid:v.string(),
        fileName:v.string(),
        createdBy:v.string()
    },

    handler:async(ctx,args)=>{
        const result = await ctx.db.insert('pdfFiles',{
        fileId:args.fileId,
        storageid:args.fileName,
        fileName:args.storageId,
        createBy:args.createdBy
        })

        return 'Inserted'
    }
})