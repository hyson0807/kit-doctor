import { query } from "./_generated/server";
import { v } from "convex/values";

export const getHospitals = query({
    args: { type: v.string() },

    handler: async (ctx, args) => {
        const hospitals = await ctx.db
            .query("hospitals")
            .withIndex("type", (q) => q.eq("type", args.type))
            .collect();

        return hospitals;

    }
})