import Lottie from "lottie-react";
import React, { useState, useEffect } from "react";
import myAnimation from '../data/waving.json'

const roles = ["React", ".NET", "Typescript", "C#", "Python"];

const Introduction = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

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

    return (
        <section className="text-center py-20 px-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Hello, I'm Hana Chae
            </h1>
            <p className="mt-2 text-md md:text-lg font-light">
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
