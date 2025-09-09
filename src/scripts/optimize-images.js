import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = path.join(process.cwd(), "public/image");
const outputDir = path.join(process.cwd(), "public/image-optimize");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const sizes = [512, 1024];

fs.readdirSync(inputDir).forEach(file => {
  const inputPath = path.join(inputDir, file);
  const name = path.parse(file).name;

  sizes.forEach(width => {
    const outputName = `${name}-${width}.webp`;
    const outputPath = path.join(outputDir, outputName);

    sharp(inputPath)
      .resize({ width })       
      .webp({ quality: 80 })   
      .toFile(outputPath)
      .then(() => console.log(`Imagem otimizada: ${outputName}`))
      .catch(err => console.error(err));
  });
});
