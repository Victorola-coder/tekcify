"use client";

import clsx from "clsx";
import { useState } from "react";
import { EyeIcon } from "../svgs";

export default function Input({
  id,
  error,
  placeholder,
  type = "text",
  multiline,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <fieldset>
      <div className="relative">
        {multiline ? (
          <textarea
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            placeholder={placeholder}
            className={clsx(
              "w-full bg-background border border-seance/20 p-4 rounded-md text-foreground placeholder:text-foreground/50 text-base leading-[22.4px] focus:outline-none focus:ring-2 focus:ring-purpleHeart focus:border-transparent",
              error && "border-red-500"
            )}
          />
        ) : (
          <input
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            type={inputType}
            placeholder={placeholder}
            autoComplete="off"
            className={clsx(
              "w-full bg-background border border-seance/20 h-full p-4 rounded-md text-foreground placeholder:text-foreground/50 text-base leading-[22.4px] focus:outline-none focus:ring-2 focus:ring-purpleHeart focus:border-transparent transition-colors",
              error && "border-red-500",
              type === "password" && "pr-12",
              props.disabled && "opacity-70 cursor-not-allowed bg-foreground/5"
            )}
          />
        )}
        {type === "password" && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors cursor-pointer"
          >
            <EyeIcon fill={showPassword ? "currentColor" : "currentColor"} />
          </span>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-xs leading-[22.4px] mt-1">{error}</p>
      )}
    </fieldset>
  );
}
