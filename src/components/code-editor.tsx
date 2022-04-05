import MonacoEditor from '@monaco-editor/react';

const CodeEditor = () => {
  return (
    <MonacoEditor
      theme='dark'
      options={{
        wordWrap: 'on',
        minimap: { enabled: false },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 2,
        fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
      language='javascript'
      height='500px'
    />
  );
};

export default CodeEditor;
