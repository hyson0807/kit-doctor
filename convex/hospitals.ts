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

export const getHospitalById = query({
    args: {
        id: v.id("hospitals"),
    },
    handler: async (ctx, args) => {
        const hospital = await ctx.db.get(args.id);
        return hospital;
    },
});