import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SafeImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  /** Extra classes applied to the branded placeholder shown if the file is missing. */
  fallbackClassName?: string;
};

/**
 * Renders an image and, if the file is missing (404) or fails to decode,
 * swaps in a clean branded placeholder instead of a broken-image icon.
 * No stock photography is ever substituted for real clinic imagery.
 */
export function SafeImage({ src, alt, className, fallbackClassName, ...rest }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "grid place-items-center bg-secondary text-muted-foreground",
          className,
          fallbackClassName,
        )}
      >
        <ImageIcon className="size-6 opacity-60" aria-hidden="true" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
