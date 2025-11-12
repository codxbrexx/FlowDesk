import { AnchorHTMLAttributes, PropsWithChildren } from 'react'

type Props = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }>

export default function NavLink({ href, children, ...rest }: Props) {
  return (
    <a href={href} {...rest} className="ui-navlink text-blue-600 hover:underline">
      {children}
    </a>
  )
}
