import { StackIcons } from "../stackIcons/StackIcons";

export const Technology = ({type}) => {
    return (
        <div className='flex items-center justify-start p-3 m-2 space-x-2 font-bold border border-purple-500 rounded-xl bg-zinc-900 hover:border-purple-700'>
            <StackIcons type={type}/>
            <span>{type}</span>
        </div>
    );
}
export default Technology