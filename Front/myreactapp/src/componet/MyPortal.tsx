//import React from 'react';
// import { ReactNode } from 'react';
// import ReactDOM from 'react-dom';

// interface PortalProps {
//   children: ReactNode;
//   container?: HTMLElement | null; // Optional container element, can be null
// }

// const MyPortal: React.FC<PortalProps> = ({ children, container }) => {
//   const portalRoot = container || document.getElementById('portal-container');

//   if (!portalRoot) {
//     console.error('Portal container not found. Please provide a valid container element.');
//     return null; // Handle the case where container is not found gracefully
//   }

//   if (typeof portalRoot !== 'object' || !('appendChild' in portalRoot)) {
//     console.error('Invalid portal container. It must be a valid DOM element.');
//     return null; // Handle invalid container type
//   }

//   return ReactDOM.createPortal(children, portalRoot);
// };

// export default MyPortal;
// import React from 'react';
// import ReactDOM from 'react-dom';

// interface ModalProps {
//   open: boolean;
//   children: React.ReactNode;
//   onClose: () => void;
// }

// const MODAL_STYLES: React.CSSProperties = {
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   width : '1000px',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: '#FFF',
//   padding: '50px',
//   zIndex: 1000,
// };

// const OVERLAY_STYLES: React.CSSProperties = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0, 0, 0, .7)',
//   zIndex: 1000,
// };

// export default function Modal({ open, children, onClose }: ModalProps) {
//   if (!open) return null;

//   return ReactDOM.createPortal(
//     <>
//       <div style={OVERLAY_STYLES} />
//       <div style={MODAL_STYLES} className=' mt-6'>
//         <button onClick={onClose} className='  mt-4  w-full flex justify-end  hover:text-red-600 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
// </svg>
// </button>
//         {children}
//       </div>
//     </>,
//     document.getElementById('portal-container') as HTMLElement,
//   );
// }

import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const MODAL_STYLES: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '100%', // Adjusted to full width on small screens
  maxWidth: '1000px', // Max width to 1000px
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '20px', // Reduced padding for smaller screens
  zIndex: 1000,
};

const OVERLAY_STYLES: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }: ModalProps) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className='mt-6 bg-white rounded-lg shadow-lg p-4 sm:p-6'>
        <button onClick={onClose} className='absolute top-0 right-0 p-2 text-gray-700 hover:text-red-600'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </>,
    document.getElementById('portal-container') as HTMLElement,
  );
}

