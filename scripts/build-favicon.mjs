import sharp from "sharp";
import fs from "fs";

const markFixed = fs.readFileSync("app/icon.svg");

const buildIco = (images) => {
  const count = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + dirEntrySize * count;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);
  const dirs = [];
  const bodies = [];

  for (const { size, buffer } of images) {
    const dir = Buffer.alloc(dirEntrySize);
    dir.writeUInt8(size >= 256 ? 0 : size, 0);
    dir.writeUInt8(size >= 256 ? 0 : size, 1);
    dir.writeUInt8(0, 2);
    dir.writeUInt8(0, 3);
    dir.writeUInt16LE(1, 4);
    dir.writeUInt16LE(32, 6);
    dir.writeUInt32LE(buffer.length, 8);
    dir.writeUInt32LE(offset, 12);
    dirs.push(dir);
    bodies.push(buffer);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...dirs, ...bodies]);
};

const pngAt = async (size) =>
  sharp(markFixed).resize(size, size).png().toBuffer();

const png16 = await pngAt(16);
const png32 = await pngAt(32);
const png48 = await pngAt(48);
const apple = await pngAt(180);

const ico = buildIco([
  { size: 16, buffer: png16 },
  { size: 32, buffer: png32 },
  { size: 48, buffer: png48 },
]);

fs.writeFileSync("app/favicon.ico", ico);
fs.writeFileSync("app/apple-icon.png", apple);

console.log(
  JSON.stringify({
    favicon: ico.length,
    apple: apple.length,
  }),
);
