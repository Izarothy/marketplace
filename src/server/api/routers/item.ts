import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { db } from "~/server/db";

export const itemRouter = createTRPCRouter({
  addItem: publicProcedure
    .input(
      z.object({
        name: z.string(),
        price: z.number(),
        description: z.string(),
        category: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (!ctx.session?.user.name) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "You must be logged in to add a new item",
        });
      }

      const item = await db.item.create({
        data: {
          name: input.name,
          price: input.price,
          description: input.description,
          category: input.category,
          author: ctx?.session?.user?.name,
        },
      });
      return item;
    }),
  fetchItems: publicProcedure.query(async () => {
    const allItems = await db.item.findMany({});
    if (allItems.length > 0) {
      return allItems;
    }
  }),
  deleteItem: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const deletedItem = await db.item.delete({
        where: {
          id: input.id,
        },
      });

      if (!deletedItem) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Internal server error occured",
        });
      }
    }),
});
