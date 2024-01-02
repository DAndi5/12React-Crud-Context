import Link from "next/link";

export default function AboutLayout({children,}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <h1 className="head1">Новая задача</h1>
            {children}
        </>
    );
}
