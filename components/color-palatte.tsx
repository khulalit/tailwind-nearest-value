import { ClassToColorMapping, ColorToClassMapping } from "@/data/colors";
import { generateTailwindColorPalette } from "@/lib/generateColorPallete";
import CopyTextWithIcon from "./copy-text";

interface ColorPaletteProps {
  baseColor: keyof typeof ColorToClassMapping;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ baseColor }) => {
  const palette: any = generateTailwindColorPalette(baseColor);

  const renderColorBoxes = (
    colors: (keyof typeof ClassToColorMapping)[],
    label: string
  ) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">{label}</h3>
      <div className="flex gap-4 justify-center">
        {colors.map((color, index) => (
          <div key={`${label}-${index}`} className="flex flex-col items-center">
            <div
              className="w-16 h-16 rounded"
              style={{
                backgroundColor: ClassToColorMapping[color],
              }}
            ></div>
            <span className="mt-2 text-sm ">
              <CopyTextWithIcon text={color} />
              <CopyTextWithIcon
                text={ClassToColorMapping[color]}
                className="mt-4"
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-8 ">
      <h1 className="text-2xl font-bold mb-6">
        Color Palette for {baseColor} / {ColorToClassMapping[baseColor]}
      </h1>
      {renderColorBoxes(palette.shades, "Shades")}
      {renderColorBoxes(palette.tints, "Tints")}
      {renderColorBoxes([palette.complementary], "Complementary")}
      {renderColorBoxes(palette.analogous, "Analogous")}
    </div>
  );
};

export default ColorPalette;
