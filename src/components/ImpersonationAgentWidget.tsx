import { useState } from 'react';

//const gradioUrl = process.env.NEXT_PUBLIC_GRADIO_URL;

const ImpersonationAgentWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#0078D4',
          color: '#fff',
          fontSize: '28px',
          border: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          cursor: 'pointer',
        }}
        aria-label="Toggle Chatbot"
      >
        {isOpen ? '✖' : '💬'}
      </button>

      {isOpen && (
        <iframe
          src="http://127.0.0.1:7860"
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '350px',
            height: '500px',
            border: 'none',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            zIndex: 9998,
          }}
          title="Chatbot Assistant"
        />
      )}
    </>
  );
};

export default ImpersonationAgentWidget;
