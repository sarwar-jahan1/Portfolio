const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/25 hover:shadow-accent/35",
  secondary:
    "bg-surface-alt text-ink hover:bg-ink/10 dark:bg-surface-alt-dk dark:text-ink-dk dark:hover:bg-white/10",
  outline:
    "border border-accent text-accent hover:bg-accent hover:text-white dark:text-accent-soft dark:border-accent-soft dark:hover:bg-accent-soft dark:hover:text-surface-dk",
};

export default function Button({
  children,
  variant = "primary",
  as = "button",
  href,
  onClick,
  type = "button",
  className = "",
  icon: Icon,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 active:scale-[0.97] ${variants[variant]} ${className}`;

  if (as === "a") {
    return (
      <a href={href} className={classes} {...rest}>
        {Icon && <Icon className="text-base" />}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {Icon && <Icon className="text-base" />}
      {children}
    </button>
  );
}
