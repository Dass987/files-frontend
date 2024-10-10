import Container from 'react-bootstrap/Container';

// ** Components
import { FilesList } from './components/FilesList';
import { FilesFilterInput } from './components/FilesFilterInput';

import './App.css';

function App() {
  return (
    <div className="main-app">
      <Container className="p-4">
        <h1 className="mb-4 text-center">React Test App</h1>
        <FilesFilterInput />
        <FilesList />
      </Container>
    </div>
  );
}

export default App;
