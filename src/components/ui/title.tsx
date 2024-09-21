import { subtitle, title } from "@/components/lib/primitives";

export default function Title({ varient, className, children, color, fullWidth, style }: { varient: 'title' | 'subtitle' | 'info'; className?: string; children: string; color?: "violet" | "yellow" | "blue" | "cyan" | "green" | "pink" | "foreground"; fullWidth?: boolean; style?: React.CSSProperties; }) {
    return (
        <p style={style} className={`${varient === 'title' ? `${title({ color: color, fullWidth: fullWidth })} lg:!text-[3rem] lg:!font-[600]` : varient === 'subtitle' ? `${subtitle({ fullWidth: fullWidth, color: color })} text-muted-foreground !text-[1.35rem] lg:!text-[1.75rem] lg:!font-[600]` : varient === 'info' ? `${subtitle({ fullWidth: fullWidth, isInfoTitle: true })} text-muted-foreground` : ''} ${className}`}>{children}</p>
    );
}
