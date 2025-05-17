import React from "react";

type TextareaProps = {
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  placeholder?: string;
};

export default function Textarea({
  name,
  value,
  onChange,
  className,
  placeholder,
}: TextareaProps) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full min-h-[153px] md:min-h-[180px] bg-background/80 border border-seance/20 rounded-[24px] p-4
        text-foreground placeholder:text-foreground/30 text-[16px] 
        resize-none focus:outline-none focus:ring-1 focus:ring-purpleHeart/50 ${className}`}
    />
  );
}
