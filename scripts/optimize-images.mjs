import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_IMAGES = path.resolve("public/images");

async function optimize(filename, options = {}) {
  const input = path.join(PUBLIC_IMAGES, filename);
  const tmpOutput = path.join(PUBLIC_IMAGES, `.tmp-${filename}`);
  const stat = await fs.stat(input);
  const before = stat.size;

  await sharp(input)
    .resize(options.maxWidth ?? 1920, null, {
      withoutEnlargement: true,
      fit: "inside",
    })
    .jpeg({ quality: options.quality ?? 78, mozjpeg: true })
    .toFile(tmpOutput);

  const tmpStat = await fs.stat(tmpOutput);
  await fs.rename(tmpOutput, input);

  const ratio = ((1 - tmpStat.size / before) * 100).toFixed(1);
  console.log(
    `${filename}: ${(before / 1024).toFixed(0)} KB → ${(tmpStat.size / 1024).toFixed(0)} KB (-${ratio}%)`,
  );
}

await optimize("aspirateur.jpg", { maxWidth: 1920, quality: 78 });
