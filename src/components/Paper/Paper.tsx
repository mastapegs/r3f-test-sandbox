import { FC } from "react";

const Paper: FC = ({ children }) => (
  <div data-testid="paper" className="bg-white p-4 rounded shadow-lg">
    {children}
  </div>
);

export default Paper;
