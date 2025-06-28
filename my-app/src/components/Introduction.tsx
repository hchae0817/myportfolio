import Lottie from "lottie-react";
import React, { useState, useEffect } from "react";
import myAnimation from '../data/waving.json'

const roles = ["React", ".NET", "Typescript", "C#", "Python"];

const Introduction = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Initialize theme on mount
    useEffect(() => {
        const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initial = stored || prefers;
        setTheme(initial);
        document.documentElement.classList.toggle('dark', initial === 'dark');
    }, []);

    useEffect(() => {
        const role = roles[roleIndex];
        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && text === role) {
            setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }

        const timeout = setTimeout(() => {
            setText((prev) =>
                isDeleting ? prev.slice(0, -1) : role.slice(0, prev.length + 1)
            );
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    const toggleTheme = () => {
        const next = theme === 'light' ? 'dark' : 'light';
        setTheme(next);
        document.documentElement.classList.toggle('dark', next === 'dark');
        localStorage.setItem('theme', next);
    };

    return (
        <section className="text-center py-20 px-8">
            <button
                onClick={toggleTheme}
                className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded transition"
                aria-label="Toggle Dark Mode"
            >
                {theme === 'light' ? '🌞' : '🌜'}
            </button>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Hello, I'm Hana Chae
            </h1>
            <p className="mt-2 text-md md:text-lg font-light text-foreground/75">
                I’m a full-stack developer crafting seamless, scalable web apps.
            </p>

            {/* Lottie Animation */}
            <div className="flex justify-center mt-8">
                <div className="w-60 h-60 md:w-56 md:h-56">
                    <Lottie animationData={myAnimation} loop={true} />
                </div>
            </div>

            <p className="mt-4 text-xl font-semibold text-white-600 h-10 font-mono">
                Specialized in {text} |
            </p>
        </section>
    );
};

export default Introduction;
