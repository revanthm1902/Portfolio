interface TechBadgeProps {
  label: string;
  className?: string;
}

const TechBadge = ({ label, className = '' }: TechBadgeProps) => (
  <span
    className={`px-3 py-1 text-sm font-mono bg-neon-purple/20 text-neon-cyan rounded-full border border-neon-purple/30 ${className}`}
  >
    {label}
  </span>
);

export default TechBadge;
