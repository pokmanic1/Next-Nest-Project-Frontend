'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const BlueButon = (props: any) => {
    return (
        <MotionLink
            href={props.link}

            whileHover={{ scale: 1.05, }}
            whileTap={{ scale: 0.9, }}
            transition={{ type: "spring", damping: 7, stiffness: 300 }}
            className="butoaneMobile inline-block bg-[#00043B] hover:bg-[#0c005e] text-[12px] sm:text-[14px] md:text-[16px] text-white font-serif px-4 sm:px-5 md:px-6 lg:px-7 py-1 rounded border border-blue-400/30 transition-colors"
        >
            {props.continut}
        </MotionLink>
    );
};
const WhiteButon = (props: any) => {
    return (
        <MotionLink
            href={props.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', damping: 7, stiffness: 300 }}
            className="butoaneMobile inline-block bg-[#ebebeb] hover:bg-[#d7d7d7] text-[12px] sm:text-[14px] md:text-[16px] text-black font-serif px-4 sm:px-5 md:px-6 lg:px-7 py-1 rounded border border-gray-600 transition-colors"        >
            {props.continut}
        </MotionLink>
    );
};

export { BlueButon, WhiteButon };