'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { ParticleBackground } from '@/components/3d/ParticleBackground';
import { ArrowRight, Shield, Terminal as TerminalIcon, ShieldCheck, Lock, Globe, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/ProjectCard';
import { TiltCard } from '@/components/3d/TiltCard';
import { GitHubCalendar } from 'react-github-calendar';
import { blogData } from '@/data/blog';
import { notesData } from '@/data/notes';

// Hacker & Security Profile Icons
const HackerOneIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M0 0v24h24V0H0zm12.186 3.655l8.766 5.066v10.134l-8.766 5.066-8.766-5.066V8.721l8.766-5.066zm0 1.937L5.05 9.77v8.948l7.136 4.122 7.136-4.122V9.77l-7.136-4.178z"/>
    </svg>
);

const HackTheBoxIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="m22.5106 6.4566.0008-.0123a.888.888 0 0 0-.2717-.6384c-.0084-.0084-.018-.0155-.0267-.0235-.0186-.0166-.0371-.0333-.0572-.0484-.0193-.0147-.04-.0276-.0607-.0406-.0096-.006-.0182-.0131-.0281-.0188L12.4576.1266a.891.891 0 0 0-.9223.0043L1.933 5.6744c-.0107.0062-.0203.014-.0307.0205-.0073.0047-.015.008-.0223.0128-.007.0047-.013.0106-.02.0155a.8769.8769 0 0 0-.147.1333l-.0026.003a.8872.8872 0 0 0-.2218.5847l.0009.014c-.0002.0088-.0015.0176-.0015.0264v11.0708c0 .3277.1802.6288.469.7836l9.5986 5.5417c.0076.0044.0158.0075.0236.0117a.8754.8754 0 0 0 .166.0687c.0134.004.0266.0083.0401.0117a.8793.8793 0 0 0 .072.0142c.0117.0019.0232.0045.0349.006a.835.835 0 0 0 .2157 0c.0117-.0015.0232-.0041.0348-.006a.9.9 0 0 0 .072-.0142c.0135-.0034.0267-.0077.04-.0117a.895.895 0 0 0 .0646-.0217.9134.9134 0 0 0 .1015-.047c.0078-.0042.016-.0072.0236-.0117l9.5986-5.5417a.8888.8888 0 0 0 .469-.7836V6.4779c0-.0071-.0012-.0142-.0014-.0213zM5.2543 6.0822l6.5367-3.774a.4182.4182 0 0 1 .4182 0l6.5366 3.774a.4182.4182 0 0 1 0 .7243l-6.5367 3.774a.4182.4182 0 0 1-.4182 0l-6.5366-3.774a.4182.4182 0 0 1 0-.7243zm5.6134 14.3449a.4172.4172 0 0 1-.626.3613L3.718 17.0218a.4173.4173 0 0 1-.2086-.3613V9.1279a.4172.4172 0 0 1 .6258-.3613l6.524 3.7666a.4172.4172 0 0 1 .2086.3614v7.5325zm9.623-3.7666a.4173.4173 0 0 1-.2086.3613l-6.5239 3.7666a.4172.4172 0 0 1-.6259-.3613v-7.5325c0-.149.0796-.2868.2087-.3614l6.5239-3.7666a.4172.4172 0 0 1 .6258.3613v7.5326z"/>
    </svg>
);

const TryHackMeIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M10.705 0C7.51 0 4.854 2.328 4.298 5.37a4.54 4.54 0 0 0-.958-.105 4.533 4.533 0 0 0-4.428 3.61.625.625 0 0 0 1.225.25A3.278 3.278 0 0 1 3.34 6.516a3.245 3.245 0 0 1 1.912.616.625.625 0 1 0 .73-1.013 4.489 4.489 0 0 0-.488-.305 5.221 5.221 0 0 1 5.174-4.57 5.223 5.223 0 0 1 5.096 4.104 4.488 4.488 0 0 0-1.68.69.625.625 0 0 0 .7 1.035 3.273 3.273 0 0 1 4.793 4.57 3.273 3.273 0 0 1-3.27 3.27H4.761a.625.625 0 1 0 0 1.25h6.761a.625.625 0 1 0 0-1.25H4.761a3.273 3.273 0 0 1-3.27-3.27A3.273 3.273 0 0 1 6.59 7.08a.625.625 0 0 0 .7-1.035 4.488 4.488 0 0 0-1.68-.69 5.223 5.223 0 0 1 5.096-4.104 5.221 5.221 0 0 1 5.174 4.57 4.489 4.489 0 0 0-.488.305.625.625 0 1 0 .731 1.013 3.245 3.245 0 0 1 1.912-.616 3.278 3.278 0 0 1 3.203 2.61.625.625 0 0 0 1.225-.251 4.533 4.533 0 0 0-4.428-3.61 4.54 4.54 0 0 0-.958.105C16.556 2.328 13.9 0 10.705 0zm5.192 10.64a.925.925 0 0 0-.462.108.913.913 0 0 0-.313.29 1.27 1.27 0 0 0-.175.427 2.39 2.39 0 0 0-.054.514c0 .181.018.353.054.517.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11.18 0 .334-.037.46-.11a.897.897 0 0 0 .309-.296c.08-.124.137-.267.173-.431.036-.164.054-.336.054-.517 0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426.901.901 0 0 0-.309-.291.917.917 0 0 0-.46-.108zm6.486 0a.925.925 0 0 0-.462.108.913.913 0 0 0-.313.29 1.27 1.27 0 0 0-.175.427 2.39 2.39 0 0 0-.053.514c0 .181.017.353.053.517.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11.18 0 .334-.037.46-.11a.897.897 0 0 0 .31-.296c.078-.124.136-.267.172-.431.036-.164.054-.336.054-.517 0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426.901.901 0 0 0-.308-.291.916.916 0 0 0-.461-.108zm-8.537.068l-.84.618.313.43.476-.368v1.877h.603v-2.557zm6.486 0l-.841.618.314.43.477-.368v1.877h.603v-2.557zm-4.435.445c.08 0 .143.028.193.084.05.057.087.127.114.21.026.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.028.187-.054.27a.584.584 0 0 1-.114.21.243.243 0 0 1-.193.085.248.248 0 0 1-.195-.086.584.584 0 0 1-.118-.209 1.245 1.245 0 0 1-.056-.27 2.645 2.645 0 0 1 0-.533c.01-.096.029-.186.056-.27a.583.583 0 0 1 .118-.209.25.25 0 0 1 .195-.084zm6.486 0c.08 0 .144.028.193.084.05.057.087.127.114.21.027.083.044.173.054.269a2.541 2.541 0 0 1 0 .533c-.01.097-.027.187-.054.27a.584.584 0 0 1-.114.21.243.243 0 0 1-.193.085.249.249 0 0 1-.195-.086.581.581 0 0 1-.117-.209 1.245 1.245 0 0 1-.056-.27 2.642 2.642 0 0 1 0-.533c.01-.096.028-.186.056-.27a.58.58 0 0 1 .117-.209.25.25 0 0 1 .195-.084zm-2.191 3.51a.93.93 0 0 0-.463.109.908.908 0 0 0-.312.291c-.08.122-.139.263-.175.426a2.383 2.383 0 0 0-.054.514c0 .18.018.353.054.516.036.164.094.308.175.432a.91.91 0 0 0 .312.296.92.92 0 0 0 .463.11c.18 0 .333-.037.46-.11a.892.892 0 0 0 .308-.296 1.32 1.32 0 0 0 .174-.432c.036-.163.054-.335.054-.516 0-.18-.018-.352-.054-.514a1.274 1.274 0 0 0-.174-.426.89.89 0 0 0-.309-.291.918.918 0 0 0-.46-.108zm-6.402.07l-.841.617.314.43.476-.369v1.878h.604v-2.557zm2.125 0l-.841.617.314.43.477-.369v1.878h.603v-2.557zm2.116 0l-.84.617.313.43.477-.369v1.878h.603v-2.557zm2.16.443c.08 0 .144.028.194.085a.605.605 0 0 1 .114.21c.026.083.044.172.053.269a2.639 2.639 0 0 1 0 .532 1.28 1.28 0 0 1-.053.27.585.585 0 0 1-.114.21.244.244 0 0 1-.193.085.25.25 0 0 1-.196-.085.589.589 0 0 1-.117-.21 1.245 1.245 0 0 1-.056-.27 2.597 2.597 0 0 1 0-.532c.01-.097.028-.186.056-.27a.589.589 0 0 1 .117-.209.249.249 0 0 1 .196-.085zm-6.729 3.073a.676.676 0 0 0-.335.078.661.661 0 0 0-.227.211.91.91 0 0 0-.127.31c-.027.118-.04.242-.04.373s.013.256.04.375a.93.93 0 0 0 .127.313.65.65 0 0 0 .227.215c.092.053.204.08.335.08a.655.655 0 0 0 .334-.08.65.65 0 0 0 .225-.215c.057-.09.1-.194.125-.313a1.75 1.75 0 0 0 .04-.375c0-.13-.014-.255-.04-.373a.931.931 0 0 0-.125-.31.658.658 0 0 0-.225-.21.667.667 0 0 0-.334-.08zm3.086 0a.675.675 0 0 0-.336.078.661.661 0 0 0-.226.211.907.907 0 0 0-.127.31 1.69 1.69 0 0 0-.04.373c0 .131.013.256.04.375a.928.928 0 0 0 .127.313c.058.09.134.162.226.215.093.053.205.08.336.08a.655.655 0 0 0 .334-.08.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.752 1.752 0 0 0 0-.748.94.94 0 0 0-.126-.31.657.657 0 0 0-.224-.21.667.667 0 0 0-.334-.08zm5.108 0a.675.675 0 0 0-.336.078.661.661 0 0 0-.226.211.91.91 0 0 0-.127.31c-.027.118-.04.242-.04.373s.013.256.04.375a.931.931 0 0 0 .127.313c.058.09.134.162.226.215.093.053.205.08.336.08.13 0 .243-.027.334-.08a.65.65 0 0 0 .224-.215c.058-.09.1-.194.126-.313a1.75 1.75 0 0 0 .04-.375c0-.13-.014-.255-.04-.373a.943.943 0 0 0-.126-.31.657.657 0 0 0-.224-.21.668.668 0 0 0-.334-.08zm-6.658.05l-.61.448.227.311.346-.266v1.362h.438v-1.856zm3.068 0l-.61.448.227.311.346-.266v1.362h.438v-1.856zm5.108 0l-.611.448.228.311.346-.266v1.362h.438v-1.856zm-9.712.322c.058 0 .105.02.14.062a.421.421 0 0 1 .083.151.96.96 0 0 1 .04.196 1.932 1.932 0 0 1 0 .386.954.954 0 0 1-.04.197.421.421 0 0 1-.083.152.176.176 0 0 1-.14.061.18.18 0 0 1-.141-.06.427.427 0 0 1-.085-.153.887.887 0 0 1-.041-.197 1.96 1.96 0 0 1 0-.386.893.893 0 0 1 .04-.196.42.42 0 0 1 .086-.151.181.181 0 0 1 .141-.062zm3.086 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151.94.94 0 0 1 .04.196 1.906 1.906 0 0 1 0 .386.93.93 0 0 1-.04.197.421.421 0 0 1-.082.152.176.176 0 0 1-.14.061.18.18 0 0 1-.141-.06.42.42 0 0 1-.086-.153.846.846 0 0 1-.04-.197 1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.849.849 0 0 1 .041-.196.42.42 0 0 1 .086-.151.182.182 0 0 1 .141-.062zm5.108 0c.058 0 .104.02.14.062a.421.421 0 0 1 .082.151.92.92 0 0 1 .04.196 1.963 1.963 0 0 1 0 .386.943.943 0 0 1-.04.197.421.421 0 0 1-.082.152.177.177 0 0 1-.14.061.18.18 0 0 1-.142-.06.437.437 0 0 1-.085-.153.95.95 0 0 1-.04-.197 1.965 1.965 0 0 1-.011-.195c0-.057.004-.121.01-.191a.959.959 0 0 1 .04-.196.47.47 0 0 1 .086-.151.181.181 0 0 1 .142-.062zm-1.684 1.814a.675.675 0 0 0-.336.079.66.66 0 0 0-.227.21.91.91 0 0 0-.127.31 1.731 1.731 0 0 0 0 .748.939.939 0 0 0 .127.314c.059.09.134.162.227.215.093.053.205.08.336.08a.66.66 0 0 0 .334-.08.648.648 0 0 0 .224-.215c.058-.09.1-.195.126-.314a1.737 1.737 0 0 0-.001-.747.928.928 0 0 0-.125-.31.65.65 0 0 0-.224-.211.668.668 0 0 0-.334-.079zm3.063 0a.676.676 0 0 0-.336.079.664.664 0 0 0-.227.21.906.906 0 0 0-.127.31 1.74 1.74 0 0 0 0 .748.936.936 0 0 0 .127.314.66.66 0 0 0 .227.215c.092.053.204.08.336.08a.654.654 0 0 0 .334-.08.648.648 0 0 0 .223-.215c.058-.09.1-.195.126-.314a1.74 1.74 0 0 0 0-.747.928.928 0 0 0-.126-.31.65.65 0 0 0-.223-.211.666.666 0 0 0-.334-.079zm-1.545.05l-.611.448.228.312.346-.267v1.363h.438v-1.856zm-1.518.323c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152.91.91 0 0 1 .04.195 1.966 1.966 0 0 1 0 .387.951.951 0 0 1-.04.197.421.421 0 0 1-.082.152.177.177 0 0 1-.14.06.18.18 0 0 1-.142-.06.428.428 0 0 1-.085-.152.914.914 0 0 1-.04-.197 1.96 1.96 0 0 1-.011-.195c0-.058.003-.122.01-.192a.923.923 0 0 1 .041-.195c.02-.06.048-.11.085-.152a.181.181 0 0 1 .142-.061zm3.063 0c.057 0 .104.02.14.061a.42.42 0 0 1 .082.152.94.94 0 0 1 .04.195 1.91 1.91 0 0 1 0 .387.93.93 0 0 1-.04.197.422.422 0 0 1-.083.152.175.175 0 0 1-.14.06.18.18 0 0 1-.141-.06.423.423 0 0 1-.085-.152.907.907 0 0 1-.04-.197 1.95 1.95 0 0 1 0-.387.915.915 0 0 1 .04-.195c.02-.06.048-.11.085-.152a.182.182 0 0 1 .142-.061zm-9.713.185a.465.465 0 0 0-.232.055.456.456 0 0 0-.157.146.627.627 0 0 0-.089.215 1.168 1.168 0 0 0-.027.259c0 .09.009.177.027.26a.648.648 0 0 0 .089.216c.04.063.093.112.157.149a.459.459 0 0 0 .232.056c.09 0 .168-.02.231-.056a.45.45 0 0 0 .156-.149.67.67 0 0 0 .087-.217 1.218 1.218 0 0 0 0-.518.647.647 0 0 0-.087-.215.448.448 0 0 0-.156-.146.458.458 0 0 0-.23-.055zm1.052.035l-.423.31.158.217.24-.185v.944h.303v-1.286zm-1.052.224c.04 0 .073.014.097.042a.284.284 0 0 1 .057.105.69.69 0 0 1 .028.136c.004.049.007.092.007.133 0 .04-.003.086-.007.135a.684.684 0 0 1-.028.136.285.285 0 0 1-.057.105.123.123 0 0 1-.097.043.125.125 0 0 1-.098-.043.298.298 0 0 1-.059-.105.612.612 0 0 1-.028-.136 1.39 1.39 0 0 1 0-.268.62.62 0 0 1 .028-.136.297.297 0 0 1 .06-.105.125.125 0 0 1 .097-.042zm3.775 1.394a.463.463 0 0 0-.232.054.452.452 0 0 0-.157.146.621.621 0 0 0-.088.214 1.19 1.19 0 0 0 0 .519.641.641 0 0 0 .088.217.46.46 0 0 0 .157.15.458.458 0 0 0 .232.054.454.454 0 0 0 .232-.055.45.45 0 0 0 .155-.149.664.664 0 0 0 .087-.217 1.189 1.189 0 0 0 0-.519.642.642 0 0 0-.087-.214.446.446 0 0 0-.155-.146.459.459 0 0 0-.232-.054zm1.052.034l-.423.31.158.216.24-.185v.945h.303V22.68zm-1.052.223c.04 0 .073.014.098.043a.3.3 0 0 1 .057.105.643.643 0 0 1 .027.135 1.31 1.31 0 0 1 0 .268.654.654 0 0 1-.027.137.307.307 0 0 1-.057.105.124.124 0 0 1-.098.042.125.125 0 0 1-.098-.042.293.293 0 0 1-.059-.105.618.618 0 0 1-.028-.137 1.364 1.364 0 0 1 0-.268.612.612 0 0 1 .028-.135.287.287 0 0 1 .06-.105.123.123 0 0 1 .097-.043z"/>
    </svg>
);

const YesWeHackIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 80 103">
        <path d="M46.8 49.5v-6.8L78 16.1v-14C78 0.9 77 0 75.9 0H64.6c-1.2 0-2.1 1-2.1 2.1v6.6L39.1 28.8 15.7 8.7V2.1c0-1.2-1-2.1-2.1-2.1H2.3C1.1 0 0.2 1 0.2 2.1v14l31.2 26.6v6.8c0 1.2 1 2.1 2.1 2.1h11.3c1.2 0 2.2-.9 2.2-2.1z"/>
        <path d="M39 82.6l23.4 19.7h13.5c1.2 0 2.1-1 2.1-2.1V33c0-1.8-2.1-2.8-3.5-1.6L62.4 41.7v40.1L46.7 68.3v-6.7c0-1.2-1-2.1-2.1-2.1H33.4c-1.2 0-2.1 1-2.1 2.1v6.7L15.6 81.7V41.6L3.5 31.3C2.1 30.1 0 31.1 0 32.9v67.2c0 1.2 1 2.1 2.1 2.1h13.5L39 82.6z"/>
    </svg>
);

const ComolhoIcon = () => (
    <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="0.75" className="fill-current" />
    </svg>
);

const HackerEarthIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M18.447 20.936H5.553V19.66h12.894zM20.973 0H9.511v6.51h.104c.986-1.276 2.206-1.4 3.538-1.306 1.967.117 3.89 1.346 4.017 5.169v7.322c0 .089-.05.177-.138.177h-2.29c-.09 0-.253-.082-.253-.177V10.6c0-1.783-.58-3.115-2.341-3.115-1.282 0-2.637.892-2.637 2.77v7.417c0 .089-.008.072-.102.072h-2.29c-.09 0-.29.022-.29-.072V0H3.178c-.843 0-1.581.673-1.581 1.515v20.996c0 .843.738 1.489 1.58 1.489h17.797c.843 0 1.431-.646 1.431-1.489V1.515c0-.842-.588-1.515-1.43-1.515"/>
    </svg>
);

export default function Home() {
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditProgress, setAuditProgress] = useState(0);
  const [showAuditResults, setShowAuditResults] = useState(false);

  const runAudit = () => {
    setIsAuditing(true);
    setAuditProgress(0);
    setShowAuditResults(false);
  };

  useEffect(() => {
    if (isAuditing) {
      const interval = setInterval(() => {
        setAuditProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsAuditing(false);
              setShowAuditResults(true);
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isAuditing]);

  return (
    <div className="flex flex-col gap-12 md:gap-20 pb-12 md:pb-20 pt-28 md:pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-50" />
          <ParticleBackground />

          {/* Scanning Animation */}
          <AnimatePresence>
            {isAuditing && (
              <motion.div
                initial={{ top: '0%' }}
                animate={{ top: '100%' }}
                transition={{ duration: 2.5, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-primary/50 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] z-20 pointer-events-none"
              />
            )}
          </AnimatePresence>
        </div>

        <div className="container max-w-7xl mx-auto px-4 z-10 relative">
          <div className="grid md:grid-cols-12 gap-12 items-center text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>System Defense & Architecture | Full-Stack Security</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight text-text-primary">
                Secure Software Engineer.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  I build software that survives production.
                </span>
              </h1>
              
              <div className="flex flex-col gap-2 mt-6">
                <p className="text-xl text-text-muted max-w-2xl mx-auto md:mx-0 leading-relaxed font-mono">
                  Full-stack engineering. Application Security. AI Systems.
                </p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <Link href="/projects">
                  <Button size="lg" className="gap-2">
                    Explore Projects
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href="/P_Ganesh_Krishna_Reddy_Resume.pdf" download>
                  <Button variant="outline" size="lg" className="gap-2">
                    Download Resume
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <Button
                  onClick={runAudit}
                  variant="ghost"
                  size="lg"
                  className={clsx(
                    "gap-2 border border-white/5 bg-white/5 hover:bg-white/10 transition-all group",
                    isAuditing && "opacity-50 pointer-events-none"
                  )}
                >
                  <TerminalIcon className={clsx("w-4 h-4", isAuditing ? "animate-pulse" : "group-hover:text-primary transition-colors")} />
                  {isAuditing ? `Auditing System... ${auditProgress}%` : "Run Technical Audit"}
                </Button>
              </div>

              {/* Security & Hacker Profiles - Logo Row */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-6 border-t border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">Security Profiles:</span>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="https://hackerone.com/pganeshkrishnareddy" target="_blank" title="HackerOne" className="text-text-muted hover:text-[#ff6600] transition-all hover:scale-110 duration-200">
                    <HackerOneIcon />
                  </Link>
                  <Link href="https://yeswehack.com/hunters/pganeshkrishnareddy" target="_blank" title="YesWeHack" className="text-text-muted hover:text-[#e91e63] transition-all hover:scale-110 duration-200">
                    <YesWeHackIcon />
                  </Link>
                  <Link href="https://profile.hackthebox.com/profile/019ec51d-f016-710d-88bb-8a98ebb8cc9b" target="_blank" title="Hack The Box" className="text-text-muted hover:text-[#9fe522] transition-all hover:scale-110 duration-200">
                    <HackTheBoxIcon />
                  </Link>
                  <Link href="https://tryhackme.com/p/pganeshkrishnareddy" target="_blank" title="TryHackMe" className="text-text-muted hover:text-[#de112b] transition-all hover:scale-110 duration-200">
                    <TryHackMeIcon />
                  </Link>
                  <Link href="https://cyber.comolho.com/researcher/profile/pganeshkrishnareddy_7104d6dc/" target="_blank" title="Comolho" className="text-text-muted hover:text-[#00bcd4] transition-all hover:scale-110 duration-200">
                    <ComolhoIcon />
                  </Link>
                  <Link href="https://www.hackerearth.com/@pganeshkrishnareddy/" target="_blank" title="HackerEarth" className="text-text-muted hover:text-[#20d48a] transition-all hover:scale-110 duration-200">
                    <HackerEarthIcon />
                  </Link>
                  <Link href="https://x.com/_this_is_ganesh" target="_blank" title="X (Twitter)" className="text-text-muted hover:text-white transition-all hover:scale-110 duration-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Audit Results Overlay */}
              <AnimatePresence>
                {showAuditResults && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20 backdrop-blur-md max-w-2xl mx-auto md:mx-0"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <span className="text-sm font-bold text-text-primary tracking-tight">Technical Audit Complete</span>
                      </div>
                      <div className="flex gap-4">
                        {[
                          { label: 'Latency', value: '18ms', color: 'text-primary' },
                          { label: 'Security', value: 'Grade A', color: 'text-secondary' },
                          { label: 'Accessibility', value: '100', color: 'text-blue-400' }
                        ].map((stat, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">{stat.label}</span>
                            <span className={clsx("text-sm font-mono font-bold", stat.color)}>{stat.value}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => setShowAuditResults(false)}
                        className="text-[10px] uppercase font-bold text-text-muted hover:text-text-primary transition-colors"
                      >
                        Dismiss
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Glowing Cyberpunk Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-5 flex justify-center items-center relative py-8 md:py-0"
            >
              <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] group">
                {/* Outer Holographic Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                
                {/* Outer Rotating Dotted Ring */}
                <div className="absolute inset-[-12px] rounded-3xl border border-primary/20 border-dashed animate-[spin_30s_linear_infinite] pointer-events-none" />
                
                {/* Inner Counter-Rotating Double Ring */}
                <div className="absolute inset-[-24px] rounded-3xl border border-secondary/15 border-double animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />
                
                {/* Tech brackets / corners */}
                <div className="absolute top-[-6px] left-[-6px] w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg pointer-events-none" />
                <div className="absolute top-[-6px] right-[-6px] w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg pointer-events-none" />
                <div className="absolute bottom-[-6px] left-[-6px] w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg pointer-events-none" />
                <div className="absolute bottom-[-6px] right-[-6px] w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-lg pointer-events-none" />
                
                {/* Image Mask/Container */}
                <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-surface relative z-10">
                  {/* Profile Image */}
                  <img 
                    src="/profile.jpeg" 
                    alt="P Ganesh Krishna Reddy" 
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Cyber Scanning Scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent w-full h-[30%] -top-[30%] animate-scan pointer-events-none z-20" />
                  
                  {/* Cyber grid pattern overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-15" />
                  
                  {/* Holographic tint overlay */}
                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
                </div>
                
                {/* Floating Status Badge */}
                <div className="absolute -bottom-3 -right-3 z-20 px-3 py-1 rounded-md bg-background border border-primary/40 text-[10px] font-mono text-primary shadow-[0_0_15px_rgba(0,255,65,0.2)]">
                  SYS_SEC: ACTIVE
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>



      {/* Credibility Bar */}
      <section className="border-y border-surface bg-surface/30 py-6">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-bold text-text-muted uppercase tracking-widest text-center">
            <span className="flex items-center gap-2 hover:text-primary transition-colors"><ShieldCheck className="w-4 h-4" /> CompTIA CySA+</span>
            <span className="hidden md:inline text-surface-hover">•</span>
            <span className="flex items-center gap-2 hover:text-primary transition-colors"><ShieldCheck className="w-4 h-4" /> CompTIA PenTest+</span>
            <span className="hidden md:inline text-surface-hover">•</span>
            <span className="flex items-center gap-2 hover:text-primary transition-colors"><TerminalIcon className="w-4 h-4" /> Microsoft Build Hackathon</span>
            <span className="hidden md:inline text-surface-hover">•</span>
            <span className="flex items-center gap-2 hover:text-primary transition-colors"><Lock className="w-4 h-4" /> 50+ Vulnerabilities</span>
            <span className="hidden md:inline text-surface-hover">•</span>
            <span className="flex items-center gap-2 hover:text-primary transition-colors"><Globe className="w-4 h-4" /> 10+ Production Systems</span>
            <span className="hidden md:inline text-surface-hover">•</span>
            <span className="flex items-center gap-2 hover:text-primary transition-colors"><Shield className="w-4 h-4" /> Bug Bounty Research</span>
          </div>
        </div>
      </section>

      {/* Live Engineering Metrics */}
      <section className="border-y border-surface bg-surface/30">
        <div className="container max-w-7xl mx-auto px-4 py-10 md:py-12">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-3xl font-bold text-text-primary">Engineering Impact</h2>
            <p className="text-text-muted">Quantifiable metrics from building systems and breaking them.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { label: "Critical Vulns Patched", value: "50+", icon: Shield },
              { label: "Production Deployments", value: "20+", icon: Globe },
              { label: "Sub-50ms APIs Built", value: "15+", icon: Zap },
              { label: "Zero-Trust Systems", value: "4", icon: Lock },
            ].map((stat, i) => (
              <TiltCard key={i} className="p-6 rounded-2xl bg-surface/50 border border-surface shadow-xl shadow-primary/5">
                <div className="flex flex-col items-center justify-center text-center gap-2">
                  <stat.icon className="w-6 h-6 text-primary mb-2" />
                  <div className="text-3xl font-extrabold text-text-primary tracking-tight">{stat.value}</div>
                  <div className="text-sm font-bold text-text-muted">{stat.label}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div className="flex items-end justify-between border-b border-surface pb-4">
            <div>
              <h2 className="text-3xl font-bold text-text-primary">Featured Secure Engineering Projects</h2>
              <p className="text-text-muted mt-2">Selected work combining engineering and security. Each project addresses specific security challenges while delivering robust functionality.</p>
            </div>
            <Link href="/projects" className="hidden sm:flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="FlowMatch"
              slug="flowmatch"
              description="AI-powered platform to build and orchestrate autonomous AI agent workflows."
              whyItMatters="Simplifies the creation and management of multi-agent systems with visual orchestration."
              problem="Building multi-agent systems and managing their workflows is complex and lacks visual orchestration."
              methodology="Developed a highly interactive UI with visual node-based workflow builder, real-time logging, and agent memory management."
              outcome="Enabled users to seamlessly create, deploy, and monitor AI agent workflows with full observability."
              tags={["AI Agents", "Workflow Orchestration", "Next.js", "Full-Stack"]}
              githubUrl="https://github.com/ganeshkrishnareddy/FlowMatch"
            />
            <ProjectCard
              title="PixoPDF (ZeroPDF Online Suite)"
              slug="pixopdf"
              description="A fast, client-side PDF processing suite for editing, merging, and converting PDF documents."
              whyItMatters="Ensures document privacy by performing all PDF operations locally in the browser."
              problem="Many online PDF tools compromise privacy by uploading sensitive documents to external servers for processing."
              methodology="Built a privacy-first web application utilizing WebAssembly and client-side JavaScript to perform all PDF operations locally in the browser."
              outcome="Delivered a secure, offline-capable PDF suite that ensures zero data leaves the user's device."
              tags={["WebAssembly", "Privacy-First", "Client-Side Processing", "Next.js"]}
              githubUrl="https://github.com/ganeshkrishnareddy/PixoPDF"
            />
            <ProjectCard
              title="InstaDemoX"
              slug="instademox"
              description="Interactive product demo creation platform for SaaS companies."
              whyItMatters="Empowers teams to create interactive product walkthroughs without writing code."
              problem="Creating engaging, interactive product demonstrations often requires significant engineering resources or complex video editing."
              methodology="Engineered a platform that captures DOM states to generate highly interactive, clickable product walkthroughs."
              outcome="Allowed marketing and sales teams to create self-serve, interactive product demos in minutes, boosting engagement."
              tags={["SaaS", "DOM Capture", "Interactive UI", "React"]}
              githubUrl="https://github.com/ganeshkrishnareddy/InstaDemoX"
            />
            <ProjectCard
              title="LaunchWise"
              slug="launchwise"
              description="All-in-one product launch and marketing automation platform for creators."
              whyItMatters="Streamlines the product launch process by centralizing waitlists, email automation, and analytics."
              problem="Founders struggle to coordinate multiple marketing channels, waitlists, and analytics during product launches."
              methodology="Integrated waitlist management, email automation, and conversion tracking into a single dashboard using modern web technologies."
              outcome="Streamlined the launch process, improving lead capture rates and providing actionable insights for successful product releases."
              tags={["Marketing Automation", "SaaS", "Analytics", "Full-Stack"]}
              githubUrl="https://github.com/ganeshkrishnareddy/LaunchWise"
            />
          </div>

          <Link href="/projects" className="sm:hidden flex items-center justify-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-4">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* GitHub Activity & Open Source */}
      <section className="container max-w-7xl mx-auto px-4 py-8">
        <div className="p-8 rounded-2xl bg-surface/30 border border-surface">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                <Globe className="w-6 h-6 text-primary" /> Open Source & Contributions
              </h2>
              <p className="text-text-muted mt-1">Continuous engineering and security research.</p>
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-text-primary">64</div>
                <div className="text-xs uppercase tracking-widest text-text-muted font-bold">Repos</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-text-primary">820+</div>
                <div className="text-xs uppercase tracking-widest text-text-muted font-bold">Commits</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-primary">12</div>
                <div className="text-xs uppercase tracking-widest text-text-muted font-bold">PRs</div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto w-full flex justify-center opacity-80 hover:opacity-100 transition-opacity">
            <GitHubCalendar 
              username="ganeshkrishnareddy" 
              colorScheme="dark" 
              theme={{
                dark: ['#1A1A1A', '#00441b', '#006d2c', '#238b45', '#FFFFFF']
              }}
            />
          </div>
        </div>
      </section>

      {/* Engineering Blog & Notes */}
      <section className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Engineering Blog */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-surface pb-2">
              <h2 className="text-2xl font-bold text-text-primary">Engineering Blog</h2>
              <Link href="/blog" className="text-sm font-medium text-primary hover:text-primary/80">View All</Link>
            </div>
            <div className="space-y-4">
              {blogData.slice(0, 3).map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
                  <div className="p-5 rounded-xl bg-surface/30 border border-surface hover:border-primary/30 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono text-text-muted">{post.date}</span>
                      <span className="text-xs font-bold text-primary">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-text-muted mt-2 line-clamp-2">{post.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* System Design Notes */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-surface pb-2">
              <h2 className="text-2xl font-bold text-text-primary">System Design Notes</h2>
              <Link href="/notes" className="text-sm font-medium text-primary hover:text-primary/80">View All</Link>
            </div>
            <div className="space-y-4">
              {notesData.slice(0, 4).map((note) => (
                <Link href={`/notes/${note.slug}`} key={note.slug} className="block group">
                  <div className="p-4 rounded-xl bg-surface/30 border border-surface hover:border-primary/30 transition-colors flex justify-between items-center">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-1">{note.category}</div>
                      <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors">{note.title}</h3>
                    </div>
                    <ArrowRight className="w-4 h-4 text-surface-hover group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
