import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  highlight: string;
  subtitle: string;
  /** Which neon color for the highlighted word */
  highlightColor?: string;
  /** "before" puts plain text first, "after" puts it after the highlight */
  highlightPosition?: 'before' | 'after' | 'solo';
}

const SectionHeader = ({
  title,
  highlight,
  subtitle,
  highlightColor = 'text-neon-purple',
  highlightPosition = 'before',
}: SectionHeaderProps) => (
  <motion.div
    className="text-center mb-10 sm:mb-12 lg:mb-16 space-y-4 sm:space-y-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-bold">
      {highlightPosition === 'before' && <span className="text-foreground">{title} </span>}
      <span className={`${highlightColor} text-glow animate-glow`}>{highlight}</span>
      {highlightPosition === 'after' && <span className="text-foreground"> {title}</span>}
    </h2>
    <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
      {subtitle}
    </p>
  </motion.div>
);

export default SectionHeader;
