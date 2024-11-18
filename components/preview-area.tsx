import { ClassToColorMapping } from "@/data/colors";
import CopyTextWithIcon from "./copy-text";

interface PreviewProps {
  width?: string;
  height?: string;
  backgroundColor?: keyof typeof ClassToColorMapping;
  originalColor: string;
  borderColor?: string;
  textColor?: string;
  borderWidth?: string;
}

export const Preview: React.FC<PreviewProps> = ({
  width = "w-64",
  height = "h-16",
  backgroundColor = "gray-100",
  originalColor = "black",
  borderColor = "border-gray-300",
  textColor = "text-black",
  borderWidth = "border",
}) => {
  return (
    <>
      <div className="flex gap-4 px-4 justify-center">
        <div>
          <p className="font-semibold text-gray-700 mb-2">
            Nearest tailwind color
          </p>
          <div
            className="w-64 rounded-lg h-24 mb-2"
            style={{
              backgroundColor: ClassToColorMapping[backgroundColor],
            }}
          ></div>
          <CopyTextWithIcon text={backgroundColor} />
        </div>
        <div>
          <p className="font-semibold text-gray-700 mb-2">Given hex color</p>
          <div
            className="w-64 rounded-lg h-24 mb-2"
            style={{
              backgroundColor: originalColor,
            }}
          ></div>
          <CopyTextWithIcon text={originalColor} />
        </div>
      </div>
      <div className="flex gap-4 items-center px-4 py-4 justify-center">
        <CopyTextWithIcon text={`bg-${backgroundColor}`} />
        <CopyTextWithIcon text={`text-${backgroundColor}`} />
        <CopyTextWithIcon text={`border-${backgroundColor}`} />
        <CopyTextWithIcon text={`outline-${backgroundColor}`} />
      </div>
    </>
  );
};
