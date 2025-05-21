import {defineSchema, defineTable} from "convex/server";
import {v} from "convex/values";


export default defineSchema({
    hospitals: defineTable({
        type: v.string(),
        hospital_name: v.string(),
        rate: v.number(),
        reviews: v.number(),
        relative_price: v.string(),
        price: v.string(),
        actual_price: v.string(),
        distance: v.string(),
    }).index("type", ["type"]),

    emails: defineTable({
        number: v.string(),
    }),
});

