import { cn } from "@/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
  className?: string;
};

export default function SectionHeader({ title, subtitle, align = "left", size = "lg", className }: Props) {
  const titleSize = size === "xl" ? "text-4xl md:text-5xl" : size === "lg" ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl";
  const alignClass = align === "center" ? "text-center" : "";
  const accentClass = align === "center" ? "mx-auto" : "";
  return (
    <div className={cn("", className)}>
      <h2 className={cn(titleSize, "font-serif font-bold text-primary mb-2", alignClass)}>{title}</h2>
      <div className={cn("w-20 h-1 bg-secondary mb-6", accentClass)} />
      {subtitle && (
        <p className={cn("text-muted-foreground max-w-2xl", align === "center" ? "mx-auto" : "")}>{subtitle}</p>
      )}
    </div>
  );
}
