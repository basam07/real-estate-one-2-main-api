import { prisma } from "../../lib/database";

export const fetchCareerDescriptionById = async (slug) => {
   return prisma.careerDescription.findFirst({
         where: { slug }
   });
}

export const fetchAllCareerDescriptions = async (take = undefined) => {
    return prisma.careerDescription.findMany({
        ...(take && { take }),
    });
};

export const createCareerDescription = async (data) => {
   return prisma.careerDescription.create({
         data
   });
}

export const updateCareerDescription = async (id, data) => {
   return prisma.careerDescription.update({
         where: { id },
         data
   });
}

export const deleteCareerDescription = async (id) => {
   return prisma.careerDescription.delete({
         where: { id }
   });
};
