import Link from 'next/link'

export const metadata = {
    title: "CrunchyBites",
  }
export default function UsurLayout({ children }) {
    return (
        <html>
            {children}
        </html>
    )
}