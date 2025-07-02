import { PrismaClient } from '../src/generated/prisma'
import fs from 'fs';

const prisma = new PrismaClient();

const parsedLocations = JSON.parse(fs.readFileSync('./data/locations.geojson', 'utf-8'));

const locations = parsedLocations.features.map((feature: any) => {
    const [longitude, latitude] = feature.geometry.coordinates;

    return {
        name: feature.properties.Name,
        latitude,
        longitude,
        address: "None",        // TODO: find a better way to fill these fields
        description: "None"
    }
});

async function main() {
    for (const l of locations) {
        await prisma.location.create({
            data: l
        })
        console.log(l);
    }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })