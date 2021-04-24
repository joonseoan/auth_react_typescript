import { ReactNode } from 'react';
import Header from './header';

const App: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      { children }
    </div>
  );
}

export default App;