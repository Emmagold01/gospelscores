import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { UploadScore } from './components/UploadScore';
// import { ScorePreview } from './components/ScorePreview';
// import { Genre } from './components/Genre';
// import { Songs } from './components/Songs';
// import { Auth } from './components/Auth';
// import { SongRequest } from './components/SongRequest';

function App() {
  const [active, setActive] = useState('Contemporary Songs');

  return (
    <>
      <Navbar />
      {/* <Genre active={active} setActive={setActive} /> */}
      {/* <Songs active={active} /> */}
      {/* <Auth /> */}
      {/* <ScorePreview /> */}
      {/* <SongRequest /> */}
      <UploadScore />
    </>
  );
}

export default App;
