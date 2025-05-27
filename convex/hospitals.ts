import { query } from "./_generated/server";
import { v } from "convex/values";

export const getHospitals = query({
    args: { type: v.string() },

    handler: async (ctx, args) => {
        if (args.type === '둘다') {
            return await ctx.db.query("hospitals")
                .filter(q => q.or(
                    q.eq(q.field("type"), "치과"),
                    q.eq(q.field("type"), "병원")
                ))
                .collect();
        } else {
            return await ctx.db.query("hospitals")
                .filter(q => q.eq(q.field("type"), args.type))
                .collect();
        }

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