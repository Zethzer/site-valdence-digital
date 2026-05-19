import Link from 'next/link'

type ButtonProps = {
  href?: string
  variant?: 'primary' | 'outline'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

export default function Button({
  href,
  variant = 'primary',
  children,
  className = '',
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 font-dm-sans font-semibold text-sm tracking-wide rounded-sm transition-all duration-200'
  const variants = {
    primary: 'bg-teal text-white hover:bg-teal/90',
    outline: 'border border-teal text-teal hover:bg-teal/5',
  }
  const classes = `${base} ${variants[variant]} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
