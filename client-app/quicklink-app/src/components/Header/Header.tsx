import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className='bg-purple-900'>
      <div className='container p-2 mx-auto'>
        <nav className='py-5'>
          <div className="text-base text-white">QuicklinkApp</div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

