import Link from 'next/link'

export const metadata = {
    title: "CrunchyBites",
  }
export default function ComercioLayout({ children }) {
    return (
        <html>
            {children}
        </html>
    )
}