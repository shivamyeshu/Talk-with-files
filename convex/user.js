import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createUser = mutation({
  args: {
    username: v.string(),
    email: v.string(),
    image: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if the user already exists
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    // If user does not exist, insert new user
    if (user?.length === 0) {
      await ctx.db.insert("users", {
        username: args.username, // ✅ Corrected: Use `args.username` instead of `v.string()`
        email: args.email, // ✅ Use actual value from `args`
        image: args.image, // ✅ Use actual value from `args`
      });
      return "Inserted new user...";
    }
    return "User already exists...";
  },
});
