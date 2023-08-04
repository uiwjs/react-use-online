import { createRoot } from 'react-dom/client';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
import pkg from '@uiw/react-use-online/package.json';
import data from '@uiw/react-use-online/README.md';

const Github = MarkdownPreviewExample.Github;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <MarkdownPreviewExample
    source={data.source}
    components={data.components}
    data={data.data}
    title="React useOnline Hook."
    description={pkg.description}
    version={`v${VERSION}`}
  >
    <Github href="https://github.com/uiwjs/react-monorepo-template" />
  </MarkdownPreviewExample>,
);
