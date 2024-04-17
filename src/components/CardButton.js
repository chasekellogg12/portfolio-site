export const CardButton = ({text, link}) => {
    return (
        <a href={link} className="inline-flex h-12 animate-shimmerSlow hover:animate-shimmer hover:border-purple-700 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-purple-50">
            {text}
        </a>
    );
}
export default CardButton