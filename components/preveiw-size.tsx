import { ClassToColorMapping } from "@/data/colors";
import CopyTextWithIcon from "./copy-text";
import { PixelsToTailwind, TailwindToPixels } from "@/data/spacing";

interface PreviewProps {
  width?: string;
  originalWidth?: string;
}

export const PreviewSize: React.FC<PreviewProps> = ({
  width = "6",
  originalWidth = "24px",
}) => {
  console.log("value of width: ", width);
  return (
    <>
      <div className="flex flex-col gap-4 px-4 justify-center items-start">
        <div>
          <p className="font-semibold text-gray-700 mb-2">
            Nearest tailwind size
          </p>
          <div
            className=" rounded-lg h-8 mb-2 bg-fuchsia-600 transition-all"
            style={{
              width: TailwindToPixels[width],
            }}
          ></div>
          <CopyTextWithIcon text={width} />
        </div>
        <div>
          <p className="font-semibold text-gray-700 mb-2">Given Size</p>
          <div
            className=" rounded-lg h-8 mb-2 bg-fuchsia-600 transition-all"
            style={{
              width: originalWidth,
            }}
          ></div>
          <CopyTextWithIcon text={originalWidth} />
        </div>
      </div>
    </>
  );
};
