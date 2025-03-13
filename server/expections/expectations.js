import { prisma } from "../../lib/database";

export const fetchExpectationById = async (slug) => {
   return prisma.expectation.findFirst({
         where: { slug }
   });
}

export const fetchAllExpectations = async (take = undefined) => {
    return prisma.expectation.findMany({
        ...(take && { take }),
    });
};

export const createExpectation = async (data) => {
   return prisma.expectation.create({
         data
   });
}

export const updateExpectation = async (id, data) => {
   return prisma.expectation.update({
         where: { id },
         data
   });
}

export const deleteExpectation = async (id) => {
   return prisma.expectation.delete({
         where: { id }
   });
};
