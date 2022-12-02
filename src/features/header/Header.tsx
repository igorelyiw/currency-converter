import React from 'react';

import { logo } from '../assets';
import { Tag, TagProps } from '../reusable';

interface HeaderProps {
    tags: TagProps[];
}

const Header = ({ tags }: HeaderProps) => {
    console.log(tags, 'tags');

    return (
        <div className="w-full h-16 px-4 bg-indigo-500 shadow-lg shadow-indigo-500/50 flex justify-between items-center">
            <img src={logo} alt="logo" />
            <div className="flex gap-4">
                {tags.map((tag, index) => (
                    <Tag key={tag.count + index} icon={tag.icon} count={Number(tag.count?.toFixed(2))} />
                ))}
            </div>
        </div>
    );
};

export default Header;
