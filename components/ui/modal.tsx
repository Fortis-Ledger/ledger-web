"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    description?: string;
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
}

const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
};

export function Modal({
    isOpen,
    onClose,
    children,
    title,
    description,
    size = "md",
    className,
}: ModalProps) {
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleEscape = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
            onKeyDown={handleEscape}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" />

            {/* Modal content */}
            <div
                className={cn(
                    "relative w-full animate-scale-in",
                    "bg-gradient-to-br from-fortis-gray-800 to-fortis-gray-900",
                    "backdrop-blur-xl border border-fortis-gray-700 rounded-2xl",
                    "shadow-quantum",
                    sizeClasses[size],
                    className
                )}
            >
                {/* Header */}
                {(title || description) && (
                    <div className="px-6 pt-6 pb-4 border-b border-fortis-gray-700">
                        {title && (
                            <h2
                                id="modal-title"
                                className="text-2xl font-bold text-white mb-1"
                            >
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="text-fortis-gray-300">
                                {description}
                            </p>
                        )}
                    </div>
                )}

                {/* Close button */}
                <button
                    onClick={onClose}
                    className={cn(
                        "absolute top-4 right-4 p-2 rounded-lg",
                        "text-fortis-gray-400 hover:text-white",
                        "hover:bg-fortis-gray-700 transition-colors",
                        "focus:outline-none focus:ring-2 focus:ring-fortis-cyan"
                    )}
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Body */}
                <div className="px-6 py-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
