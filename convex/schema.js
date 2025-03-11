import { v } from "convex/values"
const { defineSchema, defineTable } = require("convex/server")

export default defineSchema({
  
    users:defineTable({
        username:v.string(),
        email:v.string(),
        image:v.string(),
    }),

    pdfFiles:defineTable({
        fileId:v.string(),
        storageId:v.string(),
        fileName:v.string(),
        createdBy:v.string()
    })

})