import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-mono font-medium uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "border-purple/30 bg-purple/10 text-purple-light",
        secondary: "border-white/10 bg-white/5 text-muted-foreground",
        outline: "border-white/10 text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
