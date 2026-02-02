import React, { ReactNode, ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

// Utility to merge Tailwind classes safely
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
    children: ReactNode;
}

export default function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div
            className={cn("container mx-auto px-3", className)}
            {...props}
        >
            {children}
        </div>
    );
}