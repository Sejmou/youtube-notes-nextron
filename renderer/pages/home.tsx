import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import { ipcRenderer } from 'electron';

function Home() {
  const [folderPath, setFolderPath] = useState('');

  const handleClick = async () => {
    const folder = (await ipcRenderer.invoke(
      'select-folder'
    )) as Electron.OpenDialogReturnValue;
    console.log(folder);
    setFolderPath(folder.filePaths[0]);
  };

  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <img src="/images/logo.png" />
        <button onClick={handleClick}>Pick a folder</button>
      </div>
      {folderPath && <div>You selected: {folderPath}</div>}
    </React.Fragment>
  );
}

export default Home;
