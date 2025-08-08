// components/BackgroundWrapper.tsx
import React from "react";

const BackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="background-container">
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;
