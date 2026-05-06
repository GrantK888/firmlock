import Image from "next/image";

type Props = {
  variant?: "navy" | "white";
  className?: string;
};

export default function Logo({ variant = "navy", className = "w-8 h-8" }: Props) {
  const src = variant === "white" ? "/logo-white.svg" : "/logo.svg";
  return (
    <Image
      src={src}
      alt="FirmLock"
      width={32}
      height={32}
      className={className}
      priority
    />
  );
}
