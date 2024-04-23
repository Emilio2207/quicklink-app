import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="bg-slate-900 text-white text-center py-5">
      Copyright &#169; 2024 Quicklink | Emilio Ramirez
    </div>
  );
};

export default Footer;
