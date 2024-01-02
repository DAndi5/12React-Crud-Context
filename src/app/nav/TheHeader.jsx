import {Navigation} from "./Navigation";

const navItems = [
    {label: "Главная", href: "/"},
    {label: "Добавить", href: "/add"},
    {label: "Помощь", href: "/about"},
];

const TheHeader = () => {
    return (
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

            {/*<header className="header">*/}
            {/*    <nav className="header-nav">*/}
                    <Navigation navLinks={navItems}/>
            {/*    </nav>*/}
            {/*</header>*/}
        </div>
    )
}

export {TheHeader};
