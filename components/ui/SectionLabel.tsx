type Props = {
  children: React.ReactNode;
  centered?: boolean;
};

export function SectionLabel({ children, centered = false }: Props) {
  return (
    <div
      className={`flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.4em] text-[var(--color-gold)] ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className="gap-3 bg-[var(--color-gold)]" aria-hidden="true" />
      {children}
    </div>
  );
}
