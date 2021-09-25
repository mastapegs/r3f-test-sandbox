import { FC } from "react";

const Background: FC = ({ children }) => (
  <div data-testid="background" className="bg-gray-200 p-4 min-h-screen">
    {children}
  </div>
);

export default Background;
