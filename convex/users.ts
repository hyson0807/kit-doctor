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