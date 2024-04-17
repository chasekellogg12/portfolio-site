export const CardButton = ({text, link}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex animate-shimmerSlow hover:animate-shimmer hover:border-purple-700 items-center justify-center rounded-full border border-purple-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] p-2 px-4 font-bold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-purple-50">
            {text}
        </a>
    );
}
export default CardButton