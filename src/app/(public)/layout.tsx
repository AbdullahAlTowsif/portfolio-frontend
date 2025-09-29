import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';

const PublicLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <Navbar />
            <main className='min-h-dvh'>{children}</main>
        </div>
    );
};

export default PublicLayout;