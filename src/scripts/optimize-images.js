import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = path.join(process.cwd(), "public/images");
const outputDir = path.join(process.cwd(), "public/images-optimized");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach(file => {
  const inputPath = path.join(inputDir, file);
  const outputName = path.parse(file).name + ".webp"; 
  const outputPath = path.join(outputDir, outputName);

  sharp(inputPath)
    .resize({ width: 1200 }) 
    .webp({ quality: 80 }) 
    .toFile(outputPath)
    .then(() => console.log(`Imagem otimizada: ${outputName}`))
    .catch(err => console.error(err));
});
