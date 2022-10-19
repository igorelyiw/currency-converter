import React from 'react';

export interface TagProps {
    icon: string;
    count: number;
}

const Tag = ({ icon, count }: TagProps) => {
    return (
        <div className="p-2 rounded-2xl flex nowrap gap-1.5 text-black border border-black bg-white">
            <img src={icon} alt="currency" className="w-6 h-6" />
            <h6>{count}</h6>
        </div>
    );
};

export default Tag;
