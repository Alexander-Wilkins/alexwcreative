import { ReactNode } from 'react';

interface WindowProps {
    children: ReactNode;
}

export default function Window({ children }: WindowProps) {
    return (
        <div id='window-container' className='rounded-xl bg-[#0038FF] border-solid border-2 border-xp-blue'>{children}</div>
    );
}
