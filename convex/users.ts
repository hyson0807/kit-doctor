import {mutation} from "@/convex/_generated/server";
import {v} from "convex/values";


export const getNumber = mutation({
    args: { number: v.string() },
    handler: async (ctx, args) => {
        const number = args.number;
        if(!number || number.trim() === "") {
            throw new Error("number is empty")
        }

        try {
            await ctx.db.insert("emails", { number: args.number });
            return ("success");

        } catch (error) {}
            throw new Error("failed to save num");
    },
});

export const createUser = mutation({
    args: {
        year: v.string(),
        name: v.string(),
        email: v.string(),
        hospitalId: v.id("hospitals"), // 병원도 함께 저장
    },
    handler: async (ctx, args) => {
        const userId = await ctx.db.insert("users1", {
            year: args.year,
            name: args.name,
            email: args.email,
            hospitalId: args.hospitalId,
            createdAt: Date.now(),
        });
        return userId;
    },
});