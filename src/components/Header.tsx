import Link from "next/link";

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                <h1 className="site-title">
                    <Link href="/">My Markdown Blog</Link>
                </h1>
                <nav className="main-nav">
                    <Link href="/" className="nav-link">記事一覧</Link>
                </nav>
            </div>
        </header>
    );
}
